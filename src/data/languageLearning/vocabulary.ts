import { VocabEntry } from '@/types/languageLearning';

// Picture Dictionary - Categorized Vocabulary
export const vocabularyData: Record<string, VocabEntry[]> = {
    greetings: [
        {
            id: 'greet-1',
            hindi: 'नमस्ते',
            english: 'Hello',
            romanization: 'Namaste',
            imageUrl: '/assets/vocab/hello.png',
            audioUrl: '/assets/audio/namaste.mp3',
            category: 'greetings'
        },
        {
            id: 'greet-2',
            hindi: 'धन्यवाद',
            english: 'Thank you',
            romanization: 'Dhanyavaad',
            imageUrl: '/assets/vocab/thankyou.png',
            audioUrl: '/assets/audio/dhanyavaad.mp3',
            category: 'greetings'
        },
        {
            id: 'greet-3',
            hindi: 'अलविदा',
            english: 'Goodbye',
            romanization: 'Alvida',
            imageUrl: '/assets/vocab/goodbye.png',
            audioUrl: '/assets/audio/alvida.mp3',
            category: 'greetings'
        }
    ],

    numbers: [
        {
            id: 'num-1',
            hindi: 'एक',
            english: 'One',
            romanization: 'Ek',
            imageUrl: '/assets/vocab/one.png',
            audioUrl: '/assets/audio/ek.mp3',
            category: 'numbers'
        },
        {
            id: 'num-2',
            hindi: 'दो',
            english: 'Two',
            romanization: 'Do',
            imageUrl: '/assets/vocab/two.png',
            audioUrl: '/assets/audio/do.mp3',
            category: 'numbers'
        },
        {
            id: 'num-3',
            hindi: 'तीन',
            english: 'Three',
            romanization: 'Teen',
            imageUrl: '/assets/vocab/three.png',
            audioUrl: '/assets/audio/teen.mp3',
            category: 'numbers'
        },
        {
            id: 'num-4',
            hindi: 'चार',
            english: 'Four',
            romanization: 'Chaar',
            imageUrl: '/assets/vocab/four.png',
            audioUrl: '/assets/audio/chaar.mp3',
            category: 'numbers'
        },
        {
            id: 'num-5',
            hindi: 'पाँच',
            english: 'Five',
            romanization: 'Paanch',
            imageUrl: '/assets/vocab/five.png',
            audioUrl: '/assets/audio/paanch.mp3',
            category: 'numbers'
        }
    ],

    family: [
        {
            id: 'fam-1',
            hindi: 'माँ',
            english: 'Mother',
            romanization: 'Maa',
            imageUrl: '/assets/vocab/mother.png',
            audioUrl: '/assets/audio/maa.mp3',
            category: 'family'
        },
        {
            id: 'fam-2',
            hindi: 'पिता',
            english: 'Father',
            romanization: 'Pita',
            imageUrl: '/assets/vocab/father.png',
            audioUrl: '/assets/audio/pita.mp3',
            category: 'family'
        },
        {
            id: 'fam-3',
            hindi: 'भाई',
            english: 'Brother',
            romanization: 'Bhai',
            imageUrl: '/assets/vocab/brother.png',
            audioUrl: '/assets/audio/bhai.mp3',
            category: 'family'
        },
        {
            id: 'fam-4',
            hindi: 'बहन',
            english: 'Sister',
            romanization: 'Bahan',
            imageUrl: '/assets/vocab/sister.png',
            audioUrl: '/assets/audio/bahan.mp3',
            category: 'family'
        }
    ],

    animals: [
        {
            id: 'anim-1',
            hindi: 'बिल्ली',
            english: 'Cat',
            romanization: 'Billi',
            imageUrl: '/assets/vocab/cat.png',
            audioUrl: '/assets/audio/billi.mp3',
            category: 'animals'
        },
        {
            id: 'anim-2',
            hindi: 'कुत्ता',
            english: 'Dog',
            romanization: 'Kutta',
            imageUrl: '/assets/vocab/dog.png',
            audioUrl: '/assets/audio/kutta.mp3',
            category: 'animals'
        },
        {
            id: 'anim-3',
            hindi: 'गाय',
            english: 'Cow',
            romanization: 'Gaay',
            imageUrl: '/assets/vocab/cow.png',
            audioUrl: '/assets/audio/gaay.mp3',
            category: 'animals'
        },
        {
            id: 'anim-4',
            hindi: 'हाथी',
            english: 'Elephant',
            romanization: 'Haathi',
            imageUrl: '/assets/vocab/elephant.png',
            audioUrl: '/assets/audio/haathi.mp3',
            category: 'animals'
        }
    ],

    food: [
        {
            id: 'food-1',
            hindi: 'रोटी',
            english: 'Bread',
            romanization: 'Roti',
            imageUrl: '/assets/vocab/bread.png',
            audioUrl: '/assets/audio/roti.mp3',
            category: 'food'
        },
        {
            id: 'food-2',
            hindi: 'पानी',
            english: 'Water',
            romanization: 'Paani',
            imageUrl: '/assets/vocab/water.png',
            audioUrl: '/assets/audio/paani.mp3',
            category: 'food'
        },
        {
            id: 'food-3',
            hindi: 'दूध',
            english: 'Milk',
            romanization: 'Doodh',
            imageUrl: '/assets/vocab/milk.png',
            audioUrl: '/assets/audio/doodh.mp3',
            category: 'food'
        },
        {
            id: 'food-4',
            hindi: 'चावल',
            english: 'Rice',
            romanization: 'Chawal',
            imageUrl: '/assets/vocab/rice.png',
            audioUrl: '/assets/audio/chawal.mp3',
            category: 'food'
        }
    ],

    school: [
        {
            id: 'sch-1',
            hindi: 'किताब',
            english: 'Book',
            romanization: 'Kitaab',
            imageUrl: '/assets/vocab/book.png',
            audioUrl: '/assets/audio/kitaab.mp3',
            category: 'school'
        },
        {
            id: 'sch-2',
            hindi: 'पेंसिल',
            english: 'Pencil',
            romanization: 'Pencil',
            imageUrl: '/assets/vocab/pencil.png',
            audioUrl: '/assets/audio/pencil.mp3',
            category: 'school'
        },
        {
            id: 'sch-3',
            hindi: 'स्कूल',
            english: 'School',
            romanization: 'School',
            imageUrl: '/assets/vocab/school.png',
            audioUrl: '/assets/audio/school.mp3',
            category: 'school'
        },
        {
            id: 'sch-4',
            hindi: 'शिक्षक',
            english: 'Teacher',
            romanization: 'Shikshak',
            imageUrl: '/assets/vocab/teacher.png',
            audioUrl: '/assets/audio/shikshak.mp3',
            category: 'school'
        }
    ],

    home: [
        {
            id: 'home-1',
            hindi: 'घर',
            english: 'Home',
            romanization: 'Ghar',
            imageUrl: '/assets/vocab/home.png',
            audioUrl: '/assets/audio/ghar.mp3',
            category: 'home'
        },
        {
            id: 'home-2',
            hindi: 'दरवाजा',
            english: 'Door',
            romanization: 'Darwaaza',
            imageUrl: '/assets/vocab/door.png',
            audioUrl: '/assets/audio/darwaaza.mp3',
            category: 'home'
        },
        {
            id: 'home-3',
            hindi: 'खिड़की',
            english: 'Window',
            romanization: 'Khidki',
            imageUrl: '/assets/vocab/window.png',
            audioUrl: '/assets/audio/khidki.mp3',
            category: 'home'
        },
        {
            id: 'home-4',
            hindi: 'बिस्तर',
            english: 'Bed',
            romanization: 'Bistar',
            imageUrl: '/assets/vocab/bed.png',
            audioUrl: '/assets/audio/bistar.mp3',
            category: 'home'
        }
    ]
};

// Get all vocabulary entries
export const getAllVocabulary = (): VocabEntry[] => {
    return Object.values(vocabularyData).flat();
};

// Get vocabulary by category
export const getVocabularyByCategory = (category: string): VocabEntry[] => {
    return vocabularyData[category] || [];
};

// Get vocabulary by ID
export const getVocabularyById = (id: string): VocabEntry | undefined => {
    return getAllVocabulary().find(v => v.id === id);
};
