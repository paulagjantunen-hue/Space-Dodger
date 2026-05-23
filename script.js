const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("score");

const player = {
    x: 225,
    y: 620,
    width: 50,
    height: 50,
    speed: 7
};

let keys = {};
let asteroids = [];
let score = 0;
let gameOver = false;
let asteroidSpeed = 3;
let lastTime = performance.now();

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
git
    ctx.fill();
}

function movePlayer() {
    if ((keys["ArrowLeft"] || keys["a"]) && player.x > 0) {
        player.x -= player.speed;
    }

    if ((keys["ArrowRight"] || keys["d"]) && player.x < canvas.width - player.width) {
        player.x += player.speed;
    }
}

function createAsteroid() {
    const size = Math.random() * 40 + 20;

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
        asteroid.y += asteroidSpeed;
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
    score++;
    scoreDisplay.textContent = `Score: ${score}`;

    if (score % 500 === 0) {
        asteroidSpeed += 0.5;
    }
}

function gameLoop(currentTime) {
    const deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    player.x += playerSpeed * deltaTime;
    

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (gameOver) {
        drawGameOver();
        return;
    }

    movePlayer();
    moveAsteroids();

    if (Math.random() < 0.03) {
        createAsteroid();
    }

    drawPlayer();
    drawAsteroids();

    checkCollision();
    updateScore();

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame (gameLoop);