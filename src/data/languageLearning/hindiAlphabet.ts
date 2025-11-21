// Hindi Alphabet (Devanagari Script) - Complete Varnamala

export interface HindiLetter {
    id: string;
    letter: string;
    romanization: string;
    pronunciation: string;
    type: 'vowel' | 'consonant' | 'matra';
    examples?: string[]; // Example words using this letter
    audioUrl: string;
}

// Vowels (स्वर - Swar)
export const hindiVowels: HindiLetter[] = [
    { id: 'v-1', letter: 'अ', romanization: 'a', pronunciation: 'a as in about', type: 'vowel', examples: ['अम', 'अब'], audioUrl: '/assets/audio/letters/a.mp3' },
    { id: 'v-2', letter: 'आ', romanization: 'aa', pronunciation: 'aa as in father', type: 'vowel', examples: ['आम', 'आप'], audioUrl: '/assets/audio/letters/aa.mp3' },
    { id: 'v-3', letter: 'इ', romanization: 'i', pronunciation: 'i as in sit', type: 'vowel', examples: ['इधर', 'इस'], audioUrl: '/assets/audio/letters/i.mp3' },
    { id: 'v-4', letter: 'ई', romanization: 'ee', pronunciation: 'ee as in see', type: 'vowel', examples: ['ईख', 'ईद'], audioUrl: '/assets/audio/letters/ee.mp3' },
    { id: 'v-5', letter: 'उ', romanization: 'u', pronunciation: 'u as in put', type: 'vowel', examples: ['उधर', 'उल्लू'], audioUrl: '/assets/audio/letters/u.mp3' },
    { id: 'v-6', letter: 'ऊ', romanization: 'oo', pronunciation: 'oo as in boot', type: 'vowel', examples: ['ऊन', 'ऊपर'], audioUrl: '/assets/audio/letters/oo.mp3' },
    { id: 'v-7', letter: 'ए', romanization: 'e', pronunciation: 'e as in bed', type: 'vowel', examples: ['एक', 'एक'], audioUrl: '/assets/audio/letters/e.mp3' },
    { id: 'v-8', letter: 'ऐ', romanization: 'ai', pronunciation: 'ai as in pain', type: 'vowel', examples: ['ऐनक', 'ऐसा'], audioUrl: '/assets/audio/letters/ai.mp3' },
    { id: 'v-9', letter: 'ओ', romanization: 'o', pronunciation: 'o as in go', type: 'vowel', examples: ['ओस', 'ओर'], audioUrl: '/assets/audio/letters/o.mp3' },
    { id: 'v-10', letter: 'औ', romanization: 'au', pronunciation: 'au as in caught', type: 'vowel', examples: ['औरत', 'और'], audioUrl: '/assets/audio/letters/au.mp3' },
    { id: 'v-11', letter: 'अं', romanization: 'an', pronunciation: 'nasal sound', type: 'vowel', examples: ['अंगूर', 'अंडा'], audioUrl: '/assets/audio/letters/an.mp3' },
    { id: 'v-12', letter: 'अः', romanization: 'ah', pronunciation: 'visarga', type: 'vowel', examples: ['दुःख', 'अतः'], audioUrl: '/assets/audio/letters/ah.mp3' },
];

