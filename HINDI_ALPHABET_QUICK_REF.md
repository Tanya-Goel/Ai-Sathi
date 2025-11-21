# Hindi Alphabet Learning - Quick Reference

## Complete Learning Path (17 Lessons)

### 📚 Phase 1: Vowels (Lessons 1-2)
```
Lesson 1: अ आ इ ई उ ऊ (Vowels 1-6)
Lesson 2: ए ऐ ओ औ अं अः (Vowels 7-12)
```

### 📝 Phase 2: Consonants (Lessons 3-9)
```
Lesson 3: क ख ग घ ङ     (Ka Varga)
Lesson 4: च छ ज झ ञ     (Cha Varga)
Lesson 5: ट ठ ड ढ ण     (Ta Varga - Hard)
Lesson 6: त थ द ध न     (Ta Varga - Soft)
Lesson 7: प फ ब भ म     (Pa Varga)
Lesson 8: य र ल व श ष स ह (Antastha & Ushma)
Lesson 9: क्ष त्र ज्ञ      (Combined Letters)
```

### ✏️ Phase 3: Matras (Lessons 10-11)
```
Lesson 10: ा ि ी ु ू    (Matras Part 1)
Lesson 11: े ै ो ौ ं ः  (Matras Part 2)
```

### 📖 Phase 4: Reading Practice (Lessons 12-14)
```
Lesson 12: अब जल कल घर तन मन धन वन
           (2-letter words)

Lesson 13: आम नाम काम राम पानी माला बाल ताला
           (3-letter words)

Lesson 14: किताब पेड़ फूल दूध रोटी मीठा सूरज चाँद
           (Words with matras)
```

### 🗣️ Phase 5: Vocabulary (Lessons 15-17)
```
Lesson 15: Greetings - नमस्ते धन्यवाद अलविदा
Lesson 16: Numbers - एक दो तीन चार पाँच
Lesson 17: Family - माँ पिता भाई बहन
```

---

## Letter Count Summary

| Category | Count | Lessons |
|----------|-------|---------|
| Vowels (स्वर) | 12 | 1-2 |
| Consonants (व्यंजन) | 36 | 3-9 |
| Matras (मात्राएं) | 11 | 10-11 |
| **Total Letters** | **59** | **11 lessons** |
| Reading Words | 24 | 12-14 |
| Vocabulary Words | 12 | 15-17 |

---

## Complete Hindi Alphabet (Devanagari)

### Vowels (स्वर)
```
अ  आ  इ  ई  उ  ऊ
ए  ऐ  ओ  औ  अं  अः
```

### Consonants (व्यंजन)

#### Ka Varga (क वर्ग)
```
क  ख  ग  घ  ङ
```

#### Cha Varga (च वर्ग)
```
च  छ  ज  झ  ञ
```

#### Ta Varga - Retroflex (ट वर्ग)
```
ट  ठ  ड  ढ  ण
```

#### Ta Varga - Dental (त वर्ग)
```
त  थ  द  ध  न
```

#### Pa Varga (प वर्ग)
```
प  फ  ब  भ  म
```

#### Antastha (अंतस्थ)
```
य  र  ल  व
```

#### Ushma (ऊष्म)
```
श  ष  स  ह
```

#### Combined (संयुक्त)
```
क्ष  त्र  ज्ञ
```

### Matras (मात्राएं)
```
ा  ि  ी  ु  ू
े  ै  ो  ौ  ं  ः
```

---

## Exercise Types Per Lesson

Each alphabet lesson includes:
1. **Vocab Viewer**: Learn letters with audio pronunciation
2. **Matching Game**: Match letters with romanization

Each reading lesson includes:
1. **Vocab Viewer**: Learn words with meanings
2. **Matching Game**: Match words with English meanings

---

## Progression Logic

- ✅ **Lesson 1** is unlocked by default
- 🔒 **Lessons 2-17** unlock sequentially upon completion
- 📊 Students must complete alphabet (1-14) before vocabulary (15-17)
- 🎯 Each lesson must be completed to unlock the next

---

## Key Learning Outcomes

By completing this curriculum, students will:

1. ✅ Recognize all 12 Hindi vowels
2. ✅ Recognize all 36 Hindi consonants
3. ✅ Understand the varga (group) system
4. ✅ Read and write matras (vowel signs)
5. ✅ Read simple 2-3 letter Hindi words
6. ✅ Read words with matras
7. ✅ Build basic Hindi vocabulary
8. ✅ Have foundation for reading Hindi texts

---

## Files Structure

```
src/data/languageLearning/
├── hindiAlphabet.ts      # Alphabet data (vowels, consonants, matras)
├── alphabetLessons.ts    # 14 alphabet lessons
├── lessons.ts            # Combined curriculum (alphabet + vocab)
└── vocabulary.ts         # Vocabulary data
```

---

## Demo Mode

When demo mode is enabled:
- All 17 lessons are unlocked
- Students can jump to any lesson
- Progress is pre-filled for demonstration

In normal mode:
- Sequential unlocking enforced
- Students must complete each lesson
- Progress tracked in localStorage
