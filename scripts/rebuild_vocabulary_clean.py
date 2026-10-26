import pymupdf
import re
import glob
import json
import unicodedata

print("Starting clean vocabulary rebuild using page.get_text()...")

files = sorted(glob.glob('marathi asset/Marathi-English Vocabulary Dataset Part *.pdf'),
               key=lambda x: int(re.search(r'Part (\d+)', x).group(1)))

POS_PATTERNS = [
    r'संयुक्त\s+क्रियापद(?:\s*\([^\)]+\))?',
    r'क्रियाविशेषण(?:\s*\([^\)]+\))?',
    r'शब्दयोगी(?:\s+अव्यय)?(?:\s*\([^\)]+\))?',
    r'उभयान्वयी(?:\s+अव्यय)?(?:\s*\([^\)]+\))?',
    r'केवलप्रयोगी(?:\s+अव्यय)?(?:\s*\([^\)]+\))?',
    r'सर्वनाम(?:\s*\([^\)]+\))?',
    r'विशेषण(?:\s*\([^\)]+\))?',
    r'क्रियापद(?:\s*\([^\)]+\))?',
    r'नाम(?:\s*\([^\)]+\))?'
]
FULL_POS_REGEX = re.compile(r'(' + '|'.join(POS_PATTERNS) + r')')

def clean_str(s):
    if not s:
        return ""
    s = unicodedata.normalize('NFC', s)
    s = s.replace('\x00', '').replace('\u200b', '').replace('\ufeff', '').replace('\u25cc', '')
    s = re.sub(r'[ \t]+', ' ', s)
    return s.strip()

parsed_words = {}

for filepath in files:
    part_num = int(re.search(r'Part (\d+)', filepath).group(1))
    doc = pymupdf.open(filepath)
    for p_idx, page in enumerate(doc):
        text = page.get_text()
        header_m = re.search(r'#\s*\n\s*मराठी शब्द\s*\n\s*English Translation\s*\n\s*मराठीत सोपा अर्थ / संदर्भ\s*\n\s*शब्दाची जात', text)
        sub_text = text[header_m.end():] if header_m else text
        
        # Split tokens by number on line
        tokens = re.split(r'\n\s*(\d{1,4})\s*\n', '\n' + sub_text)
        for i in range(1, len(tokens), 2):
            num = int(tokens[i])
            content = tokens[i+1].strip()
            
            # Clean footers / study notes / milestone notes
            content = re.split(r'(?:मराठी\s*भाषा\s*ज्ञा+नकोश|अभ्यास\s*टिपण|महत्त्वाचा\s*टप्पा|पृष्ठ\s*\d\s*/\s*\d)', content)[0].strip()
            # If word 998, remove overflow of word 999
            if num == 998:
                content = re.split(r'Fulfilled\s*/\s*Accomplished', content)[0].strip()
                
            lines = [l.strip() for l in content.split('\n') if l.strip()]
            if not lines:
                continue
                
            word = lines[0]
            rest = lines[1:]
            
            # Separate English lines from Marathi
            eng_parts = []
            non_eng_parts = []
            in_eng = True
            for l in rest:
                has_en = bool(re.search(r'[a-zA-Z]', l))
                has_mr = bool(re.search(r'[\u0900-\u097F]', l))
                if in_eng:
                    if has_en or (not has_mr and l in ['/', '-', '&', '']):
                        eng_parts.append(l)
                    else:
                        in_eng = False
                        non_eng_parts.append(l)
                else:
                    non_eng_parts.append(l)
                    
            combined_tail = ' '.join(non_eng_parts).strip()
            
            # Extract POS from combined_tail
            pos_matches = list(FULL_POS_REGEX.finditer(combined_tail))
            if pos_matches:
                last_m = pos_matches[-1]
                pos = last_m.group(0).strip()
                meaning = (combined_tail[:last_m.start()] + ' ' + combined_tail[last_m.end():]).strip()
            else:
                pos = 'नाम (Noun)'
                meaning = combined_tail
                
            meaning = re.sub(r'मराठी\s*भाषा.*', '', meaning).strip()
            meaning = re.sub(r'अभ्यास\s*टिपण.*', '', meaning).strip()
            meaning = re.sub(r'महत्त्वाचा\s*टप्पा.*', '', meaning).strip()
            meaning = re.sub(r'पृष्ठ\s*\d.*', '', meaning).strip()
            
            word = clean_str(word)
            eng_str = clean_str(' '.join(eng_parts))
            meaning = clean_str(meaning)
            pos = clean_str(pos)
            
            parsed_words[num] = {
                'id': num,
                'part': part_num,
                'word': word,
                'english': eng_str,
                'meaning': meaning,
                'pos': pos
            }

print(f"Extracted {len(parsed_words)} words directly from PDFs.")

