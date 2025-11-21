# Hindi Alphabet Learning Curriculum

## Overview
This comprehensive Hindi literacy curriculum teaches students the complete Devanagari script (Hindi alphabet) in a systematic, step-by-step manner before moving to vocabulary building.

## Curriculum Structure

### Total Lessons: 17 Hindi Lessons
- **Lessons 1-14**: Alphabet & Reading Foundation
- **Lessons 15-17**: Vocabulary Building (existing lessons)

---

## Phase 1: Vowels (स्वर - Swar)
**Lessons 1-2**

### Lesson 1: Hindi Vowels 1-6
- **Level**: 1 (Unlocked by default)
- **Letters**: अ, आ, इ, ई, उ, ऊ
- **Focus**: Basic vowel sounds
- **Exercises**:
  - Vocab viewer to learn each vowel
  - Matching game: vowels ↔ romanization

### Lesson 2: Hindi Vowels 7-12
- **Level**: 2
- **Letters**: ए, ऐ, ओ, औ, अं, अः
- **Focus**: Compound vowels and special sounds
- **Exercises**:
  - Vocab viewer for remaining vowels
  - Matching game: vowels ↔ romanization

---

## Phase 2: Consonants (व्यंजन - Vyanjan)
**Lessons 3-9**

Consonants are organized by **varga** (groups) following traditional Hindi teaching methods:

### Lesson 3: Ka Varga (क वर्ग)
- **Level**: 3
- **Letters**: क, ख, ग, घ, ङ
- **Pronunciation**: k, kh, g, gh, ng sounds

### Lesson 4: Cha Varga (च वर्ग)
- **Level**: 4
- **Letters**: च, छ, ज, झ, ञ
- **Pronunciation**: ch, chh, j, jh, ny sounds

### Lesson 5: Ta Varga - Hard/Retroflex (ट वर्ग)
- **Level**: 5
- **Letters**: ट, ठ, ड, ढ, ण
- **Pronunciation**: Hard t, th, d, dh, n sounds

### Lesson 6: Ta Varga - Soft/Dental (त वर्ग)
- **Level**: 6
- **Letters**: त, थ, द, ध, न
- **Pronunciation**: Soft t, th, d, dh, n sounds

### Lesson 7: Pa Varga (प वर्ग)
- **Level**: 7
- **Letters**: प, फ, ब, भ, म
- **Pronunciation**: p, ph, b, bh, m sounds

### Lesson 8: Antastha & Ushma (अंतस्थ और ऊष्म)
- **Level**: 8
- **Letters**: य, र, ल, व, श, ष, स, ह
- **Focus**: Semi-vowels and sibilants

### Lesson 9: Combined Letters (संयुक्त अक्षर)
- **Level**: 9
- **Letters**: क्ष, त्र, ज्ञ
- **Focus**: Special combined consonants

---

## Phase 3: Matras (मात्राएं - Vowel Signs)
**Lessons 10-11**

### Lesson 10: Matras Part 1
- **Level**: 10
- **Matras**: ा, ि, ी, ु, ू
- **Focus**: How vowels modify consonants

### Lesson 11: Matras Part 2
- **Level**: 11
- **Matras**: े, ै, ो, ौ, ं, ः
- **Focus**: Remaining vowel signs

---

## Phase 4: Reading Practice (पढ़ने का अभ्यास)
**Lessons 12-14**

### Lesson 12: Reading Practice - Level 1
- **Level**: 12
- **Focus**: Simple 2-letter words
- **Words**: अब, जल, कल, घर, तन, मन, धन, वन
- **Skills**: Basic word recognition

### Lesson 13: Reading Practice - Level 2
- **Level**: 13
- **Focus**: 3-letter words
- **Words**: आम, नाम, काम, राम, पानी, माला, बाल, ताला
- **Skills**: Reading longer words

### Lesson 14: Reading Practice - Level 3
- **Level**: 14
- **Focus**: Words with matras
- **Words**: किताब, पेड़, फूल, दूध, रोटी, मीठा, सूरज, चाँद
- **Skills**: Advanced reading with vowel signs