// Consonants (व्यंजन - Vyanjan)
export const hindiConsonants: HindiLetter[] = [
    // Ka varga (क वर्ग)
    { id: 'c-1', letter: 'क', romanization: 'ka', pronunciation: 'k as in kite', type: 'consonant', examples: ['कमल', 'कल'], audioUrl: '/assets/audio/letters/ka.mp3' },
    { id: 'c-2', letter: 'ख', romanization: 'kha', pronunciation: 'kh as in blockhead', type: 'consonant', examples: ['खत', 'खाना'], audioUrl: '/assets/audio/letters/kha.mp3' },
    { id: 'c-3', letter: 'ग', romanization: 'ga', pronunciation: 'g as in go', type: 'consonant', examples: ['गाना', 'गम'], audioUrl: '/assets/audio/letters/ga.mp3' },
    { id: 'c-4', letter: 'घ', romanization: 'gha', pronunciation: 'gh as in ghost', type: 'consonant', examples: ['घर', 'घास'], audioUrl: '/assets/audio/letters/gha.mp3' },
    { id: 'c-5', letter: 'ङ', romanization: 'nga', pronunciation: 'ng as in sing', type: 'consonant', examples: ['अंगूर'], audioUrl: '/assets/audio/letters/nga.mp3' },

    // Cha varga (च वर्ग)
    { id: 'c-6', letter: 'च', romanization: 'cha', pronunciation: 'ch as in chair', type: 'consonant', examples: ['चल', 'चाय'], audioUrl: '/assets/audio/letters/cha.mp3' },
    { id: 'c-7', letter: 'छ', romanization: 'chha', pronunciation: 'chh as in catch him', type: 'consonant', examples: ['छत', 'छाता'], audioUrl: '/assets/audio/letters/chha.mp3' },
    { id: 'c-8', letter: 'ज', romanization: 'ja', pronunciation: 'j as in jump', type: 'consonant', examples: ['जल', 'जग'], audioUrl: '/assets/audio/letters/ja.mp3' },
    { id: 'c-9', letter: 'झ', romanization: 'jha', pronunciation: 'jh as in hedgehog', type: 'consonant', examples: ['झंडा', 'झील'], audioUrl: '/assets/audio/letters/jha.mp3' },
    { id: 'c-10', letter: 'ञ', romanization: 'nya', pronunciation: 'ny as in canyon', type: 'consonant', examples: ['ज्ञान'], audioUrl: '/assets/audio/letters/nya.mp3' },

    // Ta varga (ट वर्ग) - Retroflex
    { id: 'c-11', letter: 'ट', romanization: 'ta', pronunciation: 'hard t', type: 'consonant', examples: ['टमाटर', 'टोपी'], audioUrl: '/assets/audio/letters/ta-hard.mp3' },
    { id: 'c-12', letter: 'ठ', romanization: 'tha', pronunciation: 'hard th', type: 'consonant', examples: ['ठंड', 'ठीक'], audioUrl: '/assets/audio/letters/tha-hard.mp3' },
    { id: 'c-13', letter: 'ड', romanization: 'da', pronunciation: 'hard d', type: 'consonant', examples: ['डर', 'डाल'], audioUrl: '/assets/audio/letters/da-hard.mp3' },
    { id: 'c-14', letter: 'ढ', romanization: 'dha', pronunciation: 'hard dh', type: 'consonant', examples: ['ढक्कन', 'ढाल'], audioUrl: '/assets/audio/letters/dha-hard.mp3' },
    { id: 'c-15', letter: 'ण', romanization: 'na', pronunciation: 'hard n', type: 'consonant', examples: ['गणित', 'कण'], audioUrl: '/assets/audio/letters/na-hard.mp3' },

    // Ta varga (त वर्ग) - Dental
    { id: 'c-16', letter: 'त', romanization: 'ta', pronunciation: 'soft t', type: 'consonant', examples: ['तारा', 'तन'], audioUrl: '/assets/audio/letters/ta-soft.mp3' },
    { id: 'c-17', letter: 'थ', romanization: 'tha', pronunciation: 'soft th', type: 'consonant', examples: ['थन', 'थाली'], audioUrl: '/assets/audio/letters/tha-soft.mp3' },
    { id: 'c-18', letter: 'द', romanization: 'da', pronunciation: 'soft d', type: 'consonant', examples: ['दम', 'दाल'], audioUrl: '/assets/audio/letters/da-soft.mp3' },
    { id: 'c-19', letter: 'ध', romanization: 'dha', pronunciation: 'soft dh', type: 'consonant', examples: ['धन', 'धान'], audioUrl: '/assets/audio/letters/dha-soft.mp3' },
    { id: 'c-20', letter: 'न', romanization: 'na', pronunciation: 'n as in no', type: 'consonant', examples: ['नल', 'नाम'], audioUrl: '/assets/audio/letters/na-soft.mp3' },

    // Pa varga (प वर्ग)
    { id: 'c-21', letter: 'प', romanization: 'pa', pronunciation: 'p as in pen', type: 'consonant', examples: ['पल', 'पानी'], audioUrl: '/assets/audio/letters/pa.mp3' },
    { id: 'c-22', letter: 'फ', romanization: 'pha', pronunciation: 'ph as in phone', type: 'consonant', examples: ['फल', 'फूल'], audioUrl: '/assets/audio/letters/pha.mp3' },
    { id: 'c-23', letter: 'ब', romanization: 'ba', pronunciation: 'b as in ball', type: 'consonant', examples: ['बल', 'बाल'], audioUrl: '/assets/audio/letters/ba.mp3' },
    { id: 'c-24', letter: 'भ', romanization: 'bha', pronunciation: 'bh as in abhor', type: 'consonant', examples: ['भय', 'भाई'], audioUrl: '/assets/audio/letters/bha.mp3' },
    { id: 'c-25', letter: 'म', romanization: 'ma', pronunciation: 'm as in mother', type: 'consonant', examples: ['मन', 'माला'], audioUrl: '/assets/audio/letters/ma.mp3' },

    // Antastha (अंतस्थ)
    { id: 'c-26', letter: 'य', romanization: 'ya', pronunciation: 'y as in yes', type: 'consonant', examples: ['यम', 'याद'], audioUrl: '/assets/audio/letters/ya.mp3' },
    { id: 'c-27', letter: 'र', romanization: 'ra', pronunciation: 'r as in run', type: 'consonant', examples: ['रस', 'राम'], audioUrl: '/assets/audio/letters/ra.mp3' },
    { id: 'c-28', letter: 'ल', romanization: 'la', pronunciation: 'l as in love', type: 'consonant', examples: ['लता', 'लाल'], audioUrl: '/assets/audio/letters/la.mp3' },
    { id: 'c-29', letter: 'व', romanization: 'va', pronunciation: 'v/w as in van', type: 'consonant', examples: ['वन', 'वाद'], audioUrl: '/assets/audio/letters/va.mp3' },

    // Ushma (ऊष्म)
    { id: 'c-30', letter: 'श', romanization: 'sha', pronunciation: 'sh as in ship', type: 'consonant', examples: ['शब्द', 'शाम'], audioUrl: '/assets/audio/letters/sha.mp3' },
    { id: 'c-31', letter: 'ष', romanization: 'sha', pronunciation: 'sh (retroflex)', type: 'consonant', examples: ['षट्'], audioUrl: '/assets/audio/letters/sha-retro.mp3' },
    { id: 'c-32', letter: 'स', romanization: 'sa', pronunciation: 's as in sun', type: 'consonant', examples: ['सब', 'साथ'], audioUrl: '/assets/audio/letters/sa.mp3' },
    { id: 'c-33', letter: 'ह', romanization: 'ha', pronunciation: 'h as in house', type: 'consonant', examples: ['हल', 'हाथ'], audioUrl: '/assets/audio/letters/ha.mp3' },

    // Additional consonants
    { id: 'c-34', letter: 'क्ष', romanization: 'ksha', pronunciation: 'ksh', type: 'consonant', examples: ['क्षमा', 'क्षेत्र'], audioUrl: '/assets/audio/letters/ksha.mp3' },
    { id: 'c-35', letter: 'त्र', romanization: 'tra', pronunciation: 'tr', type: 'consonant', examples: ['त्रिशूल', 'पत्र'], audioUrl: '/assets/audio/letters/tra.mp3' },
    { id: 'c-36', letter: 'ज्ञ', romanization: 'gya', pronunciation: 'gy', type: 'consonant', examples: ['ज्ञान', 'विज्ञान'], audioUrl: '/assets/audio/letters/gya.mp3' },
];

