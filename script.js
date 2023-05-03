// All possible words to be used

// Subjects - all subjects are animals
const subjects = [
    "cat", 
    "dog", 
    "chicken", 
    "hare", 
    "roadrunner",
    "tortoise",
    "sheep",
    "dog", 
    "rabbit",
    "mouse"
];

// Adjectives - used to modify the subject
const adjectives = [
    "unfriendly",
    "amazing",
    "legendary",
    "moody",
    "underappreciated"
];

// Verbs - when the subject does something
const verbs = [
    "befriends", 
    "helps", 
    "fights"
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
    "cat",
    "rattle snake", 
    "coyote", 
    "bobcat", 
    "eagle", 
    "dragon"
];

// Articles - another type of adjective
const articles = ["a", "the"];

const getRandomWord = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)]
};

// Return all of the words to be used in a topic as an object
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

const formatRandomTopic = () => {
    const words = getWords();
    vowels = ["a", "e", "i", "o", "u"];

    console.log(words.adjective.slice(0, 3));

    if (words.article1 === "a" && (vowels.includes(words.adjective[0]) && (words.adjective.slice(0, 3) !== 'uni'))) {
        words.article1 = "an";
    }
    if (words.article2 === "a" && (vowels.includes(words.directObject[0]) && (words.directObject.slice(0, 3) !== 'uni'))) {
        words.article2 = "an";
    }

    return capitalize(`${words.article1} ${words.adjective} ${words.subject} ${words.verb} ${words.article2} ${words.directObject}.`);
}

const setRandomTopic = () => {
    const randomTopic = formatRandomTopic();
    document.getElementById("random-topic").innerHTML = randomTopic;
    console.log(randomTopic);
}

const toggleColorTheme = () => {
    if (document.body.classList.contains('dark') || document.body.classList.contains('inaccessible')) {
        document.body.classList.remove('dark');
        document.body.classList.remove('inaccessible');
    // } else if (document.body.classList.contains('inaccessible')) {
    //     document.body.classList.remove('inaccessible');
    //     // document.body.classList.add('dark');
    } else {
        document.body.classList.add('dark');
    }
}

const setColorThemeInaccessible = () => {
    document.body.classList = ['inaccessible'];
}

const handleToggleColorClick = (e) => {
    toggleColorTheme();
}

const doSomethingRandom = () => {
    const choice = Math.ceil(Math.random() * 4);
    console.log(choice);
    switch (choice) {
        case 1:
            setColorThemeInaccessible();
            break;
        case 2:
            toggleColorTheme();
            break;
        case 3:
            setRandomTopic();
            break;
        case 4:
            startRandomSound();
            break;
    }
}

const startRandomSound = () => {
    const basePath = './sounds/';
    const number = Math.ceil(Math.random() * 6);
    const path = `${basePath}${number}.mp3`;
    const audio = new Audio(path);
    audio.play();
    console.log(audio);
    return audio;
}

document.querySelector('main').onmouseup = setRandomTopic;
document.onkeyup = e => { if (e.code === "Space") setRandomTopic()};
document.getElementById('color-theme-button').onmouseup = handleToggleColorClick;
document.getElementById('randomize').onmouseup = doSomethingRandom;