// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
    "https://i.dailymail.co.uk/i/pix/2013/11/21/article-2510932-198BA37C00000578-69_634x670.jpg",
    "https://i.dailymail.co.uk/i/pix/2016/12/21/15/3B8FD3B800000578-4055458-Not_happy_The_former_gold_medal_Olympian_doesn_t_like_what_she_a-m-21_1482334095804.jpg",
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/10/Kourtney-Kardashian-Keeping-Up-with-the-Kardashians.jpg",
    "https://people.com/thmb/7HgQIgWMEoc0T6jY7HqGFMIgPtI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1165x0:1167x2)/Kim-Kardashian-111523-1-0db9dc72c1794e13a568ca52fb124959.jpg",
    "https://content.api.news/v3/images/bin/40cb4cdb815bd4fc94f6716b4a750d86",
    "https://extra-images.akamaized.net/image/56/5by6/2021/10/05/56f75bac43534b69b4a888d258393bf1_md.jpg",
    "https://hips.hearstapps.com/hmg-prod/images/kendall-jenner-instagram-post-1643885021.png",
    "https://celebmafia.com/wp-content/uploads/2015/03/kylie-jenner-shopping-at-sephora-in-calabasas-march-2015_3.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGLcfenACpJXLE59ex9km8lntXb1S2LI6ivGWh0B44g&s",
    "https://images.ctfassets.net/iyiurthvosft/featured-img-of-post-219956/0edb8f8d63a89b2c66a296399779eb3b/featured-img-of-post-219956.png"
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