// Matras (Vowel Signs) - मात्राएं
export const hindiMatras: HindiLetter[] = [
    { id: 'm-1', letter: 'ा', romanization: 'aa', pronunciation: 'aa matra', type: 'matra', examples: ['का', 'मा'], audioUrl: '/assets/audio/letters/matra-aa.mp3' },
    { id: 'm-2', letter: 'ि', romanization: 'i', pronunciation: 'i matra', type: 'matra', examples: ['कि', 'मि'], audioUrl: '/assets/audio/letters/matra-i.mp3' },
    { id: 'm-3', letter: 'ी', romanization: 'ee', pronunciation: 'ee matra', type: 'matra', examples: ['की', 'मी'], audioUrl: '/assets/audio/letters/matra-ee.mp3' },
    { id: 'm-4', letter: 'ु', romanization: 'u', pronunciation: 'u matra', type: 'matra', examples: ['कु', 'मु'], audioUrl: '/assets/audio/letters/matra-u.mp3' },
    { id: 'm-5', letter: 'ू', romanization: 'oo', pronunciation: 'oo matra', type: 'matra', examples: ['कू', 'मू'], audioUrl: '/assets/audio/letters/matra-oo.mp3' },
    { id: 'm-6', letter: 'े', romanization: 'e', pronunciation: 'e matra', type: 'matra', examples: ['के', 'मे'], audioUrl: '/assets/audio/letters/matra-e.mp3' },
    { id: 'm-7', letter: 'ै', romanization: 'ai', pronunciation: 'ai matra', type: 'matra', examples: ['कै', 'मै'], audioUrl: '/assets/audio/letters/matra-ai.mp3' },
    { id: 'm-8', letter: 'ो', romanization: 'o', pronunciation: 'o matra', type: 'matra', examples: ['को', 'मो'], audioUrl: '/assets/audio/letters/matra-o.mp3' },
    { id: 'm-9', letter: 'ौ', romanization: 'au', pronunciation: 'au matra', type: 'matra', examples: ['कौ', 'मौ'], audioUrl: '/assets/audio/letters/matra-au.mp3' },
    { id: 'm-10', letter: 'ं', romanization: 'an', pronunciation: 'anusvara', type: 'matra', examples: ['कं', 'मं'], audioUrl: '/assets/audio/letters/matra-an.mp3' },
    { id: 'm-11', letter: 'ः', romanization: 'ah', pronunciation: 'visarga', type: 'matra', examples: ['कः', 'मः'], audioUrl: '/assets/audio/letters/matra-ah.mp3' },
];

