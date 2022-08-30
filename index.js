import greenCards from './assets/MythicCards/green/greenCards.js';
import brownCards from './assets/MythicCards/brown/brownCards.js';
import blueCards from './assets/MythicCards/blue/blueCards.js';

const ancient = document.querySelector('.ancient');
const level = document.querySelector('.level');
const deckContainer = document.querySelector('.deck-container');
const shuffleButton = document.querySelector('.shuffle-button');
const cardDeck = document.querySelector('.card-deck');
const lastСard = document.querySelector('.last-card');

const text1 = document.querySelector('.text-1');
const text2 = document.querySelector('.text-2');
const text3 = document.querySelector('.text-3');

const greenOne = document.querySelector('.green-one');
const greenTwo = document.querySelector('.green-two');
const greenThree = document.querySelector('.green-three');
const brownOne = document.querySelector('.brown-one');
const brownTwo = document.querySelector('.brown-two');
const brownThree = document.querySelector('.brown-three');
const blueOne = document.querySelector('.blue-one');
const blueTwo = document.querySelector('.blue-two');
const blueThree = document.querySelector('.blue-three');

const deck = document.createElement('span');
const btn = document.createElement('span');
deck.innerHTML = 'Вытянуть карту';
btn.innerHTML = 'Замешать колоду';

const setLevel = () => {
    level.classList.add('active');
}

ancient.addEventListener('click', setLevel);

const setBtn = () => {
    shuffleButton.prepend(btn);
    btn.classList.add('active');
}

level.addEventListener('click', setBtn);

const setDeck = () => {
    shuffleButton.firstChild.remove()
    deckContainer.classList.add('deck-container-active');
    cardDeck.prepend(deck);
    deck.classList.add('active');
}

btn.addEventListener('click', setDeck);

let randomBlue;
let randomBrown;
let randomGreen;

const getRandomBlue = (min = 1, max = 13) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomBlue = Math.floor(Math.random() * (max - min)) + min;
}

const getRandomGreen = (min = 1, max = 19) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomGreen = Math.floor(Math.random() * (max - min)) + min;
}

const getRandomBrown = (min = 1, max = 22) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomBrown = Math.floor(Math.random() * (max - min)) + min;
}

let greenArray = [];
const getGreen = () => {
    while (greenArray.length < 5) {
        getRandomGreen();
        if (greenArray.findIndex((item) => item.indexOf(`green${randomGreen}`) >= 0) === -1) {
            greenArray.push(greenCards[`green${randomGreen}`]);
        }
    }
}
getGreen();

let brownArray = [];
const getBrown = () => {
    while (brownArray.length < 9) {
        getRandomBrown();
        if (brownArray.findIndex((item) => item.indexOf(`brown${randomBrown}`) >= 0) === -1) {
            brownArray.push(brownCards[`brown${randomBrown}`]);
        }
    }
}
getBrown();

let blueArray = [];
const getBlue = () => {
    while (blueArray.length < 2) {
        getRandomBlue();
        if (blueArray.findIndex((item) => item.indexOf(`blue${randomBlue}`) >= 0) === -1) {
            blueArray.push(blueCards[`blue${randomBlue}`]);
        }
    }
}
getBlue();

let randomNum;
const getRandomNum = (min = 0, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNum = Math.floor(Math.random(21) * (max - min)) + min;
}

let oneStageArr = [];
const firstStage = () => {
    getRandomNum(0, greenArray.length);
    oneStageArr.push(greenArray.splice(randomNum, 1));
    getRandomNum(0, brownArray.length);
    oneStageArr.push(brownArray.splice(randomNum, 1));
    getRandomNum(0, brownArray.length);
    oneStageArr.push(brownArray.splice(randomNum, 1));
    getRandomNum(0, blueArray.length);
    oneStageArr.push(blueArray.splice(randomNum, 1));
};
firstStage();

