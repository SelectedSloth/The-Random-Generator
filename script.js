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
    "abnormal",
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
    "caught",
    "destroyed",
    "scared",
    "dragged"
];

// Adverbs - modifies the verb
const adverbs = [
    "nearly",
    "proudly",
    "triumphantly",
    "merrily",
    "hurriedly",
    "placidly",
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
    "candy",
    "raccoon",
    "can",
    "twig",
    "branch",
    "shoe",
    "package"
];

// Articles - another type of adjective
const articles = ["a", "the"];

const getRandomWord = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
};

// Return all of the words to be used in a sentence as an object
const getWords = () => {
    return {
        subject: getRandomWord(subjects),
        adjective: getRandomWord(adjectives),
        verb: getRandomWord(verbs),
        adverb: getRandomWord(adverbs),
        directObject: getRandomWord(directObjects),
        article1: getRandomWord(articles),
        article2: getRandomWord(articles)
    };
};

const capitalize = (str) => {
    return str[0].toUpperCase() + str.slice(1);
}

const formatRandomSentence = () => {
    const words = getWords();
    vowels = ["a", "e", "i", "o"];
    if (vowels.includes(words.adjective[0]) && words.article1 === "a") {
        words.article1 = "an";
    }
    if (vowels.includes(words.adjective[0]) && words.article2 === "a") {
        words.article2 = "an";
    }
    console.log(words);
    return capitalize(`${words.article1} ${words.adjective} ${words.subject} ${words.adverb} ${words.verb} ${words.article2} ${words.directObject}.`);
}

console.log(formatRandomSentence());