// Simple words for reading practice (grouped by difficulty)
export const simpleHindiWords = {
    level1: [ // 2-letter words
        { word: 'अब', meaning: 'now', romanization: 'ab' },
        { word: 'जल', meaning: 'water', romanization: 'jal' },
        { word: 'कल', meaning: 'tomorrow/yesterday', romanization: 'kal' },
        { word: 'घर', meaning: 'home', romanization: 'ghar' },
        { word: 'तन', meaning: 'body', romanization: 'tan' },
        { word: 'मन', meaning: 'mind', romanization: 'man' },
        { word: 'धन', meaning: 'wealth', romanization: 'dhan' },
        { word: 'वन', meaning: 'forest', romanization: 'van' },
    ],
    level2: [ // 3-letter words
        { word: 'आम', meaning: 'mango', romanization: 'aam' },
        { word: 'नाम', meaning: 'name', romanization: 'naam' },
        { word: 'काम', meaning: 'work', romanization: 'kaam' },
        { word: 'राम', meaning: 'Ram', romanization: 'raam' },
        { word: 'पानी', meaning: 'water', romanization: 'paani' },
        { word: 'माला', meaning: 'garland', romanization: 'maala' },
        { word: 'बाल', meaning: 'hair', romanization: 'baal' },
        { word: 'ताला', meaning: 'lock', romanization: 'taala' },
    ],
    level3: [ // Words with matras
        { word: 'किताब', meaning: 'book', romanization: 'kitaab' },
        { word: 'पेड़', meaning: 'tree', romanization: 'ped' },
        { word: 'फूल', meaning: 'flower', romanization: 'phool' },
        { word: 'दूध', meaning: 'milk', romanization: 'doodh' },
        { word: 'रोटी', meaning: 'bread', romanization: 'roti' },
        { word: 'मीठा', meaning: 'sweet', romanization: 'meetha' },
        { word: 'सूरज', meaning: 'sun', romanization: 'sooraj' },
        { word: 'चाँद', meaning: 'moon', romanization: 'chaand' },
    ],
};

// Get all letters
export const getAllHindiLetters = (): HindiLetter[] => {
    return [...hindiVowels, ...hindiConsonants];
};

// Get letters by type
export const getLettersByType = (type: 'vowel' | 'consonant' | 'matra'): HindiLetter[] => {
    if (type === 'vowel') return hindiVowels;
    if (type === 'consonant') return hindiConsonants;
    if (type === 'matra') return hindiMatras;
    return [];
};