let secondStageArr = [];
const secondStage = () => {
    getRandomNum(0, greenArray.length);
    secondStageArr.push(greenArray.splice(randomNum, 1));
    getRandomNum(0, greenArray.length);
    secondStageArr.push(greenArray.splice(randomNum, 1));
    getRandomNum(0, brownArray.length);
    secondStageArr.push(brownArray.splice(randomNum, 1));
    getRandomNum(0, brownArray.length);
    secondStageArr.push(brownArray.splice(randomNum, 1));
    getRandomNum(0, brownArray.length);
    secondStageArr.push(brownArray.splice(randomNum, 1));
    getRandomNum(0, blueArray.length);
    secondStageArr.push(blueArray.splice(randomNum, 1));
};
secondStage();

let thirdStageArr = [];
const thirdStage = () => {
    getRandomNum(0, greenArray.length);
    thirdStageArr.push(greenArray.splice(randomNum, 1));
    getRandomNum(0, greenArray.length);
    thirdStageArr.push(greenArray.splice(randomNum, 1));
    getRandomNum(0, brownArray.length);
    thirdStageArr.push(brownArray.splice(randomNum, 1));
    getRandomNum(0, brownArray.length);
    thirdStageArr.push(brownArray.splice(randomNum, 1));
    getRandomNum(0, brownArray.length);
    thirdStageArr.push(brownArray.splice(randomNum, 1));
    getRandomNum(0, brownArray.length);
    thirdStageArr.push(brownArray.splice(randomNum, 1));
};
thirdStage();


let number = 0;
const getRandomNumber = (min = 0, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    number = Math.floor(Math.random() * (max - min)) + min;
}

deck.onclick = function () {
    if (oneStageArr.length > 0) {
        getRandomNumber(0, oneStageArr.length);
        const path = oneStageArr.splice(number, 1);
        lastСard.style.backgroundImage = `url(${path})`;
        lastСard.classList.add('card-active');
        if(lastСard.style.backgroundImage.includes('green') && greenOne.textContent >= '0') {
            greenOne.textContent = greenOne.textContent - '1';
        } else if(lastСard.style.backgroundImage.includes('brown') &&  brownOne.textContent >= '0') {
            brownOne.textContent = brownOne.textContent - '1';
        } else if(lastСard.style.backgroundImage.includes('blue') &&  blueOne.textContent >= '0') {
            blueOne.textContent = blueOne.textContent - '1';
        }
        if(oneStageArr.length === 0){
            text1.classList.add('text-active');
        }
    } else if (secondStageArr.length > 0) {
        getRandomNumber(0, secondStageArr.length);
        const path = secondStageArr.splice(number, 1);
        lastСard.style.backgroundImage = `url(${path})`;
        lastСard.classList.add('card-active');
        if(lastСard.style.backgroundImage.includes('green') && greenTwo.textContent >= '0') {
            greenTwo.textContent = greenTwo.textContent - '1';
        } else if(lastСard.style.backgroundImage.includes('brown') &&  brownTwo.textContent >= '0') {
            brownTwo.textContent = brownTwo.textContent - '1';
        } else if(lastСard.style.backgroundImage.includes('blue') &&  blueTwo.textContent >= '0') {
            blueTwo.textContent = blueTwo.textContent - '1';
        }
        if(secondStageArr.length === 0){
            text2.classList.add('text-active');
        }
    } else if(thirdStageArr.length > 0) {
        getRandomNumber(0, thirdStageArr.length);
        const path = thirdStageArr.splice(number, 1);
        lastСard.style.backgroundImage = `url(${path})`;
        lastСard.classList.add('card-active');
        if(lastСard.style.backgroundImage.includes('green') && greenThree.textContent >= '0') {
            greenThree.textContent = greenThree.textContent - '1';
        } else if(lastСard.style.backgroundImage.includes('brown') &&  brownThree.textContent >= '0') {
            brownThree.textContent = brownThree.textContent - '1';
        } else if(lastСard.style.backgroundImage.includes('blue') &&  blueThree.textContent >= '0') {
            blueThree.textContent = blueThree.textContent - '1';
        }
        if(thirdStageArr.length === 0){
            text3.classList.add('text-active');
        }
    } else {
        lastСard.style.backgroundImage = 'none';
        lastСard.classList.remove('card-active');
    }
}
