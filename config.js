// config.js

const fruitTypes = ['cherry', 'strawberry', 'grape', 'orange', 'apple', 'pear', 'pineapple'];
let score = 0;
let GAME_WIDTH = 800;
let GAME_HEIGHT = 600;
let BASE_FRUIT_SIZE = 40;
const COLLISION_THRESHOLD = 5; // Minimum velocity for fruits to bounce instead of stack
const FLOOR_HEIGHT_RATIO = 0.95; // Set the floor at 95% of the game container height
const SIZE_INCREASE_RATIO = 1.25; // Each fruit level is 25% bigger than the previous
const BASE_FRUIT_WEIGHT = 1; // Base weight for the smallest fruit (cherry)
const WEIGHT_INCREASE_RATIO = 1.25; // Each fruit level is 25% heavier than the previous


// config.js

const fruitSounds = {
    cherry: new Audio('sounds/shar.mp3'),
    strawberry: new Audio('sounds/mukesh.mp3'),
    grape: new Audio('sounds/prith.mp3'),
    orange: new Audio('sounds/bab.mp3'),
    apple: new Audio('sounds/suresh.mp3'),
    pear: new Audio('sounds/lale.mp3'),
    pineapple: new Audio('sounds/thankan.mp3')
};

// config.js

const fruitSoundRanges = {
  grape: { start: 3, end: 5 },  // play only from 3s to 5s
  pear: { start: 9, end: 10 }    // example: play only from 9s to 10s
};


function updateGameDimensions(width, height) {
    GAME_WIDTH = width;
    GAME_HEIGHT = height;
    BASE_FRUIT_SIZE = Math.min(GAME_WIDTH, GAME_HEIGHT) * 0.07;
}