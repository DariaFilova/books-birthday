const buttonPositive = document.querySelector('.button-positive');
const buttonNegative = document.querySelector('.button-negative');
const buttonSorry = document.querySelector('.button-sorry');
const buttonGift1 = document.querySelector('.button-gift1');
const buttonGift2 = document.querySelector('.button-gift2');
const buttonGiveGift = document.querySelector('.button-give-gift');
const buttonShow = document.querySelector('.button-show');

const containerNegative = document.querySelector('.container-negative');
const containerPositive = document.querySelector('.container-positive');
const containerStart = document.querySelector('.container-start');
const containerAfterLie = document.querySelector('.container-after-lie');
const containerAfterPositive = document.querySelector(
  '.container-after-positive'
);
const containerGift = document.querySelector('.container-gift');
const code = document.querySelector('.code');
const codeExplanation = document.querySelector('.code-explanation');

function toggleDisplay(element) {
  element.classList.toggle('hide');
}

buttonNegative.addEventListener('click', () => {
  toggleDisplay(containerStart);
  toggleDisplay(containerNegative);
});

buttonPositive.addEventListener('click', () => {
  console.log('click');
  toggleDisplay(containerStart);
  toggleDisplay(containerPositive);
});

buttonSorry.addEventListener('click', () => {
  toggleDisplay(containerNegative);
  toggleDisplay(containerAfterLie);
});

buttonGiveGift.addEventListener('click', () => {
  toggleDisplay(containerPositive);
  toggleDisplay(containerAfterPositive);
});

buttonGift1.addEventListener('click', () => {
  toggleDisplay(containerAfterLie);
  toggleDisplay(containerGift);
});

buttonGift2.addEventListener('click', () => {
  toggleDisplay(containerAfterPositive);
  toggleDisplay(containerGift);
});

buttonShow.addEventListener('click', () => {
  toggleDisplay(code);
  toggleDisplay(codeExplanation);
});

