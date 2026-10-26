import pymupdf
import re
import glob
import json
import os

print("Starting vocabulary extraction...")

files = sorted(glob.glob('marathi asset/Marathi-English Vocabulary Dataset Part *.pdf'),
               key=lambda x: int(re.search(r'Part (\d+)', x).group(1)))

word_map = {}

# Clean function
def clean_text(text):
    if not text:
        return ""
    # remove soft hyphens, zero-width chars, spurious newlines
    text = text.replace('\x00', '')
    text = text.replace('\u200b', '')
    text = text.replace('\ufeff', '')
    text = text.replace('\r', '')
    # replace multiple spaces with single space
    lines = [l.strip() for l in text.split('\n') if l.strip()]
    return " ".join(lines)

for filepath in files:
    part_num = int(re.search(r'Part (\d+)', filepath).group(1))
    doc = pymupdf.open(filepath)
    for page in doc:
        tabs = page.find_tables()
        if tabs.tables:
            for t in tabs.tables:
                for row in t.extract():
                    if not row or not row[0]:
                        continue
                    num_str = row[0].strip().replace('\n', '')
                    if num_str.isdigit():
                        w_id = int(num_str)
                        w_marathi = clean_text(row[1]) if len(row) > 1 else ""
                        w_english = clean_text(row[2]) if len(row) > 2 else ""
                        w_meaning = clean_text(row[3]) if len(row) > 3 else ""
                        w_pos = clean_text(row[4]) if len(row) > 4 else ""
                        
                        if w_marathi:
                            word_map[w_id] = {
                                "id": w_id,
                                "part": part_num,
                                "word": w_marathi,
                                "english": w_english,
                                "meaning": w_meaning,
                                "pos": w_pos
                            }

print(f"Extracted from tables: {len(word_map)} words.")

# Fill in the 17 missing boundary items
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
    if w_id not in word_map:
        word_map[w_id] = data

all_words = [word_map[i] for i in range(1, 1001)]
print(f"Total dataset length: {len(all_words)} (1 to 1000)")

# Write to data/vocabulary.js
js_content = f"// मराठी शब्दसंग्रह (1,000 Most Common Marathi Words Dataset)\nconst MARATHI_VOCABULARY = {json.dumps(all_words, ensure_ascii=False, indent=2)};\n\nif (typeof module !== 'undefined') module.exports = MARATHI_VOCABULARY;\n"

with open("data/vocabulary.js", "w", encoding="utf-8") as f:
    f.write(js_content)

print("Saved to data/vocabulary.js successfully!")
