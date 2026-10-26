// मराठी शब्दसंग्रह (1,000 Most Common Marathi Words Dataset - Clean Rebuild)
const MARATHI_VOCABULARY = [
  {
    "id": 1,
    "part": 1,
    "word": "मी",
    "english": "I / Me",
    "meaning": "स्वतःचा उल्लेख करण्यासाठी वापरले जाणारे सर्वनाम",
    "pos": "सर्वनाम (Pronoun)"
  },
  {
    "id": 2,
    "part": 1,
    "word": "तू",
    "english": "You (informal)",
    "meaning": "समोरील एका निकटच्या व्यक्तीचा उल्लेख",
    "pos": "सर्वनाम (Pronoun)"
  },
  {
    "id": 3,
    "part": 1,
    "word": "तुम्ही",
    "english": "You (formal / plural)",
    "meaning": "समोरील आदरार्थी किंवा अनेक व्यक्तींचा उल्लेख",
    "pos": "सर्वनाम (Pronoun)"
  },
  {
    "id": 4,
    "part": 1,
    "word": "तो",
    "english": "He / That (masc.)",
    "meaning": "दूरवरची एकवचनी पुरुष व्यक्ती किंवा पुल्लिंगी वस्त",
    "pos": "सर्वनाम (Pronoun)"
  },
  {
    "id": 5,
    "part": 1,
    "word": "ती",
    "english": "She / That (fem.)",
    "meaning": "दूरवरची एकवचनी स्त्री व्यक्ती किंवा स्त्रीलिंगी वस्त",
    "pos": "सर्वनाम (Pronoun)"
  },
  {
    "id": 6,
    "part": 1,
    "word": "ते",
    "english": "They / That (neut.)",
    "meaning": "नपुंसकलिंगी वस्तू किंवा आदरार्थी/अनेकवचनी उल्लेख",
    "pos": "सर्वनाम (Pronoun)"
  },
  {
    "id": 7,
    "part": 1,
    "word": "आम्ही",
    "english": "We (exclusive)",
    "meaning": "बोलणाऱ्याचा गट (ऐकणाऱ्या व्यक्तीला वगळून)",
    "pos": "सर्वनाम (Pronoun)"
  },
  {
    "id": 8,
    "part": 1,
    "word": "आपण",
    "english": "We (inclusive) / You (polite)",
    "meaning": "ऐकणाऱ्यासह सर्वजण किंवा अति-आदरार्थी संबोधन",
    "pos": "सर्वनाम (Pronoun)"
  },
  {
    "id": 9,
    "part": 1,
    "word": "हे",
    "english": "This / These",
    "meaning": "जवळ असलेली नपुंसकलिंगी किंवा अनेकवचनी गोष्ट",
    "pos": "सर्वनाम (Pronoun)"
  },
  {
    "id": 10,
    "part": 1,
    "word": "काय",
    "english": "What",
    "meaning": "वस्तू, विषय किंवा घटनेबाबत प्रश्न विचारण्यासाठ",
    "pos": "सर्वनाम (Pronoun)"
  },
  {
    "id": 11,
    "part": 1,
    "word": "कोण",
    "english": "Who",
    "meaning": "व्यक्तीबाबत प्रश्न उपस्थि त करण्यासाठ",
    "pos": "सर्वनाम (Pronoun)"
  },
  {
    "id": 12,
    "part": 1,
    "word": "कुठे",
    "english": "Where",
    "meaning": "स्थाानाबाबत किंवा ठिकाणाबाबत विचारण",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 13,
    "part": 1,
    "word": "कधी",
    "english": "When",
    "meaning": "वेळेबाबत किंवा कालावधीबाबत विचारण",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 14,
    "part": 1,
    "word": "कसे",
    "english": "How",
    "meaning": "पद्धत, स्थि ती किंवा रीतीबाबत विचारण",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 15,
    "part": 1,
    "word": "का",
    "english": "Why",
    "meaning": "कारणाची किंवा हेतूची विचारणा करण्यासाठ",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 16,
    "part": 1,
    "word": "किती",
    "english": "How much / How many",
    "meaning": "प्रमाण, माप किंवा संख्येबाबत विचारण",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 17,
    "part": 1,
    "word": "असणे",
    "english": "To be / To exist",
    "meaning": "अस्तित्वात असणे किंवा सद्यस्थि ती दशवण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 18,
    "part": 1,
    "word": "नसणे",
    "english": "To not be / To not exist",
    "meaning": "अस्तित्वाचा अभाव असणे किंवा गैरहजेर",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 19,
    "part": 1,
    "word": "करणे",
    "english": "To do / To perform",
    "meaning": "कोणतीही कृती किंवा कार्य घडवून आणण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 20,
    "part": 1,
    "word": "होणे",
    "english": "To become / To happen",
    "meaning": "घटना आपोआप घडणे किंवा रूपांतर होण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 21,
    "part": 1,
    "word": "येणे",
    "english": "To come",
    "meaning": "जवळ येण्याची किंवा आगमन होण्याची क्रिय",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 22,
    "part": 1,
    "word": "जाणे",
    "english": "To go",
    "meaning": "दूर जाण्याची किंवा निघून जाण्याची क्रिय",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 23,
    "part": 1,
    "word": "पाहणे",
    "english": "To see / To watch",
    "meaning": "डोळ्यांनी दृष्टी टाकणे किंवा निरीक्षण करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 24,
    "part": 1,
    "word": "बोलणे",
    "english": "To speak / To talk",
    "meaning": "शब्दांद्वाारे संवाद साधणे किंवा संभाषण करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 25,
    "part": 1,
    "word": "सांगणे",
    "english": "To tell / To convey",
    "meaning": "माहिती, विचार किंवा वृत्तांांत दुसऱ्याला देण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 26,
    "part": 1,
    "word": "विचारणे",
    "english": "To ask / To inquire",
    "meaning": "प्रश्न किंवा शंकेचे निरसन मागण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 27,
    "part": 1,
    "word": "देणे",
    "english": "To give / To hand over",
    "meaning": "आपली गोष्ट दुसऱ्याला सुपूर्द करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 28,
    "part": 1,
    "word": "घेणे",
    "english": "To take / To receive",
    "meaning": "एखादी वस्तू किंवा गोष्ट स्वीकारण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 29,
    "part": 1,
    "word": "खाणे",
    "english": "To eat / To consume",
    "meaning": "मुखातून घन अन्न चावून ग्रहण करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 30,
    "part": 1,
    "word": "पिणे",
    "english": "To drink / To sip",
    "meaning": "द्रवपदार्थ घशाखाली उतरवण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 31,
    "part": 1,
    "word": "बसणे",
    "english": "To sit / To be seated",
    "meaning": "बैठक घेणे किंवा जमिनीवर/आसनावर स्थि रावण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 32,
    "part": 1,
    "word": "उठणे",
    "english": "To stand up / To wake",
    "meaning": "झोपेतून जागे होणे किंवा ताठ उभे राहण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 33,
    "part": 1,
    "word": "चालणे",
    "english": "To walk / To step",
    "meaning": "पायांनी संथ हालचाल करत पुढे जाण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 34,
    "part": 1,
    "word": "धावणे",
    "english": "To run / To sprint",
    "meaning": "वेगाने पळण्याची शारीरिक हालचाल",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 35,
    "part": 1,
    "word": "थांबणे",
    "english": "To stop / To wait",
    "meaning": "हालचाल बंद करणे किंवा घटकाभर प्रतीक्षा करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 36,
    "part": 1,
    "word": "वाचणे",
    "english": "To read / To survive",
    "meaning": "पुस्तकातील अक्षरे ग्रहण करणे / संकटातून सुटण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 37,
    "part": 1,
    "word": "लिहिणे",
    "english": "To write / To pen",
    "meaning": "शब्दांना लिपीत कागदावर किंवा पाटीवर उतरवण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 38,
    "part": 1,
    "word": "ऐकणे",
    "english": "To hear / To listen",
    "meaning": "कानांनी ध्वनी किंवा संवाद ग्रहण करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 39,
    "part": 1,
    "word": "समजणे",
    "english": "To understand / Comprehend",
    "meaning": "गोष्टीचा मूळ अर्थ किंवा आशय लक्षात येण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 40,
    "part": 1,
    "word": "शिकणे",
    "english": "To learn / To master",
    "meaning": "नवे ज्ञाान, भाषा किंवा कौशल्य आत्मसात करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 41,
    "part": 1,
    "word": "शिकवणे",
    "english": "To teach / To instruct",
    "meaning": "दुसऱ्याला ज्ञाान किंवा विद्या समजावून सांगण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 42,
    "part": 1,
    "word": "विचार",
    "english": "Thought / Idea / Notion",
    "meaning": "मेंदूतील चिंतन प्रक्रिया किंवा संकल्पन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 43,
    "part": 1,
    "word": "आठवणे",
    "english": "To remember / To recall",
    "meaning": "पूर्वी घडलेली गोष्ट स्मरणात पुन्हा आणण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 44,
    "part": 1,
    "word": "विसरणे",
    "english": "To forget / To omit",
    "meaning": "गोष्ट स्मरणातून पूर्णपणे निघून जाण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 45,
    "part": 1,
    "word": "राहणे",
    "english": "To live / To reside / Stay",
    "meaning": "एखाद्या ठिकाणी दीर्घकाळ वास्तव्य करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 46,
    "part": 1,
    "word": "ठेवणे",
    "english": "To keep / To place",
    "meaning": "वस्तू विशिष्ट जागेवर ठेवण्याची क्रिय",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 47,
    "part": 1,
    "word": "आणणे",
    "english": "To bring / To fetch",
    "meaning": "दूरची वस्तू जवळ वाहून आणण्याची कृत",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 48,
    "part": 1,
    "word": "पाठवणे",
    "english": "To send / To dispatch",
    "meaning": "वस्तू किंवा निरोप दुसऱ्या ठिकाणी रवाना करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 49,
    "part": 1,
    "word": "उघडणे",
    "english": "To open / To unlock",
    "meaning": "झाकण, कडी किंवा प्रवेशद्वाार मोकळे करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 50,
    "part": 1,
    "word": "बंद करणे",
    "english": "To close / To shut",
    "meaning": "दार लावून घेणे किंवा यंत्राचा प्रवाह थांबवण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 51,
    "part": 1,
    "word": "भेटणे",
    "english": "To meet / Encounter",
    "meaning": "समोरासमोर येणे किंवा गाठ पडण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 52,
    "part": 1,
    "word": "आवडणे",
    "english": "To like / To appeal",
    "meaning": "मनाला समाधान, गोडी किंवा रुची वाटण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 53,
    "part": 1,
    "word": "पाणी",
    "english": "Water / Aqua",
    "meaning": "सजीवांसाठी अत्यंत आवश्यक जीवनोपयोगी द्रव (जल)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 54,
    "part": 1,
    "word": "अन्न",
    "english": "Food / Meal / Grain",
    "meaning": "शरीराचे पोषण करण्यासाठी खाल्ले जाणारे घटक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 55,
    "part": 1,
    "word": "घर",
    "english": "House / Home / Abode",
    "meaning": "राहण्याची सुरक्षित इमारत किंवा निवासस्थाान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 56,
    "part": 1,
    "word": "माणूस",
    "english": "Human / Person",
    "meaning": "बुद्धिवंत मानवी प्राणी किंवा व्यक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 57,
    "part": 1,
    "word": "मुलगा",
    "english": "Boy / Son",
    "meaning": "लहान नर मूल किंवा स्वतःचा पुत्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 58,
    "part": 1,
    "word": "मुलगी",
    "english": "Girl / Daughter",
    "meaning": "लहान मादी मूल किंवा स्वतःची कन्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 59,
    "part": 1,
    "word": "आई",
    "english": "Mother / Maternal parent",
    "meaning": "जन्म देणारी ममतामयी माता (जननी)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 60,
    "part": 1,
    "word": "वडील",
    "english": "Father / Paternal parent",
    "meaning": "जन्म देणारे पूज्य पिता (तात)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 61,
    "part": 1,
    "word": "मित्र",
    "english": "Friend / Companion",
    "meaning": "सखा, सोबती किंवा निकटचा स्नेह",
    "pos": "नाम (Noun)"
  },
  {
    "id": 62,
    "part": 1,
    "word": "कुटुंब",
    "english": "Family / Household",
    "meaning": "एका छताखाली एकत्र राहणारे रक्ताचे नातेवाईक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 63,
    "part": 1,
    "word": "वेळ",
    "english": "Time / Period / Moment",
    "meaning": "कालावधी, घटका किंवा विशिष्ट प्रहर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 64,
    "part": 1,
    "word": "दिवस",
    "english": "Day / Daytime",
    "meaning": "सूर्योदयापासून सूर्यास्तापर्यंतचा काळ / २४ तास",
    "pos": "नाम (Noun)"
  },
  {
    "id": 65,
    "part": 1,
    "word": "रात्र",
    "english": "Night / Nighttime",
    "meaning": "सूर्यास्तानंतरचा काळोखाचा विश्रांांतीकाळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 66,
    "part": 1,
    "word": "वर्ष",
    "english": "Year / Annual cycle",
    "meaning": "बारा महिन्यांचा किंवा ३६५ दिवसांचा कालखंड",
    "pos": "नाम (Noun)"
  },
  {
    "id": 67,
    "part": 1,
    "word": "महिना",
    "english": "Month",
    "meaning": "सुमारे तीस दिवसांचा किंवा चार आठवड्यांांचा काळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 68,
    "part": 1,
    "word": "काम",
    "english": "Work / Job / Task",
    "meaning": "उपजीविकेची धडपड किंवा दिलेली जबाबदार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 69,
    "part": 1,
    "word": "शाळा",
    "english": "School / Academy",
    "meaning": "विद्यार्थ्यांना शिक्षण देणारी अधिकृत संस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 70,
    "part": 1,
    "word": "पुस्तक",
    "english": "Book / Volume",
    "meaning": "पाने एकत्र शिवून तयार केलेला वाचनीय ग्रंथ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 71,
    "part": 1,
    "word": "नाव",
    "english": "Name / Identity",
    "meaning": "व्यक्ती किंवा वस्तूची ओळख पटवणारा शब्द",
    "pos": "नाम (Noun)"
  },
  {
    "id": 72,
    "part": 1,
    "word": "गाव",
    "english": "Village / Hometown",
    "meaning": "ग्रामीण वस्ती, खेडे किंवा माणसाचे मूळ ठिकाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 73,
    "part": 1,
    "word": "शहर",
    "english": "City / Town / Urban area",
    "meaning": "मोठी लोकवस्ती व सोयीसुविधा असलेले नगर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 74,
    "part": 1,
    "word": "देश",
    "english": "Country / Nation / State",
    "meaning": "विशिष्ट राजकीय सीमा असलेला सार्वभौम भूभाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 75,
    "part": 1,
    "word": "रस्ता",
    "english": "Road / Street / Path",
    "meaning": "वाहने व पादचाऱ्यांच्या ये-जा करण्याचा मार्ग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 76,
    "part": 1,
    "word": "गाडी",
    "english": "Vehicle / Car / Train",
    "meaning": "प्रवासाचे किंवा मालवाहतुकीचे चाकांचे साधन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 77,
    "part": 1,
    "word": "पैसे",
    "english": "Money / Currency / Funds",
    "meaning": "खरेदी-विक्रीच्या व्यवहाराचे आर्थिक चलन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 78,
    "part": 1,
    "word": "झाड",
    "english": "Tree / Plant",
    "meaning": "खोड, फांद्या, पाने व मुळे असलेली वनस्पती (वृक्ष)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 79,
    "part": 1,
    "word": "जमीन",
    "english": "Land / Ground / Soil",
    "meaning": "पृथ्वीचा मातीचा व खडकांचा सपाट पृष्ठभाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 80,
    "part": 1,
    "word": "हवा",
    "english": "Air / Breeze / Wind",
    "meaning": "वातावरणात पसरलेला श्वसनोपयोगी वाय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 81,
    "part": 1,
    "word": "जागा",
    "english": "Place / Room / Space",
    "meaning": "विशिष्ट क्षेत्रफळ, भूखंड किंवा रिकामी जाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 82,
    "part": 1,
    "word": "गोष्ट",
    "english": "Thing / Story / Matter",
    "meaning": "ऐकवण्याची कथा किंवा कोणतीही वस्तू/विषय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 83,
    "part": 1,
    "word": "चांगला",
    "english": "Good / Fine / Superior",
    "meaning": "योग्य दर्जा असलेला, सद्गुणी किंवा समाधानकारक",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 84,
    "part": 1,
    "word": "वाईट",
    "english": "Bad / Poor / Harmful",
    "meaning": "अयोग्य दर्जाचा, त्रासदायक किंवा दूषित",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 85,
    "part": 1,
    "word": "मोठा",
    "english": "Big / Large / Elder",
    "meaning": "आकार, वय, विस्तार किंवा पदवीने अधिक असलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 86,
    "part": 1,
    "word": "लहान",
    "english": "Small / Little / Young",
    "meaning": "आकाराने, वयाने किंवा विस्ताराने कमी असलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 87,
    "part": 1,
    "word": "नवीन",
    "english": "New / Fresh / Modern",
    "meaning": "नुकताच तयार झालेला किंवा अप्रचलित नव",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 88,
    "part": 1,
    "word": "जुना",
    "english": "Old / Ancient / Used",
    "meaning": "पूर्वीच्या काळातील किंवा वापरून झालेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 89,
    "part": 1,
    "word": "सोपा",
    "english": "Easy / Simple / Plain",
    "meaning": "सहज समजणारा, सुलभ किंवा अडचण नसलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 90,
    "part": 1,
    "word": "कठीण",
    "english": "Difficult / Hard / Tough",
    "meaning": "समजण्यास क्लिष्ट किंवा हाताळण्यास टणक",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 91,
    "part": 1,
    "word": "जास्त",
    "english": "More / Excess / Surplus",
    "meaning": "नेहमीच्या प्रमाणापेक्षा विपुल वा अधिक असलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 92,
    "part": 1,
    "word": "कमी",
    "english": "Less / Few / Minimal",
    "meaning": "गरजेपेक्षा किंवा सरासरी प्रमाणाने अल्प",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 93,
    "part": 1,
    "word": "आणि",
    "english": "And / Along with",
    "meaning": "दोन शब्द किंवा वाक्ये जोडणारा समुच्चयबोधक शब्द",
    "pos": "उभयान्वयी अव्यय"
  },
  {
    "id": 94,
    "part": 1,
    "word": "पण",
    "english": "But / However / Yet",
    "meaning": "विरोध किंवा न्यूनत्व दशवणारा अव्यय (परंतु)",
    "pos": "उभयान्वयी अव्यय"
  },
  {
    "id": 95,
    "part": 1,
    "word": "किंवा",
    "english": "Or / Alternatively",
    "meaning": "दोन गोष्टींमधील पर्याय किंवा निवड दाखवणारा शब्द",
    "pos": "उभयान्वयी अव्यय"
  },
  {
    "id": 96,
    "part": 1,
    "word": "कारण",
    "english": "Because / Reason",
    "meaning": "घटनेमागील मूळ हेतू किंवा पाश्वभूमी उलगडणारा शब्द",
    "pos": "उभयान्वयी अव्यय"
  },
  {
    "id": 97,
    "part": 1,
    "word": "म्हणून",
    "english": "Therefore / So / Hence",
    "meaning": "परिणाम, निष्कर्ष किंवा फलित दाखवणारा शब्द",
    "pos": "उभयान्वयी अव्यय"
  },
  {
    "id": 98,
    "part": 1,
    "word": "आता",
    "english": "Now / At present",
    "meaning": "सध्याच्या वर्तमान क्षणी किंवा लगेच",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 99,
    "part": 1,
    "word": "नंतर",
    "english": "Later / Afterwards",
    "meaning": "दिलेल्या वेळेच्या पुढे किंवा शेवट",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 100,
    "part": 1,
    "word": "नेहमी",
    "english": "Always / Regularly",
    "meaning": "सातत्याने, अविरतपणे किंवा दररोज",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 101,
    "part": 2,
    "word": "आज",
    "english": "Today",
    "meaning": "सध्या चालू असलेला वर्तमान दिवस",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 102,
    "part": 2,
    "word": "काल",
    "english": "Yesterday",
    "meaning": "नुकताच संपलेला मागचा दिवस",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 103,
    "part": 2,
    "word": "उद्याा",
    "english": "Tomorrow",
    "meaning": "येणारा पुढचा आगामी दिवस",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 104,
    "part": 2,
    "word": "सकाळ",
    "english": "Morning",
    "meaning": "सूर्योदयानंतरचा दिवसाचा पहिला प्रहर (प्रभात)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 105,
    "part": 2,
    "word": "दुपार",
    "english": "Afternoon / Midday",
    "meaning": "सूर्य डोक्यावर असण्याचा मध्यान्हाचा काळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 106,
    "part": 2,
    "word": "संध्याकाळ",
    "english": "Evening / Dusk",
    "meaning": "सूर्यास्ताचा तिन्हीसांजेचा काळ (सायंकाळ)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 107,
    "part": 2,
    "word": "लवकर",
    "english": "Early / Quickly / Soon",
    "meaning": "ठरलेल्या वेळेपूर्वी किंवा जलद गतीन",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 108,
    "part": 2,
    "word": "हळू",
    "english": "Slowly / Softly",
    "meaning": "मंद गतीने किंवा कमी आवाजात",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 109,
    "part": 2,
    "word": "लगेच",
    "english": "Immediately / Right away",
    "meaning": "एका क्षणाचाही विलंब न लावता तत्काळ",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 110,
    "part": 2,
    "word": "पुन्हा",
    "english": "Again / Once more",
    "meaning": "दुसऱ्यांदा, फेरून किंवा माघार",
    "pos": "क्रियाविशेषण (Adv)"
  },
  {
    "id": 111,
    "part": 2,
    "word": "सूर्य",
    "english": "Sun / Solar deity",
    "meaning": "प्रकाश व उष्णता देणारा मध्यवर्ती तारा (रवी/भास्कर)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 112,
    "part": 2,
    "word": "चंद्र",
    "english": "Moon / Lunar satellite",
    "meaning": "रात्री आकाशात शीतल प्रकाश देणारा उपग्रह (शशी)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 113,
    "part": 2,
    "word": "आकाश",
    "english": "Sky / Firmament",
    "meaning": "डोक्यावर पसरलेली विस्तीर्ण निळी पोकळी (आभाळ)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 114,
    "part": 2,
    "word": "नदी",
    "english": "River / Stream",
    "meaning": "गोड्याा पाण्याचा नैसर्गिक वाहता प्रवाह (सरिता)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 115,
    "part": 2,
    "word": "समुद्र",
    "english": "Sea / Ocean",
    "meaning": "पृथ्वीवरील खाऱ्या पाण्याचा अथांग साठा (सागर)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 116,
    "part": 2,
    "word": "पाऊस",
    "english": "Rain / Rainfall",
    "meaning": "ढगांतून पडणारे पाण्याचे थेंब (पर्जन्य/वृष्टी)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 117,
    "part": 2,
    "word": "वारा",
    "english": "Wind / Breeze",
    "meaning": "हवेची वेगाने होणारी हालचाल (पवन/वात)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 118,
    "part": 2,
    "word": "ढग",
    "english": "Cloud",
    "meaning": "आकाशात तरंगणारे बाष्पाचे पुंजके (मेघ)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 119,
    "part": 2,
    "word": "डोंगर",
    "english": "Hill / Mountain",
    "meaning": "जमिनीपासून वर उचललेला मोठा खडकाळ भाग (पर्वत)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 120,
    "part": 2,
    "word": "माती",
    "english": "Soil / Mud / Earth",
    "meaning": "शेती व वनस्पतींच्या वाढीसाठी आवश्यक भूपृष्ठ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 121,
    "part": 2,
    "word": "शरीर",
    "english": "Body / Physical frame",
    "meaning": "सजीवांचा हाडामांसाचा संपूर्ण देह (तन/काया)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 122,
    "part": 2,
    "word": "डोळा",
    "english": "Eye / Organ of sight",
    "meaning": "दृष्टी देणारे पाहण्याचे मुख्य ज्ञाानेंद्रिय (नेत्र)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 123,
    "part": 2,
    "word": "कान",
    "english": "Ear / Organ of hearing",
    "meaning": "ध्वनी ऐकण्याचे शारीरिक ज्ञाानेंद्रिय (कर्ण)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 124,
    "part": 2,
    "word": "नाक",
    "english": "Nose / Olfactory organ",
    "meaning": "श्वाास घेण्याचे व गंध ओळखण्याचे इंद्रिय (नासिका)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 125,
    "part": 2,
    "word": "तोंड",
    "english": "Mouth / Face",
    "meaning": "अन्न खाण्याचा, बोलण्याचा अवयव किंवा चेहर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 126,
    "part": 2,
    "word": "हात",
    "english": "Hand / Arm",
    "meaning": "वस्तू उचलण्यासाठी वापरला जाणारा अवयव (कर)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 127,
    "part": 2,
    "word": "पाय",
    "english": "Leg / Foot",
    "meaning": "चालण्यासाठी व उभे राहण्यासाठी उपयोगी अवयव (पाद)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 128,
    "part": 2,
    "word": "पोट",
    "english": "Stomach / Belly / Abdomen",
    "meaning": "अन्न साठवून पचन करणारा शरीराचा मधला भाग (उदर)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 129,
    "part": 2,
    "word": "केस",
    "english": "Hair",
    "meaning": "डोक्यावर व त्वचेवर उगवणारे बारीक तंतू (केश)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 130,
    "part": 2,
    "word": "मन",
    "english": "Mind / Heart / Soul",
    "meaning": "विचार आणि भावना अनुभवण्याचे आंतरिक मानसिक केंद्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 131,
    "part": 2,
    "word": "रक्त",
    "english": "Blood",
    "meaning": "शरीराच्या नसांमधून सतत वाहणारा लाल जीवनद्रव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 132,
    "part": 2,
    "word": "हाड",
    "english": "Bone / Skeletal piece",
    "meaning": "शरीराला आकार व मजबुती देणारा कठीण घटक (अस्थीी)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 133,
    "part": 2,
    "word": "झोप",
    "english": "Sleep / Slumber",
    "meaning": "शरीराला ऊर्जा देणारी शांत नैसर्गिक विश्रांांती (निद्रा)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 134,
    "part": 2,
    "word": "स्वप्न",
    "english": "Dream / Vision",
    "meaning": "निद्रेच्या अवस्थेेत मेंदूला दिसणारे काल्पनिक दृश्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 135,
    "part": 2,
    "word": "आरोग्य",
    "english": "Health / Wellness",
    "meaning": "शारीरिक व मानसिक दृष्टीने पूर्ण निरोगी असण्याची स्थि त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 136,
    "part": 2,
    "word": "आजार",
    "english": "Illness / Disease / Sickness",
    "meaning": "शरीराच्या कार्यात बिघाड करणारी व्याधी किंवा रोग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 137,
    "part": 2,
    "word": "औषध",
    "english": "Medicine / Remedy",
    "meaning": "आजार बरा करण्यासाठी डॉक्टरांनी दिलेले औषधी द्रव्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 138,
    "part": 2,
    "word": "डॉक्टर",
    "english": "Doctor / Physician",
    "meaning": "आजाराचे योग्य निदान करून उपचार करणारा वैद्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 139,
    "part": 2,
    "word": "खोली",
    "english": "Room / Chamber",
    "meaning": "घराचा चार भिंतींनी सुरक्षित व बंदिस्त केलेला भाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 140,
    "part": 2,
    "word": "दार",
    "english": "Door / Entrance gate",
    "meaning": "खोलीत वा घरात ये-जा करण्याचे प्रवेशद्वाार (दरवाजा)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 141,
    "part": 2,
    "word": "खिडकी",
    "english": "Window / Casement",
    "meaning": "हवा आणि प्रकाशाच्या येण्याजाण्यासाठी भिंतीत केलेले द्वाार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 142,
    "part": 2,
    "word": "छत",
    "english": "Roof / Ceiling",
    "meaning": "घराचा ऊन-पावसापासून संरक्षण करणारा वरचा भाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 143,
    "part": 2,
    "word": "भिंत",
    "english": "Wall / Partition",
    "meaning": "विटा किंवा दगडांनी उभारलेला घराचा उभा आधार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 144,
    "part": 2,
    "word": "टेबल",
    "english": "Table / Desk",
    "meaning": "वस्तू ठेवण्यासाठी किंवा लिखाणासाठी सपाट साधन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 145,
    "part": 2,
    "word": "खुर्ची",
    "english": "Chair / Seat",
    "meaning": "बसण्यासाठी पाठीचा भक्कम आधार असलेले चार पायांचे आसन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 146,
    "part": 2,
    "word": "कपडे",
    "english": "Clothes / Garments / Apparel",
    "meaning": "शरीर झाकण्यासाठी परिधान केली जाणारी वस्त्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 147,
    "part": 2,
    "word": "कागद",
    "english": "Paper / Sheet",
    "meaning": "लिहिण्यासाठी किंवा छपाईसाठी झाडांपासून बनवलेले पान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 148,
    "part": 2,
    "word": "पेन",
    "english": "Pen / Quill",
    "meaning": "शाईच्या साहाय्याने कागदावर लिहिण्याचे आधुनिक साधन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 149,
    "part": 2,
    "word": "भाषा",
    "english": "Language / Tongue",
    "meaning": "मानवाला विचार मांडण्यास व संवाद साधण्यास सक्षम करणारी लिपी/बोल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 150,
    "part": 2,
    "word": "शब्द",
    "english": "Word / Vocable",
    "meaning": "निश्चित अर्थ व्यक्त करणारा अक्षरांचा पद्धतशीर समूह",
    "pos": "नाम (Noun)"
  },
  {
    "id": 151,
    "part": 2,
    "word": "वाक्य",
    "english": "Sentence",
    "meaning": "संपूर्ण आणि स्पष्ट अर्थ व्यक्त करणारा शब्दांचा समूह",
    "pos": "नाम (Noun)"
  },
  {
    "id": 152,
    "part": 2,
    "word": "अर्थ",
    "english": "Meaning / Wealth / Sense",
    "meaning": "शब्दातून निघणारा खरा भावार्थ किंवा धनसंपत्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 153,
    "part": 2,
    "word": "प्रश्न",
    "english": "Question / Inquiry",
    "meaning": "माहिती मिळवण्यासाठी वा शंका फेडण्यासाठी केलेली विचारण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 154,
    "part": 2,
    "word": "उत्तर",
    "english": "Answer / Reply / North",
    "meaning": "विचारलेल्या प्रश्नााचे निरसन किंवा एका मुख्य दिशेचे नाव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 155,
    "part": 2,
    "word": "समस्या",
    "english": "Problem / Issue / Dilemma",
    "meaning": "सोडवावी लागणारी कठीण परिस्थि ती किंवा पेचप्रसंग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 156,
    "part": 2,
    "word": "उपाय",
    "english": "Solution / Remedy",
    "meaning": "समस्येवर मात करण्यासाठी शोधलेली युक्ती वा तोडग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 157,
    "part": 2,
    "word": "नियम",
    "english": "Rule / Regulation",
    "meaning": "शिस्त व सुव्यवस्थेेसाठी आखून दिलेले बंधनकारक तत्त्व",
    "pos": "नाम (Noun)"
  },
  {
    "id": 158,
    "part": 2,
    "word": "खेळ",
    "english": "Sport / Game / Play",
    "meaning": "शारीरिक बळ किंवा बुद्धिमत्तेेची मनोरंजक स्पर्ध",
    "pos": "नाम (Noun)"
  },
  {
    "id": 159,
    "part": 2,
    "word": "संगीत",
    "english": "Music / Melody",
    "meaning": "गायन, वादन आणि लयबद्ध सुरांचा आनंददायी संगम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 160,
    "part": 2,
    "word": "गाणे",
    "english": "Song / Vocal tune",
    "meaning": "तालासुरात गायलेली सुंदर काव्यात्मक रचना (गीत)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 161,
    "part": 2,
    "word": "चित्र",
    "english": "Picture / Painting",
    "meaning": "रंगांनी किंवा रेषांनी कागदावर साकारलेली प्रतिम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 162,
    "part": 2,
    "word": "रंग",
    "english": "Color / Hue / Tint",
    "meaning": "प्रकाशाच्या परावर्तनाने डोळ्यांना जाणवणारे रूप (वर्ण)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 163,
    "part": 2,
    "word": "पांढरा",
    "english": "White",
    "meaning": "दुधासारखा किंवा शंखासारखा स्वच्छ, निर्मळ रंग (श्वेेत)",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 164,
    "part": 2,
    "word": "काळा",
    "english": "Black / Dark",
    "meaning": "अंधारासारखा किंवा कोळशासारखा गडद रंग (कृष्ण)",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 165,
    "part": 2,
    "word": "लाल",
    "english": "Red / Crimson",
    "meaning": "रक्तासारखा किंवा कुंकवासारखा भडक तेजस्वी रंग",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 166,
    "part": 2,
    "word": "हिरवा",
    "english": "Green / Verdant",
    "meaning": "झाडांच्या ताज्या पानांसारखा प्रफुल्लित रंग",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 167,
    "part": 2,
    "word": "निळा",
    "english": "Blue / Azure",
    "meaning": "स्वच्छ आकाशासारखा किंवा खोल समुद्रासारखा रंग",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 168,
    "part": 2,
    "word": "पिवळा",
    "english": "Yellow / Golden",
    "meaning": "हळदीसारखा किंवा सोन्यासारखा लखलखीत रंग (पीत)",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 169,
    "part": 2,
    "word": "गरम",
    "english": "Hot / Warm",
    "meaning": "जास्त तापमान असलेला किंवा शेकलेला (उष्ण)",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 170,
    "part": 2,
    "word": "थंड",
    "english": "Cold / Cool / Chilled",
    "meaning": "कमी तापमान असलेला किंवा बर्फासारखा गार (शीतल)",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 171,
    "part": 2,
    "word": "गोड",
    "english": "Sweet / Luscious",
    "meaning": "साखरेसारखी किंवा मधासारखी तृप्ती देणारी चव (मधुर)",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 172,
    "part": 2,
    "word": "कडू",
    "english": "Bitter",
    "meaning": "कडुनिंबासारखी जिभेला कडू वाटणारी चव",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 173,
    "part": 2,
    "word": "तिखट",
    "english": "Spicy / Pungent",
    "meaning": "मिरचीसारखी जिभेवर चरचरीत जाणवणारी चव",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 174,
    "part": 2,
    "word": "खारट",
    "english": "Salty / Saline",
    "meaning": "मिठाचे प्रमाण जास्त असणारी चवदार चव",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 175,
    "part": 2,
    "word": "आंबट",
    "english": "Sour / Tart / Acidic",
    "meaning": "लिंबू किंवा कच्च्या कैरीसारखी आंबवणारी चव",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 176,
    "part": 2,
    "word": "जड",
    "english": "Heavy / Weighty",
    "meaning": "उचलण्यास कठीण किंवा अधिक वजन असलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 177,
    "part": 2,
    "word": "हलका",
    "english": "Light (weight)",
    "meaning": "सहजपणे उचलता येणारा किंवा कमी भाराच",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 178,
    "part": 2,
    "word": "उंच",
    "english": "High / Tall / Lofty",
    "meaning": "जमिनीपासून वरच्या दिशेने अधिक लांबी असलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 179,
    "part": 2,
    "word": "बुटका",
    "english": "Short (height) / Dwarf",
    "meaning": "उंचीने किंवा शारीरिक आकाराने कमी असलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 180,
    "part": 2,
    "word": "लांब",
    "english": "Far / Long / Distant",
    "meaning": "अंतराने दूरवर असलेला किंवा अधिक लांबीचा / Adv",
    "pos": "विशेषण"
  },
  {
    "id": 181,
    "part": 2,
    "word": "जवळ",
    "english": "Near / Close / Beside",
    "meaning": "अतिशय कमी अंतरावर असलेला (समीप) विशेषण /",
    "pos": "शब्दयोगी"
  },
  {
    "id": 182,
    "part": 2,
    "word": "सुंदर",
    "english": "Beautiful / Pretty",
    "meaning": "पाहताच मनाला आनंद देणारा मोहक व देखण",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 183,
    "part": 2,
    "word": "स्वच्छ",
    "english": "Clean / Pure / Neat",
    "meaning": "कचरा, डाग किंवा मळ नसलेला निर्मळ",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 184,
    "part": 2,
    "word": "घाण",
    "english": "Dirty / Filth / Impure",
    "meaning": "अस्वच्छता, कचरा किंवा दुर्गंधी असलेला विशेषण /",
    "pos": "नाम"
  },
  {
    "id": 185,
    "part": 2,
    "word": "खरा",
    "english": "True / Genuine / Real",
    "meaning": "सत्यावर आधारलेला, प्रामाणिक किंवा अस्सल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 186,
    "part": 2,
    "word": "खोटा",
    "english": "False / Fake / Untrue",
    "meaning": "बनावट, असत्य किंवा दिशाभूल करणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 187,
    "part": 2,
    "word": "श्रीीमंत",
    "english": "Rich / Wealthy / Affluent",
    "meaning": "भरपूर धनदौलत, संपत्तीी व गाडी-घोडी असलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 188,
    "part": 2,
    "word": "गरीब",
    "english": "Poor / Destitute",
    "meaning": "आर्थिक परिस्थि ती हालाखीची असलेला दुर्बल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 189,
    "part": 2,
    "word": "मजबूत",
    "english": "Strong / Sturdy / Tough",
    "meaning": "सहजासहजी न तुटणारा, टिकाऊ व पक्क",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 190,
    "part": 2,
    "word": "कमजोर",
    "english": "Weak / Feeble / Fragile",
    "meaning": "शक्ती, ताकद किंवा प्रतिकारक्षमता नसलेला अशक्त",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 191,
    "part": 2,
    "word": "झोपणे",
    "english": "To sleep / Lie down",
    "meaning": "विश्रांांतीसाठी डोळे मिटून आडवे पडण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 192,
    "part": 2,
    "word": "हसणे",
    "english": "To laugh / To smile",
    "meaning": "आनंदात चेहऱ्यावर स्मित उमटवून आवाज करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 193,
    "part": 2,
    "word": "रडणे",
    "english": "To cry / To weep",
    "meaning": "वेदना किंवा दुःखाने डोळ्यांतून अश्रूू ढाळण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 194,
    "part": 2,
    "word": "खेळणे",
    "english": "To play / Partake",
    "meaning": "आनंदासाठी किंवा सरावासाठी खेळात सहभाग घेण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 195,
    "part": 2,
    "word": "जिंकणे",
    "english": "To win / Triumph",
    "meaning": "स्पर्धेत किंवा लढतीत विजय संपादन करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 196,
    "part": 2,
    "word": "हरणे",
    "english": "To lose (game) / Defeated",
    "meaning": "स्पर्धेत पराभूत होणे किंवा हार पत्करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 197,
    "part": 2,
    "word": "शोधणे",
    "english": "To search / To find",
    "meaning": "हरवलेली किंवा अज्ञाात गोष्ट प्रयत्नाने हुडकण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 198,
    "part": 2,
    "word": "तोडणे",
    "english": "To break / To snap",
    "meaning": "एखाद्या अखंड वस्तूचे तुकडे करून वेगळे करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 199,
    "part": 2,
    "word": "जोडणे",
    "english": "To connect / To join",
    "meaning": "दोन किंवा अधिक तुकडे एकत्र बांधणे वा सांधण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 200,
    "part": 2,
    "word": "मदत करणे",
    "english": "To help / To assist",
    "meaning": "दुसऱ्या व्यक्तीला कार्यात साहाय्य वा हातभार लावण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 201,
    "part": 3,
    "word": "शेत",
    "english": "Farm / Field / Land",
    "meaning": "पिके घेण्यासाठी मशागत केलेली जमीन (वावर)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 202,
    "part": 3,
    "word": "शेतकरी",
    "english": "Farmer / Cultivator",
    "meaning": "शेतीची मशागत करून अन्न पिकवणारा बळीराज",
    "pos": "नाम (Noun)"
  },
  {
    "id": 203,
    "part": 3,
    "word": "पीक",
    "english": "Crop / Harvest",
    "meaning": "शेतात पेरून वाढवलेली वनस्पती किंवा उत्पन्न",
    "pos": "नाम (Noun)"
  },
  {
    "id": 204,
    "part": 3,
    "word": "बी",
    "english": "Seed / Grain",
    "meaning": "नवीन रोप तयार होणारा वनस्पतीचा सूक्ष्म भाग (बियाणे)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 205,
    "part": 3,
    "word": "धान्य",
    "english": "Grain / Cereal",
    "meaning": "खाण्यासाठी पिकवले जाणारे दाणे (उदा. गहू, ज्वारी)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 206,
    "part": 3,
    "word": "फळ",
    "english": "Fruit",
    "meaning": "झाडाला येणारे गोड वा आंबट खाण्यायोग्य अंग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 207,
    "part": 3,
    "word": "फूल",
    "english": "Flower / Blossom",
    "meaning": "झाडाचा आकर्षक, रंगीत व सुगंधी भाग (पुष्प)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 208,
    "part": 3,
    "word": "पान",
    "english": "Leaf / Foliage",
    "meaning": "झाडाच्या फांदीला येणारे हिरवे अंग (पर्ण)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 209,
    "part": 3,
    "word": "मूळ",
    "english": "Root",
    "meaning": "झाडाला मातीत घट्ट रोवून ठेवणारा खालचा भाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 210,
    "part": 3,
    "word": "फांदी",
    "english": "Branch / Bough",
    "meaning": "झाडाच्या मुख्य खोडापासून फुटलेली उपशाख",
    "pos": "नाम (Noun)"
  },
  {
    "id": 211,
    "part": 3,
    "word": "भाजी",
    "english": "Vegetable / Greens",
    "meaning": "आहारात शिजवून खाल्ली जाणारी वनस्पती वा पाल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 212,
    "part": 3,
    "word": "दूध",
    "english": "Milk",
    "meaning": "गाय, म्हैस आदी प्राण्यांपासून मिळणारा पोषक द्रव (क्षीर)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 213,
    "part": 3,
    "word": "तूप",
    "english": "Clarified butter / Ghee",
    "meaning": "लोणी कढवून तयार केलेला स्निग्ध व सुगंधी पदार्थ (घृत)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 214,
    "part": 3,
    "word": "तेल",
    "english": "Oil / Cooking oil",
    "meaning": "तेलबिया गाळून काढलेला स्निग्ध व ज्वलनशील द्रव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 215,
    "part": 3,
    "word": "मीठ",
    "english": "Salt / Sodium chloride",
    "meaning": "अन्नाला खारट चव देणारा समुद्राच्या पाण्याचा क्षार (लवण)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 216,
    "part": 3,
    "word": "साखर",
    "english": "Sugar",
    "meaning": "उसाच्या रसापासून बनवला जाणारा गोड पांढरा पदार्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 217,
    "part": 3,
    "word": "चहा",
    "english": "Tea",
    "meaning": "उकळत्या पाण्यात चहापत्तीी, दूध व साखर घालून केलेले पेय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 218,
    "part": 3,
    "word": "भात",
    "english": "Cooked rice",
    "meaning": "तांदूळ पाण्यात शिजवून तयार केलेले मुख्य अन्न (ओदन)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 219,
    "part": 3,
    "word": "भाकरी",
    "english": "Flatbread / Bhakri",
    "meaning": "ज्वारी वा बाजरीच्या पिठाची तव्यावर भाजलेली जाड पोळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 220,
    "part": 3,
    "word": "पोळी",
    "english": "Roti / Chapati",
    "meaning": "गव्हाच्या पिठाची पातळ लाटून भाजलेली चपात",
    "pos": "नाम (Noun)"
  },
  {
    "id": 221,
    "part": 3,
    "word": "कुत्राा",
    "english": "Dog / Hound",
    "meaning": "घराची राखण करणारा इमानी पाळीव प्राणी (श्वान)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 222,
    "part": 3,
    "word": "मांजर",
    "english": "Cat / Feline",
    "meaning": "उंदीर पकडणारा लहान घरगुती पाळीव प्राणी (मार्जार)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 223,
    "part": 3,
    "word": "गाय",
    "english": "Cow / Bovine",
    "meaning": "दूध देणारा अत्यंत उपयुक्त शाकाहारी पाळीव प्राणी (गोमाता)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 224,
    "part": 3,
    "word": "बैल",
    "english": "Ox / Bull",
    "meaning": "शेतीकाम व गाडी ओढण्यासाठी वापरला जाणारा पाळीव प्राण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 225,
    "part": 3,
    "word": "घोडा",
    "english": "Horse / Steed",
    "meaning": "वेगाने धावणारा आणि स्वारीसाठी वापरला जाणारा प्राणी (अश्व)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 226,
    "part": 3,
    "word": "शेळी",
    "english": "Goat",
    "meaning": "दूध व मांसासाठी पाळला जाणारा लहान प्राणी (बकरी)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 227,
    "part": 3,
    "word": "पक्षी",
    "english": "Bird / Avian",
    "meaning": "पंख असलेला व आकाशात उडणारा सजीव (पाखरू/विहंग)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 228,
    "part": 3,
    "word": "मासा",
    "english": "Fish",
    "meaning": "पाण्यात पोहणारा कल्ले व पर असलेला जलचर (मत्स्य)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 229,
    "part": 3,
    "word": "साप",
    "english": "Snake / Serpent",
    "meaning": "पाय नसलेला जमिनीवर सरपटणारा सरपटणारा प्राणी (सर्प)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 230,
    "part": 3,
    "word": "कीटक",
    "english": "Insect / Bug",
    "meaning": "बारीक आकाराचा सहा पायांचा लहान जीव (किडा)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 231,
    "part": 3,
    "word": "प्राणी",
    "english": "Animal / Beast",
    "meaning": "स्वतःच्या बळावर हालचाल करू शकणारा जिवंत प्राणीवर्ग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 232,
    "part": 3,
    "word": "जंगल",
    "english": "Forest / Woods / Jungle",
    "meaning": "दाट झाडे, वेली आणि वन्यजीवांनी व्यापलेला विस्तीर्ण भाग (वन)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 233,
    "part": 3,
    "word": "विहीर",
    "english": "Well",
    "meaning": "पाण्यासाठी जमिनीत खोल खोदलेला दगडी गोलाकार साठ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 234,
    "part": 3,
    "word": "तलाव",
    "english": "Pond / Lake",
    "meaning": "पाण्याचा नैसर्गिक वा कृत्रिमरीत्या साठलेला मोठा डोह",
    "pos": "नाम (Noun)"
  },
  {
    "id": 235,
    "part": 3,
    "word": "पूल",
    "english": "Bridge",
    "meaning": "नदी किंवा दरीवरून पलीकडे जाण्यासाठी बांधलेला पक्का मार्ग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 236,
    "part": 3,
    "word": "आनंद",
    "english": "Happiness / Joy / Delight",
    "meaning": "मनाला मिळणारे तृप्तीदायक समाधान आणि उल्हास (हर्ष)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 237,
    "part": 3,
    "word": "दुःख",
    "english": "Sadness / Sorrow / Grief",
    "meaning": "मनाला क्लेश देणारी वेदना, शोक किंवा हुरहूर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 238,
    "part": 3,
    "word": "राग",
    "english": "Anger / Wrath / Rage",
    "meaning": "अपमानातून किंवा विरोधातून निर्माण होणारा संताप (क्रोध)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 239,
    "part": 3,
    "word": "भीती",
    "english": "Fear / Dread / Terror",
    "meaning": "संकटाची किंवा अपाय होण्याची वाटणारी धास्ती (भय)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 240,
    "part": 3,
    "word": "प्रेम",
    "english": "Love / Affection",
    "meaning": "दुसऱ्याबद्दल वाटणारी जिव्हाळ्याची व निस्वार्थ आपुलक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 241,
    "part": 3,
    "word": "शांती",
    "english": "Peace / Tranquility",
    "meaning": "कसलाही कलह वा गोंधळ नसलेली स्थि र अवस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 242,
    "part": 3,
    "word": "सत्य",
    "english": "Truth / Reality",
    "meaning": "प्रत्यक्षात जे घडले आहे तेच वास्तव (खरे)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 243,
    "part": 3,
    "word": "खोटेपणा",
    "english": "Falsehood / Dishonesty",
    "meaning": "असत्य बोलणे किंवा लबाडी करण्याची प्रवृत्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 244,
    "part": 3,
    "word": "विश्वाास",
    "english": "Trust / Faith / Confidence",
    "meaning": "दुसऱ्या व्यक्तीवर किंवा गोष्टीवर असलेली अतूट खात्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 245,
    "part": 3,
    "word": "आशा",
    "english": "Hope / Expectation",
    "meaning": "भविष्यात काहीतरी चांगले घडेल ही मनातील सकारात्मक भावन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 246,
    "part": 3,
    "word": "धैर्य",
    "english": "Courage / Bravery / Valor",
    "meaning": "कठीण प्रसंगाला न घाबरता तोंड देण्याचे मानसिक बळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 247,
    "part": 3,
    "word": "काळजी",
    "english": "Care / Concern / Anxiety",
    "meaning": "जपणूक करणे किंवा भविष्याची वाटणारी चिंता/विवंचन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 248,
    "part": 3,
    "word": "रागवणे",
    "english": "To get angry / To scold",
    "meaning": "संताप व्यक्त करणे किंवा चुकीवर दुसऱ्याला रागाने बोलण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 249,
    "part": 3,
    "word": "घाबरणे",
    "english": "To fear / Get scared",
    "meaning": "मनात अचानक भय, धडकी किंवा धास्ती निर्माण होण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 250,
    "part": 3,
    "word": "हसवणे",
    "english": "To make laugh / Amuse",
    "meaning": "दुसऱ्या व्यक्तीच्या चेहऱ्यावर आनंद वा हास्य फुलवण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 251,
    "part": 3,
    "word": "रडवणे",
    "english": "To make cry",
    "meaning": "दुसऱ्याला मानसिक दुःख देऊन अश्रू ढाळायला लावण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 252,
    "part": 3,
    "word": "समजवणे",
    "english": "To explain / Convince",
    "meaning": "दुसऱ्याला एखादी गोष्ट समजावून सांगून त्याचे मन वळवण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 253,
    "part": 3,
    "word": "ठरवणे",
    "english": "To decide / Determine",
    "meaning": "मनात पक्का विचार करून अंतिम ध्येय किंवा निर्णय घेण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 254,
    "part": 3,
    "word": "प्रयत्न करणे",
    "english": "To try / To attempt",
    "meaning": "काम साध्य करण्यासाठी धडपड करणे किंवा श्रम घेण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 255,
    "part": 3,
    "word": "आठवण",
    "english": "Memory / Remembrance",
    "meaning": "पूर्वी घडलेल्या गोष्टीची स्मृती किंवा व्यक्तीचे स्मरण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 256,
    "part": 3,
    "word": "खरेदी करणे",
    "english": "To buy / To purchase",
    "meaning": "पैशांचा मोबदला देऊन वस्तू किंवा सेवा आपल्या ताब्यात घेण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 257,
    "part": 3,
    "word": "विकणे",
    "english": "To sell / Vend",
    "meaning": "पैशांच्या बदल्यात स्वतःची वस्तू ग्राहकाला देण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 258,
    "part": 3,
    "word": "शिजवणे",
    "english": "To cook / To boil",
    "meaning": "अन्नपदार्थ चुलीवर किंवा आचेवर खाण्यायोग्य करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 259,
    "part": 3,
    "word": "कापणे",
    "english": "To cut / To slice / Chop",
    "meaning": "सुरी, विळा किंवा कात्रीने वस्तूचे दोन भाग करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 260,
    "part": 3,
    "word": "धुणे",
    "english": "To wash / To cleanse",
    "meaning": "पाण्याने कपडे, भांडी किंवा शरीर स्वच्छ धुवून काढण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 261,
    "part": 3,
    "word": "भरणे",
    "english": "To fill / To pay",
    "meaning": "पात्रात वस्तू काठोकाठ भरणे किंवा शासकीय देयक देण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 262,
    "part": 3,
    "word": "ओतणे",
    "english": "To pour / Spill",
    "meaning": "एका भांड्याातील द्रव दुसऱ्या भांड्याात कलंडवून ओतण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 263,
    "part": 3,
    "word": "फेकणे",
    "english": "To throw / To fling",
    "meaning": "हातातली वस्तू ताकदीने दूर भिरकावून देण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 264,
    "part": 3,
    "word": "पकडणे",
    "english": "To catch / To hold",
    "meaning": "हालचाल करणारी वस्तू वा प्राणी हातात घट्ट धरण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 265,
    "part": 3,
    "word": "उडणे",
    "english": "To fly / To soar",
    "meaning": "पंखांच्या बळावर किंवा हवेत वेगाने वर झेपावण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 266,
    "part": 3,
    "word": "पोहणे",
    "english": "To swim",
    "meaning": "पाण्यात हातपाय हलवून पुढे जाण्याची कौशल्यपूर्ण कृत",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 267,
    "part": 3,
    "word": "चढणे",
    "english": "To climb / Ascend",
    "meaning": "पायऱ्या, झाड, डोंगर किंवा वाहनात वर जाण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 268,
    "part": 3,
    "word": "उतरणे",
    "english": "To descend / Step down",
    "meaning": "उंचावरून खाली येणे किंवा वाहनातून बाहेर पाऊल ठेवण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 269,
    "part": 3,
    "word": "लपणे",
    "english": "To hide / Conceal self",
    "meaning": "कोणालाही दिसू नये म्हणून स्वतःला आडोशाला झाकण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 270,
    "part": 3,
    "word": "दाखवणे",
    "english": "To show / To display",
    "meaning": "एखादी वस्तू किंवा गोष्ट दुसऱ्याच्या नजरेस पाडण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 271,
    "part": 3,
    "word": "वर",
    "english": "Up / Above / Over",
    "meaning": "जमिनीपासून किंवा संदर्भबिंदूपासून उंच दिशेला क्रियाविशेषण /",
    "pos": "शब्दयोगी"
  },
  {
    "id": 272,
    "part": 3,
    "word": "खाली",
    "english": "Down / Below / Under",
    "meaning": "तळाशी किंवा जमिनीच्या दिशेने असलेला भाग क्रियाविशेषण /",
    "pos": "शब्दयोगी"
  },
  {
    "id": 273,
    "part": 3,
    "word": "पुढे",
    "english": "Ahead / Forward / In front",
    "meaning": "पुढच्या बाजूला किंवा आगामी येणाऱ्या काळात क्रियाविशेषण /",
    "pos": "शब्दयोगी"
  },
  {
    "id": 274,
    "part": 3,
    "word": "मागे",
    "english": "Behind / Back / Rear",
    "meaning": "पाठीमागच्या बाजूला किंवा उलट दिशेला क्रियाविशेषण /",
    "pos": "शब्दयोगी"
  },
  {
    "id": 275,
    "part": 3,
    "word": "आत",
    "english": "Inside / Within / In",
    "meaning": "खोलीच्या, पेटीच्या किंवा बंद जागेच्या अंतर्भागात क्रियाविशेषण /",
    "pos": "शब्दयोगी"
  },
  {
    "id": 276,
    "part": 3,
    "word": "बाहेर",
    "english": "Outside / Out / Outer",
    "meaning": "बंद खोलीच्या किंवा घराच्या पलीकडे उघड्याावर क्रियाविशेषण /",
    "pos": "शब्दयोगी"
  },
  {
    "id": 277,
    "part": 3,
    "word": "डावा",
    "english": "Left (direction)",
    "meaning": "हृदयाच्या बाजूचा हात किंवा डावी बाज",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 278,
    "part": 3,
    "word": "उजवा",
    "english": "Right (direction)",
    "meaning": "जेवणाचा प्रमुख हात किंवा उजवी बाज",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 279,
    "part": 3,
    "word": "समोर",
    "english": "Facing / In front of",
    "meaning": "डोळ्यांसमोर किंवा तोंडासमोर असलेला सन्मुख भाग क्रियाविशेषण /",
    "pos": "शब्दयोगी"
  },
  {
    "id": 280,
    "part": 3,
    "word": "शेजारी",
    "english": "Neighbor / Next door",
    "meaning": "लगतच्या घरात वा शेतात राहणारी व्यक्ती / Adv",
    "pos": "नाम"
  },
  {
    "id": 281,
    "part": 3,
    "word": "पाहुणा",
    "english": "Guest / Visitor",
    "meaning": "भेटीसाठी काही काळापुरता घरी आलेला स्नेही किंवा आप्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 282,
    "part": 3,
    "word": "नोकरी",
    "english": "Job / Service / Employment",
    "meaning": "वेतनाच्या मोबदल्यात नियमितपणे केलेली सेव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 283,
    "part": 3,
    "word": "व्यवसाय",
    "english": "Business / Profession",
    "meaning": "नफा मिळवण्यासाठी चालवला जाणारा स्वतंत्र उद्योोग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 284,
    "part": 3,
    "word": "पगार",
    "english": "Salary / Wages",
    "meaning": "केलेल्या कामाचा दरमहा किंवा ठराविक वेळी मिळणारा मोबदल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 285,
    "part": 3,
    "word": "दुकान",
    "english": "Shop / Store",
    "meaning": "ग्राहकांना माल विकण्यासाठी थाटलेली अधिकृत जाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 286,
    "part": 3,
    "word": "ग्राहक",
    "english": "Customer / Consumer",
    "meaning": "पैसे देऊन वस्तू किंवा सेवा विकत घेणारा घटक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 287,
    "part": 3,
    "word": "किंमत",
    "english": "Price / Cost / Value",
    "meaning": "वस्तू खरेदी करण्यासाठी मोजावे लागणारे आर्थिक मूल्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 288,
    "part": 3,
    "word": "बाजार",
    "english": "Market / Bazaar",
    "meaning": "अनेक दुकाने एकत्र असणारे खरेदी-विक्रीचे मोठे केंद्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 289,
    "part": 3,
    "word": "प्रवास",
    "english": "Journey / Travel / Trip",
    "meaning": "एका ठिकाणाहून दुसऱ्या दूरच्या ठिकाणी जाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 290,
    "part": 3,
    "word": "तिकीट",
    "english": "Ticket / Fare receipt",
    "meaning": "प्रवासात वा कार्यक्रमात प्रवेशासाठी विकत घेतलेला दाखल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 291,
    "part": 3,
    "word": "चौक",
    "english": "Square / Intersection",
    "meaning": "चार वेगवेगळे रस्ते एकाच जागी मिळण्याचे ठिकाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 292,
    "part": 3,
    "word": "महाविद्याालय",
    "english": "College / Institute",
    "meaning": "उच्च व पदवीचे शिक्षण देणारी शैक्षणिक संस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 293,
    "part": 3,
    "word": "शिक्षक",
    "english": "Teacher / Instructor",
    "meaning": "विद्याार्थ्यांना ज्ञाान, विद्याा व संस्कार देणारा मार्गदशक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 294,
    "part": 3,
    "word": "विद्याार्थी",
    "english": "Student / Pupil",
    "meaning": "ज्ञाानाचे अध्ययन व नियमित शिक्षण घेणारी व्यक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 295,
    "part": 3,
    "word": "परीक्षा",
    "english": "Examination / Test",
    "meaning": "आत्मसात केलेल्या ज्ञाानाची व कौशल्याची गुणवत्तेेची चाचण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 296,
    "part": 3,
    "word": "निकाल",
    "english": "Result / Verdict",
    "meaning": "चाचणीचा किंवा खटल्याचा लागलेला अंतिम अधिकृत निर्णय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 297,
    "part": 3,
    "word": "यश",
    "english": "Success / Triumph",
    "meaning": "केलेल्या प्रामाणिक प्रयत्नांना मिळालेले अनुकूल फळ (विजय)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 298,
    "part": 3,
    "word": "अपयश",
    "english": "Failure / Defeat",
    "meaning": "प्रयत्नात आलेला तात्पुरता अडथळा किंवा न मिळालेले यश",
    "pos": "नाम (Noun)"
  },
  {
    "id": 299,
    "part": 3,
    "word": "समाज",
    "english": "Society / Community",
    "meaning": "परस्परसंबंधांनी एकत्र सुखाने राहणाऱ्या माणसांचा समूह",
    "pos": "नाम (Noun)"
  },
  {
    "id": 300,
    "part": 3,
    "word": "सरकार",
    "english": "Government / State",
    "meaning": "संपूर्ण देश वा राज्याचे प्रशासन चालवणारी वैधानिक यंत्रण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 301,
    "part": 4,
    "word": "कायदा",
    "english": "Law / Statute",
    "meaning": "शासनाने व विधिमंडळाने संमत केलेले नियम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 302,
    "part": 4,
    "word": "अधिकार",
    "english": "Right / Authority",
    "meaning": "कायदेशीर हक्क किंवा मिळालेली सत्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 303,
    "part": 4,
    "word": "कर्तव्य",
    "english": "Duty / Obligation",
    "meaning": "पार पाडावयाची नैतिक वा कायदेशीर जबाबदार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 304,
    "part": 4,
    "word": "न्याय",
    "english": "Justice / Fairness",
    "meaning": "सत्य व निपक्षपाती भूमिकेवर आधारलेला निवाड",
    "pos": "नाम (Noun)"
  },
  {
    "id": 305,
    "part": 4,
    "word": "न्यायालय",
    "english": "Court / Tribunal",
    "meaning": "न्यायदानाची अधिकृत संस्थाा (कोर्ट)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 306,
    "part": 4,
    "word": "गुन्हा",
    "english": "Crime / Offense",
    "meaning": "कायद्यााचा भंग करणारी व शिक्षेस पात्र कृत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 307,
    "part": 4,
    "word": "शिक्षाा",
    "english": "Punishment / Sentence",
    "meaning": "गुन्ह्याासाठी कायद्यााने फर्मावलेला दंड",
    "pos": "नाम (Noun)"
  },
  {
    "id": 308,
    "part": 4,
    "word": "पोलिस",
    "english": "Police / Constable",
    "meaning": "शांतता व सुव्यवस्थाा राखणारे सुरक्षा रक्षक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 309,
    "part": 4,
    "word": "स्वातंत्र्य",
    "english": "Freedom / Liberty",
    "meaning": "कोणत्याही परकीय किंवा अन्यायी बंधनांचा अभाव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 310,
    "part": 4,
    "word": "समानता",
    "english": "Equality / Parity",
    "meaning": "सर्व व्यक्तींना समान संधी व वागणूक असण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 311,
    "part": 4,
    "word": "नागरिक",
    "english": "Citizen / Resident",
    "meaning": "देशाचे कायदेशीर सदस्यत्व असलेली व्यक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 312,
    "part": 4,
    "word": "मतदान",
    "english": "Voting / Franchise",
    "meaning": "निवडणुकीत पसंतीचा लोकप्रतिनिधी निवडण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 313,
    "part": 4,
    "word": "निवडणूक",
    "english": "Election / Poll",
    "meaning": "प्रतिनिधी निवडण्याची लोकशाही प्रक्रिय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 314,
    "part": 4,
    "word": "नेते",
    "english": "Leader / Statesman",
    "meaning": "समाजाला योग्य दिशा दाखवणारा मार्गदशक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 315,
    "part": 4,
    "word": "भाषण",
    "english": "Speech / Address",
    "meaning": "जनतेसमोर वा सभेत केलेले विचारप्रकटन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 316,
    "part": 4,
    "word": "संघटना",
    "english": "Organization / Union",
    "meaning": "समान उद्दिष्टासाठी एकत्र आलेली लोकांची संस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 317,
    "part": 4,
    "word": "संस्कृती",
    "english": "Culture / Heritage",
    "meaning": "समाजाची जीवनपद्धती, कला व आचारविचार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 318,
    "part": 4,
    "word": "परंपरा",
    "english": "Tradition / Custom",
    "meaning": "पिढ्याानपिढ्याा सातत्याने चालत आलेली पद्धत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 319,
    "part": 4,
    "word": "सण",
    "english": "Festival / Feast day",
    "meaning": "आनंद, पूजा व उल्हासाचा विशिष्ट दिवस",
    "pos": "नाम (Noun)"
  },
  {
    "id": 320,
    "part": 4,
    "word": "उत्सव",
    "english": "Celebration / Festivity",
    "meaning": "सार्वजनिक पातळीवर साजरा होणारा मोठा सोहळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 321,
    "part": 4,
    "word": "इतिहास",
    "english": "History / Past annals",
    "meaning": "भूतकाळात घडलेल्या सत्य घटनांची शास्त्रोक्त नोंद",
    "pos": "नाम (Noun)"
  },
  {
    "id": 322,
    "part": 4,
    "word": "वर्तमान",
    "english": "Present / Now",
    "meaning": "सध्या प्रत्यक्ष चालू असलेला कालखंड",
    "pos": "नाम (Noun)"
  },
  {
    "id": 323,
    "part": 4,
    "word": "भविष्य",
    "english": "Future / Destiny",
    "meaning": "पुढे येणारा काळ किंवा नशिबातील घटन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 324,
    "part": 4,
    "word": "घटना",
    "english": "Incident / Event",
    "meaning": "प्रत्यक्षात घडून आलेला महत्त्वाचा प्रसंग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 325,
    "part": 4,
    "word": "प्रसंग",
    "english": "Occasion / Context",
    "meaning": "विशिष्ट वेळी निर्माण झालेली परिस्थि ती वा वेळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 326,
    "part": 4,
    "word": "विज्ञाान",
    "english": "Science",
    "meaning": "निसर्गाचा व भौतिक जगाचा प्रयोगसिद्ध अभ्यास",
    "pos": "नाम (Noun)"
  },
  {
    "id": 327,
    "part": 4,
    "word": "तंत्रज्ञाान",
    "english": "Technology",
    "meaning": "वैज्ञानिक ज्ञानाचा दैनंदिन जीवनातील व्यावहारिक वापर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 328,
    "part": 4,
    "word": "यंत्र",
    "english": "Machine / Device",
    "meaning": "श्रम कमी करून कार्य सुलभ करणारे उपकरण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 329,
    "part": 4,
    "word": "संगणक",
    "english": "Computer",
    "meaning": "माहिती प्रक्रिया व विश्लेेषण करणारे इलेक्ट्रॉॉनिक साधन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 330,
    "part": 4,
    "word": "भ्रमणध्वनी",
    "english": "Mobile phone",
    "meaning": "सहज सोबत नेता येणारे बिनतारी फोन उपकरण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 331,
    "part": 4,
    "word": "माहिती",
    "english": "Information / Data",
    "meaning": "विषयासंबंधी गोळा केलेली सत्य आकडेवारी व ज्ञान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 332,
    "part": 4,
    "word": "संदेश",
    "english": "Message / Dispatch",
    "meaning": "दुसऱ्या व्यक्तीस पोहोचवलेला निरोप वा सूचन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 333,
    "part": 4,
    "word": "वर्तमानपत्र",
    "english": "Newspaper",
    "meaning": "रोजच्या चालू घडामोडी प्रसिद्ध करणारा कागद",
    "pos": "नाम (Noun)"
  },
  {
    "id": 334,
    "part": 4,
    "word": "बातमी",
    "english": "News item / Report",
    "meaning": "नुकत्याच घडलेल्या महत्त्वाच्या घटनेचा वृत्तांांत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 335,
    "part": 4,
    "word": "दूरदशन",
    "english": "Television / TV",
    "meaning": "ध्वनी व दृश्य प्रसारित करणारे माध्यम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 336,
    "part": 4,
    "word": "वीज",
    "english": "Electricity / Lightning",
    "meaning": "विद्युुत प्रवाह किंवा आकाशात चमकणारी चपल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 337,
    "part": 4,
    "word": "प्रकाश",
    "english": "Light / Radiance",
    "meaning": "वस्तू स्पष्ट दिसायला मदत करणारी दृश्य ऊर्ज",
    "pos": "नाम (Noun)"
  },
  {
    "id": 338,
    "part": 4,
    "word": "अंधार",
    "english": "Darkness / Shadow",
    "meaning": "प्रकाशाचा पूर्ण अभाव असलेली काळोखाची स्थि त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 339,
    "part": 4,
    "word": "ध्वनी",
    "english": "Sound / Audio",
    "meaning": "कानाला ऐकू येणारा कंपनात्मक आवाज",
    "pos": "नाम (Noun)"
  },
  {
    "id": 340,
    "part": 4,
    "word": "वजन",
    "english": "Weight / Mass",
    "meaning": "वस्तूचे गुरुत्वाकर्षणाने मोजलेले परिमाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 341,
    "part": 4,
    "word": "अंतर",
    "english": "Distance / Interval",
    "meaning": "दोन वस्तू किंवा ठिकाणांमधील मोजलेली लांब",
    "pos": "नाम (Noun)"
  },
  {
    "id": 342,
    "part": 4,
    "word": "वेग",
    "english": "Speed / Velocity",
    "meaning": "हालचालीचा दर किंवा धावण्याची गत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 343,
    "part": 4,
    "word": "दिशा",
    "english": "Direction / Bearing",
    "meaning": "मार्ग दशवणारी बाजू (उदा. पूर्व, पश्चिम)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 344,
    "part": 4,
    "word": "धातू",
    "english": "Metal / Mineral",
    "meaning": "लोखंड, सोने, तांबे यांसारखे कठीण खनिज द्रव्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 345,
    "part": 4,
    "word": "लोखंड",
    "english": "Iron",
    "meaning": "अवजारे व बांधकामासाठी उपयुक्त असा मजबूत धात",
    "pos": "नाम (Noun)"
  },
  {
    "id": 346,
    "part": 4,
    "word": "सोने",
    "english": "Gold",
    "meaning": "दागिन्यांसाठी प्रसिद्ध असणारा पिवळा मौल्यवान धात",
    "pos": "नाम (Noun)"
  },
  {
    "id": 347,
    "part": 4,
    "word": "चांदी",
    "english": "Silver",
    "meaning": "नाणी व अलंकारांसाठी वापरला जाणारा पांढरा धात",
    "pos": "नाम (Noun)"
  },
  {
    "id": 348,
    "part": 4,
    "word": "लाकूड",
    "english": "Wood / Timber",
    "meaning": "झाडांच्या खोडापासून फर्निचरसाठी मिळणारे साहित्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 349,
    "part": 4,
    "word": "काच",
    "english": "Glass",
    "meaning": "पारदशक, गुळगुळीत पण लवकर फुटणारा पदार्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 350,
    "part": 4,
    "word": "प्लास्टिक",
    "english": "Plastic",
    "meaning": "सहज आकार देता येणारे कृत्रिम लवचिक द्रव्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 351,
    "part": 4,
    "word": "निसर्ग",
    "english": "Nature / Creation",
    "meaning": "सजीव-निर्जीव विश्वााची मूळ नैसर्गिक व्यवस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 352,
    "part": 4,
    "word": "पर्यावरण",
    "english": "Environment",
    "meaning": "आपल्या सभोवतालचे हवा, पाणी व जमिनीचे आवरण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 353,
    "part": 4,
    "word": "प्रदूषण",
    "english": "Pollution",
    "meaning": "वातावरणात घातक घटकांमुळे होणारी अशुद्धत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 354,
    "part": 4,
    "word": "ऋतू",
    "english": "Season",
    "meaning": "हवामानातील बदलांनुसार पडलेले वर्षाचे विभाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 355,
    "part": 4,
    "word": "उन्हाळा",
    "english": "Summer",
    "meaning": "कडक ऊन आणि तीव्र तापमानाचा ऋत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 356,
    "part": 4,
    "word": "हिवाळा",
    "english": "Winter",
    "meaning": "थंडी आणि गार वाऱ्यांचा ऋत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 357,
    "part": 4,
    "word": "पावसाळा",
    "english": "Monsoon / Rainy",
    "meaning": "मेघांतून मुसळधार पर्जन्यवृष्टी होणारा ऋत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 358,
    "part": 4,
    "word": "चक्रीवादळ",
    "english": "Cyclone / Storm",
    "meaning": "वेगाने फिरणाऱ्या विनाशकारी वाऱ्यांचे वादळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 359,
    "part": 4,
    "word": "पूर",
    "english": "Flood / Deluge",
    "meaning": "नदीच्या पात्राबाहेर येऊन पसरलेला पाण्याचा लोंढ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 360,
    "part": 4,
    "word": "दुष्काळ",
    "english": "Drought / Famine",
    "meaning": "पावसाअभावी पाणी व धान्याची होणारी तीव्र टंचाई",
    "pos": "नाम (Noun)"
  },
  {
    "id": 361,
    "part": 4,
    "word": "भूकंप",
    "english": "Earthquake",
    "meaning": "भूगर्भातील हालचालींमुळे जमीन हादरण्याची क्रिय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 362,
    "part": 4,
    "word": "नुकसान",
    "english": "Loss / Damage",
    "meaning": "मालमत्ताा, धन किंवा आरोग्याची झालेली हान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 363,
    "part": 4,
    "word": "फायदा",
    "english": "Profit / Benefit",
    "meaning": "कामातून किंवा व्यापारातून मिळालेला जादा लाभ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 364,
    "part": 4,
    "word": "कर्ज",
    "english": "Debt / Loan",
    "meaning": "व्याजासह परत करण्याच्या बोलीवर घेतलेली रक्कम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 365,
    "part": 4,
    "word": "बचत",
    "english": "Savings",
    "meaning": "भविष्यातील गरजेसाठी राखून ठेवलेले पैस",
    "pos": "नाम (Noun)"
  },
  {
    "id": 366,
    "part": 4,
    "word": "गुंतवणूक",
    "english": "Investment",
    "meaning": "नफा मिळवण्याच्या हेतूने व्यवसायात लावलेले भांडवल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 367,
    "part": 4,
    "word": "बँक",
    "english": "Bank",
    "meaning": "पैशांची देवाणघेवाण व सुरक्षित साठवणूक करणारी संस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 368,
    "part": 4,
    "word": "खाते",
    "english": "Account / Ledger",
    "meaning": "बँकेतील किंवा व्यवहारातील आर्थिक नोंदींचे स्थाान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 369,
    "part": 4,
    "word": "कर",
    "english": "Tax / Duty",
    "meaning": "नागरिकांनी शासनाला द्याावयाचा कायदेशीर हिस्स",
    "pos": "नाम (Noun)"
  },
  {
    "id": 370,
    "part": 4,
    "word": "खर्च",
    "english": "Expense / Spending",
    "meaning": "गरजा भागवण्यासाठी वापरलेली पैशांची रक्कम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 371,
    "part": 4,
    "word": "सल्ला",
    "english": "Advice / Counsel",
    "meaning": "चांगल्या निर्णयासाठी तज्ज्ञांनी केलेले मार्गदशन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 372,
    "part": 4,
    "word": "परवानगी",
    "english": "Permission / Leave",
    "meaning": "विशिष्ट कार्य करण्यासाठी मिळालेली अधिकृत मान्यत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 373,
    "part": 4,
    "word": "आज्ञाा",
    "english": "Command / Order",
    "meaning": "वरिष्ठांनी वा पालकांनी दिलेला पाळायचा हुकूम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 374,
    "part": 4,
    "word": "विनंती",
    "english": "Request / Plea",
    "meaning": "नम्रतापूर्वक व आदराने केलेली मागण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 375,
    "part": 4,
    "word": "आभार",
    "english": "Gratitude / Thanks",
    "meaning": "दुसऱ्याच्या मदतीबद्दल व्यक्त केलेली कृतज्ञत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 376,
    "part": 4,
    "word": "हुशार",
    "english": "Clever / Intelligent",
    "meaning": "चांगले आकलन व बुद्धिमत्ताा असलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 377,
    "part": 4,
    "word": "मूर्ख",
    "english": "Foolish / Silly",
    "meaning": "सारासार विचार न करणारा किंवा अडाण",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 378,
    "part": 4,
    "word": "प्रामाणिक",
    "english": "Honest / Sincere",
    "meaning": "सचोटीने वागणारा आणि कधीही विश्वाासघात न करणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 379,
    "part": 4,
    "word": "दयाळू",
    "english": "Kind / Compassionate",
    "meaning": "इतरांच्या दुःखावर हळहळणारा व मदत करणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 380,
    "part": 4,
    "word": "शांत",
    "english": "Calm / Composed",
    "meaning": "कोणताही गोंधळ, धांदल वा राग नसलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 381,
    "part": 4,
    "word": "रागीट",
    "english": "Short-tempered",
    "meaning": "लहान गोष्टींवरूनही लगेच संतापणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 382,
    "part": 4,
    "word": "आळशी",
    "english": "Lazy / Sluggish",
    "meaning": "काम करण्यास टाळाटाळ करून पडून राहणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 383,
    "part": 4,
    "word": "उद्योोगी",
    "english": "Hardworking",
    "meaning": "नेहमी कष्टाळूपणे नवनवीन कामे करणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 384,
    "part": 4,
    "word": "धाडसी",
    "english": "Brave / Courageous",
    "meaning": "संकटांना न घाबरता धैर्याने सामोरे जाणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 385,
    "part": 4,
    "word": "गंभीर",
    "english": "Serious / Grave",
    "meaning": "परिस्थि तीची जाणीव ठेवणारा वा महत्त्वाचा विषय",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 386,
    "part": 4,
    "word": "सावध",
    "english": "Alert / Cautious",
    "meaning": "संभाव्य धोके ओळखून आधीच दक्ष राहणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 387,
    "part": 4,
    "word": "थकलेला",
    "english": "Tired / Exhausted",
    "meaning": "शारीरिक किंवा मानसिक कष्टाने शक्ती संपलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 388,
    "part": 4,
    "word": "उत्साही",
    "english": "Enthusiastic",
    "meaning": "मनात काम करण्याची नवी उमेद व हुरूप असलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 389,
    "part": 4,
    "word": "सुरुवात",
    "english": "Beginning / Start",
    "meaning": "कामाचा किंवा प्रवासाचा पहिला टप्पा (प्रारंभ)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 390,
    "part": 4,
    "word": "शेवट",
    "english": "End / Conclusion",
    "meaning": "प्रक्रियेची सांगता किंवा अंतिम सीमा (अंत)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 391,
    "part": 4,
    "word": "कारण सांगणे",
    "english": "To explain reason",
    "meaning": "घडलेल्या प्रसंगाची कारणमीमांसा स्पष्ट करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 392,
    "part": 4,
    "word": "स्वीकारणे",
    "english": "To accept / Agree",
    "meaning": "गोष्ट मनापासून मान्य करणे किंवा ताब्यात घेण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 393,
    "part": 4,
    "word": "नाकारणे",
    "english": "To reject / Refuse",
    "meaning": "अमान्य करणे किंवा विनंती धुडकावून लावण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 394,
    "part": 4,
    "word": "बदलणे",
    "english": "To change / Alter",
    "meaning": "मूळ स्वरूपात किंवा निर्णयात फेरफार करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 395,
    "part": 4,
    "word": "सांभाळणे",
    "english": "To care for / Protect",
    "meaning": "जपणूक करणे, सुरक्षित ठेवणे किंवा पालनपोषण करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 396,
    "part": 4,
    "word": "तपासणे",
    "english": "To inspect / Verify",
    "meaning": "चूक की बरोबर याची खात्री करणे किंवा पडताळण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 397,
    "part": 4,
    "word": "सुधारणे",
    "english": "To improve / Rectify",
    "meaning": "चूक दुरुस्त करून अधिक चांगल्या स्थि तीत आणण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 398,
    "part": 4,
    "word": "वाढवणे",
    "english": "To increase / Expand",
    "meaning": "संख्या, आकार वा प्रमाणात वृद्धी करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 399,
    "part": 4,
    "word": "कमी करणे",
    "english": "To reduce / Diminish",
    "meaning": "प्रमाण, खर्च वा तीव्रता खाली आणण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 400,
    "part": 4,
    "word": "साध्य करणे",
    "english": "To achieve / Attain",
    "meaning": "कष्ट आणि प्रयत्नांच्या जोरावर ध्येय गाठण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 401,
    "part": 5,
    "word": "उद्योग",
    "english": "Industry / Enterprise",
    "meaning": "उत्पादनासाठी किंवा सेवेसाठी चालवला जाणारा मोठा व्यवसाय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 402,
    "part": 5,
    "word": "कारखाना",
    "english": "Factory / Plant / Mill",
    "meaning": "यंत्रांच्या साहाय्याने मोठ्याा प्रमाणावर माल तयार करण्याची जाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 403,
    "part": 5,
    "word": "कामगार",
    "english": "Worker / Laborer / Employee",
    "meaning": "कारखान्यात किंवा कार्यालयात शारीरिक/मानसिक श्रम करणार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 404,
    "part": 5,
    "word": "मालक",
    "english": "Owner / Master / Employer",
    "meaning": "उद्योग, मालमत्ता किंवा व्यवसायाचे कायदेशीर हक्क असलेली व्यक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 405,
    "part": 5,
    "word": "भांडवल",
    "english": "Capital / Principal fund",
    "meaning": "व्यवसाय सुरू करण्यासाठी किंवा चालवण्यासाठी गुंतवलेला पैस",
    "pos": "नाम (Noun)"
  },
  {
    "id": 406,
    "part": 5,
    "word": "करार",
    "english": "Agreement / Contract",
    "meaning": "दोन किंवा अधिक पक्षांमध्ये कायदेशीर अटींवर झालेली सहमत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 407,
    "part": 5,
    "word": "उत्पादन",
    "english": "Production / Output",
    "meaning": "कच्च्या मालापासून तयार करण्यात आलेला पक्का माल वा उत्पन्न",
    "pos": "नाम (Noun)"
  },
  {
    "id": 408,
    "part": 5,
    "word": "पुरवठा",
    "english": "Supply / Provision",
    "meaning": "बाजारपेठेत किंवा ग्राहकांपर्यंत माल वेळेवर पोहोचवण्याची व्यवस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 409,
    "part": 5,
    "word": "मागणी",
    "english": "Demand / Requirement",
    "meaning": "ग्राहकांकडून विशिष्ट वस्तू किंवा सेवेसाठी होणारी गरज",
    "pos": "नाम (Noun)"
  },
  {
    "id": 410,
    "part": 5,
    "word": "देवाणघेवाण",
    "english": "Transaction / Exchange",
    "meaning": "वस्तू, सेवा किंवा पैशांची परस्पर केली जाणारी देवाणघेवाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 411,
    "part": 5,
    "word": "नफा",
    "english": "Profit / Financial gain",
    "meaning": "खर्चापेक्षा विक्रीतून मिळालेली अधिक शिल्लक रक्कम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 412,
    "part": 5,
    "word": "तोटा",
    "english": "Loss / Deficit",
    "meaning": "खर्चाच्या तुलनेत उत्पादनात किंवा व्यापारात आलेली वित्तीय घट",
    "pos": "नाम (Noun)"
  },
  {
    "id": 413,
    "part": 5,
    "word": "पावती",
    "english": "Receipt / Voucher",
    "meaning": "पैसे भरल्याचा किंवा वस्तू मिळाल्याचा अधिकृत छापील पुराव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 414,
    "part": 5,
    "word": "देयक",
    "english": "Bill / Invoice",
    "meaning": "वापरलेल्या वस्तू किंवा सेवेचे मूल्य दशवणारे अधिकृत बिल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 415,
    "part": 5,
    "word": "भागीदारी",
    "english": "Partnership / Alliance",
    "meaning": "दोन वा अधिक व्यक्तींनी एकत्र येऊन चालवलेला सामायिक उद्योग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 416,
    "part": 5,
    "word": "वाहतूक",
    "english": "Transport / Transit",
    "meaning": "माणसांची वा मालाची एका ठिकाणाहून दुसऱ्या ठिकाणी ने- आण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 417,
    "part": 5,
    "word": "गोदाम",
    "english": "Warehouse / Godown",
    "meaning": "मोठ्याा प्रमाणावर तयार माल सुरक्षित साठवून ठेवण्याची इमारत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 418,
    "part": 5,
    "word": "दर्जा",
    "english": "Quality / Standard / Grade",
    "meaning": "वस्तूची उपयुक्तता व टिकाऊपणा ठरवणारे विशिष्ट प्रमाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 419,
    "part": 5,
    "word": "नमुना",
    "english": "Sample / Specimen / Model",
    "meaning": "वस्तूचा दर्जा तपासण्यासाठी दिलेला छोटा प्रातिनिधिक भाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 420,
    "part": 5,
    "word": "सवलत",
    "english": "Discount / Concession",
    "meaning": "मूळ किमतीतून ग्राहकाला दिलेली विशेष सूट वा कपात",
    "pos": "नाम (Noun)"
  },
  {
    "id": 421,
    "part": 5,
    "word": "दलाली",
    "english": "Commission / Brokerage",
    "meaning": "व्यवहार घडवून आणल्याबद्दल मध्यस्थास मिळणारा मोबदल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 422,
    "part": 5,
    "word": "दिवाळखोरी",
    "english": "Bankruptcy / Insolvency",
    "meaning": "देणी फेडण्यास असमर्थ ठरल्याने झालेली आर्थिक नादार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 423,
    "part": 5,
    "word": "विमा",
    "english": "Insurance / Assurance",
    "meaning": "संभाव्य नुकसानीची भरपाई देणारा वित्तीय संरक्षण करार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 424,
    "part": 5,
    "word": "धोरण",
    "english": "Policy / Strategy",
    "meaning": "ध्येय साध्य करण्यासाठी आखून घेतलेली मार्गदशक नियमावल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 425,
    "part": 5,
    "word": "व्यवस्थाापन",
    "english": "Management / Direction",
    "meaning": "संस्थेची कामे, लोक आणि संसाधने यांचे नियोजनबद्ध नियंत्रण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 426,
    "part": 5,
    "word": "साहित्य",
    "english": "Literature / Material",
    "meaning": "भाषेद्वाारे निर्माण केलेले लेखी वाङ्मय किंवा वस्तूंचे साहित्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 427,
    "part": 5,
    "word": "कविता",
    "english": "Poem / Poetry / Verse",
    "meaning": "तालासुरात, छंदात रचलेली भावस्पर्शी काव्यात्मक रचन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 428,
    "part": 5,
    "word": "नाटक",
    "english": "Play / Drama / Theatrical",
    "meaning": "संवादातून व अभिनयातून मंचावर सादर केली जाणारी कथ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 429,
    "part": 5,
    "word": "कादंबरी",
    "english": "Novel / Prose epic",
    "meaning": "पात्रांच्या जीवनावर आधारित विस्तीर्ण काल्पनिक गद्यकथ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 430,
    "part": 5,
    "word": "कथा",
    "english": "Story / Short tale / Fable",
    "meaning": "विशिष्ट प्रसंग वा व्यक्तीभोवती गुंफलेली संक्षिप्त गोष्ट",
    "pos": "नाम (Noun)"
  },
  {
    "id": 431,
    "part": 5,
    "word": "लेखक",
    "english": "Author / Writer",
    "meaning": "पुस्तके, निबंध किंवा ग्रंथ लिहिणारा साहित्यिक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 432,
    "part": 5,
    "word": "कवी",
    "english": "Poet / Rhymester",
    "meaning": "मनातील उत्कट भावनांना पद्यात शब्दबद्ध करणारा रचनाकार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 433,
    "part": 5,
    "word": "कलाकार",
    "english": "Artist / Actor / Performer",
    "meaning": "चित्रकला, अभिनय, संगीत आदी कलांमध्ये निपुण व्यक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 434,
    "part": 5,
    "word": "रंगमंच",
    "english": "Stage / Theater platform",
    "meaning": "नाट्य वा नृत्य सादरीकरणासाठी उभारलेला प्रेक्षागृह मंच",
    "pos": "नाम (Noun)"
  },
  {
    "id": 435,
    "part": 5,
    "word": "अभिनय",
    "english": "Acting / Theatrics",
    "meaning": "नाटकातील पात्राच्या भावना चेहऱ्यावरून व कृतीतून मांडण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 436,
    "part": 5,
    "word": "नृत्य",
    "english": "Dance / Choreography",
    "meaning": "संगीताच्या तालावर शरीराच्या लयबद्ध हालचाली करणे (नाच)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 437,
    "part": 5,
    "word": "शिल्प",
    "english": "Sculpture / Carving",
    "meaning": "दगडावर, धातूवर किंवा लाकडावर कोरलेली सुंदर मूर्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 438,
    "part": 5,
    "word": "वाद्य",
    "english": "Musical instrument",
    "meaning": "सुरेल नाद किंवा ताल निर्माण करणारे संगीताचे साधन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 439,
    "part": 5,
    "word": "सूर",
    "english": "Musical note / Tone",
    "meaning": "गायन किंवा वादनातून निघणारा कर्णमधुर ध्वनी (स्वर)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 440,
    "part": 5,
    "word": "ताल",
    "english": "Rhythm / Beat / Cadence",
    "meaning": "संगीतात ठराविक वेळेच्या अंतराने पडणारी आवर्तन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 441,
    "part": 5,
    "word": "वाचन",
    "english": "Reading / Perusal",
    "meaning": "पुस्तकातील मजकूर डोळ्यांनी पाहून अर्थ ग्रहण करण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 442,
    "part": 5,
    "word": "समीक्षाा",
    "english": "Review / Critique",
    "meaning": "पुस्तकातील, चित्रपटातील गुणदोषांचे तटस्थ विश्लेेषण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 443,
    "part": 5,
    "word": "छंद",
    "english": "Hobby / Metre",
    "meaning": "विरंगुळ्यासाठी आवडीने जोपासलेली कला किंवा पद्यरचन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 444,
    "part": 5,
    "word": "सौंदर्य",
    "english": "Beauty / Grace / Elegance",
    "meaning": "डोळ्यांना व मनाला आल्हाद देणारा आकर्षक मोहकपण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 445,
    "part": 5,
    "word": "प्रेरणा",
    "english": "Inspiration / Stimulus",
    "meaning": "उत्तम काम करण्यासाठी मनात उत्साह निर्माण करणारी शक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 446,
    "part": 5,
    "word": "कल्पना",
    "english": "Imagination / Concept",
    "meaning": "मेंदूमध्ये साकारलेले नवे अमूर्त चित्र किंवा नवनिर्मित",
    "pos": "नाम (Noun)"
  },
  {
    "id": 447,
    "part": 5,
    "word": "प्रतिभा",
    "english": "Genius / Creative intellect",
    "meaning": "कलावंतामध्ये उपजत असणारी नवनिर्मितीची अलौकिक बुद्ध",
    "pos": "नाम (Noun)"
  },
  {
    "id": 448,
    "part": 5,
    "word": "प्रदशन",
    "english": "Exhibition / Exposition",
    "meaning": "चित्रे, उत्पादने वा कलाकृती जनतेस पाहण्यासाठी मांडण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 449,
    "part": 5,
    "word": "गौरव",
    "english": "Honor / Glory / Pride",
    "meaning": "चांगल्या कार्याबद्दल समाजाने केलेले कौतुक व सन्मान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 450,
    "part": 5,
    "word": "पुरस्कार",
    "english": "Award / Prize / Trophy",
    "meaning": "विशिष्ट कामगिरीबद्दल सन्मानपूर्वक दिलेले पारितोषिक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 451,
    "part": 5,
    "word": "नातेवाईक",
    "english": "Relative / Kin / Relation",
    "meaning": "रक्ताच्या किंवा विवाहाच्या बंधनाने जोडलेले आप्तेष्ट",
    "pos": "नाम (Noun)"
  },
  {
    "id": 452,
    "part": 5,
    "word": "आजी",
    "english": "Grandmother",
    "meaning": "आईची किंवा वडिलांची जन्मदाती आई (मातृश्री)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 453,
    "part": 5,
    "word": "आजोबा",
    "english": "Grandfather",
    "meaning": "आईचे किंवा वडिलांचे जन्मदाते वडील",
    "pos": "नाम (Noun)"
  },
  {
    "id": 454,
    "part": 5,
    "word": "भाऊ",
    "english": "Brother / Sibling",
    "meaning": "एकाच आईवडिलांच्या पोटी जन्मलेला पुरुष सहोदर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 455,
    "part": 5,
    "word": "बहीण",
    "english": "Sister / Female sibling",
    "meaning": "एकाच आईवडिलांच्या पोटी जन्मलेली स्त्री सहोदर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 456,
    "part": 5,
    "word": "काका",
    "english": "Paternal uncle",
    "meaning": "वडिलांचे सख्खे मोठे वा लहान बंधू (चुलते)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 457,
    "part": 5,
    "word": "मामा",
    "english": "Maternal uncle",
    "meaning": "आईचे सख्खे भाऊ (मातुल)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 458,
    "part": 5,
    "word": "मावशी",
    "english": "Maternal aunt",
    "meaning": "आईची सख्खी मोठी वा लहान बहीण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 459,
    "part": 5,
    "word": "आत्या",
    "english": "Paternal aunt",
    "meaning": "वडिलांची सख्खी मोठी वा लहान बहीण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 460,
    "part": 5,
    "word": "पती",
    "english": "Husband / Spouse",
    "meaning": "विवाहाने जोडला गेलेला कायदेशीर पुरुष जोडीदार (नवरा)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 461,
    "part": 5,
    "word": "पत्नी",
    "english": "Wife / Spouse / Consort",
    "meaning": "विवाहाने जोडली गेलेली कायदेशीर स्त्री जोडीदार (बायको)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 462,
    "part": 5,
    "word": "लग्न",
    "english": "Marriage / Wedding",
    "meaning": "दोन जीवांना व कुटुंबांना जोडणारा कायदेशीर धार्मिक संस्कार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 463,
    "part": 5,
    "word": "नाते",
    "english": "Relationship / Bond",
    "meaning": "दोन व्यक्तींमधील आपुलकीचा, प्रेमाचा किंवा रक्ताचा संबंध",
    "pos": "नाम (Noun)"
  },
  {
    "id": 464,
    "part": 5,
    "word": "पाहुणचार",
    "english": "Hospitality / Welcome",
    "meaning": "घरी आलेल्या पाहुण्यांचे केलेले आदरातिथ्य व भोजन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 465,
    "part": 5,
    "word": "आदर",
    "english": "Respect / Reverence",
    "meaning": "मोठ्याा व्यक्तींबद्दल मनात वाटणारी पूज्य भावन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 466,
    "part": 5,
    "word": "अपमान",
    "english": "Insult / Disgrace / Slight",
    "meaning": "दुसऱ्याचा केलेला अनादर, मानभंग किंवा तुच्छत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 467,
    "part": 5,
    "word": "सन्मान",
    "english": "Dignity / Felicitation",
    "meaning": "चांगल्या वागणुकीबद्दल जाहीरपणे केलेला आदर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 468,
    "part": 5,
    "word": "मैत्री",
    "english": "Friendship / Fellowship",
    "meaning": "दोन जिवाभावाच्या मित्रांमधील अतूट निस्वार्थ स्नेह",
    "pos": "नाम (Noun)"
  },
  {
    "id": 469,
    "part": 5,
    "word": "वैर",
    "english": "Enmity / Hostility / Feud",
    "meaning": "मनातील जुने वैरभाव, शत्रुत्व किंवा दुराव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 470,
    "part": 5,
    "word": "मदतनीस",
    "english": "Helper / Assistant / Aide",
    "meaning": "दैनंदिन किंवा व्यावसायिक कामात हातभार लावणारा साहाय्यक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 471,
    "part": 5,
    "word": "शेतकामगार",
    "english": "Farm laborer / Farmhand",
    "meaning": "दुसऱ्याच्या शेतात मजुरीवर काम करणारा मजूर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 472,
    "part": 5,
    "word": "सेवक",
    "english": "Servant / Attendant",
    "meaning": "मालकाची सेवा करणारा किंवा निष्ठेने काम करणारा कर्मचार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 473,
    "part": 5,
    "word": "संमती",
    "english": "Consent / Assent / Approval",
    "meaning": "दुसऱ्याच्या प्रस्तावास किंवा कृतीस दिलेली मनापासून मान्यत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 474,
    "part": 5,
    "word": "विरोध",
    "english": "Opposition / Resistance",
    "meaning": "एखाद्या गोष्टीस न मानणे किंवा तिच्या आड उभे राहण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 475,
    "part": 5,
    "word": "सहकार्य",
    "english": "Cooperation / Teamwork",
    "meaning": "मोठे कार्य सिद्धीस नेण्यासाठी सर्वांनी मिळून केलेले काम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 476,
    "part": 5,
    "word": "चर्चा",
    "english": "Discussion / Debate",
    "meaning": "एका विषयावर अनेक लोकांनी एकत्र केलेले विचारविनिमय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 477,
    "part": 5,
    "word": "वाद",
    "english": "Dispute / Argument",
    "meaning": "भिन्न मतांमुळे होणारा तीव्र वादविवाद किंवा खटक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 478,
    "part": 5,
    "word": "संवाद",
    "english": "Dialogue / Communication",
    "meaning": "दोन व्यक्तींमध्ये शांततेने व समजुतीने घडलेले संभाषण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 479,
    "part": 5,
    "word": "संभाषण",
    "english": "Conversation / Discourse",
    "meaning": "दैनंदिन घडणारा प्रत्यक्ष तोंडी संवाद",
    "pos": "नाम (Noun)"
  },
  {
    "id": 480,
    "part": 5,
    "word": "निष्कर्ष",
    "english": "Conclusion / Inference",
    "meaning": "सर्व बाजूंचा सखोल विचार करून काढलेले अंतिम सार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 481,
    "part": 5,
    "word": "पुरावा",
    "english": "Evidence / Proof",
    "meaning": "एखादी घटना सत्य असल्याचे सिद्ध करणारे कागदपत्र वा साक्ष",
    "pos": "नाम (Noun)"
  },
  {
    "id": 482,
    "part": 5,
    "word": "साक्षीीदार",
    "english": "Witness / Deponent",
    "meaning": "घटना स्वतः डोळ्यांनी पाहणारी व न्यायालयात सांगणारी व्यक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 483,
    "part": 5,
    "word": "निर्णय",
    "english": "Decision / Verdict / Ruling",
    "meaning": "तपासाअंती किंवा विचार करून घेतलेला अंतिम पक्का निश्चय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 484,
    "part": 5,
    "word": "उद्दिष्ट",
    "english": "Objective / Target",
    "meaning": "कामाच्या सुरुवातीला ठरवलेले नेमके साध्य किंवा टप्प",
    "pos": "नाम (Noun)"
  },
  {
    "id": 485,
    "part": 5,
    "word": "ध्येय",
    "english": "Aim / Goal / Ambition",
    "meaning": "आयुष्यात किंवा संस्थेत गाठायचे सर्वोच्च अंतिम ध्येय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 486,
    "part": 5,
    "word": "योजना",
    "english": "Plan / Scheme / Project",
    "meaning": "ध्येय साध्य करण्यासाठी तयार केलेली क्रमवार रूपरेष",
    "pos": "नाम (Noun)"
  },
  {
    "id": 487,
    "part": 5,
    "word": "अंमलबजावणी",
    "english": "Implementation / Execution",
    "meaning": "कागदावर आखलेल्या योजनेची प्रत्यक्ष कृतीत केलेली पूर्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 488,
    "part": 5,
    "word": "व्यवस्थाा",
    "english": "System / Order / Provision",
    "meaning": "सुरळीत कामकाजासाठी लावलेली शिस्तबद्ध रचन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 489,
    "part": 5,
    "word": "अनुभव",
    "english": "Experience / Practical insight",
    "meaning": "प्रत्यक्ष काम करून किंवा जीवनातून मिळालेले व्यावहारिक भान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 490,
    "part": 5,
    "word": "ज्ञाान",
    "english": "Knowledge / Wisdom",
    "meaning": "अभ्यासातून व चिंतनातून मिळालेली बुद्धिमत्ता व माहित",
    "pos": "नाम (Noun)"
  },
  {
    "id": 491,
    "part": 5,
    "word": "विचारमंथन",
    "english": "Brainstorming / Deliberation",
    "meaning": "नवे तोडगे शोधण्यासाठी डोक्याला ताण देऊन केलेले चिंतन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 492,
    "part": 5,
    "word": "मार्गदशन करणे",
    "english": "To guide / To mentor",
    "meaning": "दुसऱ्या व्यक्तीला योग्य वाट दाखवून साहाय्य करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 493,
    "part": 5,
    "word": "पाठिंबा देणे",
    "english": "To support / Back up",
    "meaning": "दुसऱ्याच्या मताला, निर्णयाला किंवा कार्याला अनुकूल बळ देण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 494,
    "part": 5,
    "word": "पाळणे",
    "english": "To observe / Rear / Obey",
    "meaning": "नियम निष्ठेने सांभाळणे किंवा प्राण्यांची देखभाल करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 495,
    "part": 5,
    "word": "सोडवणे",
    "english": "To solve / Resolve / Untie",
    "meaning": "समस्येचा पेच मिटवणे किंवा गाठ मोकळी करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 496,
    "part": 5,
    "word": "निवडणे",
    "english": "To choose / Select / Elect",
    "meaning": "अनेक पर्यायांतून योग्य पर्यायाची किंवा प्रतिनिधीची निवड करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 497,
    "part": 5,
    "word": "राखणे",
    "english": "To preserve / Maintain / Keep",
    "meaning": "जपून ठेवणे, मान राखणे किंवा जागेचे रक्षण करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 498,
    "part": 5,
    "word": "गाठणे",
    "english": "To reach / Attain / Overtake",
    "meaning": "ठरलेल्या मुक्कामी किंवा ध्येयाच्या लक्ष्यापर्यंत पोहोचण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 499,
    "part": 5,
    "word": "नोंदवणे",
    "english": "To record / Register / Note",
    "meaning": "पुस्तकात, संगणकात किंवा दफ्तरी अधिकृत नोंद करण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 500,
    "part": 5,
    "word": "साजरी करणे",
    "english": "To celebrate / Commemorate",
    "meaning": "सण, उत्सव किंवा आनंदाचा प्रसंग उल्हासाने पूर्ण करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 501,
    "part": 6,
    "word": "राजधानी",
    "english": "Capital city / Seat of power",
    "meaning": "देशाचे वा राज्याचे मुख्य प्रशासकीय व राजकीय शहर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 502,
    "part": 6,
    "word": "उपनगर",
    "english": "Suburb / Outskirt",
    "meaning": "मुख्य शहराच्या लगतचा निवासी व विस्तारित भाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 503,
    "part": 6,
    "word": "इमारत",
    "english": "Building / Edifice",
    "meaning": "सिमेंट, विटा आणि दगडांनी बांधलेली बहुमजली वास्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 504,
    "part": 6,
    "word": "महामार्ग",
    "english": "Highway / Expressway",
    "meaning": "शहरांना जोडणारा विस्तीर्ण व वेगवान वाहतुकीचा प्रमुख रस्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 505,
    "part": 6,
    "word": "गल्ली",
    "english": "Lane / Alley / Byway",
    "meaning": "दोन रांगांमधील अरुंद अंतर्गत रस्ता वा बोळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 506,
    "part": 6,
    "word": "पादचारी",
    "english": "Pedestrian / Walker",
    "meaning": "वाहनांऐवजी रस्त्यावरून पायी चालत जाणारी व्यक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 507,
    "part": 6,
    "word": "स्थाानक",
    "english": "Station / Terminal",
    "meaning": "बस वा रेल्वे थांबण्याचे आणि प्रवासी चढण्या-उतरण्याचे ठिकाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 508,
    "part": 6,
    "word": "विमानतळ",
    "english": "Airport / Aerodrome",
    "meaning": "विमानांच्या उड्डााणासाठी व उतरण्यासाठी धावपट्टी असलेले ठिकाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 509,
    "part": 6,
    "word": "बंदर",
    "english": "Port / Harbor",
    "meaning": "समुद्रकिनाऱ्यावरील व्यापारी जहाजे नांगरण्याचे ठिकाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 510,
    "part": 6,
    "word": "विमान",
    "english": "Aeroplane / Aircraft",
    "meaning": "आकाशातून प्रवासी व माल वाहून नेणारे इंजिनचे वाहन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 511,
    "part": 6,
    "word": "जहाज",
    "english": "Ship / Sea vessel",
    "meaning": "सागरावरून प्रवास करणारे मोठे व अवजड जलवाहन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 512,
    "part": 6,
    "word": "बोगदा",
    "english": "Tunnel",
    "meaning": "डोंगर किंवा जमिनीखालून खोदलेला वाहतुकीचा भूयारी मार्ग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 513,
    "part": 6,
    "word": "उड्डााणपूल",
    "english": "Flyover / Overpass",
    "meaning": "रस्त्यावरील गर्दी टाळण्यासाठी खांबांवर वरून बांधलेला पूल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 514,
    "part": 6,
    "word": "रहदारी",
    "english": "Traffic / Vehicular flow",
    "meaning": "रस्त्यावरील वाहनांची आणि प्रवाशांची होणारी सततची वर्दळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 515,
    "part": 6,
    "word": "अपघात",
    "english": "Accident / Mishap / Crash",
    "meaning": "अचानक अनपेक्षितपणे घडलेली अनर्थकारी टक्कर वा दुर्घटन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 516,
    "part": 6,
    "word": "इंधन",
    "english": "Fuel / Propellant",
    "meaning": "यंत्रे व वाहने चालवण्यासाठी लागणारे पेट्रोोल, डिझेल वा ऊर्ज",
    "pos": "नाम (Noun)"
  },
  {
    "id": 517,
    "part": 6,
    "word": "भाडे",
    "english": "Rent / Fare",
    "meaning": "घर वा वाहन वापरल्याबद्दल मालकाला दिला जाणारा मोबदल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 518,
    "part": 6,
    "word": "चालक",
    "english": "Driver / Chauffeur",
    "meaning": "गाडी, बस वा वाहन सुरक्षितपणे चालवणारी व्यक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 519,
    "part": 6,
    "word": "वाहक",
    "english": "Conductor / Carrier",
    "meaning": "प्रवाशांना तिकीट देणारा बसमधील अधिकृत कर्मचार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 520,
    "part": 6,
    "word": "पादचारी मार्ग",
    "english": "Footpath / Sidewalk",
    "meaning": "रस्त्याच्या कडेला केवळ पायी चालण्यासाठी ठेवलेली जाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 521,
    "part": 6,
    "word": "नकाशा",
    "english": "Map / Blueprint / Chart",
    "meaning": "भौगोलिक प्रदेश किंवा इमारतीचे कागदावरील रेखाटन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 522,
    "part": 6,
    "word": "दिशादशक",
    "english": "Signpost / Indicator",
    "meaning": "रस्त्यावर मार्ग व अंतर दाखवणारा माहिती फलक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 523,
    "part": 6,
    "word": "अंतरंग",
    "english": "Interior / Internal aspect",
    "meaning": "इमारतीचा वा मनाचा आतला भाग व आंतरिक रचन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 524,
    "part": 6,
    "word": "बाह्यरूप",
    "english": "Exterior / Outer look",
    "meaning": "वस्तूचा किंवा वास्तूचा बाहेरून दिसणारा देखाव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 525,
    "part": 6,
    "word": "परिसर",
    "english": "Surroundings / Vicinity",
    "meaning": "घराच्या किंवा कार्यालयाच्या आजूबाजूचा मोकळा भूप्रदेश",
    "pos": "नाम (Noun)"
  },
  {
    "id": 526,
    "part": 6,
    "word": "कार्यालय",
    "english": "Office / Workplace",
    "meaning": "सरकारी किंवा खाजगी कामांचे दैनंदिन प्रशासकीय केंद्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 527,
    "part": 6,
    "word": "अधिकारी",
    "english": "Officer / Executive / Official",
    "meaning": "विशिष्ट अधिकार व जबाबदाऱ्या सोपवलेला उच्च पदस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 528,
    "part": 6,
    "word": "कर्मचारी",
    "english": "Employee / Staff member",
    "meaning": "कार्यालयात नियमित वेतनावर काम करणारा सेवक वर्ग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 529,
    "part": 6,
    "word": "अर्ज",
    "english": "Application / Petition",
    "meaning": "काम किंवा लाभासाठी प्रशासनाला दिलेली लेखी विनंत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 530,
    "part": 6,
    "word": "स्वाक्षरी",
    "english": "Signature / Autograph / Endorsement",
    "meaning": "संमती दशवण्यासाठी हाताने केलेले स्वतःचे नाव (सही)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 531,
    "part": 6,
    "word": "शिक्का",
    "english": "Stamp / Official seal",
    "meaning": "कागदपत्रांची अधिकृतता सिद्ध करणारी शाईची मुद्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 532,
    "part": 6,
    "word": "प्रमाणपत्र",
    "english": "Certificate / Testimonial",
    "meaning": "पात्रता वा यश अधिकृतपणे सिद्ध करणारा शासकीय दाखल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 533,
    "part": 6,
    "word": "ओळखपत्र",
    "english": "Identity card / ID badge",
    "meaning": "व्यक्तीचे नाव, छायाचित्र व पत्ताा सिद्ध करणारे कार्ड",
    "pos": "नाम (Noun)"
  },
  {
    "id": 534,
    "part": 6,
    "word": "दस्तऐवज",
    "english": "Document / Official record",
    "meaning": "कायदेशीर पुरावा म्हणून जतन केलेला लेखी दस्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 535,
    "part": 6,
    "word": "नस्ती",
    "english": "File / Dossier",
    "meaning": "एका विषयासंबंधी कागदपत्रे एकत्र बांधून ठेवलेली फाईल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 536,
    "part": 6,
    "word": "परिपत्रक",
    "english": "Circular / Office bulletin",
    "meaning": "सर्व शाखांना व कर्मचाऱ्यांना पाठवलेली शासकीय सूचन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 537,
    "part": 6,
    "word": "सूचना",
    "english": "Notice / Directive / Intimation",
    "meaning": "सर्वसामान्यांना किंवा कर्मचाऱ्यांना दिलेला माहितीपर संदेश",
    "pos": "नाम (Noun)"
  },
  {
    "id": 538,
    "part": 6,
    "word": "तक्राार",
    "english": "Complaint / Grievance",
    "meaning": "अन्यायाविरुद्ध किंवा असमाधानाबद्दल नोंदवलेला आक्षेप",
    "pos": "नाम (Noun)"
  },
  {
    "id": 539,
    "part": 6,
    "word": "चौकशी",
    "english": "Inquiry / Investigation",
    "meaning": "घटनेची सत्यता शोधण्यासाठी केलेली सखोल तपासण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 540,
    "part": 6,
    "word": "अहवाल",
    "english": "Report / Account / Statement",
    "meaning": "तपासणीनंतर सादर केलेला सविस्तर माहितीपट",
    "pos": "नाम (Noun)"
  },
  {
    "id": 541,
    "part": 6,
    "word": "बैठक",
    "english": "Meeting / Session / Conference",
    "meaning": "चर्चेसाठी आणि निर्णय घेण्यासाठी बोलावलेली सभ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 542,
    "part": 6,
    "word": "अध्यक्ष",
    "english": "President / Chairperson",
    "meaning": "सभेचे, संस्थेचे किंवा समितीचे नेतृत्व करणारा प्रमुख",
    "pos": "नाम (Noun)"
  },
  {
    "id": 543,
    "part": 6,
    "word": "सचिव",
    "english": "Secretary",
    "meaning": "कार्यालयाचे दप्तर व पत्रव्यवहार सांभाळणारा मुख्य अधिकार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 544,
    "part": 6,
    "word": "सदस्य",
    "english": "Member / Associate",
    "meaning": "संस्थेचा, मंडळाचा वा समितीचा अधिकृत घटक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 545,
    "part": 6,
    "word": "मुदत",
    "english": "Deadline / Term / Validity",
    "meaning": "काम पूर्ण करण्यासाठी किंवा कागदपत्रासाठी दिलेली अंतिम वेळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 546,
    "part": 6,
    "word": "नूतनीकरण",
    "english": "Renewal / Extension",
    "meaning": "कालावधी संपलेल्या परवान्याची किंवा कराराची मुदत वाढवण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 547,
    "part": 6,
    "word": "नोंदणी",
    "english": "Registration / Enrollment",
    "meaning": "शासकीय पुस्तकात अधिकृतपणे नाव समाविष्ट करण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 548,
    "part": 6,
    "word": "मान्यता",
    "english": "Recognition / Accreditation",
    "meaning": "संस्थेला किंवा अभ्यासक्रमाला दिलेली कायदेशीर मंजुर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 549,
    "part": 6,
    "word": "रद्द करणे",
    "english": "To cancel / Revoke / Annul",
    "meaning": "दिलेली परवानगी, परीक्षा किंवा आदेश कायदेशीरपणे संपवण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 550,
    "part": 6,
    "word": "मंजुरी",
    "english": "Sanction / Clearance / Assent",
    "meaning": "प्रस्तावाला मिळालेली अंतिम वरिष्ठ शासकीय संमत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 551,
    "part": 6,
    "word": "आकार",
    "english": "Shape / Form / Size",
    "meaning": "वस्तूची बाह्य रेषा, ठेवण किंवा व्यापलेली जाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 552,
    "part": 6,
    "word": "लांबी",
    "english": "Length / Extent",
    "meaning": "एका टोकापासून दुसऱ्या टोकापर्यंतचे क्षितिजसमांतर माप",
    "pos": "नाम (Noun)"
  },
  {
    "id": 553,
    "part": 6,
    "word": "रुंंदी",
    "english": "Breadth / Width",
    "meaning": "वस्तूच्या दोन बाजूंच्या मधील आडवे अंतर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 554,
    "part": 6,
    "word": "खोली",
    "english": "Depth / Profundity",
    "meaning": "पृष्ठभागापासून तळापर्यंतचे खाली जाणारे माप",
    "pos": "नाम (Noun)"
  },
  {
    "id": 555,
    "part": 6,
    "word": "उंची",
    "english": "Height / Elevation / Altitude",
    "meaning": "जमिनीपासून वरच्या टोकापर्यंतचे उभे माप",
    "pos": "नाम (Noun)"
  },
  {
    "id": 556,
    "part": 6,
    "word": "क्षेत्रफळ",
    "english": "Area / Surface extent",
    "meaning": "सपाट भूपृष्ठाने व्यापलेल्या जागेचे चौरस माप",
    "pos": "नाम (Noun)"
  },
  {
    "id": 557,
    "part": 6,
    "word": "घनफळ",
    "english": "Volume / Cubic capacity",
    "meaning": "त्रिमितीय वस्तूने अवकाशात व्यापलेली एकूण जाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 558,
    "part": 6,
    "word": "तापमान",
    "english": "Temperature",
    "meaning": "वातावरणातील वा शरीरातील उष्णतेचे किंवा थंडीचे प्रमाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 559,
    "part": 6,
    "word": "उष्णता",
    "english": "Heat / Thermal energy",
    "meaning": "वस्तू गरम करणारी ऊर्जेची भौतिक अवस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 560,
    "part": 6,
    "word": "ऊर्जा",
    "english": "Energy / Vitality / Power",
    "meaning": "कार्य करण्याची क्षमता असणारी भौतिक ताकद",
    "pos": "नाम (Noun)"
  },
  {
    "id": 561,
    "part": 6,
    "word": "शक्ती",
    "english": "Force / Power / Might",
    "meaning": "वस्तूची स्थि ती बदलणारे बाह्य जोर किंवा शारीरिक बळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 562,
    "part": 6,
    "word": "दाब",
    "english": "Pressure / Compression",
    "meaning": "एका क्षेत्रफळावर पडणारा काटकोनातील भार वा जोर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 563,
    "part": 6,
    "word": "घन",
    "english": "Solid / Cube",
    "meaning": "निश्चित आकार व वस्तुमान असलेला कठीण पदार्थ नाम /",
    "pos": "विशेषण"
  },
  {
    "id": 564,
    "part": 6,
    "word": "द्रव",
    "english": "Liquid / Fluid",
    "meaning": "वाहणारा व पात्राचा आकार घेणारा पातळ पदार्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 565,
    "part": 6,
    "word": "वायू",
    "english": "Gas / Vapor",
    "meaning": "निश्चित आकार व घनफळ नसलेला हवेसारखा पदार्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 566,
    "part": 6,
    "word": "वाफ",
    "english": "Steam / Water vapor",
    "meaning": "पाणी उकळल्यावर निर्माण होणारे हलके बाष्प",
    "pos": "नाम (Noun)"
  },
  {
    "id": 567,
    "part": 6,
    "word": "बर्फ",
    "english": "Ice / Frozen water",
    "meaning": "अतिथंड तापमानामुळे गोठून कठीण झालेले पाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 568,
    "part": 6,
    "word": "ज्वाला",
    "english": "Flame / Blaze",
    "meaning": "आगीतून निघणारी धगधगणारी लाल-पिवळी उष्ण जीभ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 569,
    "part": 6,
    "word": "राख",
    "english": "Ash / Cinder",
    "meaning": "लाकूड वा कोळसा पूर्ण जळल्यानंतर उरणारी भुकट",
    "pos": "नाम (Noun)"
  },
  {
    "id": 570,
    "part": 6,
    "word": "धूर",
    "english": "Smoke / Fume",
    "meaning": "काहीही अर्धवट जळताना हवेत उठणारे काळे बाष्प",
    "pos": "नाम (Noun)"
  },
  {
    "id": 571,
    "part": 6,
    "word": "सावली",
    "english": "Shade / Shadow",
    "meaning": "प्रकाशाच्या मार्गात अडथळा आल्याने पडणारा काळा पडछाय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 572,
    "part": 6,
    "word": "चमक",
    "english": "Shine / Luster / Radiance",
    "meaning": "वस्तूच्या गुळगुळीत पृष्ठावरून परावर्तित होणारा प्रकाश",
    "pos": "नाम (Noun)"
  },
  {
    "id": 573,
    "part": 6,
    "word": "गंज",
    "english": "Rust / Corrosion",
    "meaning": "हवा व पाण्यामुळे लोखंडावर चढणारा तांबूस थर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 574,
    "part": 6,
    "word": "मिश्रण",
    "english": "Mixture / Blend / Compound",
    "meaning": "दोन वा अधिक पदार्थ एकत्र मिसळून तयार झालेले द्रव्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 575,
    "part": 6,
    "word": "प्रमाण",
    "english": "Proportion / Ratio / Standard",
    "meaning": "घटकांचे विशिष्ट माप, तुलनात्मक वाटा किंवा अधिकृत सत्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 576,
    "part": 6,
    "word": "नम्र",
    "english": "Humble / Polite / Modest",
    "meaning": "अहंकार नसलेला आणि सर्वांशी आदराने वागणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 577,
    "part": 6,
    "word": "गर्विष्ठ",
    "english": "Arrogant / Haughty / Proud",
    "meaning": "स्वतःच्या पैशाचा वा रूपाचा अति ताठा बाळगणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 578,
    "part": 6,
    "word": "सहनशील",
    "english": "Tolerant / Patient / Forbearing",
    "meaning": "कष्ट वा विरोध शांतपणे सोसण्याची क्षमता असलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 579,
    "part": 6,
    "word": "निष्ठावान",
    "english": "Loyal / Faithful / Devoted",
    "meaning": "संस्थेशी, मालकाशी किंवा तत्त्वांशी एकनिष्ठ राहणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 580,
    "part": 6,
    "word": "उदार",
    "english": "Generous / Magnanimous",
    "meaning": "मोठ्याा मनाने गरिबांना दान व मदत करणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 581,
    "part": 6,
    "word": "चतुर",
    "english": "Astute / Shrewd / Witty",
    "meaning": "वेळेवर प्रसंगावधान राखून युक्तीने वागणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 582,
    "part": 6,
    "word": "निष्काळजी",
    "english": "Careless / Negligent",
    "meaning": "कामात दक्षता न बाळगणारा आणि बेफिकीर",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 583,
    "part": 6,
    "word": "स्वाभिमानी",
    "english": "Self-respecting / Dignified",
    "meaning": "स्वतःचा मानमरातब जपणारा व लाचारी न पत्करणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 584,
    "part": 6,
    "word": "स्वावलंबी",
    "english": "Self-reliant / Independent",
    "meaning": "स्वतःची कामे स्वतःच करणारा आणि दुसऱ्यावर न विसंबणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 585,
    "part": 6,
    "word": "परावलंबी",
    "english": "Dependent / Parasitic",
    "meaning": "प्रत्येक लहान-मोठ्याा गोष्टीसाठी इतरांवर अवलंबून असणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 586,
    "part": 6,
    "word": "मत्सर",
    "english": "Jealousy / Envy / Malice",
    "meaning": "दुसऱ्याची प्रगती पाहून मनात निर्माण होणारा द्वेेषभाव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 587,
    "part": 6,
    "word": "लोभ",
    "english": "Greed / Avarice / Covetousness",
    "meaning": "पैशाची किंवा वस्तूंची मनात बाळगलेली हव्यास प्रवृत्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 588,
    "part": 6,
    "word": "समाधान",
    "english": "Contentment / Satisfaction",
    "meaning": "जे मिळाले आहे त्यात वाटणारे मनाचे शांत सुख",
    "pos": "नाम (Noun)"
  },
  {
    "id": 589,
    "part": 6,
    "word": "निराशा",
    "english": "Disappointment / Despair",
    "meaning": "अपेक्षित यश न मिळाल्याने मनाला आलेली खिन्नत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 590,
    "part": 6,
    "word": "आश्चर्य",
    "english": "Surprise / Wonder / Astonishment",
    "meaning": "अकल्पित व विलक्षण गोष्ट पाहून वाटणारे नवल (विस्मय)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 591,
    "part": 6,
    "word": "सहन करणे",
    "english": "To tolerate / Bear / Endure",
    "meaning": "त्रास, दुःख किंवा अपमान शांतपणे सोसून घेण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 592,
    "part": 6,
    "word": "त्याग करणे",
    "english": "To sacrifice / Renounce / Forgo",
    "meaning": "मोठ्याा ध्येयासाठी स्वतःच्या सुखावर पाणी सोडण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 593,
    "part": 6,
    "word": "संपादन करणे",
    "english": "To acquire / Attain / Edit",
    "meaning": "कष्टातून ज्ञाान/धन मिळवणे किंवा मजकूर संपादित करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 594,
    "part": 6,
    "word": "प्रेरणा देणे",
    "english": "To inspire / Motivate",
    "meaning": "इतरांच्या मनात कार्य करण्याची उत्कट उमेद जागवण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 595,
    "part": 6,
    "word": "प्रोत्साहन देणे",
    "english": "To encourage / Cheer / Boost",
    "meaning": "कामात उत्साह टिकून राहावा म्हणून पाठीवर थाप देण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 596,
    "part": 6,
    "word": "पराभूत करणे",
    "english": "To defeat / Overpower / Conquer",
    "meaning": "युद्धात किंवा स्पर्धेत प्रतिस्पर्ध्यावर मात करून हरवण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 597,
    "part": 6,
    "word": "वाटाघाटी करणे",
    "english": "To negotiate / Confer / Bargain",
    "meaning": "तंटा मिटवण्यासाठी किंवा करारासाठी समोरासमोर चर्चा करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 598,
    "part": 6,
    "word": "उद्घााटन करणे",
    "english": "To inaugurate / Launch / Unveil",
    "meaning": "नव्या वास्तूचे, प्रकल्पाचे वा उपक्रमाचे औपचारिक आरंभ करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 599,
    "part": 6,
    "word": "जाहीर करणे",
    "english": "To announce / Proclaim / Declare",
    "meaning": "निर्णय किंवा माहिती जाहीरपणे लोकांसमोर प्रसिद्ध करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 600,
    "part": 6,
    "word": "संपन्न होणे",
    "english": "To conclude successfully / Culminate",
    "meaning": "समारंभ, सोहळा किंवा कार्य निर्विघ्नपणे शेवटास जाणे",
    "pos": "क्रियापद"
  },
  {
    "id": 601,
    "part": 7,
    "word": "सैन्य",
    "english": "Army / Military / Forces",
    "meaning": "देशाच्या संरक्षणासाठी सज्ज असलेले अधिकृत सशस्त्र दल (सेना)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 602,
    "part": 7,
    "word": "सैनिक",
    "english": "Soldier / Warrior / Trooper",
    "meaning": "सैन्यात देशसेवेसाठी लढणारा जवान (योद्धा)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 603,
    "part": 7,
    "word": "युद्ध",
    "english": "War / Warfare / Conflict",
    "meaning": "दोन देश वा सैन्यांमधील मोठ्याा प्रमाणावरील सशस्त्र संघर्ष (संग्राम)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 604,
    "part": 7,
    "word": "लढाई",
    "english": "Battle / Combat / Fight",
    "meaning": "युद्धातील विशिष्ट आघाडीवर झालेली प्रत्यक्ष चकमक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 605,
    "part": 7,
    "word": "शस्त्र",
    "english": "Weapon / Arms / Weaponry",
    "meaning": "शत्रूचा प्रतिकार करण्यासाठी किंवा हल्ला करण्यासाठीचे हत्यार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 606,
    "part": 7,
    "word": "तोफ",
    "english": "Cannon / Artillery piece",
    "meaning": "दूरवर तोफगोळे डागणारे मोठे व अवजड लष्करी अस्त्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 607,
    "part": 7,
    "word": "सीमा",
    "english": "Border / Frontier / Boundary",
    "meaning": "दोन राज्ये वा देशांमधील अधिकृत हद्द वा मर्याद",
    "pos": "नाम (Noun)"
  },
  {
    "id": 608,
    "part": 7,
    "word": "संरक्षण",
    "english": "Defense / Safeguard / Shielding",
    "meaning": "शत्रूपासून वा संकटापासून केलेले रक्षण व बचाव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 609,
    "part": 7,
    "word": "सुरक्षितता",
    "english": "Security / Safety",
    "meaning": "कोणताही धोका वा इजा नसलेली सुरक्षित अवस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 610,
    "part": 7,
    "word": "धोका",
    "english": "Danger / Hazard / Peril / Risk",
    "meaning": "जीव, वित्त किंवा मालमत्तेला अपाय होण्याची शक्यत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 611,
    "part": 7,
    "word": "आणीबाणी",
    "english": "Emergency / Crisis state",
    "meaning": "अचानक ओढवलेली अत्यंत गंभीर व तातडीची परिस्थि त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 612,
    "part": 7,
    "word": "संकट",
    "english": "Calamity / Trouble / Distress",
    "meaning": "जीवनात वा राष्ट्राावर आलेली मोठी नैसर्गिक वा मानवनिर्मित आपत्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 613,
    "part": 7,
    "word": "बचाव",
    "english": "Rescue / Defense / Salve",
    "meaning": "संकटात अडकलेल्या व्यक्तीची केलेली सुटक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 614,
    "part": 7,
    "word": "मदत पथक",
    "english": "Relief squad / Rescue team",
    "meaning": "आपत्ती व्यवस्थाापनात लोकांना साहाय्य करणारा प्रशिक्षित गट",
    "pos": "नाम (Noun)"
  },
  {
    "id": 615,
    "part": 7,
    "word": "शांतता करार",
    "english": "Peace treaty / Accord",
    "meaning": "युद्ध थांबवून शांतता प्रस्थाापित करण्यासाठी झालेली समझोत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 616,
    "part": 7,
    "word": "परराष्ट्र",
    "english": "Foreign / External affairs",
    "meaning": "आपल्या देशाबाहेरील इतर परकीय राष्ट्रांांशी संबंधित व्यवहार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 617,
    "part": 7,
    "word": "राजदूत",
    "english": "Ambassador / Envoy",
    "meaning": "दुसऱ्या देशात आपल्या राष्ट्रााचे प्रतिनिधित्व करणारा मुत्सद्द",
    "pos": "नाम (Noun)"
  },
  {
    "id": 618,
    "part": 7,
    "word": "गुप्तहेर",
    "english": "Spy / Intelligence agent",
    "meaning": "शत्रूच्या हालचालींची गुप्त माहिती मिळवणारा हेर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 619,
    "part": 7,
    "word": "आक्रमण",
    "english": "Invasion / Aggression / Attack",
    "meaning": "दुसऱ्या देशावर किंवा भूभागावर केलेली लष्करी चढाई",
    "pos": "नाम (Noun)"
  },
  {
    "id": 620,
    "part": 7,
    "word": "प्रतिकार",
    "english": "Resistance / Counteraction",
    "meaning": "शत्रूच्या हल्ल्याला दिलेले प्रत्युत्तर व रोखण्याची कृत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 621,
    "part": 7,
    "word": "शरण येणे",
    "english": "To surrender / Capitulate",
    "meaning": "लढाई थांबवून प्रतिस्पर्ध्याच्या स्वाधीन होण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 622,
    "part": 7,
    "word": "विजयस्तंभ",
    "english": "Victory pillar / Monument",
    "meaning": "युद्धातील ऐतिहासिक विजयाची स्मृती जपणारा दगडी मनोर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 623,
    "part": 7,
    "word": "छावणी",
    "english": "Military camp / Cantonment",
    "meaning": "सैनिकांच्या तात्पुरत्या वा कायमस्वरूपी राहण्याची लष्करी जाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 624,
    "part": 7,
    "word": "पहारा",
    "english": "Patrol / Vigil / Watch",
    "meaning": "शत्रू किंवा चोरावर लक्ष ठेवण्यासाठी केलेली सक्त गस्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 625,
    "part": 7,
    "word": "शिस्त",
    "english": "Discipline / Orderliness",
    "meaning": "नियमांचे काटेकोरपणे पालन करण्याची अंगवळणी पडलेली सवय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 626,
    "part": 7,
    "word": "रुग्णालय",
    "english": "Hospital / Clinic",
    "meaning": "आजारी व जखमी व्यक्तींवर वैद्यकीय उपचार करण्याचे केंद्र (दवाखाना)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 627,
    "part": 7,
    "word": "रुग्ण",
    "english": "Patient / Sick person",
    "meaning": "आजाराने ग्रस्त झालेली व उपचार घेणारी व्यक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 628,
    "part": 7,
    "word": "परिचारिका",
    "english": "Nurse / Caregiver",
    "meaning": "रुग्णालयात आजारी माणसांची सेवा व सुश्रूषा करणारी स्त्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 629,
    "part": 7,
    "word": "शस्त्रक्रि",
    "english": "",
    "meaning": "या Surgery / Operation शरीराचा अंतर्गत भाग कापून व्याधी बरी करणारी वैद्यकीय क्रिय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 630,
    "part": 7,
    "word": "उपचार",
    "english": "Treatment / Therapy / Cure",
    "meaning": "आजार बरा करण्यासाठी डॉक्टरने केलेली वैद्यकीय योजन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 631,
    "part": 7,
    "word": "लस",
    "english": "Vaccine / Inoculation",
    "meaning": "संसर्गजन्य रोगांपासून संरक्षण मिळवण्यासाठी टोचले जाणारे औषध",
    "pos": "नाम (Noun)"
  },
  {
    "id": 632,
    "part": 7,
    "word": "साथ",
    "english": "Epidemic / Outbreak",
    "meaning": "एकाच वेळी अनेक लोकांना वेगाने होणारा संसर्गजन्य आजार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 633,
    "part": 7,
    "word": "प्रतिकारशक्ती",
    "english": "Immunity / Resistance",
    "meaning": "शरीराची जंतू व रोगांशी यशस्वी लढा देण्याची आंतरिक ताकद",
    "pos": "नाम (Noun)"
  },
  {
    "id": 634,
    "part": 7,
    "word": "वेदना",
    "english": "Pain / Ache / Agony",
    "meaning": "शरीराला किंवा मनाला होणारी तीव्र कळ वा यातन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 635,
    "part": 7,
    "word": "जखम",
    "english": "Wound / Injury / Cut / Lesion",
    "meaning": "मार लागल्याने किंवा कापल्याने त्वचेला झालेली इज",
    "pos": "नाम (Noun)"
  },
  {
    "id": 636,
    "part": 7,
    "word": "मलम",
    "english": "Ointment / Balm / Salve",
    "meaning": "जखमेवर वा सुजेवर लावण्यासाठी तयार केलेले औषधी लेप",
    "pos": "नाम (Noun)"
  },
  {
    "id": 637,
    "part": 7,
    "word": "पट्टी",
    "english": "Bandage / Dressing strip",
    "meaning": "जखम बांधून ठेवण्यासाठी वापरलेले कापड वा मलमपट्ट",
    "pos": "नाम (Noun)"
  },
  {
    "id": 638,
    "part": 7,
    "word": "ताप",
    "english": "Fever / High temperature",
    "meaning": "संसर्गामुळे शरीराचे तापमान नेहमीपेक्षा खूप वाढण्याची स्थि त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 639,
    "part": 7,
    "word": "खोकला",
    "english": "Cough",
    "meaning": "घशात किंवा छातीत अडकलेला कफ बाहेर टाकण्याची क्रिय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 640,
    "part": 7,
    "word": "सर्दी",
    "english": "Cold / Catarrh",
    "meaning": "नाकातून पाणी वाहणे व डोके जड होण्याचा हंगामी आजार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 641,
    "part": 7,
    "word": "विष",
    "english": "Poison / Toxin / Venom",
    "meaning": "पोटात गेल्यास वा दंश झाल्यास जीवावर बेतणारा घातक पदार्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 642,
    "part": 7,
    "word": "अमृत",
    "english": "Nectar / Ambrosia / Elixir",
    "meaning": "प्राशन केल्याने अमरत्व किंवा नवजीवन देणारे मानलेले दैवी पेय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 643,
    "part": 7,
    "word": "नाडी",
    "english": "Pulse / Pulse rate",
    "meaning": "हृदयाच्या ठोक्यांमुळे मनगटावर हाताला जाणवणारी धडधड",
    "pos": "नाम (Noun)"
  },
  {
    "id": 644,
    "part": 7,
    "word": "श्वाास",
    "english": "Breath / Respiration",
    "meaning": "नाकावाटे फुप्फुसात हवा आत घेणे आणि बाहेर सोडण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 645,
    "part": 7,
    "word": "दृष्टीी",
    "english": "Eyesight / Vision / Gaze",
    "meaning": "डोळ्यांनी जग पाहण्याची व रंग ओळखण्याची ज्ञाानेंद्रिय क्षमत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 646,
    "part": 7,
    "word": "कर्णबधिर",
    "english": "Hearing impaired / Deaf",
    "meaning": "कानांनी आवाज ऐकण्याची क्षमता पूर्णतः किंवा अंशतः नसलेला विशेषण /",
    "pos": "नाम"
  },
  {
    "id": 647,
    "part": 7,
    "word": "अंध",
    "english": "Blind / Sightless",
    "meaning": "डोळ्यांनी पाहण्याची दृष्टी नसलेली व्यक्ती (नेत्रहीन) विशेषण /",
    "pos": "नाम"
  },
  {
    "id": 648,
    "part": 7,
    "word": "दिव्यांांग",
    "english": "Differently abled / Disabled",
    "meaning": "शारीरिक किंवा मानसिक दृष्टीने विशेष क्षमता व गरजा असलेली व्यक्ती विशेषण /",
    "pos": "नाम"
  },
  {
    "id": 649,
    "part": 7,
    "word": "विश्रांांती",
    "english": "Rest / Repose / Relaxation",
    "meaning": "थकवा दूर करण्यासाठी काम थांबवून घेतलेला विसाव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 650,
    "part": 7,
    "word": "पुनर्वसन",
    "english": "Rehabilitation / Resettlement",
    "meaning": "आपत्तीग्रस्त वा आजारी व्यक्तीला पुन्हा सन्मानाने प्रस्थाापित करण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 651,
    "part": 7,
    "word": "खंड",
    "english": "Continent / Landmass",
    "meaning": "महासागरांनी वेढलेला पृथ्वीवरील विस्तीर्ण मोठा भूभाग (उदा. आशिया)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 652,
    "part": 7,
    "word": "बेट",
    "english": "Island / Isle",
    "meaning": "चारही बाजूंनी पाण्याने वेढलेला छोटा किंवा मोठा जमिनीचा तुकड",
    "pos": "नाम (Noun)"
  },
  {
    "id": 653,
    "part": 7,
    "word": "द्वीपकल्प",
    "english": "Peninsula",
    "meaning": "तीन बाजूंनी पाणी आणि एका बाजूने जमिनीला जोडलेला भूभाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 654,
    "part": 7,
    "word": "वाळवंट",
    "english": "Desert / Arid wasteland",
    "meaning": "पाण्याची तीव्र टंचाई असलेला वाळूचा कोरडा प्रदेश (मरूभूमी)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 655,
    "part": 7,
    "word": "दरी",
    "english": "Valley / Gorge / Canyon",
    "meaning": "दोन उंच डोंगरांच्या किंवा पर्वतांच्या मधील खोलगट अरुंद जाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 656,
    "part": 7,
    "word": "पठार",
    "english": "Plateau / Tableland",
    "meaning": "सभोवतालच्या जमिनीपेक्षा उंच पण माथ्यावर सपाट असलेला प्रदेश",
    "pos": "नाम (Noun)"
  },
  {
    "id": 657,
    "part": 7,
    "word": "धबधबा",
    "english": "Waterfall / Cascade",
    "meaning": "उंच कड्याावरून खाली पात्रात कोसळणारा पाण्याचा मोठा प्रवाह",
    "pos": "नाम (Noun)"
  },
  {
    "id": 658,
    "part": 7,
    "word": "झरा",
    "english": "Spring / Streamlet / Brook",
    "meaning": "जमिनीतून किंवा खडकातून आपोआप बाहेर पडणारा पाण्याचा ओघ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 659,
    "part": 7,
    "word": "खाडी",
    "english": "Creek / Estuary / Inlet",
    "meaning": "नदी समुद्राला मिळते तिथे समुद्राचे पाणी आत शिरणारा भाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 660,
    "part": 7,
    "word": "किनारा",
    "english": "Coast / Shore / Bank",
    "meaning": "समुद्राच्या किंवा नदीच्या लगतची जमिनीची पट्टी (तट)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 661,
    "part": 7,
    "word": "खडक",
    "english": "Rock / Cliff / Boulder",
    "meaning": "नैसर्गिक रीत्या तयार झालेला अत्यंत टणक व अवाढव्य दगड",
    "pos": "नाम (Noun)"
  },
  {
    "id": 662,
    "part": 7,
    "word": "खाण",
    "english": "Mine / Quarry",
    "meaning": "जमिनीखालून कोळसा वा धातू बाहेर काढण्यासाठी केलेली विहीर/खड्ड",
    "pos": "नाम (Noun)"
  },
  {
    "id": 663,
    "part": 7,
    "word": "कोळसा",
    "english": "Coal / Charcoal",
    "meaning": "इंधन म्हणून वापरला जाणारा भूगर्भातील काळा खनिज थर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 664,
    "part": 7,
    "word": "तांबे",
    "english": "Copper",
    "meaning": "विद्युत तारा व भांड्यांांसाठी वापरला जाणारा तांबूस धात",
    "pos": "नाम (Noun)"
  },
  {
    "id": 665,
    "part": 7,
    "word": "पितळ",
    "english": "Brass",
    "meaning": "तांबे आणि जस्त एकत्र वितळवून तयार केलेला मिश्र धात",
    "pos": "नाम (Noun)"
  },
  {
    "id": 666,
    "part": 7,
    "word": "हिरा",
    "english": "Diamond / Gemstone",
    "meaning": "निसर्गातील सर्वांत कठीण आणि लखलखणारा मौल्यवान रत्न",
    "pos": "नाम (Noun)"
  },
  {
    "id": 667,
    "part": 7,
    "word": "मोती",
    "english": "Pearl",
    "meaning": "शिंपल्यामध्ये नैसर्गिकरीत्या तयार होणारा मौल्यवान पांढरा मण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 668,
    "part": 7,
    "word": "लाकूडतोड",
    "english": "Deforestation / Logging",
    "meaning": "जंगलातील झाडे अनिर्बंधपणे तोडण्याची हानीकारक कृत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 669,
    "part": 7,
    "word": "वृक्षारोपण",
    "english": "Afforestation / Tree plantation",
    "meaning": "पर्यावरण रक्षणासाठी नवीन रोपे लावून त्यांची जोपासना करण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 670,
    "part": 7,
    "word": "बाग",
    "english": "Garden / Orchard / Park",
    "meaning": "शोभेची फुले किंवा फळे लावून सजवलेली सुंदर मोकळी जागा (उद्यान)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 671,
    "part": 7,
    "word": "गवत",
    "english": "Grass / Fodder / Turf",
    "meaning": "जमिनीवर दाटीवाटीने उगवणारी जनावरांच्या खाद्याची हिरवळ (तृण)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 672,
    "part": 7,
    "word": "शेवाळ",
    "english": "Algae / Moss",
    "meaning": "ओलाव्याच्या जागी किंवा पाण्यात वाढणारी मऊ हिरवी सूक्ष्म वनस्पत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 673,
    "part": 7,
    "word": "वादळ",
    "english": "Storm / Tempest / Gale",
    "meaning": "वेगाने वाहणारे वारे आणि पाऊस यांचा विनाशकारी प्रकोप",
    "pos": "नाम (Noun)"
  },
  {
    "id": 674,
    "part": 7,
    "word": "धुके",
    "english": "Fog / Mist / Haze",
    "meaning": "हिवाळ्यात जमिनीलगत हवेत तरंगणाऱ्या बाष्पाचे पांढरे ढग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 675,
    "part": 7,
    "word": "दव",
    "english": "Dew / Moisture drops",
    "meaning": "पहाटेच्या वेळी पानांवर साचलेले पाण्याचे बारीक चकचकीत थेंब",
    "pos": "नाम (Noun)"
  },
  {
    "id": 676,
    "part": 7,
    "word": "शहाणपण",
    "english": "Wisdom / Prudence / Sagacity",
    "meaning": "अनुभवातून आलेली परिपक्व समज आणि योग्य विचारसरण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 677,
    "part": 7,
    "word": "निष्कलंक",
    "english": "Spotless / Unblemished / Pure",
    "meaning": "कोणताही डाग, आक्षेप वा गुन्हा नसलेले निर्मळ चारित्र्य",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 678,
    "part": 7,
    "word": "स्वार्थ",
    "english": "Selfishness / Self-interest",
    "meaning": "फक्त स्वतःच्याच फायद्याचा किंवा सुखाचा विचार करण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 679,
    "part": 7,
    "word": "परोपकार",
    "english": "Philanthropy / Benevolence",
    "meaning": "कोणत्याही अपेक्षेशिवाय दुसऱ्यांच्या कल्याणासाठी केलेले कार्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 680,
    "part": 7,
    "word": "सहानुभूती",
    "english": "Sympathy / Empathy",
    "meaning": "इतरांच्या दुःखात मनापासून सहभागी होऊन व्यक्त केलेली आपुलक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 681,
    "part": 7,
    "word": "कृतज्ञता",
    "english": "Gratitude / Thankfulness",
    "meaning": "केलेल्या उपकाराची जाणीव ठेवून मनात व्यक्त केलेले आभार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 682,
    "part": 7,
    "word": "कृतघ्न",
    "english": "Ungrateful / Thankless",
    "meaning": "दुसऱ्याने केलेल्या उपकाराची किंवा मदतीची अजिबात जाणीव न ठेवणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 683,
    "part": 7,
    "word": "पश्चाात्ताप",
    "english": "Repentance / Remorse / Regret",
    "meaning": "स्वतःकडून घडलेल्या चुकीबद्दल मनात वाटणारे तीव्र दुःख",
    "pos": "नाम (Noun)"
  },
  {
    "id": 684,
    "part": 7,
    "word": "संयम",
    "english": "Restraint / Self-control / Patience",
    "meaning": "भावनांवर, रागावर किंवा इच्छांांवर मिळवलेले शांत नियंत्रण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 685,
    "part": 7,
    "word": "उत्साह",
    "english": "Zeal / Gusto / Ardor / High spirits",
    "meaning": "कोणतेही काम करण्यासाठी मनात ओसंडून वाहणारा हुरूप",
    "pos": "नाम (Noun)"
  },
  {
    "id": 686,
    "part": 7,
    "word": "संशय",
    "english": "Doubt / Suspicion / Skepticism",
    "meaning": "एखाद्या गोष्टीच्या किंवा व्यक्तीच्या खरेपणाविषयी मनात येणारी शंक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 687,
    "part": 7,
    "word": "खात्री",
    "english": "Assurance / Certainty / Conviction",
    "meaning": "मनात निर्माण झालेली पक्की निष्ठा किंवा विश्वाासार्हत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 688,
    "part": 7,
    "word": "गोपनीयता",
    "english": "Confidentiality / Privacy / Secrecy",
    "meaning": "महत्त्वाची माहिती इतरांना कळू न देता गुप्त राखण्याची स्थि त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 689,
    "part": 7,
    "word": "प्रतिष्ठाा",
    "english": "Prestige / Reputation / Dignity",
    "meaning": "समाजात असलेली पत, आदरणीय स्थाान व नावलौकिक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 690,
    "part": 7,
    "word": "वारसा",
    "english": "Heritage / Legacy / Inheritance",
    "meaning": "पूर्वजांकडून मिळालेली संस्कृती, कला किंवा संपत्तीची ठेव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 691,
    "part": 7,
    "word": "संघर्ष करणे",
    "english": "To struggle / Contend / Battle",
    "meaning": "प्रतिकूल परिस्थि तीशी किंवा संकटांशी निकराने लढा देण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 692,
    "part": 7,
    "word": "परावृत्त करणे",
    "english": "To dissuade / Deter / Turn back",
    "meaning": "दुसऱ्याला चुकीच्या किंवा वाईट मार्गापासून दूर रोखण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 693,
    "part": 7,
    "word": "प्रवृत्त करणे",
    "english": "To motivate / Induce / Prompt",
    "meaning": "एखाद्याला चांगल्या कामासाठी किंवा निर्णयासाठी उद्युक्त करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 694,
    "part": 7,
    "word": "पुढाकार घेणे",
    "english": "To take initiative / Spearhead",
    "meaning": "कोणत्याही चांगल्या कार्यात सर्वांत पुढे होऊन काम सुरू करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 695,
    "part": 7,
    "word": "हस्तक्षेप करणे",
    "english": "To intervene / Meddle / Interfere",
    "meaning": "दोन पक्षांच्या चाललेल्या व्यवहारात मध्ये पडून ढवळाढवळ करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 696,
    "part": 7,
    "word": "समर्थन करणे",
    "english": "To endorse / Support / Justify",
    "meaning": "दुसऱ्याच्या मताची बाजू घेऊन त्याची योग्यता सिद्ध करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 697,
    "part": 7,
    "word": "खंडन करणे",
    "english": "To refute / Rebut / Disprove",
    "meaning": "दुसऱ्याचे खोटे युक्तिवाद पुराव्यांच्या आधारे खोडून काढण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 698,
    "part": 7,
    "word": "आत्मसात करणे",
    "english": "To assimilate / Master / Internalize",
    "meaning": "कौशल्य, कला किंवा ज्ञाान पूर्णपणे स्वतःमध्ये मुरवून घेण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 699,
    "part": 7,
    "word": "पाठपुरावा करणे",
    "english": "To follow up / Pursue persistently",
    "meaning": "काम पूर्ण होईपर्यंत सातत्याने संपर्क साधून लक्ष ठेवण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 700,
    "part": 7,
    "word": "न्याय",
    "english": "Justice / Fairness / Equity",
    "meaning": "सत्य, नीती आणि समतेवर आधारित योग्य निवाडा वा हक्क",
    "pos": "नाम (Noun)"
  },
  {
    "id": 701,
    "part": 8,
    "word": "संविधान",
    "english": "Constitution / Supreme Law",
    "meaning": "देशाचा राज्यकारभार चालवणारा मूलभूत सर्वोच्च कायदा (घटना)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 702,
    "part": 8,
    "word": "सर्वोच्च न्यायालय",
    "english": "Supreme Court",
    "meaning": "देशातील सर्वोच्च व अंतिम न्यायनिवाडा करणारी न्यायसंस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 703,
    "part": 8,
    "word": "न्यायाधीश",
    "english": "Judge / Magistrate / Jurist",
    "meaning": "न्यायालयात खटल्यांची सुनावणी घेऊन न्यायनिवाडा करणारा अधिकार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 704,
    "part": 8,
    "word": "वकील",
    "english": "Advocate / Lawyer / Counsel",
    "meaning": "पक्षकाराची बाजू न्यायालयात मांडणारा कायदेतज्ज्ञ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 705,
    "part": 8,
    "word": "आरोपी",
    "english": "Accused / Defendant / Culprit",
    "meaning": "ज्याच्यावर गुन्हा केल्याचा कायदेशीर आक्षेप किंवा आळ ठेवला आह",
    "pos": "नाम (Noun)"
  },
  {
    "id": 706,
    "part": 8,
    "word": "फिर्यादी",
    "english": "Complainant / Petitioner / Plaintiff",
    "meaning": "अन्यायाविरुद्ध न्यायालयात दाद मागणारा किंवा तक्रारदार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 707,
    "part": 8,
    "word": "जामीन",
    "english": "Bail / Surety / Bond",
    "meaning": "खटला चालू असताना सशर्त तात्पुरती सुटका मिळवण्याची कायदेशीर हम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 708,
    "part": 8,
    "word": "खटला",
    "english": "Lawsuit / Litigation / Case / Trial",
    "meaning": "न्यायासमोर चालणारा दिवाणी वा फौजदारी खटल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 709,
    "part": 8,
    "word": "जबानी",
    "english": "Deposition / Formal testimony",
    "meaning": "साक्षीदाराने किंवा आरोपीने न्यायालयासमोर दिलेले अधिकृत तोंडी बयान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 710,
    "part": 8,
    "word": "दोषारोप",
    "english": "Indictment / Charge / Accusation",
    "meaning": "गुन्ह्याबाबत पोलिसांनी वा न्यायालयाने निश्चित केलेला आरोप",
    "pos": "नाम (Noun)"
  },
  {
    "id": 711,
    "part": 8,
    "word": "निर्दोष",
    "english": "Innocent / Acquitted / Guiltless",
    "meaning": "ज्याने कोणताही गुन्हा केलेला नाही किंवा आरोपमुक्त ठरलेल",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 712,
    "part": 8,
    "word": "दोषी",
    "english": "Guilty / Convicted / Culpable",
    "meaning": "न्यायालयाने ज्याचा गुन्हा पुराव्यांच्या आधारे सिद्ध केला आहे अस",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 713,
    "part": 8,
    "word": "बंदी",
    "english": "Prisoner / Inmate / Captive",
    "meaning": "गुन्ह्यासाठी तुरुंगात डांबून ठेवलेला कैद",
    "pos": "नाम (Noun)"
  },
  {
    "id": 714,
    "part": 8,
    "word": "कारागृह",
    "english": "Prison / Penitentiary / Jail",
    "meaning": "गुन्हेगारांना शिक्षेदरम्यान डांबून ठेवण्याची इमारत (तुरुंग)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 715,
    "part": 8,
    "word": "मानवाधिकार",
    "english": "Human rights",
    "meaning": "प्रत्येक मानवाला जन्मतः मिळणारे नैसर्गिक व सन्मानपूर्वक हक्क",
    "pos": "नाम (Noun)"
  },
  {
    "id": 716,
    "part": 8,
    "word": "मूलभूत हक्क",
    "english": "Fundamental rights",
    "meaning": "संविधानाने प्रत्येक नागरिकाला हमी दिलेले अविभाज्य हक्क",
    "pos": "नाम (Noun)"
  },
  {
    "id": 717,
    "part": 8,
    "word": "नुकसानभरपाई",
    "english": "Compensation / Indemnity / Damages",
    "meaning": "झालेल्या नुकसानीच्या मोबदल्यात दिलेली कायदेशीर आर्थिक मदत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 718,
    "part": 8,
    "word": "दंड",
    "english": "Fine / Penalty / Mulct",
    "meaning": "नियमभंग केल्याबद्दल कायद्यााने लादलेली आर्थिक वसुल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 719,
    "part": 8,
    "word": "अपील",
    "english": "Appeal / Petition for review",
    "meaning": "खालच्या न्यायालयाच्या निर्णयाविरुद्ध वरिष्ठ न्यायालयात केलेला अर्ज",
    "pos": "नाम (Noun)"
  },
  {
    "id": 720,
    "part": 8,
    "word": "मनाईहुकूम",
    "english": "Injunction / Stay order",
    "meaning": "विशिष्ट कृती थांबवण्यासाठी न्यायालयाने दिलेला तात्पुरता प्रतिबंधक आदेश",
    "pos": "नाम (Noun)"
  },
  {
    "id": 721,
    "part": 8,
    "word": "जप्ती",
    "english": "Confiscation / Seizure / Attachment",
    "meaning": "कायद्यााने अनधिकृत मालमत्ता किंवा पुरावा स्वतःच्या ताब्यात घेण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 722,
    "part": 8,
    "word": "फसवणूक",
    "english": "Fraud / Deception / Cheating",
    "meaning": "खोट्याा माहितीने दुसऱ्याचे आर्थिक किंवा मानसिक नुकसान करण्याची कृत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 723,
    "part": 8,
    "word": "भ्रष्टााचार",
    "english": "Corruption / Malpractice",
    "meaning": "पदाचा गैरवापर करून स्वतःच्या फायद्याासाठी केलेले बेकायदेशीर वर्तन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 724,
    "part": 8,
    "word": "लाच",
    "english": "Bribe / Kickback / Graft",
    "meaning": "बेकायदेशीर काम करून घेण्यासाठी दिलेले अवैध पैसे वा भेट",
    "pos": "नाम (Noun)"
  },
  {
    "id": 725,
    "part": 8,
    "word": "चौकशी",
    "english": "Inquiry / Official investigation",
    "meaning": "सत्य शोधण्यासाठी केलेली सखोल अधिकृत तपासणी वा विचारण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 726,
    "part": 8,
    "word": "पत्रकार",
    "english": "Journalist / Press reporter",
    "meaning": "बातम्या गोळा करून वर्तमानपत्र वा वाहिनीसाठी लिहिणारा वार्ताहर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 727,
    "part": 8,
    "word": "पत्रकारिता",
    "english": "Journalism / Press craft",
    "meaning": "जनतेपर्यंत सत्य घटना पोहोचवणारा वृत्तपत्र व वृत्तवाहिन्यांचा व्यवसाय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 728,
    "part": 8,
    "word": "संपादक",
    "english": "Editor / Redactor",
    "meaning": "वृत्तपत्रातील मजकुराची पडताळणी व संपादकीय धोरण ठरवणारा प्रमुख",
    "pos": "नाम (Noun)"
  },
  {
    "id": 729,
    "part": 8,
    "word": "संपादकीय",
    "english": "Editorial / Leading article",
    "meaning": "वृत्तपत्राचे चालू घडामोडींवर अधिकृत मत मांडणारा विशेष अग्रलेख",
    "pos": "नाम (Noun)"
  },
  {
    "id": 730,
    "part": 8,
    "word": "मुलाखत",
    "english": "Interview",
    "meaning": "व्यक्तीचे विचार जाणून घेण्यासाठी घेतलेली प्रश्नोोत्तर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 731,
    "part": 8,
    "word": "थेट प्रक्षेपण",
    "english": "Live broadcast / Telecast",
    "meaning": "घटना घडत असतानाच वाहिनीवरून थेट जनतेस दाखवण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 732,
    "part": 8,
    "word": "आंतरजाल",
    "english": "Internet / Worldwide web",
    "meaning": "जागतिक पातळीवर संगणकांना जोडणारे डिजिटल महाजाळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 733,
    "part": 8,
    "word": "संकेतस्थळ",
    "english": "Website / Web portal",
    "meaning": "इंटरनेटवर संस्थाा किंवा व्यक्तीची माहिती देणारे डिजिटल वेबपान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 734,
    "part": 8,
    "word": "सामाजिक माध्यमे",
    "english": "Social media",
    "meaning": "लोकांना ऑनलाइन संवाद व विचार मांडण्यास सक्षम करणारे व्यासपीठ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 735,
    "part": 8,
    "word": "सायबर सुरक्षा",
    "english": "Cybersecurity",
    "meaning": "डिजिटल डेटा व संगणकीय यंत्रणांना हॅकर्सपासून सुरक्षित ठेवण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 736,
    "part": 8,
    "word": "विदा",
    "english": "Data / Raw dataset",
    "meaning": "संगणकात साठवलेली प्रक्रिया न केलेली डिजिटल आकडेवारी वा माहित",
    "pos": "नाम (Noun)"
  },
  {
    "id": 737,
    "part": 8,
    "word": "गोपनीयता धोरण",
    "english": "Privacy policy",
    "meaning": "वापरकर्त्याची वैयक्तिक माहिती सुरक्षित ठेवण्याबाबतचे अधिकृत नियम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 738,
    "part": 8,
    "word": "दूरध्वनी",
    "english": "Telephone / Landline phone",
    "meaning": "तारेद्वाारे दूरच्या व्यक्तीशी त्वरित आवाज पोहोचवणारे संवादयंत्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 739,
    "part": 8,
    "word": "आकाशवाणी",
    "english": "Radio broadcast / AIR",
    "meaning": "रेडिओ तरंगांवरून बातम्या व गाणी प्रसारित करणारे केंद्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 740,
    "part": 8,
    "word": "प्रेक्षक",
    "english": "Audience / Spectator / Viewer",
    "meaning": "नाटक, खेळ, चित्रपट किंवा टीव्हीवरील कार्यक्रम पाहणारा वर्ग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 741,
    "part": 8,
    "word": "श्रोोता",
    "english": "Listener / Hearer / Auditor",
    "meaning": "भाषण, संगीत वा रेडिओवरील कार्यक्रम कान देऊन ऐकणारा घटक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 742,
    "part": 8,
    "word": "वाचकवर्ग",
    "english": "Readership / Readers",
    "meaning": "पुस्तके, मासिके किंवा वर्तमानपत्रे नियमित वाचणाऱ्यांचा समूह",
    "pos": "नाम (Noun)"
  },
  {
    "id": 743,
    "part": 8,
    "word": "जाहिरात",
    "english": "Advertisement / Commercial",
    "meaning": "वस्तू वा सेवेचा खप वाढवण्यासाठी केली जाणारी सार्वजनिक प्रसिद्ध",
    "pos": "नाम (Noun)"
  },
  {
    "id": 744,
    "part": 8,
    "word": "प्रसिद्धी",
    "english": "Publicity / Renown / Fame",
    "meaning": "समाजात सर्वदूर पसरलेली कीर्ती, नावलौकिक किंवा माहित",
    "pos": "नाम (Noun)"
  },
  {
    "id": 745,
    "part": 8,
    "word": "बदनामी",
    "english": "Defamation / Slander / Libel",
    "meaning": "खोटे आरोप करून समाजात दुसऱ्याच्या प्रतिष्ठेला धक्का पोहोचवण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 746,
    "part": 8,
    "word": "जनसंपर्क",
    "english": "Public relations / PR",
    "meaning": "संस्थाा आणि जनता यांच्यात विश्वाास व सुसंवाद राखण्याचे कार्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 747,
    "part": 8,
    "word": "मुद्रणालय",
    "english": "Printing press / Print house",
    "meaning": "पुस्तके, वर्तमानपत्रे आणि नियतकालिके छापण्याची जागा (छापखाना)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 748,
    "part": 8,
    "word": "शीर्षक",
    "english": "Headline / Title / Heading",
    "meaning": "लेखाचा, धड्यााचा किंवा बातमीचा मुख्य नामनिर्देश",
    "pos": "नाम (Noun)"
  },
  {
    "id": 749,
    "part": 8,
    "word": "मथळा",
    "english": "Banner headline / Top caption",
    "meaning": "वर्तमानपत्राच्या पहिल्या पानावर ठळक अक्षरात छापलेली मुख्य बातम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 750,
    "part": 8,
    "word": "संदर्भ",
    "english": "Reference / Context / Citation",
    "meaning": "मूळ आधारग्रंथ, उद्धृत पुरावा किंवा विधानामागील पार्श्वभूम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 751,
    "part": 8,
    "word": "अर्थशास्त्र",
    "english": "Economics",
    "meaning": "उत्पादन, वितरण आणि संपत्तीच्या विनियोगाचा शास्त्रोक्त अभ्यास",
    "pos": "नाम (Noun)"
  },
  {
    "id": 752,
    "part": 8,
    "word": "चलनवाढ",
    "english": "Inflation / Currency expansion",
    "meaning": "बाजारात पैशाचा पुरवठा वाढून वस्तूंच्या भावात झालेली सततची वाढ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 753,
    "part": 8,
    "word": "महागाई",
    "english": "Cost of living / Dearness",
    "meaning": "दैनंदिन गरजेच्या वस्तूंचे भाव वाढल्याने सामान्यांना जाणवणारा भार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 754,
    "part": 8,
    "word": "मंदी",
    "english": "Recession / Economic slump",
    "meaning": "व्यापार, खरेदी-विक्री आणि उत्पादनाची गती कमालीची मंदावण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 755,
    "part": 8,
    "word": "गंगाजळी",
    "english": "Financial reserve / Treasury cache",
    "meaning": "कठीण काळासाठी राखून ठेवलेला सरकारी किंवा वैयक्तिक सुरक्षित निध",
    "pos": "नाम (Noun)"
  },
  {
    "id": 756,
    "part": 8,
    "word": "महसूल",
    "english": "Revenue / Fiscal collection",
    "meaning": "कर आणि शुल्कातून शासनाला मिळणारे एकूण वार्षिक उत्पन्न",
    "pos": "नाम (Noun)"
  },
  {
    "id": 757,
    "part": 8,
    "word": "अंदाजपत्रक",
    "english": "Budget / Financial plan",
    "meaning": "आगामी वर्षातील अपेक्षित जमा आणि खर्चाचा अधिकृत ताळेबंद",
    "pos": "नाम (Noun)"
  },
  {
    "id": 758,
    "part": 8,
    "word": "वित्तीय वर्ष",
    "english": "Financial year / Fiscal cycle",
    "meaning": "हिशेबासाठी ग्राह्य धरलेला १ एप्रिल ते ३१ मार्चा अधिकृत काळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 759,
    "part": 8,
    "word": "भागभांडवल",
    "english": "Share capital / Equity stock",
    "meaning": "कंपनी सुरू करण्यासाठी समभागांची विक्री करून उभारलेला निध",
    "pos": "नाम (Noun)"
  },
  {
    "id": 760,
    "part": 8,
    "word": "समभाग",
    "english": "Share / Equity unit",
    "meaning": "कंपनीच्या एकूण भांडवलातील लहान समान मालकीचा हिस्स",
    "pos": "नाम (Noun)"
  },
  {
    "id": 761,
    "part": 8,
    "word": "रोखे",
    "english": "Bonds / Debentures / Securities",
    "meaning": "निश्चित व्याजाच्या मोबदल्यात सरकार वा कंपन्यांनी घेतलेले कर्जपत्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 762,
    "part": 8,
    "word": "व्याजदर",
    "english": "Interest rate",
    "meaning": "कर्जावर किंवा ठेवीवर मिळणारा दरसाल दरशेकडा परताव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 763,
    "part": 8,
    "word": "मुदत ठेव",
    "english": "Fixed deposit / Term deposit",
    "meaning": "बँकेत ठराविक कालावधीसाठी निश्चित व्याजाने ठेवलेले पैस",
    "pos": "नाम (Noun)"
  },
  {
    "id": 764,
    "part": 8,
    "word": "चालू खाते",
    "english": "Current account",
    "meaning": "व्यापाऱ्यांसाठी दररोज अमर्याद व्यवहारांची सोय असलेले बँक खात",
    "pos": "नाम (Noun)"
  },
  {
    "id": 765,
    "part": 8,
    "word": "धनादेश",
    "english": "Cheque / Bank draft",
    "meaning": "खात्यातून दुसऱ्याला पैसे देण्यासाठी बँकेच्या नावावर लिहिलेला आदेश",
    "pos": "नाम (Noun)"
  },
  {
    "id": 766,
    "part": 8,
    "word": "दिवाळखोर",
    "english": "Bankrupt / Insolvent entity",
    "meaning": "घेतलेली कर्जे परत करण्यास असमर्थ ठरलेली व्यक्ती किंवा व्यापारी विशेषण /",
    "pos": "नाम"
  },
  {
    "id": 767,
    "part": 8,
    "word": "हुंडी",
    "english": "Bill of exchange / Promissory note",
    "meaning": "व्यापारी व्यवहारांत भविष्यात पैसे देण्याचे लिखित कायदेशीर वचन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 768,
    "part": 8,
    "word": "आयात",
    "english": "Import / Inward shipment",
    "meaning": "दुसऱ्या देशातून माल वा तंत्रज्ञान आपल्या देशात विकत आणण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 769,
    "part": 8,
    "word": "निर्यात",
    "english": "Export / Outward shipment",
    "meaning": "आपल्या देशात तयार झालेला माल परदेशात विक्रीसाठी पाठवण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 770,
    "part": 8,
    "word": "सीमाशुल्क",
    "english": "Customs duty / Tariff",
    "meaning": "आयात किंवा निर्यातीच्या मालावर सीमेवर आकारला जाणारा कर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 771,
    "part": 8,
    "word": "अनुदान",
    "english": "Subsidy / Financial grant",
    "meaning": "जनतेच्या हितासाठी शासनाने वस्तूवर वा सेवेवर दिलेली आर्थिक सवलत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 772,
    "part": 8,
    "word": "सकल उत्पन्न",
    "english": "Gross income / Gross output",
    "meaning": "खर्च वा कर वजा करण्यापूर्वीचे एकूण मिळालेले सर्व उत्पन्न",
    "pos": "नाम (Noun)"
  },
  {
    "id": 773,
    "part": 8,
    "word": "निव्वळ नफा",
    "english": "Net profit / Clear gain",
    "meaning": "सर्व प्रकारचे खर्च, घसारा व कर वजा केल्यावर उरणारा खरा नफ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 774,
    "part": 8,
    "word": "रोख रक्कम",
    "english": "Cash liquidity / Ready cash",
    "meaning": "हातात असलेली नाणी व नोटांच्या रूपातील तत्काळ खर्च करता येणारी रक्कम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 775,
    "part": 8,
    "word": "वित्तीय वर्ष",
    "english": "Fiscal year / Financial year",
    "meaning": "हिशेब आणि कर आकारणीसाठी ठरवलेला बारा महिन्यांचा शासकीय कालावध",
    "pos": "नाम (Noun)"
  },
  {
    "id": 776,
    "part": 8,
    "word": "तत्त्वज्ञाान",
    "english": "Philosophy / Metaphysics",
    "meaning": "सत्य, जग, ज्ञान आणि मानवी अस्तित्वाची मूलभूत कारणमीमांस",
    "pos": "नाम (Noun)"
  },
  {
    "id": 777,
    "part": 8,
    "word": "विचारसरणी",
    "english": "Ideology / Thought doctrine",
    "meaning": "एखाद्याा पक्षाची, व्यक्तीची किंवा समाजाची ठाम तात्त्विक बैठक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 778,
    "part": 8,
    "word": "दृष्टिकोन",
    "english": "Perspective / Viewpoint / Outlook",
    "meaning": "जगाकडे किंवा एखाद्याा घटनेकडे पाहण्याची वैयक्तिक विचारपद्धत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 779,
    "part": 8,
    "word": "अस्तित्व",
    "english": "Existence / Being / Presence",
    "meaning": "प्रत्यक्षात असणे, टिकून राहणे किंवा जीवंत असण्याची स्थि त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 780,
    "part": 8,
    "word": "वास्तव",
    "english": "Reality / Fact / Trueness",
    "meaning": "कल्पना सोडून जे प्रत्यक्ष डोळ्यांसमोर घडले आहे ते मूळ वास्तव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 781,
    "part": 8,
    "word": "आभास",
    "english": "Illusion / Mirage / Phantom",
    "meaning": "नसलेली गोष्ट खरी असल्यासारखी भासण्याची मनाची भ्रमिष्ट अवस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 782,
    "part": 8,
    "word": "प्राधान्य",
    "english": "Priority / Precedence",
    "meaning": "इतर कामांपेक्षा विशिष्ट गोष्टीला पहिले स्थाान देण्याचा निर्णय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 783,
    "part": 8,
    "word": "अपरिहार्य",
    "english": "Inevitable / Unavoidable",
    "meaning": "ज्याला टाळता येणे मुळीच शक्य नाही अशी अनिवार्य परिस्थि त",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 784,
    "part": 8,
    "word": "तात्पुरता",
    "english": "Temporary / Provisional / Transient",
    "meaning": "कायम नसलेला, फक्त काही काळापुरता किंवा तात्कालिक",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 785,
    "part": 8,
    "word": "शाश्वत",
    "english": "Eternal / Sustainable / Permanent",
    "meaning": "कधीही नष्ट न होणारा, चिरंतन टिकणारा आणि पर्यावरणपूरक",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 786,
    "part": 8,
    "word": "पारदशकता",
    "english": "Transparency / Openness",
    "meaning": "कारभारात कोणतीही लपवाछपवी नसणे आणि सर्व खुले असण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 787,
    "part": 8,
    "word": "उत्तरदायित्व",
    "english": "Accountability / Liability",
    "meaning": "आपल्या निर्णयांची आणि कामांची जनतेला उत्तरे देण्याची जबाबदार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 788,
    "part": 8,
    "word": "स्वायत्तता",
    "english": "Autonomy / Self-governance",
    "meaning": "संस्थेेला स्वतःचे निर्णय स्वतंत्रपणे घेण्याचे मिळालेले कायदेशीर स्वातंत्र्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 789,
    "part": 8,
    "word": "एकवाक्यता",
    "english": "Consensus / Unanimity / Harmony",
    "meaning": "एखाद्याा मुद्द्याावर सर्वांचे एकमत किंवा सुसंवाद असण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 790,
    "part": 8,
    "word": "तफावत",
    "english": "Discrepancy / Disparity / Variance",
    "meaning": "दोन नोंदींमध्ये, आकडेवारीत किंवा स्थि तीत असणारा मोठा फरक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 791,
    "part": 8,
    "word": "विश्लेेषण करणे",
    "english": "To analyze / Dissect logically",
    "meaning": "माहितीचे वा समस्येचे घटक वेगवेगळे करून सखोल अभ्यासण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 792,
    "part": 8,
    "word": "वर्गीकरण करणे",
    "english": "To classify / Categorize",
    "meaning": "साम्य आणि भेद यांनुसार वस्तूंचे वेगवेगळ्या गटांत वाटप करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 793,
    "part": 8,
    "word": "पडताळणी करणे",
    "english": "To audit / Verify / Cross- check",
    "meaning": "माहिती किंवा हिशेब नियमानुसार अचूक आहे का ते तपासण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 794,
    "part": 8,
    "word": "शिफारस करणे",
    "english": "To recommend / Commend",
    "meaning": "एखाद्याा व्यक्तीच्या नेमणुकीसाठी वा उपायासाठी अनुकूल मत देण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 795,
    "part": 8,
    "word": "अमलात आणणे",
    "english": "To enforce / Execute / Implement",
    "meaning": "कायदा किंवा योजना प्रत्यक्ष व्यवहारात लागू करून सुरू करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 796,
    "part": 8,
    "word": "पुनरावलोकन करणे",
    "english": "To review / Re-examine / Re- audit",
    "meaning": "चालू कामाचा किंवा जुन्या निर्णयाचा पुन्हा नव्याने आढावा घेण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 797,
    "part": 8,
    "word": "पुनर्विचार करणे",
    "english": "To reconsider / Rethink",
    "meaning": "घेतलेल्या निर्णयावर पुन्हा नव्याने विचार करून बदल करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 798,
    "part": 8,
    "word": "संमती देणे",
    "english": "To grant assent / Accord approval",
    "meaning": "प्रस्तावास किंवा कायद्याास अधिकृतपणे मान्यता जाहीर करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 799,
    "part": 8,
    "word": "हस्तक्षेप टाळणे",
    "english": "To refrain / Avoid interference",
    "meaning": "दुसऱ्याच्या कार्यात स्वतःहून मध्ये पडणे जाणीवपूर्वक थांबवण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 800,
    "part": 8,
    "word": "विश्वबंधुत्व",
    "english": "Universal brotherhood / Global fraternity",
    "meaning": "सर्व विश्वातील मानवजात एकच कुटुंब असल्याची उदात्त भावन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 801,
    "part": 9,
    "word": "खगोलशास्त्र",
    "english": "Astronomy / Astrophysics",
    "meaning": "तारे, ग्रह आणि अवकाशातील गोलांचा शास्त्रोक्त अभ्यास",
    "pos": "नाम (Noun)"
  },
  {
    "id": 802,
    "part": 9,
    "word": "सूर्यमाला",
    "english": "Solar system",
    "meaning": "सूर्य आणि त्याच्या गुरुत्वाकर्षणाने फिरणाऱ्या ग्रहांचे कुटुंब",
    "pos": "नाम (Noun)"
  },
  {
    "id": 803,
    "part": 9,
    "word": "ग्रह",
    "english": "Planet / Celestial sphere",
    "meaning": "सूर्याभोवती स्वतःच्या कक्षेत फिरणारा मोठा खगोलीय गोल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 804,
    "part": 9,
    "word": "उपग्रह",
    "english": "Satellite / Moon / Orbiter",
    "meaning": "ग्रहाभोवती प्रदक्षिणा घालणारा नैसर्गिक वा मानवनिर्मित घटक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 805,
    "part": 9,
    "word": "लघुग्रह",
    "english": "Asteroid / Planetoid",
    "meaning": "मंगळ व गुरूच्या पट्ट्ट्यातील लहान खडकाळ खगोलीय वस्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 806,
    "part": 9,
    "word": "धूमकेतू",
    "english": "Comet",
    "meaning": "बर्फ, वायू व धुळीने बनलेला आणि तेजस्वी शेपूट असलेला खगोलीय गोल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 807,
    "part": 9,
    "word": "उल्का",
    "english": "Meteor / Shooting star",
    "meaning": "वातावरणातील घर्षणाने जळून प्रकाश दाखवणारा अवकाशातील खडकाचा तुकड",
    "pos": "नाम (Noun)"
  },
  {
    "id": 808,
    "part": 9,
    "word": "ग्रहण",
    "english": "Eclipse / Occultation",
    "meaning": "सूर्य वा चंद्राच्या प्रकाशात इतर खगोलीय वस्तूची सावली पडण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 809,
    "part": 9,
    "word": "सूर्यग्रहण",
    "english": "Solar eclipse",
    "meaning": "चंद्र सूर्य आणि पृथ्वीच्या मध्ये आल्याने सूर्याचा प्रकाश झाकला जाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 810,
    "part": 9,
    "word": "चंद्रग्रहण",
    "english": "Lunar eclipse",
    "meaning": "पृथ्वी सूर्य आणि चंद्राच्या मध्ये आल्याने चंद्रावर पृथ्वीची सावली पडण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 811,
    "part": 9,
    "word": "आकाशगंगा",
    "english": "Galaxy / Milky Way",
    "meaning": "अब्जावधी तारे आणि सूर्यमाला सामावून घेणारा विस्तीर्ण तारकासमूह",
    "pos": "नाम (Noun)"
  },
  {
    "id": 812,
    "part": 9,
    "word": "कृष्णविवर",
    "english": "Black hole",
    "meaning": "प्रचंड गुरुत्वाकर्षण असलेला आणि प्रकाशालाही बाहेर पडू न देणारा भाग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 813,
    "part": 9,
    "word": "गुरुत्वाकर्षण",
    "english": "Gravitation / Gravity",
    "meaning": "दोन वस्तूंना एकमेकांकडे खेचून ठेवणारे निसर्गाचे मूलभूत बल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 814,
    "part": 9,
    "word": "कक्षा",
    "english": "Orbit / Trajectory path",
    "meaning": "खगोलीय वस्तूची दुसऱ्या ताऱ्याभोवती फिरण्याची निश्चित वाट",
    "pos": "नाम (Noun)"
  },
  {
    "id": 815,
    "part": 9,
    "word": "अवकाशयान",
    "english": "Spacecraft / Spaceship",
    "meaning": "अंतराळात संशोधनासाठी पाठवले जाणारे मानवनिर्मित चालकविरहित/चालकयुक्त यान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 816,
    "part": 9,
    "word": "क्षेपणास्त्र",
    "english": "Missile / Rocket projectile",
    "meaning": "शत्रूच्या लक्ष्यावर अचूक मारा करण्यासाठी हवेतून डागले जाणारे अस्त्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 817,
    "part": 9,
    "word": "वजनहीनता",
    "english": "Weightlessness / Zero gravity",
    "meaning": "गुरुत्वाकर्षणाचा प्रभाव न जाणवल्यामुळे शरीराचे वजन शून्य भासण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 818,
    "part": 9,
    "word": "हवामान अंदाज",
    "english": "Weather forecast",
    "meaning": "आगामी पाऊस, ऊन आणि वाऱ्याविषयी हवामानशास्त्रज्ञांांनी वर्तवलेला अंदाज",
    "pos": "नाम (Noun)"
  },
  {
    "id": 819,
    "part": 9,
    "word": "आद्रता",
    "english": "Humidity / Moisture level",
    "meaning": "हवेमध्ये बाष्प किंवा पाण्याचे प्रमाण असण्याची दमट स्थि त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 820,
    "part": 9,
    "word": "हवेचा दाब",
    "english": "Atmospheric pressure / Barometric",
    "meaning": "वातावरणातील हवेच्या वजनामुळे भूपृष्ठावर पडणारा निरंतर भार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 821,
    "part": 9,
    "word": "झंझावात",
    "english": "Squall / Gale / Windstorm",
    "meaning": "अचानक अत्यंत वेगाने वाहणारे आणि धूळ उडवणारे वादळी वार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 822,
    "part": 9,
    "word": "गारपीट",
    "english": "Hailstorm / Hail",
    "meaning": "पावसाच्या पाण्यासोबत बर्फाचे कठीण गोटे आकाशातून कोसळण्याची घटन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 823,
    "part": 9,
    "word": "वीज पडणे",
    "english": "Lightning strike",
    "meaning": "ढगांमधील प्रचंड विद्युत भार जमिनीवर कोसळण्याचा नैसर्गिक प्रहार",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 824,
    "part": 9,
    "word": "धुरके",
    "english": "Smog / Smoke-fog",
    "meaning": "धूर आणि धुके एकत्र येऊन दृश्यमानता कमी करणारा हवेच",
    "pos": "नाम(Noun)"
  },
  {
    "id": 825,
    "part": 9,
    "word": "ग्रहण",
    "english": "Eclipse / Celestial occultation",
    "meaning": "सूर्य, चंद्र आणि पृथ्वी एका रेषेत आल्यावर पडणारी खगोलीय सावल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 826,
    "part": 9,
    "word": "न्यायवैद्यक",
    "english": "Forensic science / Forensics",
    "meaning": "गुन्ह्यांची अचूक उकल करण्यासाठी वैद्यकीय व वैज्ञाानिक तंत्रांचा वापर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 827,
    "part": 9,
    "word": "शवविच्छेेदन",
    "english": "Autopsy / Post-mortem",
    "meaning": "मृत्यूचे नेमके कारण शोधण्यासाठी मृतदेहाची केलेली वैद्यकीय चिरफाड",
    "pos": "नाम (Noun)"
  },
  {
    "id": 828,
    "part": 9,
    "word": "बोटांचे ठसे",
    "english": "Fingerprints / Dactyloscopy",
    "meaning": "प्रत्येक व्यक्तीच्या बोटांवर असणाऱ्या नैसर्गिक अद्वितीय रेषांच्या खुण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 829,
    "part": 9,
    "word": "जनुकीय चाचणी",
    "english": "DNA test / Genetic profiling",
    "meaning": "व्यक्तीची रक्तनाते व ओळख निर्विवाद सिद्ध करणारी जैविक चाचण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 830,
    "part": 9,
    "word": "गुन्हा अन्वेषण",
    "english": "Criminal investigation",
    "meaning": "गुन्हेगाराचा माग काढण्यासाठी पोलिसांनी राबवलेली पद्धतशीर शोधमोहीम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 831,
    "part": 9,
    "word": "पंचनामा",
    "english": "Inquest report / Panchanama",
    "meaning": "गुन्ह्याच्या घटनास्थळाची पंचांसमक्ष नोंदवलेली अधिकृत लेखी पाहण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 832,
    "part": 9,
    "word": "जप्तीनामा",
    "english": "Seizure memo",
    "meaning": "गुन्ह्याशी संबंधित वस्तू पुरावा म्हणून ताब्यात घेताना केलेला दस्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 833,
    "part": 9,
    "word": "अटक वॉरंट",
    "english": "Arrest warrant",
    "meaning": "न्यायालयाने आरोपीला ताब्यात घेण्यासाठी पोलिसांना दिलेला अधिकृत हुकूम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 834,
    "part": 9,
    "word": "झडती वॉरंट",
    "english": "Search warrant",
    "meaning": "संशयित जागेची कायदेशीर तपासणी करण्यासाठी न्यायालयाने दिलेली परवानग",
    "pos": "नाम (Noun)"
  },
  {
    "id": 835,
    "part": 9,
    "word": "पोलीस कोठडी",
    "english": "Police custody / Remand",
    "meaning": "तपासासाठी आरोपीला प्रत्यक्ष पोलिसांच्या देखरेखीखाली ठेवण्याचा काळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 836,
    "part": 9,
    "word": "न्यायालयीन कोठडी",
    "english": "Judicial custody",
    "meaning": "आरोपीला थेट दंडाधिकाऱ्यांच्या आदेशाने तुरुंगात ठेवण्याची व्यवस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 837,
    "part": 9,
    "word": "प्रथम माहिती",
    "english": "",
    "meaning": "अहवाल FIR (First Information Report) दखलपात्र गुन्ह्याबाबत पोलिस ठाण्यात नोंदवलेली प्राथमिक लेखी तक्रार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 838,
    "part": 9,
    "word": "संशयित",
    "english": "Suspect / Person of interest",
    "meaning": "गुन्हा घडवण्यामागे ज्याच्यावर पोलिसांचा संशय आहे अशी व्यक्ती नाम /",
    "pos": "विशेषण"
  },
  {
    "id": 839,
    "part": 9,
    "word": "फरार",
    "english": "Absconding / Fugitive / Escaped",
    "meaning": "कायदेशीर कारवाई व अटकेपासून पळून लपून बसलेला गुन्हेगार विशेषण /",
    "pos": "नाम"
  },
  {
    "id": 840,
    "part": 9,
    "word": "चकमक",
    "english": "Encounter / Shootout / Skirmish",
    "meaning": "गुन्हेगार आणि सुरक्षा रक्षकांमध्ये झालेली समोरासमोरील सशस्त्र लढाई",
    "pos": "नाम (Noun)"
  },
  {
    "id": 841,
    "part": 9,
    "word": "पुरावा नष्ट करणे",
    "english": "Tampering with evidence",
    "meaning": "न्यायालयाची दिशाभूल करण्यासाठी गुन्ह्याच्या खुणा पुसून टाकण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 842,
    "part": 9,
    "word": "फितूर साक्षीदार",
    "english": "Hostile witness",
    "meaning": "न्यायालयात स्वतःचे जुने विधान बदलून शत्रूला मदत करणारा साक्षीदार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 843,
    "part": 9,
    "word": "खंडणी",
    "english": "Extortion / Ransom money",
    "meaning": "धमकावून किंवा ओलीस ठेवून जबरदस्तीने उकळलेली पैशांची खंडण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 844,
    "part": 9,
    "word": "मानवी तस्करी",
    "english": "Human trafficking",
    "meaning": "अनैतिक कामांसाठी माणसांची किंवा बालकांची केलेली बेकायदेशीर खरेदी-विक्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 845,
    "part": 9,
    "word": "अमली पदार्थ",
    "english": "Narcotics / Illicit drugs",
    "meaning": "मेंदूवर घातक परिणाम करणारे आणि कायद्याने बंदी घातलेले मादक द्रव्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 846,
    "part": 9,
    "word": "तस्करी",
    "english": "Smuggling / Contraband trafficking",
    "meaning": "सीमा शुल्क चुकवून चोरट्याा वाटेने मालाची देशात आयात वा निर्यात करण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 847,
    "part": 9,
    "word": "बनावट दस्तऐवज",
    "english": "Forged document / Fake papers",
    "meaning": "दुसऱ्याची सही किंवा शिक्का चोरून तयार केलेले खोटे कायदेशीर कागदपत्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 848,
    "part": 9,
    "word": "गुप्तहेर यंत्रणा",
    "english": "Intelligence agency",
    "meaning": "देशाच्या सुरक्षेसाठी देशांतर्गत व बाह्य धोक्यांची गुप्त माहिती काढणारी संस्था तुरुंगवासादरम्यानकैद्यालासुशिक्षितकरूनचांगल्यामार्गावर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 849,
    "part": 9,
    "word": "गुन्हेगार",
    "english": "Culprit / Offender / Criminal",
    "meaning": "कायद्याचा भंग करून समाजद्रोही कृत्य करणारी व्यक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 850,
    "part": 9,
    "word": "शिक्षा",
    "english": "Sentence / Legal penalty / Punishment",
    "meaning": "गुन्हा सिद्ध झाल्यावर न्यायालयाने दिलेला कायदेशीर दंड वा कारावास",
    "pos": "नाम (Noun)"
  },
  {
    "id": 851,
    "part": 9,
    "word": "परिसंस्था",
    "english": "Ecosystem / Biome",
    "meaning": "सजीव प्राणी, वनस्पती आणि त्यांचे भौतिक पर्यावरण यांचा परस्परसंबंध",
    "pos": "नाम (Noun)"
  },
  {
    "id": 852,
    "part": 9,
    "word": "जैवविविधता",
    "english": "Biodiversity / Biological variety",
    "meaning": "विशिष्ट प्रदेशात आढळणाऱ्या वनस्पती व प्राण्यांच्या प्रजातींचे वैविध्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 853,
    "part": 9,
    "word": "अन्नसाखळी",
    "english": "Food chain / Trophic web",
    "meaning": "अन्नाासाठी एका सजीवावर दुसऱ्या सजीवाचे अवलंबून असणारे निसर्गचक्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 854,
    "part": 9,
    "word": "अधिवास",
    "english": "Habitat / Natural dwelling",
    "meaning": "वनस्पती किंवा प्राण्यांचे नैसर्गिक रीत्या वाढण्याचे राहणीमान क्षेत्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 855,
    "part": 9,
    "word": "नामशेष",
    "english": "Extinct / Annihilated",
    "meaning": "पृथ्वीवरून ज्या प्रजातीचा शेवटचा सजीवही नष्ट झाला आहे अशी अवस्थ",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 856,
    "part": 9,
    "word": "संकटग्रस्त प्रजाती",
    "english": "Endangered species",
    "meaning": "ज्यांचे अस्तित्व अत्यंत कमी उरले असून नामशेष होण्याच्या मार्गावर आहेत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 857,
    "part": 9,
    "word": "राष्ट्रीीय उद्यान",
    "english": "National park / Reserve",
    "meaning": "वन्यजीवांचे व नैसर्गिक सौंदर्याचे कायद्याने रक्षण केलेले विस्तीर्ण जंगल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 858,
    "part": 9,
    "word": "अभयारण्य",
    "english": "Wildlife sanctuary",
    "meaning": "प्राण्यांना निर्भयपणे वावरता यावे म्हणून मानवी हस्तक्षेपास बंदी असलेले वनक्षेत्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 859,
    "part": 9,
    "word": "पाणथळ जागा",
    "english": "Wetland / Marshland / Bog",
    "meaning": "पाण्याने वर्षभर वा काही काळ दलदलीने व्यापलेला अत्यंत समृद्ध भूप्रदेश",
    "pos": "नाम (Noun)"
  },
  {
    "id": 860,
    "part": 9,
    "word": "कांदळवन",
    "english": "Mangrove forest / Swamps",
    "meaning": "समुद्रकिनाऱ्यावरील खाऱ्या पाण्यात वाढणाऱ्या विशेष झुडपांचे संरक्षक जाळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 861,
    "part": 9,
    "word": "जलसंधारण",
    "english": "Water conservation / Harvesting",
    "meaning": "पावसाचे वाहून जाणारे पाणी जमिनीत अडवून भूजल पातळी वाढवण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 862,
    "part": 9,
    "word": "भूजल पातळी",
    "english": "Groundwater table",
    "meaning": "जमिनीच्या खाली खडकांच्या पोकळीत साचलेल्या गोड्याा पाण्याचा थर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 863,
    "part": 9,
    "word": "सेंद्रिय शेती",
    "english": "Organic farming",
    "meaning": "रासायनिक खते न वापरता शेणखत व वनस्पतींवर केलेली विषमुक्त शेत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 864,
    "part": 9,
    "word": "कीटकनाशक",
    "english": "Pesticide / Insecticide",
    "meaning": "पिकांना नुकसान करणाऱ्या किड्यांांचा नाश करण्यासाठी फवारलेले रसायन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 865,
    "part": 9,
    "word": "रासायनिक खत",
    "english": "Chemical fertilizer",
    "meaning": "पिकांच्या जलद वाढीसाठी कारखान्यात तयार केलेले कृत्रिम पोषणद्रव्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 866,
    "part": 9,
    "word": "ठिबक सिंचन",
    "english": "Drip irrigation system",
    "meaning": "नळ्यांच्या साहाय्याने पिकांच्या थेट मुळाशी थेंब-थेंब पाणी देण्याची पद्धत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 867,
    "part": 9,
    "word": "तुषार सिंचन",
    "english": "Sprinkler irrigation",
    "meaning": "कारंज्यासारखे पाणी हवेत फवारून शेतात पावसासारखा शिडकावा करण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 868,
    "part": 9,
    "word": "मृदा संधारण",
    "english": "Soil conservation",
    "meaning": "सुपीक मातीची वाऱ्याने किंवा पाण्याच्या प्रवाहाने होणारी धूप थांबवण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 869,
    "part": 9,
    "word": "मातीची धूप",
    "english": "Soil erosion / Denudation",
    "meaning": "मुसळधार पाऊस किंवा वादळामुळे जमिनीचा सुपीक वरचा थर वाहून जाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 870,
    "part": 9,
    "word": "कचरा व्यवस्थापन",
    "english": "Waste management",
    "meaning": "कचऱ्याचे ओला-सुका वर्गीकरण करून पुनर्वापर व शास्त्रीय विल्हेवाट लावण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 871,
    "part": 9,
    "word": "पुनर्वापर",
    "english": "Recycling / Repurposing",
    "meaning": "टाकाऊ वस्तूंवर प्रक्रिया करून त्यापासून पुन्हा उपयुक्त वस्तू बनवण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 872,
    "part": 9,
    "word": "हरितगृह परिणाम",
    "english": "Greenhouse effect",
    "meaning": "वातावरणातील वायूंमुळे उष्णता कोंडून राहून तापमान वाढण्याची नैसर्गिक क्रिय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 873,
    "part": 9,
    "word": "जागतिक",
    "english": "",
    "meaning": "तापमानवाढ Global warming प्रदूषणामुळे संपूर्ण पृथ्वीच्या सरासरी तापमानात होत असलेली घातक वाढ O one la er / Stratosphere सूर्यापासूनयेणाऱ्याहानिकारकअतिनीलकिरणांनारोखणार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 874,
    "part": 9,
    "word": "पर्यावरण संवर्धन",
    "english": "Environmental conservation",
    "meaning": "निसर्गाचे समतोल रक्षण आणि प्रदूषण रोखण्यासाठी केलेली कृत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 875,
    "part": 9,
    "word": "नैसर्गिक साधनसंपत्ती",
    "english": "Natural resources",
    "meaning": "निसर्गाने मानवाला विनामूल्य दिलेली पाणी, खनिजे व वने यांसारखी संपत्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 876,
    "part": 9,
    "word": "तर्कशास्त्र",
    "english": "Logic / Rational dialectic",
    "meaning": "विचारांची मांडणी व निष्कर्ष काढण्याचे नियमबद्ध बुद्धिनिष्ठ शास्त्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 877,
    "part": 9,
    "word": "युक्तिवाद",
    "english": "Argument / Reasoning",
    "meaning": "आपले मत पटवून देण्यासाठी पुराव्यासह केलेली बुद्धीप्रामाण्य मांडण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 878,
    "part": 9,
    "word": "गृहीतक",
    "english": "Hypothesis / Premise",
    "meaning": "सिद्धांत मांडण्यापूर्वी प्रयोगासाठी मानून घेतलेली तात्पुरती कल्पन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 879,
    "part": 9,
    "word": "अपवाद",
    "english": "Exception / Anomaly",
    "meaning": "सर्वसामान्य नियमात न बसणारा किंवा वेगळा ठरलेला घटक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 880,
    "part": 9,
    "word": "परस्परसंबंध",
    "english": "Correlation / Interrelation",
    "meaning": "दोन किंवा अधिक घटनांमधील एकमेकांवर प्रभाव पाडणारा अंतर्गत दुव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 881,
    "part": 9,
    "word": "विरोधाभास",
    "english": "Paradox / Contradiction",
    "meaning": "वरवर पाहता परस्परविरोधी वाटणारे पण सखोल अर्थ सामावणारे विधान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 882,
    "part": 9,
    "word": "संभ्रम",
    "english": "Confusion / Perplexity",
    "meaning": "नेमके काय करावे किंवा काय खरे आहे हे न समजण्याची गोंधळाची अवस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 883,
    "part": 9,
    "word": "स्पष्टीकरण",
    "english": "Clarification / Elucidation",
    "meaning": "शंका दूर करण्यासाठी विषयाची उकल करून दिलेली सोपी माहित",
    "pos": "नाम (Noun)"
  },
  {
    "id": 884,
    "part": 9,
    "word": "पुनरावृत्तीी",
    "english": "Repetition / Recurrence",
    "meaning": "एकाच घटनेचे किंवा विधानाचे वारंवार घडून येण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 885,
    "part": 9,
    "word": "संक्षिप्त रूप",
    "english": "Abbreviation / Acronym",
    "meaning": "मोठ्याा नावाचा किंवा संज्ञेेचा सोयीसाठी केलेला लहान संक्षेप",
    "pos": "नाम (Noun)"
  },
  {
    "id": 886,
    "part": 9,
    "word": "पूर्वग्रह",
    "english": "Prejudice / Preconceived bias",
    "meaning": "सत्य जाणून घेण्यापूर्वीच मनात तयार करून घेतलेले गैरसमजूतीचे मत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 887,
    "part": 9,
    "word": "निपक्षपाती",
    "english": "Impartial / Unbiased / Fair",
    "meaning": "कोणाचीही एकतर्फी बाजू न घेता केवळ न्यायाचा आधार घेणार",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 888,
    "part": 9,
    "word": "दूरगामी परिणाम",
    "english": "Far-reaching impact / Ramifications",
    "meaning": "सध्याच्या निर्णयामुळे भविष्यात दीर्घकाळ जाणवणारे मोठे परिणाम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 889,
    "part": 9,
    "word": "तुलनात्मक अभ्यास",
    "english": "Comparative analysis / Study",
    "meaning": "दोन भाषा, संस्कृती वा सिद्धांतांचे साम्य-भेद शोधून केलेला सखोल अभ्यास",
    "pos": "नाम (Noun)"
  },
  {
    "id": 890,
    "part": 9,
    "word": "सारांश काढणे",
    "english": "To summarize / Synthesize",
    "meaning": "विस्तृत ग्रंथाचा वा भाषणाचा मूळ गाभा थोडक्यात मांडण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 891,
    "part": 9,
    "word": "सिद्ध करणे",
    "english": "To prove / Corroborate",
    "meaning": "तर्क आणि पुराव्यांच्या आधारे एखादे विधान शंभर टक्के खरे दाखवण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 892,
    "part": 9,
    "word": "गृहीत धरणे",
    "english": "To assume / Postulate",
    "meaning": "सत्यता तपासण्याआधीच एखादी गोष्ट खरी मानून निष्कर्ष काढण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 893,
    "part": 9,
    "word": "मतभेद मिटवणे",
    "english": "To resolve differences / Reconcile",
    "meaning": "चर्चेच्या व संवादाच्या माध्यमातून मनातील कटुता व वाद संपवण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 894,
    "part": 9,
    "word": "सहमती दशवणे",
    "english": "To concur / Endorse / Accede",
    "meaning": "दुसऱ्याच्या मताला व निर्णयाला पूर्ण पाठिंबा देण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 895,
    "part": 9,
    "word": "आक्षेप नोंदवणे",
    "english": "To object / Take exception",
    "meaning": "चुकीच्या विधानावर वा नियमावर कायदेशीर किंवा तोंडी हरकत घेण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 896,
    "part": 9,
    "word": "स्थगिती देणे",
    "english": "To stay execution / Grant a stay",
    "meaning": "प्रशासकीय आदेशाचा किंवा न्यायालयाच्या शिक्षेचा अंमल तात्पुरता रोखण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 897,
    "part": 9,
    "word": "दिशाभूल करणे",
    "english": "To mislead / Misinform",
    "meaning": "खोटी माहिती पसरवून जनतेचा किंवा चौकशीचा मार्ग भरकटवण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 898,
    "part": 9,
    "word": "पुनरुज्जीीवन करणे",
    "english": "To revive / Resuscitate",
    "meaning": "लोप पावत चाललेल्या जुन्या कलेला, परंपरेला किंवा अर्थव्यवस्थेला नवसंजीवनी देण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 899,
    "part": 9,
    "word": "समन्वय साधणे",
    "english": "To coordinate / Synchronize",
    "meaning": "अनेक विभागांमध्ये किंवा घटकांमध्ये सुसंवाद ठेवून एकत्रित कार्य घडवण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 900,
    "part": 9,
    "word": "उद्दिष्ट साध्य करणे",
    "english": "To accomplish objective / Goal",
    "meaning": "अथक परिश्रमांतून निश्चित केलेले साध्य यशस्वीपणे पूर्णत्वासनेण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 901,
    "part": 10,
    "word": "भाषाशास्त्र",
    "english": "Linguistics / Philology",
    "meaning": "भाषेची रचना, उच्चार, व्याकरण व इतिहासाचा शास्त्रोक्त अभ्यास",
    "pos": "नाम (Noun)"
  },
  {
    "id": 902,
    "part": 10,
    "word": "लिपी",
    "english": "Script / Writing system",
    "meaning": "भाषेचे ध्वनी चिन्हांच्या रूपात कागदावर उतरवण्याची पद्धत (उदा. देवनागरी)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 903,
    "part": 10,
    "word": "उच्चाार",
    "english": "Pronunciation / Diction",
    "meaning": "मुखावाटे अक्षरांचा वा शब्दांचा केलेला स्पष्ट व अचूक ध्वन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 904,
    "part": 10,
    "word": "स्वरयंत्र",
    "english": "Vocal cords / Larynx",
    "meaning": "मानवी घशातील हवेच्या दाबाने नाद निर्माण करणारा अवयव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 905,
    "part": 10,
    "word": "व्युुत्पत्ती",
    "english": "Etymology / Word derivation",
    "meaning": "शब्दाचे मूळ रूप, धातू आणि त्याच्या ऐतिहासिक प्रवासाचा शोध",
    "pos": "नाम (Noun)"
  },
  {
    "id": 906,
    "part": 10,
    "word": "समानार्थी",
    "english": "Synonym / Equivalent word",
    "meaning": "समान किंवा एकाच प्रकारचा भावार्थ व्यक्त करणारे पर्यायी शब्द विशेषण /",
    "pos": "नाम"
  },
  {
    "id": 907,
    "part": 10,
    "word": "विरुद्धाार्थी",
    "english": "Antonym / Opposite term",
    "meaning": "परस्परविरोधी किंवा पूर्णपणे उलटा अर्थ सांगणारा शब्द विशेषण /",
    "pos": "नाम"
  },
  {
    "id": 908,
    "part": 10,
    "word": "म्हणी",
    "english": "Proverb / Adage / Saw",
    "meaning": "समाजाच्या अनुभवातून सिद्ध झालेले आणि शतकानुशतके चाललेले बोधवाक्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 909,
    "part": 10,
    "word": "वाक्प्रचार",
    "english": "Idiom / Phrase / Locution",
    "meaning": "शब्दाच्या थेट वाच्यार्थापेक्षा वेगळा लाक्षणिक व प्रभावी अर्थ देणारा समूह",
    "pos": "नाम (Noun)"
  },
  {
    "id": 910,
    "part": 10,
    "word": "अलंकार",
    "english": "Figure of speech / Rhetoric",
    "meaning": "भाषेचे किंवा काव्याचे सौंदर्य वाढवणारी शब्दरचना वा अर्थरचन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 911,
    "part": 10,
    "word": "वृत्त",
    "english": "Poetic metre / Cadence",
    "meaning": "पद्यरचनेत अक्षरांच्या लघु-गुरू क्रमाने होणारी नियमित तालबद्ध रचन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 912,
    "part": 10,
    "word": "काव्याात्मक",
    "english": "Poetic / Lyrical / Melodious",
    "meaning": "मनाला स्पश करणारी गेय, भावमधुर आणि सुंदर रचन",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 913,
    "part": 10,
    "word": "गद्य",
    "english": "Prose",
    "meaning": "छंद वा यमक नसलेली साध्या सुटसुटीत वाक्यांची व्यवहार्य मांडण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 914,
    "part": 10,
    "word": "पद्य",
    "english": "Verse / Poetry form",
    "meaning": "लय, ताल आणि यमकात बांधलेली गायनक्षम कविता वा ओव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 915,
    "part": 10,
    "word": "अनुवाद",
    "english": "Translation / Rendering",
    "meaning": "एका भाषेतील मूळ विचार दुसऱ्या भाषेत अर्थ न बदलता मांडणे (भाषांतर)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 916,
    "part": 10,
    "word": "रूपांतर",
    "english": "Adaptation / Transmutation",
    "meaning": "मूळ कथेचा गाभा घेऊन नव्या स्थानिक किंवा आधुनिक संदर्भात केलेली पुनर्रचन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 917,
    "part": 10,
    "word": "संकलन",
    "english": "Compilation / Anthology",
    "meaning": "वेगवेगळ्या ठिकाणची माहिती किंवा उत्तम साहित्य एकत्र गोळा करण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 918,
    "part": 10,
    "word": "चरित्र",
    "english": "Biography / Life narrative",
    "meaning": "एखाद्या थोर व्यक्तीच्या समग्र जीवनप्रवासाचे केलेले सत्य चित्रण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 919,
    "part": 10,
    "word": "आत्मचरित्र",
    "english": "Autobiography / Memoir",
    "meaning": "व्यक्तीने स्वतःच्याच आयुष्यातील अनुभवांवर लिहिलेला सत्य ग्रंथ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 920,
    "part": 10,
    "word": "प्रवासवर्णन",
    "english": "Travelogue / Travel essay",
    "meaning": "प्रवासात पाहिलेली नवीन शहरे, निसर्ग आणि संस्कृतीची रंजक सफर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 921,
    "part": 10,
    "word": "लोकसाहित्य",
    "english": "Folk literature / Oral folklore",
    "meaning": "लोकमानसातून मौखिक परंपरेने शतकानुशतके चालत आलेले पारंपरिक वाङ्मय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 922,
    "part": 10,
    "word": "पोवाडा",
    "english": "Ballad / Heroic eulogy",
    "meaning": "छत्रपती शिवाजी महाराज व वीरांच्या पराक्रमाचे वर्णन करणारे वीरश्रीपूर्ण काव्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 923,
    "part": 10,
    "word": "लावणी",
    "english": "Lavani / Folk musical form",
    "meaning": "ढोलकीच्या तालावर सादर होणारी महाराष्ट्राची शृंगारिक पारंपरिक लोकनृत्य शैली",
    "pos": "नाम (Noun)"
  },
  {
    "id": 924,
    "part": 10,
    "word": "अलंकार",
    "english": "Figure of speech / Rhetorical embellishment",
    "meaning": "भाषेचे आणि साहित्याचे सौंदर्य वाढवणारे काव्यात्मक प्रकार",
    "pos": "नाम (Noun)"
  },
  {
    "id": 925,
    "part": 10,
    "word": "वृत्त",
    "english": "Poetic meter / Prosody",
    "meaning": "कवितेतील अक्षरांच्या लघु-गुरू रचनेनुसार ठरलेले तालबद्ध नियम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 926,
    "part": 10,
    "word": "किल्ले",
    "english": "Fort / Fortress / Citadel",
    "meaning": "शत्रूच्या आक्रमणापासून संरक्षणासाठी पर्वतावर बांधलेली अभेद्य तटबंदी (दुर्ग)",
    "pos": "नाम (Noun)"
  },
  {
    "id": 927,
    "part": 10,
    "word": "बुरुज",
    "english": "Bastion / Rampart turret",
    "meaning": "किल्ल्याच्या तटबंदीत पहारा ठेवण्यासाठी व तोफा रोखण्यासाठी पुढे आलेला घुमट",
    "pos": "नाम (Noun)"
  },
  {
    "id": 928,
    "part": 10,
    "word": "तटबंदी",
    "english": "Fortification / Defensive perimeter",
    "meaning": "किल्ल्याभोवती किंवा शहराभोवती दगडांची उभारलेली अभेद्य उंच भिंत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 929,
    "part": 10,
    "word": "शिलालेख",
    "english": "Stone inscription / Epigraph",
    "meaning": "इतिहास व आज्ञा जतन करण्यासाठी खडकावर वा दगडावर कोरलेला मजकूर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 930,
    "part": 10,
    "word": "ताम्रपट",
    "english": "Copper plate charter",
    "meaning": "तांब्याच्या पत्र्यावर राजाने कोरून दिलेले अधिकृत दानपत्र किंवा आज्ञापत्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 931,
    "part": 10,
    "word": "नाणी",
    "english": "Coins / Numismatic currency",
    "meaning": "इतिहास आणि राजवटींचा कालखंड दशवणारी प्राचीन धातूची नाण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 932,
    "part": 10,
    "word": "संग्रहालय",
    "english": "Museum / Historical archives",
    "meaning": "दुर्मिळ ऐतिहासिक वस्तू, शस्त्रे व कलाकृती जतन करून ठेवण्याची सुरक्षित वास्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 933,
    "part": 10,
    "word": "वास्तुशास्त्र",
    "english": "Architecture / Spatial science",
    "meaning": "इमारती, मंदिरे आणि नगरांच्या दिशा व उभारणीचे पारंपरिक शास्त्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 934,
    "part": 10,
    "word": "शिल्पकला",
    "english": "Sculpture / Stone-carving art",
    "meaning": "दगडावर वा धातूवर अत्यंत बारकाईने नक्षी व देखणी मूर्ती कोरण्याचे कौशल्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 935,
    "part": 10,
    "word": "चित्रकला",
    "english": "Painting / Visual arts",
    "meaning": "रेषा आणि रंगांच्या साह्याने कागदावर वा भिंतीवर साकारलेली दृश्य कल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 936,
    "part": 10,
    "word": "लोककला",
    "english": "Folk art / Traditional performing art",
    "meaning": "स्थानिक मातीतील लोकांच्या जगण्यातून उत्स्फूूर्तपणे जन्माला आलेली कल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 937,
    "part": 10,
    "word": "वारली चित्रकला",
    "english": "Warli painting / Tribal tribal art",
    "meaning": "महाराष्ट्रातील आदिवासी बांधवांची निसर्ग, मानवी जीवन दशवणारी गेरूची रेखाटन कल",
    "pos": "नाम (Noun)"
  },
  {
    "id": 938,
    "part": 10,
    "word": "दशावतार",
    "english": "Dashavatara / Konkan folk theatre",
    "meaning": "कोकणातील विष्णूच्या दहा अवतारांच्या कथांवर आधारलेले पारंपरिक लोकनाट्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 939,
    "part": 10,
    "word": "कीर्तन",
    "english": "Kirtan / Narrative sermon",
    "meaning": "कथा, संगीत, श्लोोक आणि निरूपणातून समाजप्रबोधन करणारी संतांची भक्ती परंपर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 940,
    "part": 10,
    "word": "भजन",
    "english": "Bhajan / Devotional chanting",
    "meaning": "ईश्वराच्या नामाचे व गुणांचे एकत्रितपणे टाळ-मृदंगावर केलेले गायन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 941,
    "part": 10,
    "word": "वारी",
    "english": "Wari / Pandharpur pilgrimage",
    "meaning": "पंढरपूरच्या विठ्ठलाच्या भेटीसाठी महाराष्ट्रातील वारकऱ्यांनी पायी केलेली पवित्र पदयात्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 942,
    "part": 10,
    "word": "पालखी",
    "english": "Palanquin / Sacred procession",
    "meaning": "संत ज्ञानेश्वर, संत तुकाराम यांच्या पादुका सन्मानाने पंढरपूरला नेणारी मिरवणूक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 943,
    "part": 10,
    "word": "आषाढी एकादशी",
    "english": "Ashadhi Ekadashi",
    "meaning": "पंढरपुरात लाखो वारकरी एकत्र येऊन साजरा होणारा महाराष्ट्राचा महान भक्ती सोहळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 944,
    "part": 10,
    "word": "गुढीपाडवा",
    "english": "Gudhi Padwa / Marathi New Year",
    "meaning": "चैत्र शुद्ध प्रतिपदेला गुढी उभारून उत्साहात साजरा केला जाणारा मराठी नववर्ष दिन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 945,
    "part": 10,
    "word": "गणेशोत्सव",
    "english": "Ganeshotsav / Ganesh festival",
    "meaning": "लोकमान्य टिळकांनी समाज प्रबोधनासाठी सुरू केलेला दहा दिवसांचा महाउत्सव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 946,
    "part": 10,
    "word": "शिवजयंती",
    "english": "Shiv Jayanti / Shivaji Maharaj Day",
    "meaning": "छत्रपती शिवाजी महाराजांच्या पावन जन्माचे व स्वराज्याचे स्मरण करणारा राष्ट्रीय सोहळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 947,
    "part": 10,
    "word": "संक्रांत",
    "english": "Makar Sankranti",
    "meaning": "तिळगूळ वाटून जुने हेवेदावे विसरून स्नेह वाढवणारा सूर्याच्या संक्रमणाचा सण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 948,
    "part": 10,
    "word": "दिवाळी",
    "english": "Diwali / Festival of Lights",
    "meaning": "अंधारावर प्रकाशाचा आणि वाईटावर चांगल्याचा विजय दर्शवणारा दीपमहोत्सव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 949,
    "part": 10,
    "word": "उत्सव",
    "english": "Festival / Cultural celebration",
    "meaning": "आनंद आणि परंपरेने मोठ्या उत्साहात साजरा केला जाणारा सण वा सोहळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 950,
    "part": 10,
    "word": "वारसा",
    "english": "Heritage / Legacy / Cultural tradition",
    "meaning": "पूर्वजांकडून पिढ्यान्पिढ्या चालत आलेली समृद्ध मूल्ये, वास्तू व संस्कृत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 951,
    "part": 10,
    "word": "ज्ञानसाधना",
    "english": "Pursuit of knowledge / Intellect",
    "meaning": "सत्य, विद्या आणि विज्ञानाचा शोध घेण्यासाठी सातत्याने केलेली तपश्चर्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 952,
    "part": 10,
    "word": "विद्यापीठ",
    "english": "University / Seat of higher learning",
    "meaning": "अनेक ज्ञानशाखांचे सर्वोच्च संशोधन व पदवी प्रदान करणारी शिखर संस्थ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 953,
    "part": 10,
    "word": "विद्वाान",
    "english": "Scholar / Savant / Erudite person",
    "meaning": "विविध विद्या आणि शास्त्रांचा गाढा अभ्यास असलेला प्रकांड पंडित नाम /",
    "pos": "विशेषण"
  },
  {
    "id": 954,
    "part": 10,
    "word": "विचारवंत",
    "english": "Intellectual / Thinker / Philosopher",
    "meaning": "समाजातील घडामोडींवर सखोल चिंतन करून देशाला नवी दिशा देणारा विचारशील पुरुष नाम /",
    "pos": "विशेषण"
  },
  {
    "id": 955,
    "part": 10,
    "word": "समाजसुधारक",
    "english": "Social reformer / Emancipator",
    "meaning": "जातीभेद, अनिष्ठ रूढी आणि अंधश्रद्धा दूर करण्यासाठी लढा देणारा युगपुरुष",
    "pos": "नाम (Noun)"
  },
  {
    "id": 956,
    "part": 10,
    "word": "प्रबोधन",
    "english": "Renaissance / Enlightenment",
    "meaning": "समाजातील अज्ञानाचा अंधार दूर करून नव्या पुरोगामी वैज्ञानिक विचारांची जागृत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 957,
    "part": 10,
    "word": "मानवता",
    "english": "Humanity / Compassion for all",
    "meaning": "जात, धर्म, प्रांत आणि देशाच्या सीमा ओलांडून सर्व माणसांवर केलेले निखळ प्रेम",
    "pos": "नाम (Noun)"
  },
  {
    "id": 958,
    "part": 10,
    "word": "बंधुभाव",
    "english": "Universal brotherhood / Fraternity",
    "meaning": "समाजातील प्रत्येक व्यक्तीला स्वतःच्या सख्ख्या भावंडाप्रमाणे मानण्याची उदात्त भावन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 959,
    "part": 10,
    "word": "सहिष्णुता",
    "english": "Tolerance / Broad- mindedness",
    "meaning": "इतरांच्या भिन्न मतांचा, धर्मांचा, श्रद्धांचा व जीवनशैलीचा आदर करण्याची वृत्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 960,
    "part": 10,
    "word": "अहिंसा",
    "english": "Non-violence / Harmlessness",
    "meaning": "कोणत्याही सजीवाला मनाने, शब्दाने किंवा शरीराने इजा न पोहचवण्याचे महान तत्त्व",
    "pos": "नाम (Noun)"
  },
  {
    "id": 961,
    "part": 10,
    "word": "नीतिमत्ता",
    "english": "Morality / Ethical rectitude",
    "meaning": "जीवनात योग्य, सत्य आणि सदाचरणाच्या मार्गावर चालण्याची चारित्र्यसंपन्नत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 962,
    "part": 10,
    "word": "विवेक",
    "english": "Discernment / Prudence / Reason",
    "meaning": "योग्य काय आणि अयोग्य काय हे बुद्धीने आणि निपक्षपातीपणे पारखण्याची शक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 963,
    "part": 10,
    "word": "प्रज्ञा",
    "english": "Intuitive wisdom / Higher intellect",
    "meaning": "सत्याचे यथार्थ दशन घडवणारी अतिशय सखोल, सूक्ष्म आणि निष्कलंक बुद्धिमत्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 964,
    "part": 10,
    "word": "करुणा",
    "english": "Compassion / Tender mercy",
    "meaning": "पीडितांचे, गरीबांचे दुःख पाहून मनातून उत्स्फूूर्तपणे वाहणारी मदतकारी दय",
    "pos": "नाम (Noun)"
  },
  {
    "id": 965,
    "part": 10,
    "word": "कृतनिश्चय",
    "english": "Firm resolve / Determination",
    "meaning": "ध्येय साध्य करण्यासाठी कोणत्याही संकटाला सामोरे जाण्याचा केलेला पक्का निश्चय नाम /",
    "pos": "विशेषण"
  },
  {
    "id": 966,
    "part": 10,
    "word": "निस्वार्थ",
    "english": "Selfless / Altruistic / Unselfish",
    "meaning": "स्वतःच्या नफ्याचा, स्वार्थाचा किंवा फळाचा कोणताही विचार न ठेवणारा निर्मळ",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 967,
    "part": 10,
    "word": "समर्पण",
    "english": "Dedication / Consecration / Devotion",
    "meaning": "उदात्त कार्यासाठी स्वतःचे आयुष्य, संपत्ती आणि वेळ आनंदाने अर्पण करण्याची भावन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 968,
    "part": 10,
    "word": "औदार्य",
    "english": "Magnanimity / Generosity",
    "meaning": "मोठ्याा आणि उदार अंतःकरणाने इतरांना भरभरून मदत व दान देण्याची थोरव",
    "pos": "नाम (Noun)"
  },
  {
    "id": 969,
    "part": 10,
    "word": "अंतदृष्टी",
    "english": "Insight / Intuition / Inner wisdom",
    "meaning": "बाह्य जगाच्या पलीकडे जाऊन मनाच्या व समस्येच्या मुळाशी डोकावणारी आत्मिक दृष्ट",
    "pos": "नाम (Noun)"
  },
  {
    "id": 970,
    "part": 10,
    "word": "आत्मपरीक्षण",
    "english": "Introspection / Self- examination",
    "meaning": "स्वतःच्या मनातील विचार, चुका आणि वर्तणुकीचे तटस्थपणे केलेले मूल्यमापन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 971,
    "part": 10,
    "word": "स्थि",
    "english": "",
    "meaning": "तप्रज्ञ Equanimous / Emotionally steadfast सुखाच्या वेळी हुरळून न जाणारा आणि दुःखाच्या वेळी खचून न पडणारा स्थि र मनाचा पुरुष नाम /",
    "pos": "विशेषण"
  },
  {
    "id": 972,
    "part": 10,
    "word": "मोक्ष",
    "english": "Liberation / Spiritual emancipation",
    "meaning": "सर्व प्रकारच्या ऐहिक दुःखांतून व जन्म-मरणाच्या बंधनातून झालेली अंतिम मुक्त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 973,
    "part": 10,
    "word": "अध्यात्म",
    "english": "Spirituality / Inner philosophy",
    "meaning": "आत्म्याचे, ईश्वराचे आणि या विश्वाच्या अंतिम सत्याचे आंतरिक ज्ञान व अनुभूती",
    "pos": "नाम (Noun)"
  },
  {
    "id": 974,
    "part": 10,
    "word": "सदाचार",
    "english": "Righteous conduct / Moral virtue",
    "meaning": "नीती, सत्य आणि न्यायावर आधारलेले चारित्र्यसंपन्न आचरण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 975,
    "part": 10,
    "word": "विद्यादान",
    "english": "Imparting knowledge / Gift of education",
    "meaning": "इतरांच्या जीवनात अज्ञानाचा अंधकार दूर करण्यासाठी केलेले ज्ञानदान",
    "pos": "नाम (Noun)"
  },
  {
    "id": 976,
    "part": 10,
    "word": "राष्ट्रनिर्मिती",
    "english": "Nation-building / Patriotic development",
    "meaning": "देशाला आर्थिक, वैज्ञानिक, शैक्षणिक व सांस्कृतिक दृष्टीने बलशाली बनवण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 977,
    "part": 10,
    "word": "लोककल्याण",
    "english": "Public welfare / Common good",
    "meaning": "समाजातील दुर्बल व वंचित घटकांपर्यंत प्रगती आणि सुखाची फळे पोहोचवण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 978,
    "part": 10,
    "word": "सर्वसमावेशक",
    "english": "Inclusive / All-embracing",
    "meaning": "कोणालाही मागे न सोडता सर्व जाती, धर्म व घटकांना सोबत घेऊन जाणारी नीत",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 979,
    "part": 10,
    "word": "स्वावलंबन",
    "english": "Self-reliance / Autarky",
    "meaning": "दुसऱ्या कोणावरही अवलंबून न राहता स्वतःच्या पायावर स्वाभिमानाने उभे राहण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 980,
    "part": 10,
    "word": "नवनिर्मिती",
    "english": "Innovation / Novel invention",
    "meaning": "जुन्या चाकोरीतून बाहेर पडून नव्या कल्पकतेने आधुनिक संशोधन व निर्मिती करण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 981,
    "part": 10,
    "word": "दूरदृष्टी",
    "english": "Farsightedness / Visionary insight",
    "meaning": "पुढील अनेक दशकांचा आणि पिढ्यांांचा अचूक वेध घेऊन आज दूरगामी निर्णय घेण",
    "pos": "नाम (Noun)"
  },
  {
    "id": 982,
    "part": 10,
    "word": "कर्तृत्व",
    "english": "Achievement / Excellence / Eminence",
    "meaning": "स्वतःच्या अफाट कष्टांनी व कौशल्याने समाजात निर्माण केलेले आदराचे स्थान व कार्य",
    "pos": "नाम (Noun)"
  },
  {
    "id": 983,
    "part": 10,
    "word": "पराक्रम",
    "english": "Valor / Prowess / Feat of bravery",
    "meaning": "कठीण प्रसंगात प्राणाची पर्वा न करता शौर्याने गाजवलेली ऐतिहासिक कामगिर",
    "pos": "नाम (Noun)"
  },
  {
    "id": 984,
    "part": 10,
    "word": "कीर्ती",
    "english": "Renown / Undying fame / Glory",
    "meaning": "चांगल्या आणि निस्वार्थ कार्यामुळे दशदिशांना पसरलेली सुगंधासारखी उज्ज्वल ख्यात",
    "pos": "नाम (Noun)"
  },
  {
    "id": 985,
    "part": 10,
    "word": "राष्ट्रध्वज",
    "english": "National flag / Tricolor banner",
    "meaning": "देशाचे सार्वभौमत्व, स्वातंत्र्य, त्याग आणि एकात्मतेचे सर्वोच्च पावन प्रतीक",
    "pos": "नाम (Noun)"
  },
  {
    "id": 986,
    "part": 10,
    "word": "राष्ट्रगीत",
    "english": "National anthem",
    "meaning": "देशाचा गौरव आणि कोट्यवधी नागरिकांच्या मनात देशभक्ती चेतवणारे अधिकृत समूहगीत",
    "pos": "नाम (Noun)"
  },
  {
    "id": 987,
    "part": 10,
    "word": "राजमुद्राा",
    "english": "Royal seal / State emblem",
    "meaning": "छत्रपती शिवाजी महाराजांच्या स्वराज्याची लोककल्याणकारी व आदरणीय राजमुद्र",
    "pos": "नाम (Noun)"
  },
  {
    "id": 988,
    "part": 10,
    "word": "अभिजात",
    "english": "Classical / Time-honored elite status",
    "meaning": "दोन हजार वर्षांपेक्षा जास्त प्राचीनता, मौलिक साहित्य व वैभव असलेली भाष",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 989,
    "part": 10,
    "word": "समृद्धी",
    "english": "Prosperity / Affluence / Abundance",
    "meaning": "ज्ञान, धनधान्य, कला आणि आनंदाने परिपूर्ण असलेली भरभराटीची स्थि त",
    "pos": "नाम (Noun)"
  },
  {
    "id": 990,
    "part": 10,
    "word": "एकात्मता",
    "english": "Integrity / Cohesion / National unity",
    "meaning": "विविध भाषा, प्रांत आणि धर्म असले तरी संपूर्ण देशाचे अंतःकरण एक असल्याची भावन",
    "pos": "नाम (Noun)"
  },
  {
    "id": 991,
    "part": 10,
    "word": "अखंड",
    "english": "Unbroken / Indivisible / Perpetual",
    "meaning": "कधीही खंड न पडणारा, एकसंध, अखंडित आणि चिरकाल टिकणारा प्रवाह",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 992,
    "part": 10,
    "word": "संवर्धन करणे",
    "english": "To conserve / Nurture / Cherish",
    "meaning": "आपली भाषा, संस्कृती, पर्यावरण आणि ऐतिहासिक वास्तूंची निगा राखणे व वाढवण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 993,
    "part": 10,
    "word": "अंगीकारणे",
    "english": "To adopt / Embrace / Internalize",
    "meaning": "चांगले विचार, नैतिक मूल्ये आणि पुरोगामी तत्त्वे स्वतःच्या आचरणात स्वीकारण",
    "pos": "क्रियापद (Verb)"
  },
  {
    "id": 994,
    "part": 10,
    "word": "समर्पित करणे",
    "english": "To dedicate / Devote wholeheartedly",
    "meaning": "आपले श्रम, बुद्धी आणि कार्य समाजहितासाठी व राष्ट्रसेवेसाठी अर्पण करण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 995,
    "part": 10,
    "word": "प्रतिष्ठा राखणे",
    "english": "To uphold dignity / Preserve honor",
    "meaning": "स्वतःच्या चारित्र्यसंपन्न आचरणाने घराची, भाषेची आणि देशाची मान उंचावण",
    "pos": "संयुक्त क्रियापद"
  },
  {
    "id": 996,
    "part": 10,
    "word": "सुवर्णकाळ",
    "english": "Golden era / Zenith of prosperity",
    "meaning": "एखाद्या भाषेच्या, राज्याच्या किंवा संस्कृतीच्या प्रगतीचा सर्वांत वैभवशाली काळ",
    "pos": "नाम (Noun)"
  },
  {
    "id": 997,
    "part": 10,
    "word": "ज्ञानसूर्य",
    "english": "Sun of knowledge / Luminary",
    "meaning": "अज्ञानाचा अंधकार दूर करून लाखो लोकांच्या जीवनात ज्ञानाचा प्रकाश पाडणारा महापुरुष",
    "pos": "नाम (Noun)"
  },
  {
    "id": 998,
    "part": 10,
    "word": "शतकोत्सव",
    "english": "Centenary jubilee / 100th milestone",
    "meaning": "शंभर वर्षे यशस्वीरीत्या पूर्ण झाल्याबद्दल कृतज्ञतापूर्वक साजरा केलेला महासोहळा",
    "pos": "नाम (Noun)"
  },
  {
    "id": 999,
    "part": 10,
    "word": "कृतार्थ",
    "english": "Fulfilled / Accomplished / Contented",
    "meaning": "हाती घेतलेले महान ध्येय आणि संकल्प सिद्धीस गेल्याने वाटणारे समाधान",
    "pos": "विशेषण (Adj)"
  },
  {
    "id": 1000,
    "part": 10,
    "word": "जय महाराष्ट्र",
    "english": "Hail Maharashtra / Salutation to the Marathi spirit",
    "meaning": "मराठी माती, भाषा आणि संस्कृतीचा सर्वोच्च आदर आणि जयघोष",
    "pos": "उद्गार / ब्रीदवाक्य (Salutation)"
  }
];

if (typeof module !== 'undefined') module.exports = MARATHI_VOCABULARY;
