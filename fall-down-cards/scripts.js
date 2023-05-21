const cards = [...document.querySelectorAll(".card")];
// reverse order from dom to make the first defined card the fron one
cards.reverse();
const numCards = cards.length;
const cardStyles = [];
//console.log(cards);

let opacity = 1;
let offsetY = 0;
let scale = 1;
let delay = 2000;

// incremental values
let opacityDiff = 0.25;
let scaleDiff = 0.1;
let offsetYDiff = 50;
let delayYDiff = 3000;

// update card styles
function setStyles(card, styles) {
  //console.log(styles);
  if (styles.opacity) card.style.opacity = styles.opacity;
  if (styles.scale) card.style.scale = styles.scale;
  if (styles.transform) card.style.transform = styles.transform;
  if (styles.offsetY) card.style.translate = `0 ${styles.offsetY}px`;
}

// initial set up
cards.forEach((card, idx) => {
  // set styles for each card (smaller, more opacity and higher in the viewport)
  const styles = {
    opacity: opacity,
    transform: "",
    scale: scale,
    offsetY: offsetY,
  };
  //console.log(styles);
  // update card with new styles
  setStyles(card, styles);

  // update values for next card
  opacity = opacity - opacityDiff;
  offsetY = offsetY - offsetYDiff;
  scale = scale - scaleDiff;
});
// define style for falling card
const fallingStyles = {
  opacity: "0",
  offsetY: 100,
  scale: 1.12,
  transform: "rotate3d(-1, 0, 0, 5deg)",
};

let lastCardIndex = 0;
let counter = 0;
//const interval = setInterval(() => {
//update remaining cards - scale, position and opacity
for (let index = 0; index < numCards; index++) {
  //cards.forEach((card, index) => {

  const card = cards[index];
  // console.log(`a[${index}] = ${card}`);

  const interval = setInterval(() => {
    //console.log(counter, lastCardIndex);
    if (counter === lastCardIndex) {
      console.log("drop it");
      // drop down current card
      setStyles(card, fallingStyles);
    }
    
   // if (counter > lastCardIndex) {
      console.log("move it");
      // all others
      const compStyles = window.getComputedStyle(card);
      const newOpacity =
        Number(compStyles.getPropertyValue("opacity")) + opacityDiff;
      const currentY = compStyles
        .getPropertyValue("translate")
        .split(" ")[1]
        .split("px")[0];
      const newScale = Number(compStyles.getPropertyValue("scale")) + scaleDiff;
      const newPos = Number(currentY) + offsetYDiff;

      const updateStyles = {
        opacity: newOpacity,
        translate: newPos,
        scale: newScale,
        transform: "",
      };

      setStyles(card, updateStyles);
   // }
    counter++;
    lastCardIndex = counter;

    if (counter >= numCards - 1) clearInterval(interval);
  }, delay);
  delay = delay + delayYDiff;

  //console.log(lastCardIndex, numCards);
}

//counter++;

//});

// });
