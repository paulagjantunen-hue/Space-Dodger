const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");

const scorePerSecond = 100;
const asteroidsPerSecond = 5;
const asteroidBaseSpeed = 150;
const asteroidSpeedPerPoint = 1 / 10;

let prevTime = 0;
let currentTime = performance.now() / 1000
let realDeltaTime = 0
let deltaTime = 0
let nextAsteroidTime = 0;

const player = {
    x: 225,
    y: 620,
    width: 50,
    height: 50,
    speed: 400
};

let keys = {};
let asteroids = [];
let score = 0;
let gameOver = false;
let asteroidSpeed = asteroidBaseSpeed;

// Controls
window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
});

function drawPlayer() {
    ctx.fillStyle = "cyan";

    ctx.beginPath();
    ctx.moveTo(player.x + player.width / 2, player.y);
    ctx.lineTo(player.x, player.y + player.height);
    ctx.lineTo(player.x + player.width, player.y + player.height);
    ctx.closePath();
    ctx.fill();
}

function movePlayer() {
    if ((keys["ArrowLeft"] || keys["a"]) && player.x > 0) {
        player.x -= player.speed * deltaTime;
    }

    if ((keys["ArrowRight"] || keys["d"]) && player.x < canvas.width - player.width) {
        player.x += player.speed * deltaTime;
    }
}

function createAsteroid() {
    const size = Math.random() * 40 + 20;
    nextAsteroidTime += -Math.log(Math.random());

    asteroids.push({
        x: Math.random() * (canvas.width - size),
        y: -size,
        width: size,
        height: size
    });
}

function drawAsteroids() {
    ctx.fillStyle = "gray";

    asteroids.forEach((asteroid) => {
        ctx.beginPath();
        ctx.arc(
            asteroid.x + asteroid.width / 2,
            asteroid.y + asteroid.height / 2,
            asteroid.width / 2,
            0,
            Math.PI * 2
        );
        ctx.fill();
    });
}

function moveAsteroids() {
    asteroids.forEach((asteroid) => {
        asteroid.y += asteroidSpeed * deltaTime;
    });

    asteroids = asteroids.filter((asteroid) => asteroid.y < canvas.height + 50);
}

function checkCollision() {
    for (let asteroid of asteroids) {
        if (
            player.x < asteroid.x + asteroid.width &&
            player.x + player.width > asteroid.x &&
            player.y < asteroid.y + asteroid.height &&
            player.y + player.height > asteroid.y
        ) {
            gameOver = true;
        }
    }
}

function drawGameOver() {
    ctx.fillStyle = "red";
    ctx.font = "48px Arial";
    ctx.fillText("GAME OVER", 100, 350);

    ctx.font = "24px Arial";
    ctx.fillText("Refresh to restart", 145, 400);
}

function updateScore() {
    score = Math.floor(currentTime * scorePerSecond);
    scoreDisplay.textContent = `Score: ${score}`;
    asteroidSpeed = asteroidBaseSpeed + score * asteroidSpeedPerPoint;
}

function lerp(a, b, t) {
    return a + (b - a) * t;
}

function updateTime() {
    prevTime = currentTime;
    currentTime = performance.now() / 1000;
    realDeltaTime = currentTime - prevTime;

    // Some browsers do not provide high precision time,
    // as that can be used for fingerprinting.
    // This smoothens out deltaTime, as to not cause jittery movement.
    if (deltaTime > 0) {
        deltaTime = lerp(deltaTime, realDeltaTime, 0.1);
    } else {
        deltaTime = realDeltaTime;
    }  

    // Time will keep going if the page is inactive, 
    // but no animation frame will be given.
    // This code limits currentTime and deltaTime to 1 second.
    if (deltaTime > 1) {
        deltaTime = 1;
        currentTime = prevTime + 1;
    }
}

function gameLoop() {
    updateTime();
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gameOver) {
        drawGameOver();
        return;
    }

    movePlayer();
    moveAsteroids();

    while (currentTime >= nextAsteroidTime) {
        createAsteroid();
    }

    drawPlayer();
    drawAsteroids();

    checkCollision();
    updateScore();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);