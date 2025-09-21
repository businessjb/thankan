// utils.js

function getRandomFruitType() {
    return fruitTypes[Math.floor(Math.random() * 3)]; // Start with only the first 3 fruit types
}

function updateNextFruitDisplay(nextFruitType, baseFruitSize) {
    const nextFruitElement = document.getElementById('next-fruit');
    nextFruitElement.className = `fruit ${nextFruitType}`;
    nextFruitElement.style.width = `${baseFruitSize}px`;
    nextFruitElement.style.height = `${baseFruitSize}px`;
}

function populateLegend(baseFruitSize) {
    const legendItems = document.getElementById('legend-items');
    legendItems.innerHTML = ''; // Clear existing items
    fruitTypes.forEach((fruitType, index) => {
        const item = document.createElement('div');
        item.className = 'legend-item';
        
        const fruitIcon = document.createElement('div');
        fruitIcon.className = `legend-fruit ${fruitType}`;
        fruitIcon.style.width = `${baseFruitSize * 0.5}px`;
        fruitIcon.style.height = `${baseFruitSize * 0.5}px`;
        
        const fruitName = document.createElement('span');
        fruitName.textContent = fruitType.charAt(0).toUpperCase() + fruitType.slice(1);
        
        item.appendChild(fruitIcon);
        item.appendChild(fruitName);
        legendItems.appendChild(item);
    });
}

function getNextFruitType(type) {
    const currentIndex = fruitTypes.indexOf(type);
    return fruitTypes[Math.min(currentIndex + 1, fruitTypes.length - 1)];
}

function areColliding(fruitA, fruitB) {
    const dx = (fruitA.x + fruitA.size / 2) - (fruitB.x + fruitB.size / 2);
    const dy = (fruitA.y + fruitA.size / 2) - (fruitB.y + fruitB.size / 2);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (fruitA.size + fruitB.size) / 2;
}

function updateScoreDisplay() {
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score}`;
}