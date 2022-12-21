// All possible words to be used

// Subjects - all subjects are animals
const subjects = [
    "cat", 
    "dog", 
    "chicken", 
    "hare", 
    "eagle", 
    "bobcat", 
    "roadrunner",
    "coyote",
    "tortoise",
    "rattle snake"
];

// Adjectives - used to modify the subject
const adjectives = [
    "gray",
    "brown",
    "blue",
    "red",
    "boring",
    "exciting",
    "useless",
    "useful",
    "evasive",
    "persistent"
];

// Verbs - when the subject does something
const verbs = [
    "devoured",
    "threw",
    "bit",
    "walked on",
    "passed by",
    "stared at",
    "joined",
    "destroyed",
    "scared",
    "dragged"
];

// Adverbs - modifies the verb
const adverbs = [
    "nearly",
    "proudly",
    "triumphantly",
    "happily",
    "hurriedly",
    "profoundly",
    "ignorantly",
    "quietly",
    "carefully",
    "quickly"
];

// Direct Objects - what the subject does something to
const directObjects = [
    "rock",
    "rabbit",
    "porcupine",
    "KitKat",
    "raccoon",
    "can",
    "twig",
    "branch",
    "shoe",
    "package"
];

const getRandomWord = (arr) => {return arr[Math.floor(Math.random() * arr.length)]};

console.log(getRandomWord(directObjects));