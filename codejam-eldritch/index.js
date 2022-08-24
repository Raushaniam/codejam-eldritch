const ancient = document.querySelector('.ancient');
const level = document.querySelector('.level');
const deckContainer = document.querySelector('.deck-container');
const shuffleButton = document.querySelector('.shuffle-button');
const cardDeck = document.querySelector('.card-deck');
const deck = document.createElement('span');
deck.innerHTML = 'Вытянуть карту';
const btn = document.createElement('span');
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