---

## Phase 5: Vocabulary Building
**Lessons 15-17** (Previously lessons 1-3)

### Lesson 15: Greetings (अभिवादन)
- **Level**: 15
- **Words**: नमस्ते, धन्यवाद, अलविदा

### Lesson 16: Numbers 1-5 (संख्याएं)
- **Level**: 16
- **Words**: एक, दो, तीन, चार, पाँच

### Lesson 17: Family Words (परिवार)
- **Level**: 17
- **Words**: माँ, पिता, भाई, बहन

---

## Learning Progression

```
Start
  ↓
Vowels (अ-अः) → Lessons 1-2
  ↓
Consonants by Varga → Lessons 3-9
  ↓
Matras (Vowel Signs) → Lessons 10-11
  ↓
Reading Practice → Lessons 12-14
  ↓
Vocabulary Building → Lessons 15-17
  ↓
Advanced Learning (Stories, etc.)
```

## Key Features

### 1. **Systematic Progression**
- Students must complete alphabet lessons before vocabulary
- Each lesson builds on previous knowledge
- Follows traditional Hindi teaching methodology (varga system)

### 2. **Complete Coverage**
- **12 Vowels** (स्वर)
- **36 Consonants** (व्यंजन) including combined letters
- **11 Matras** (मात्राएं)
- **24 Practice Words** across 3 difficulty levels

### 3. **Interactive Exercises**
Each lesson includes:
- **Vocab Viewer**: Learn letters/words with audio
- **Matching Game**: Test recognition and understanding

### 4. **Audio Support**
- Every letter has pronunciation audio
- Example words demonstrate usage
- Instructions in both Hindi and English

### 5. **Romanization**
- All letters include romanized pronunciation
- Helps students connect sounds to symbols

---

## Implementation Files

### New Files Created:
1. **`hindiAlphabet.ts`**: Complete alphabet data
   - All vowels, consonants, matras
   - Pronunciation guides
   - Example words
   - Simple word lists for reading practice

2. **`alphabetLessons.ts`**: 14 alphabet lessons
   - Structured lesson plans
   - Progressive difficulty
   - Integrated exercises

### Modified Files:
1. **`lessons.ts`**: Updated to include alphabet lessons
   - Alphabet lessons (1-14) come first
   - Vocabulary lessons renumbered (15-17)
   - First alphabet lesson unlocked by default

---

## Usage in Demo Mode

When demo mode is enabled, all lessons will be unlocked for presentation purposes. However, in normal mode, students must:
1. Complete vowels before consonants
2. Complete consonants before matras
3. Complete matras before reading practice
4. Complete reading practice before vocabulary

---

## Future Enhancements

Potential additions to the curriculum:
1. **Letter Tracing**: Interactive writing practice
2. **Phonics Games**: Sound-based activities
3. **Sentence Building**: Construct simple sentences
4. **Story Reading**: Short stories using learned letters
5. **Pronunciation Assessment**: Voice-based accuracy checking
6. **Progress Tracking**: Visual progress through the alphabet

---

## Educational Approach

This curriculum follows best practices in Hindi literacy education:

1. **Varga System**: Traditional grouping helps students understand phonetic patterns
2. **Incremental Learning**: Small, manageable chunks prevent overwhelm
3. **Immediate Practice**: Matching games reinforce each lesson
4. **Multi-sensory**: Visual (letters), auditory (pronunciation), kinesthetic (matching)
5. **Contextual Learning**: Example words show practical usage

---

## Notes for Educators

- Each lesson takes approximately 10-15 minutes
- Students should master each lesson before proceeding
- Encourage repetition of difficult letters/sounds
- Use audio features extensively for pronunciation
- Celebrate progress through the curriculum
- Consider pairing alphabet learning with vocabulary for variety

---

## Technical Notes

- All lessons use the existing `Lesson` and `Exercise` types
- Compatible with current `LessonView` component
- Audio files referenced but not yet created (placeholder paths)
- Images referenced but not yet created (placeholder paths)
- Fully integrated with existing lesson progression system
