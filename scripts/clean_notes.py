import json
import re

with open('data/vocabulary.js', 'r', encoding='utf-8') as f:
    text = f.read()

data = json.loads(text[text.find('['):text.rfind(']')+1])

cleaned_count = 0
for w in data:
    orig = w['meaning']
    # remove milestone notes, study notes, project milestones
    m = re.split(r'(?:प्रकल्प\s*टप्पा|महत्त्वाचा\s*टप्पा|अभ्यास\s*टिपण|मराठी\s*भाषा\s*ज्ञा+नकोश)', orig)[0].strip()
    m = re.sub(r'[\s\u093e-\u094f\u0902\u0903]+$', '', m).strip()
    if m != orig:
        w['meaning'] = m
        cleaned_count += 1

# Specific manual verification for entries that had trailing PDF table artifacts
overrides = {
    600: 'समारंभ, सोहळा किंवा कार्य निर्विघ्नपणे शेवटास जाणे',
    774: 'हातात असलेली नाणी व नोटांच्या रूपातील तत्काळ खर्च करता येणारी रक्कम',
    923: 'ढोलकीच्या तालावर सादर होणारी महाराष्ट्राची शृंगारिक पारंपरिक लोकनृत्य शैली',
    948: 'अंधारावर प्रकाशाचा आणि वाईटावर चांगल्याचा विजय दर्शवणारा दीपमहोत्सव',
    973: 'आत्म्याचे, ईश्वराचे आणि या विश्वाच्या अंतिम सत्याचे आंतरिक ज्ञान व अनुभूती',
    998: 'शंभर वर्षे यशस्वीरीत्या पूर्ण झाल्याबद्दल कृतज्ञतापूर्वक साजरा केलेला महासोहळा'
}

for w in data:
    if w['id'] in overrides:
        w['meaning'] = overrides[w['id']]

js_content = f"// मराठी शब्दसंग्रह (1,000 Most Common Marathi Words Dataset - Clean Rebuild)\nconst MARATHI_VOCABULARY = {json.dumps(data, ensure_ascii=False, indent=2)};\n\nif (typeof module !== 'undefined') module.exports = MARATHI_VOCABULARY;\n"

with open('data/vocabulary.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print(f"Cleaned {cleaned_count} entries. Done!")
