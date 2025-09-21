// fruit.js

class Fruit {
    constructor(type, x, y) {
        this.type = type;
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 4; // Random horizontal velocity
        this.vy = 0; // Vertical velocity
        this.gravity = 0.5; // Gravity acceleration
        this.rotation = 0; // Initial rotation
        this.size = BASE_FRUIT_SIZE * Math.pow(SIZE_INCREASE_RATIO, fruitTypes.indexOf(type));
        this.weight = BASE_FRUIT_WEIGHT * Math.pow(WEIGHT_INCREASE_RATIO, fruitTypes.indexOf(type));
        this.element = document.createElement('div');
        this.element.className = `fruit ${type}`;
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        this.timeAboveBoard = 0; // New property to track time above board
        this.updatePosition();
        document.getElementById('game-container').appendChild(this.element);
    }

    updatePosition() {
        this.element.style.left = `${this.x}px`;
        this.element.style.top = `${this.y}px`;
        this.element.style.transform = `rotate(${this.rotation}deg)`;
    }

    isAboveBoard() {
        return this.y < 0;
    }

    applyPhysics(deltaTime) {
        // Apply gravity (weight affects acceleration)
        this.vy += this.gravity;// * this.weight;
        
        this.x += this.vx;
        this.y += this.vy;

        // Check if fruit is above the board
        if (this.isAboveBoard()) {
            this.timeAboveBoard += deltaTime;
        } else {
            this.timeAboveBoard = 0;
        }

        // Bounce off the floor (weight affects bounce height)
        if (this.y + this.size > GAME_HEIGHT * FLOOR_HEIGHT_RATIO) {
            this.y = GAME_HEIGHT * FLOOR_HEIGHT_RATIO - this.size;
            this.vy *= -0.7 / this.weight; // Heavier fruits bounce less
        }

        // Bounce off the walls (weight affects horizontal movement)
        if (this.x <= 0 || this.x + this.size >= GAME_WIDTH) {
            this.vx *= -1 / this.weight; // Heavier fruits bounce less horizontally
            this.x = Math.max(0, Math.min(this.x, GAME_WIDTH - this.size));
        }

        // Apply friction (weight affects friction)
        this.vx *= 0.99 / this.weight;
        // this.vy *= 0.99 / this.weight;

        // Rotate the fruit (weight affects rotation speed)
        this.rotation += this.vx / this.weight;

        this.updatePosition();
    }

    isGameOver() {
        return this.timeAboveBoard > 2000; // 2000 milliseconds = 2 seconds
    }
}