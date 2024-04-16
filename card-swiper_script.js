// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [

];

//variables
let cardCount = 0;

//functions
function appenedNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appenedNewCard,
    onLike: () => {
        like.computedStyleMap.amimationPlayState = 'running';
        like.classList.toggle('trigger');
    },
    onDislike: () => {
        dislike.computedStyleMap.animationPlayState = 'running';
        dislike.classList.toggle('trigger');
    } 
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swpier.querySelectorAll('.card:not(.dismissing');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
    appenedNewCard();
}