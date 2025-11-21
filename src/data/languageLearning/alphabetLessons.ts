import { Lesson } from '@/types/languageLearning';
import { hindiVowels, hindiConsonants, hindiMatras, simpleHindiWords } from './hindiAlphabet';

// Convert Hindi letters to VocabEntry format for exercises
const createLetterVocab = (letters: any[], startIndex: number, endIndex: number) => {
    return letters.slice(startIndex, endIndex).map(letter => ({
        id: letter.id,
        hindi: letter.letter,
        english: letter.romanization,
        romanization: letter.romanization,
        imageUrl: `/assets/letters/${letter.id}.png`,
        audioUrl: letter.audioUrl,
        category: 'alphabet'
    }));
};

// Hindi Alphabet Learning Lessons (Foundational)
export const hindiAlphabetLessons: Lesson[] = [
    // VOWELS SECTION
    {
        id: 'hindi-alphabet-1',
        title: 'Hindi Vowels 1-6',
        titleHindi: 'हिंदी स्वर 1-6',
        description: 'Learn the first 6 Hindi vowels (अ, आ, इ, ई, उ, ऊ)',
        descriptionHindi: 'पहले 6 हिंदी स्वर सीखें',
        language: 'hi',
        level: 1,
        vocabulary: createLetterVocab(hindiVowels, 0, 6),
        exercises: [
            {
                id: 'alpha-ex-1',
                type: 'vocab-viewer',
                instruction: 'Learn these vowel sounds',
                instructionHindi: 'इन स्वर ध्वनियों को सीखें',
                audioUrl: '/assets/audio/instructions/vowels-1.mp3',
                data: {
                    words: createLetterVocab(hindiVowels, 0, 6)
                }
            },
            {
                id: 'alpha-ex-2',
                type: 'matching',
                instruction: 'Match vowels with their sounds',
                instructionHindi: 'स्वरों को उनकी ध्वनियों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-vowels-1.mp3',
                data: {
                    pairs: createLetterVocab(hindiVowels, 0, 6).map(v => ({
                        left: v.hindi,
                        right: v.romanization,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: true,
        completed: false,
        bestScore: 0
    },
    {
        id: 'hindi-alphabet-2',
        title: 'Hindi Vowels 7-12',
        titleHindi: 'हिंदी स्वर 7-12',
        description: 'Learn the remaining Hindi vowels (ए, ऐ, ओ, औ, अं, अः)',
        descriptionHindi: 'शेष हिंदी स्वर सीखें',
        language: 'hi',
        level: 2,
        vocabulary: createLetterVocab(hindiVowels, 6, 12),
        exercises: [
            {
                id: 'alpha-ex-3',
                type: 'vocab-viewer',
                instruction: 'Learn these vowel sounds',
                instructionHindi: 'इन स्वर ध्वनियों को सीखें',
                audioUrl: '/assets/audio/instructions/vowels-2.mp3',
                data: {
                    words: createLetterVocab(hindiVowels, 6, 12)
                }
            },
            {
                id: 'alpha-ex-4',
                type: 'matching',
                instruction: 'Match vowels with their sounds',
                instructionHindi: 'स्वरों को उनकी ध्वनियों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-vowels-2.mp3',
                data: {
                    pairs: createLetterVocab(hindiVowels, 6, 12).map(v => ({
                        left: v.hindi,
                        right: v.romanization,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    // CONSONANTS SECTION - Ka Varga
    {
        id: 'hindi-alphabet-3',
        title: 'Ka Varga (क वर्ग)',
        titleHindi: 'क वर्ग',
        description: 'Learn Ka varga consonants (क, ख, ग, घ, ङ)',
        descriptionHindi: 'क वर्ग के व्यंजन सीखें',
        language: 'hi',
        level: 3,
        vocabulary: createLetterVocab(hindiConsonants, 0, 5),
        exercises: [
            {
                id: 'alpha-ex-5',
                type: 'vocab-viewer',
                instruction: 'Learn Ka varga consonants',
                instructionHindi: 'क वर्ग के व्यंजन सीखें',
                audioUrl: '/assets/audio/instructions/ka-varga.mp3',
                data: {
                    words: createLetterVocab(hindiConsonants, 0, 5)
                }
            },
            {
                id: 'alpha-ex-6',
                type: 'matching',
                instruction: 'Match consonants with their sounds',
                instructionHindi: 'व्यंजनों को उनकी ध्वनियों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-ka-varga.mp3',
                data: {
                    pairs: createLetterVocab(hindiConsonants, 0, 5).map(v => ({
                        left: v.hindi,
                        right: v.romanization,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    // Cha Varga
    {
        id: 'hindi-alphabet-4',
        title: 'Cha Varga (च वर्ग)',
        titleHindi: 'च वर्ग',
        description: 'Learn Cha varga consonants (च, छ, ज, झ, ञ)',
        descriptionHindi: 'च वर्ग के व्यंजन सीखें',
        language: 'hi',
        level: 4,
        vocabulary: createLetterVocab(hindiConsonants, 5, 10),
        exercises: [
            {
                id: 'alpha-ex-7',
                type: 'vocab-viewer',
                instruction: 'Learn Cha varga consonants',
                instructionHindi: 'च वर्ग के व्यंजन सीखें',
                audioUrl: '/assets/audio/instructions/cha-varga.mp3',
                data: {
                    words: createLetterVocab(hindiConsonants, 5, 10)
                }
            },
            {
                id: 'alpha-ex-8',
                type: 'matching',
                instruction: 'Match consonants with their sounds',
                instructionHindi: 'व्यंजनों को उनकी ध्वनियों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-cha-varga.mp3',
                data: {
                    pairs: createLetterVocab(hindiConsonants, 5, 10).map(v => ({
                        left: v.hindi,
                        right: v.romanization,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    // Ta Varga (Retroflex)
    {
        id: 'hindi-alphabet-5',
        title: 'Ta Varga - Hard (ट वर्ग)',
        titleHindi: 'ट वर्ग',
        description: 'Learn retroflex Ta varga (ट, ठ, ड, ढ, ण)',
        descriptionHindi: 'ट वर्ग के व्यंजन सीखें',
        language: 'hi',
        level: 5,
        vocabulary: createLetterVocab(hindiConsonants, 10, 15),
        exercises: [
            {
                id: 'alpha-ex-9',
                type: 'vocab-viewer',
                instruction: 'Learn retroflex Ta varga',
                instructionHindi: 'ट वर्ग के व्यंजन सीखें',
                audioUrl: '/assets/audio/instructions/ta-varga-hard.mp3',
                data: {
                    words: createLetterVocab(hindiConsonants, 10, 15)
                }
            },
            {
                id: 'alpha-ex-10',
                type: 'matching',
                instruction: 'Match consonants with their sounds',
                instructionHindi: 'व्यंजनों को उनकी ध्वनियों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-ta-varga-hard.mp3',
                data: {
                    pairs: createLetterVocab(hindiConsonants, 10, 15).map(v => ({
                        left: v.hindi,
                        right: v.romanization,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    // Ta Varga (Dental)
    {
        id: 'hindi-alphabet-6',
        title: 'Ta Varga - Soft (त वर्ग)',
        titleHindi: 'त वर्ग',
        description: 'Learn dental Ta varga (त, थ, द, ध, न)',
        descriptionHindi: 'त वर्ग के व्यंजन सीखें',
        language: 'hi',
        level: 6,
        vocabulary: createLetterVocab(hindiConsonants, 15, 20),
        exercises: [
            {
                id: 'alpha-ex-11',
                type: 'vocab-viewer',
                instruction: 'Learn dental Ta varga',
                instructionHindi: 'त वर्ग के व्यंजन सीखें',
                audioUrl: '/assets/audio/instructions/ta-varga-soft.mp3',
                data: {
                    words: createLetterVocab(hindiConsonants, 15, 20)
                }
            },
            {
                id: 'alpha-ex-12',
                type: 'matching',
                instruction: 'Match consonants with their sounds',
                instructionHindi: 'व्यंजनों को उनकी ध्वनियों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-ta-varga-soft.mp3',
                data: {
                    pairs: createLetterVocab(hindiConsonants, 15, 20).map(v => ({
                        left: v.hindi,
                        right: v.romanization,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    // Pa Varga
    {
        id: 'hindi-alphabet-7',
        title: 'Pa Varga (प वर्ग)',
        titleHindi: 'प वर्ग',
        description: 'Learn Pa varga consonants (प, फ, ब, भ, म)',
        descriptionHindi: 'प वर्ग के व्यंजन सीखें',
        language: 'hi',
        level: 7,
        vocabulary: createLetterVocab(hindiConsonants, 20, 25),
        exercises: [
            {
                id: 'alpha-ex-13',
                type: 'vocab-viewer',
                instruction: 'Learn Pa varga consonants',
                instructionHindi: 'प वर्ग के व्यंजन सीखें',
                audioUrl: '/assets/audio/instructions/pa-varga.mp3',
                data: {
                    words: createLetterVocab(hindiConsonants, 20, 25)
                }
            },
            {
                id: 'alpha-ex-14',
                type: 'matching',
                instruction: 'Match consonants with their sounds',
                instructionHindi: 'व्यंजनों को उनकी ध्वनियों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-pa-varga.mp3',
                data: {
                    pairs: createLetterVocab(hindiConsonants, 20, 25).map(v => ({
                        left: v.hindi,
                        right: v.romanization,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    // Antastha & Ushma
    {
        id: 'hindi-alphabet-8',
        title: 'Antastha & Ushma (य, र, ल, व, श, ष, स, ह)',
        titleHindi: 'अंतस्थ और ऊष्म',
        description: 'Learn remaining consonants',
        descriptionHindi: 'शेष व्यंजन सीखें',
        language: 'hi',
        level: 8,
        vocabulary: createLetterVocab(hindiConsonants, 25, 33),
        exercises: [
            {
                id: 'alpha-ex-15',
                type: 'vocab-viewer',
                instruction: 'Learn these consonants',
                instructionHindi: 'इन व्यंजनों को सीखें',
                audioUrl: '/assets/audio/instructions/antastha-ushma.mp3',
                data: {
                    words: createLetterVocab(hindiConsonants, 25, 33)
                }
            },
            {
                id: 'alpha-ex-16',
                type: 'matching',
                instruction: 'Match consonants with their sounds',
                instructionHindi: 'व्यंजनों को उनकी ध्वनियों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-antastha-ushma.mp3',
                data: {
                    pairs: createLetterVocab(hindiConsonants, 25, 33).map(v => ({
                        left: v.hindi,
                        right: v.romanization,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    // Combined Consonants
    {
        id: 'hindi-alphabet-9',
        title: 'Combined Letters (क्ष, त्र, ज्ञ)',
        titleHindi: 'संयुक्त अक्षर',
        description: 'Learn combined consonants',
        descriptionHindi: 'संयुक्त व्यंजन सीखें',
        language: 'hi',
        level: 9,
        vocabulary: createLetterVocab(hindiConsonants, 33, 36),
        exercises: [
            {
                id: 'alpha-ex-17',
                type: 'vocab-viewer',
                instruction: 'Learn combined consonants',
                instructionHindi: 'संयुक्त व्यंजन सीखें',
                audioUrl: '/assets/audio/instructions/combined.mp3',
                data: {
                    words: createLetterVocab(hindiConsonants, 33, 36)
                }
            },
            {
                id: 'alpha-ex-18',
                type: 'matching',
                instruction: 'Match letters with their sounds',
                instructionHindi: 'अक्षरों को उनकी ध्वनियों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-combined.mp3',
                data: {
                    pairs: createLetterVocab(hindiConsonants, 33, 36).map(v => ({
                        left: v.hindi,
                        right: v.romanization,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    // MATRAS SECTION
    {
        id: 'hindi-alphabet-10',
        title: 'Matras Part 1 (मात्राएं)',
        titleHindi: 'मात्राएं भाग 1',
        description: 'Learn vowel signs (ा, ि, ी, ु, ू)',
        descriptionHindi: 'स्वर चिह्न सीखें',
        language: 'hi',
        level: 10,
        vocabulary: createLetterVocab(hindiMatras, 0, 5),
        exercises: [
            {
                id: 'alpha-ex-19',
                type: 'vocab-viewer',
                instruction: 'Learn these matras',
                instructionHindi: 'इन मात्राओं को सीखें',
                audioUrl: '/assets/audio/instructions/matras-1.mp3',
                data: {
                    words: createLetterVocab(hindiMatras, 0, 5)
                }
            },
            {
                id: 'alpha-ex-20',
                type: 'matching',
                instruction: 'Match matras with their sounds',
                instructionHindi: 'मात्राओं को उनकी ध्वनियों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-matras-1.mp3',
                data: {
                    pairs: createLetterVocab(hindiMatras, 0, 5).map(v => ({
                        left: v.hindi,
                        right: v.romanization,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    {
        id: 'hindi-alphabet-11',
        title: 'Matras Part 2 (मात्राएं)',
        titleHindi: 'मात्राएं भाग 2',
        description: 'Learn remaining vowel signs (े, ै, ो, ौ, ं, ः)',
        descriptionHindi: 'शेष स्वर चिह्न सीखें',
        language: 'hi',
        level: 11,
        vocabulary: createLetterVocab(hindiMatras, 5, 11),
        exercises: [
            {
                id: 'alpha-ex-21',
                type: 'vocab-viewer',
                instruction: 'Learn these matras',
                instructionHindi: 'इन मात्राओं को सीखें',
                audioUrl: '/assets/audio/instructions/matras-2.mp3',
                data: {
                    words: createLetterVocab(hindiMatras, 5, 11)
                }
            },
            {
                id: 'alpha-ex-22',
                type: 'matching',
                instruction: 'Match matras with their sounds',
                instructionHindi: 'मात्राओं को उनकी ध्वनियों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-matras-2.mp3',
                data: {
                    pairs: createLetterVocab(hindiMatras, 5, 11).map(v => ({
                        left: v.hindi,
                        right: v.romanization,
                        id: v.id
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    // READING PRACTICE SECTION
    {
        id: 'hindi-reading-1',
        title: 'Reading Practice - Level 1',
        titleHindi: 'पढ़ने का अभ्यास - स्तर 1',
        description: 'Read simple 2-letter words',
        descriptionHindi: 'सरल 2-अक्षर के शब्द पढ़ें',
        language: 'hi',
        level: 12,
        vocabulary: simpleHindiWords.level1.map((w, i) => ({
            id: `read-1-${i}`,
            hindi: w.word,
            english: w.meaning,
            romanization: w.romanization,
            imageUrl: `/assets/words/${w.romanization}.png`,
            audioUrl: `/assets/audio/words/${w.romanization}.mp3`,
            category: 'reading'
        })),
        exercises: [
            {
                id: 'read-ex-1',
                type: 'vocab-viewer',
                instruction: 'Practice reading these words',
                instructionHindi: 'इन शब्दों को पढ़ने का अभ्यास करें',
                audioUrl: '/assets/audio/instructions/reading-1.mp3',
                data: {
                    words: simpleHindiWords.level1.map((w, i) => ({
                        id: `read-1-${i}`,
                        hindi: w.word,
                        english: w.meaning,
                        romanization: w.romanization,
                        imageUrl: `/assets/words/${w.romanization}.png`,
                        audioUrl: `/assets/audio/words/${w.romanization}.mp3`,
                        category: 'reading'
                    }))
                }
            },
            {
                id: 'read-ex-2',
                type: 'matching',
                instruction: 'Match words with meanings',
                instructionHindi: 'शब्दों को अर्थों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-reading-1.mp3',
                data: {
                    pairs: simpleHindiWords.level1.map((w, i) => ({
                        left: w.word,
                        right: w.meaning,
                        id: `read-1-${i}`
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    {
        id: 'hindi-reading-2',
        title: 'Reading Practice - Level 2',
        titleHindi: 'पढ़ने का अभ्यास - स्तर 2',
        description: 'Read 3-letter words',
        descriptionHindi: '3-अक्षर के शब्द पढ़ें',
        language: 'hi',
        level: 13,
        vocabulary: simpleHindiWords.level2.map((w, i) => ({
            id: `read-2-${i}`,
            hindi: w.word,
            english: w.meaning,
            romanization: w.romanization,
            imageUrl: `/assets/words/${w.romanization}.png`,
            audioUrl: `/assets/audio/words/${w.romanization}.mp3`,
            category: 'reading'
        })),
        exercises: [
            {
                id: 'read-ex-3',
                type: 'vocab-viewer',
                instruction: 'Practice reading these words',
                instructionHindi: 'इन शब्दों को पढ़ने का अभ्यास करें',
                audioUrl: '/assets/audio/instructions/reading-2.mp3',
                data: {
                    words: simpleHindiWords.level2.map((w, i) => ({
                        id: `read-2-${i}`,
                        hindi: w.word,
                        english: w.meaning,
                        romanization: w.romanization,
                        imageUrl: `/assets/words/${w.romanization}.png`,
                        audioUrl: `/assets/audio/words/${w.romanization}.mp3`,
                        category: 'reading'
                    }))
                }
            },
            {
                id: 'read-ex-4',
                type: 'matching',
                instruction: 'Match words with meanings',
                instructionHindi: 'शब्दों को अर्थों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-reading-2.mp3',
                data: {
                    pairs: simpleHindiWords.level2.map((w, i) => ({
                        left: w.word,
                        right: w.meaning,
                        id: `read-2-${i}`
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },

    {
        id: 'hindi-reading-3',
        title: 'Reading Practice - Level 3',
        titleHindi: 'पढ़ने का अभ्यास - स्तर 3',
        description: 'Read words with matras',
        descriptionHindi: 'मात्राओं वाले शब्द पढ़ें',
        language: 'hi',
        level: 14,
        vocabulary: simpleHindiWords.level3.map((w, i) => ({
            id: `read-3-${i}`,
            hindi: w.word,
            english: w.meaning,
            romanization: w.romanization,
            imageUrl: `/assets/words/${w.romanization}.png`,
            audioUrl: `/assets/audio/words/${w.romanization}.mp3`,
            category: 'reading'
        })),
        exercises: [
            {
                id: 'read-ex-5',
                type: 'vocab-viewer',
                instruction: 'Practice reading these words',
                instructionHindi: 'इन शब्दों को पढ़ने का अभ्यास करें',
                audioUrl: '/assets/audio/instructions/reading-3.mp3',
                data: {
                    words: simpleHindiWords.level3.map((w, i) => ({
                        id: `read-3-${i}`,
                        hindi: w.word,
                        english: w.meaning,
                        romanization: w.romanization,
                        imageUrl: `/assets/words/${w.romanization}.png`,
                        audioUrl: `/assets/audio/words/${w.romanization}.mp3`,
                        category: 'reading'
                    }))
                }
            },
            {
                id: 'read-ex-6',
                type: 'matching',
                instruction: 'Match words with meanings',
                instructionHindi: 'शब्दों को अर्थों से मिलाएं',
                audioUrl: '/assets/audio/instructions/match-reading-3.mp3',
                data: {
                    pairs: simpleHindiWords.level3.map((w, i) => ({
                        left: w.word,
                        right: w.meaning,
                        id: `read-3-${i}`
                    }))
                }
            }
        ],
        unlocked: false,
        completed: false,
        bestScore: 0
    },
];