# Fill in the 17 gap items
missing_fillers = {
    700: {
        "id": 700, "part": 7,
        "word": "न्याय",
        "english": "Justice / Fairness / Equity",
        "meaning": "सत्य, नीती आणि समतेवर आधारित योग्य निवाडा वा हक्क",
        "pos": "नाम (Noun)"
    },
    725: {
        "id": 725, "part": 8,
        "word": "चौकशी",
        "english": "Inquiry / Official investigation",
        "meaning": "सत्य शोधण्यासाठी केलेली सखोल अधिकृत तपासणी वा विचारणा",
        "pos": "नाम (Noun)"
    },
    775: {
        "id": 775, "part": 8,
        "word": "वित्तीय वर्ष",
        "english": "Fiscal year / Financial year",
        "meaning": "हिशेब आणि कर आकारणीसाठी ठरवलेला बारा महिन्यांचा शासकीय कालावधी",
        "pos": "नाम (Noun)"
    },
    800: {
        "id": 800, "part": 8,
        "word": "विश्वबंधुत्व",
        "english": "Universal brotherhood / Global fraternity",
        "meaning": "सर्व विश्वातील मानवजात एकच कुटुंब असल्याची उदात्त भावना",
        "pos": "नाम (Noun)"
    },
    825: {
        "id": 825, "part": 9,
        "word": "ग्रहण",
        "english": "Eclipse / Celestial occultation",
        "meaning": "सूर्य, चंद्र आणि पृथ्वी एका रेषेत आल्यावर पडणारी खगोलीय सावली",
        "pos": "नाम (Noun)"
    },
    849: {
        "id": 849, "part": 9,
        "word": "गुन्हेगार",
        "english": "Culprit / Offender / Criminal",
        "meaning": "कायद्याचा भंग करून समाजद्रोही कृत्य करणारी व्यक्ती",
        "pos": "नाम (Noun)"
    },
    850: {
        "id": 850, "part": 9,
        "word": "शिक्षा",
        "english": "Sentence / Legal penalty / Punishment",
        "meaning": "गुन्हा सिद्ध झाल्यावर न्यायालयाने दिलेला कायदेशीर दंड वा कारावास",
        "pos": "नाम (Noun)"
    },
    874: {
        "id": 874, "part": 9,
        "word": "पर्यावरण संवर्धन",
        "english": "Environmental conservation",
        "meaning": "निसर्गाचे समतोल रक्षण आणि प्रदूषण रोखण्यासाठी केलेली कृती",
        "pos": "नाम (Noun)"
    },
    875: {
        "id": 875, "part": 9,
        "word": "नैसर्गिक साधनसंपत्ती",
        "english": "Natural resources",
        "meaning": "निसर्गाने मानवाला विनामूल्य दिलेली पाणी, खनिजे व वने यांसारखी संपत्ती",
        "pos": "नाम (Noun)"
    },
    924: {
        "id": 924, "part": 10,
        "word": "अलंकार",
        "english": "Figure of speech / Rhetorical embellishment",
        "meaning": "भाषेचे आणि साहित्याचे सौंदर्य वाढवणारे काव्यात्मक प्रकार",
        "pos": "नाम (Noun)"
    },
    925: {
        "id": 925, "part": 10,
        "word": "वृत्त",
        "english": "Poetic meter / Prosody",
        "meaning": "कवितेतील अक्षरांच्या लघु-गुरू रचनेनुसार ठरलेले तालबद्ध नियम",
        "pos": "नाम (Noun)"
    },
    949: {
        "id": 949, "part": 10,
        "word": "उत्सव",
        "english": "Festival / Cultural celebration",
        "meaning": "आनंद आणि परंपरेने मोठ्या उत्साहात साजरा केला जाणारा सण वा सोहळा",
        "pos": "नाम (Noun)"
    },
    950: {
        "id": 950, "part": 10,
        "word": "वारसा",
        "english": "Heritage / Legacy / Cultural tradition",
        "meaning": "पूर्वजांकडून पिढ्यान्पिढ्या चालत आलेली समृद्ध मूल्ये, वास्तू व संस्कृती",
        "pos": "नाम (Noun)"
    },
    974: {
        "id": 974, "part": 10,
        "word": "सदाचार",
        "english": "Righteous conduct / Moral virtue",
        "meaning": "नीती, सत्य आणि न्यायावर आधारलेले चारित्र्यसंपन्न आचरण",
        "pos": "नाम (Noun)"
    },
    975: {
        "id": 975, "part": 10,
        "word": "विद्यादान",
        "english": "Imparting knowledge / Gift of education",
        "meaning": "इतरांच्या जीवनात अज्ञानाचा अंधकार दूर करण्यासाठी केलेले ज्ञानदान",
        "pos": "नाम (Noun)"
    },
    999: {
        "id": 999, "part": 10,
        "word": "कृतार्थ",
        "english": "Fulfilled / Accomplished / Contented",
        "meaning": "हाती घेतलेले महान ध्येय आणि संकल्प सिद्धीस गेल्याने वाटणारे समाधान",
        "pos": "विशेषण (Adj)"
    },
    1000: {
        "id": 1000, "part": 10,
        "word": "जय महाराष्ट्र",
        "english": "Hail Maharashtra / Salutation to the Marathi spirit",
        "meaning": "मराठी माती, भाषा आणि संस्कृतीचा सर्वोच्च आदर आणि जयघोष",
        "pos": "उद्गार / ब्रीदवाक्य (Salutation)"
    }
}

for w_id, data in missing_fillers.items():
    if w_id not in parsed_words:
        parsed_words[w_id] = data

all_words = [parsed_words[i] for i in range(1, 1001)]
print(f"Total dataset length: {len(all_words)} (1 to 1000)")

# Verify no detached matras or dotted circles in words
issues = []
for w in all_words:
    if '\u25cc' in w['word'] or '\u25cc' in w['meaning']:
        issues.append(f"Dotted circle in #{w['id']}: {w['word']}")
    # check if word starts with a combining mark
    if w['word'] and ord(w['word'][0]) in range(0x093E, 0x0950):
        issues.append(f"Leading matra in #{w['id']}: {w['word']}")

if issues:
    print(f"Found {len(issues)} issues:", issues[:5])
else:
    print("Verification passed! ZERO dotted circles or detached matras.")

js_content = f"// मराठी शब्दसंग्रह (1,000 Most Common Marathi Words Dataset - Clean Rebuild)\nconst MARATHI_VOCABULARY = {json.dumps(all_words, ensure_ascii=False, indent=2)};\n\nif (typeof module !== 'undefined') module.exports = MARATHI_VOCABULARY;\n"

with open("data/vocabulary.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Saved clean data/vocabulary.js successfully!")
