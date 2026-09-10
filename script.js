// TU DODAJESZ WPISY SAMODZIELNIE
const posts = [
    {
     //zmiana zdjęć i opisu klasa 5   
        title: "Wpis 1",
        img1: "img/zdjecie1a.jpg",
        img2: "img/zdjecie1b.jpg",
        desc: "Opis wpisu 1"
    },
    {
        title: "Wpis 2",
        img1: "img/zdjecie2a.jpg",
        img2: "img/zdjecie2b.jpg",
        desc: "Opis wpisu 2"
    },
    {
        title: "Wpis 3",
        img1: "img/zdjecie3a.jpg",
        img2: "img/zdjecie3b.jpg",
        desc: "Opis wpisu 3"
    },
    {
        title: "Wpis 4",
        img1: "img/zdjecie4a.jpg",
        img2: "img/zdjecie4b.jpg",
        desc: "Opis wpisu 4"
    },
    {
        title: "Wpis 5",
        img1: "img/zdjecie5a.jpg",
        img2: "img/zdjecie5b.jpg",
        desc: "Opis wpisu 5"
    },
    {
        title: "Wpis 6",
        img1: "img/zdjecie6a.jpg",
        img2: "img/zdjecie6b.jpg",
        desc: "Opis wpisu 6"
    }
];
//zmiana djęcia klasa 4
const classFourPhotos = [
    "img/zdjecie1a.jpg", "img/zdjecie1b.jpg",
    "img/zdjecie2a.jpg", "img/zdjecie2b.jpg",
    "img/zdjecie3a.jpg", "img/zdjecie3b.jpg",
    "img/zdjecie4a.jpg", "img/zdjecie4b.jpg",
    "img/zdjecie5a.jpg", "img/zdjecie5b.jpg",
    "img/zdjecie6a.jpg", "img/zdjecie6b.jpg"
];

const postsByClass = {
    "5": posts,
    "6": [
        //zmiana opisu i zdjęć klasa 6
        { title: "Wpis 1 klasy 6", img1: "img/zdjecie1a.jpg", img2: "img/zdjecie1b.jpg", desc: "Opis wpisu 1 klasy 6" },
        { title: "Wpis 2 klasy 6", img1: "img/zdjecie2a.jpg", img2: "img/zdjecie2b.jpg", desc: "Opis wpisu 2 klasy 6" },
        { title: "Wpis 3 klasy 6", img1: "img/zdjecie3a.jpg", img2: "img/zdjecie3b.jpg", desc: "Opis wpisu 3 klasy 6" },
        { title: "Wpis 4 klasy 6", img1: "img/zdjecie4a.jpg", img2: "img/zdjecie4b.jpg", desc: "Opis wpisu 4 klasy 6" },
        { title: "Wpis 5 klasy 6", img1: "img/zdjecie5a.jpg", img2: "img/zdjecie5b.jpg", desc: "Opis wpisu 5 klasy 6" },
        { title: "Wpis 6 klasy 6", img1: "img/zdjecie6a.jpg", img2: "img/zdjecie6b.jpg", desc: "Opis wpisu 6 klasy 6" }
    ],
    "7": [
        //zmiana opisu i zdjęć klasa 7
        { title: "Wpis 1 klasy 7", img1: "img/zdjecie1a.jpg", img2: "img/zdjecie1b.jpg", desc: "Opis wpisu 1 klasy 7" },
        { title: "Wpis 2 klasy 7", img1: "img/zdjecie2a.jpg", img2: "img/zdjecie2b.jpg", desc: "Opis wpisu 2 klasy 7" },
        { title: "Wpis 3 klasy 7", img1: "img/zdjecie3a.jpg", img2: "img/zdjecie3b.jpg", desc: "Opis wpisu 3 klasy 7" },
        { title: "Wpis 4 klasy 7", img1: "img/zdjecie4a.jpg", img2: "img/zdjecie4b.jpg", desc: "Opis wpisu 4 klasy 7" },
        { title: "Wpis 5 klasy 7", img1: "img/zdjecie5a.jpg", img2: "img/zdjecie5b.jpg", desc: "Opis wpisu 5 klasy 7" },
        { title: "Wpis 6 klasy 7", img1: "img/zdjecie6a.jpg", img2: "img/zdjecie6b.jpg", desc: "Opis wpisu 6 klasy 7" }
    ],
    "8": [
        //zmina zdjęcia i opisu klasa 8
        { title: "Wpis 1 klasy 8", img1: "img/zdjecie1a.jpg", img2: "img/zdjecie1b.jpg", desc: "Opis wpisu 1 klasy 8" },
        { title: "Wpis 2 klasy 8", img1: "img/zdjecie2a.jpg", img2: "img/zdjecie2b.jpg", desc: "Opis wpisu 2 klasy 8" },
        { title: "Wpis 3 klasy 8", img1: "img/zdjecie3a.jpg", img2: "img/zdjecie3b.jpg", desc: "Opis wpisu 3 klasy 8" },
        { title: "Wpis 4 klasy 8", img1: "img/zdjecie4a.jpg", img2: "img/zdjecie4b.jpg", desc: "Opis wpisu 4 klasy 8" },
        { title: "Wpis 5 klasy 8", img1: "img/zdjecie5a.jpg", img2: "img/zdjecie5b.jpg", desc: "Opis wpisu 5 klasy 8" },
        { title: "Wpis 6 klasy 8", img1: "img/zdjecie6a.jpg", img2: "img/zdjecie6b.jpg", desc: "Opis wpisu 6 klasy 8" }
    ]
};

// LISTA TYTUŁÓW
const list = document.getElementById("post-list");
const classTabs = document.querySelectorAll(".class-tab");
let selectedClass = "5";

function renderPosts() {
    list.innerHTML = "";
    if (selectedClass === "4") {
        const gallery = document.createElement("div");
        gallery.className = "class-four-gallery";
        classFourPhotos.forEach((imagePath) => {
            const image = document.createElement("img");
            image.src = imagePath;
            image.alt = "Zdjęcie klasy 4";
            gallery.appendChild(image);
        });
        list.appendChild(gallery);
        return;
    }

    const classPosts = postsByClass[selectedClass] || [];

    if (classPosts.length === 0) {
        const emptyPlace = document.createElement("div");
        emptyPlace.className = "empty-class-place";
        emptyPlace.textContent = `Miejsce na wpisy klasy ${selectedClass}`;
        list.appendChild(emptyPlace);
        return;
    }

    classPosts.forEach((post, index) => {
        const div = document.createElement("div");
        div.className = "post-title";
        div.textContent = post.title;
        div.onclick = () => openModal(index);
        list.appendChild(div);
    });
}

classTabs.forEach((tab) => {
    tab.onclick = () => {
        selectedClass = tab.dataset.class;
        classTabs.forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
        renderPosts();
    };
});

renderPosts();

// MODAL
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

function openModal(index) {
    const post = postsByClass[selectedClass][index];
    document.getElementById("modal-title").textContent = post.title;
    document.getElementById("modal-img1").src = post.img1;
    document.getElementById("modal-img2").src = post.img2;
    document.getElementById("modal-desc").textContent = post.desc;

    modal.style.display = "block";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};

// PANEL GIER
const gamesToggle = document.getElementById("games-toggle");
const gamesPanel = document.getElementById("games-panel");
const gamesClose = document.getElementById("games-close");
const gameStage = document.getElementById("game-stage");
let snakeTimer;

gamesToggle.onclick = () => {
    gamesPanel.classList.add("open");
    gamesPanel.setAttribute("aria-hidden", "false");
};

gamesClose.onclick = closeGames;
gamesPanel.onclick = (event) => {
    if (event.target === gamesPanel) closeGames();
};

function closeGames() {
    gamesPanel.classList.remove("open");
    gamesPanel.setAttribute("aria-hidden", "true");
    clearInterval(snakeTimer);
}

document.querySelectorAll(".game-choice").forEach((button) => {
    button.onclick = () => startGame(button.dataset.game);
});

function startGame(gameName) {
    clearInterval(snakeTimer);
    gameStage.hidden = false;
    if (gameName === "snake") createSnakeGame();
    if (gameName === "snowflakes") createSnowflakeGame();
    if (gameName === "memory") createMemoryGame();
}

function createSnowflakeGame() {
    const target = 15;
    let score = 0;
    gameStage.innerHTML = `<h3>Śnieżynki</h3><p class="game-score">Wynik: 0 / ${target}</p><p>Kliknij trzy śnieżynki spadające z nieba!</p><div class="clicking-field"></div>`;
    const scoreElement = gameStage.querySelector(".game-score");
    const field = gameStage.querySelector(".clicking-field");
    const snowflakes = [];

    function resetSnowflake(snowflake, top = -12) {
        snowflake.top = top;
        snowflake.left = 10 + Math.random() * 80;
        snowflake.speed = 2 + Math.random() * 1.2;
        snowflake.element.style.left = `${snowflake.left}%`;
        snowflake.element.style.top = `${snowflake.top}%`;
    }

    for (let index = 0; index < 3; index += 1) {
        const snowflake = {
            element: document.createElement("button"),
            top: index * 32,
            left: 20 + index * 30,
            speed: 2 + index * 0.5
        };
        snowflake.element.className = "click-target falling-snowflake";
        snowflake.element.type = "button";
        snowflake.element.textContent = "❄️";
        snowflake.element.setAttribute("aria-label", "Kliknij spadającą śnieżynkę");
        snowflake.element.style.left = `${snowflake.left}%`;
        snowflake.element.style.top = `${snowflake.top}%`;
        snowflake.element.onclick = () => {
            score += 1;
            scoreElement.textContent = `Wynik: ${score} / ${target}`;
            if (score >= target) {
                clearInterval(snakeTimer);
                field.innerHTML = '<p class="game-message">Wygrałeś śnieżynki!</p><button class="game-restart" type="button">Zagraj ponownie</button>';
                field.querySelector(".game-restart").onclick = createSnowflakeGame;
            } else {
                resetSnowflake(snowflake);
            }
        };
        snowflakes.push(snowflake);
        field.appendChild(snowflake.element);
    }

    snakeTimer = setInterval(() => {
        snowflakes.forEach((snowflake) => {
            snowflake.top += snowflake.speed;
            if (snowflake.top > 105) resetSnowflake(snowflake);
            snowflake.element.style.top = `${snowflake.top}%`;
        });
    }, 40);
}

function createMemoryGame() {
    const symbols = ["🍎", "🍎", "🎈", "🎈", "🚀", "🚀", "🐱", "🐱", "🎁", "🎁", "⚽", "⚽"].sort(() => Math.random() - 0.5);
    let firstCard = null;
    let locked = false;
    let pairs = 0;
    gameStage.innerHTML = '<h3>Pamięć</h3><p class="game-score">Pary: 0 / 6</p><p>Odkryj dwie takie same karty.</p><div class="memory-grid"></div>';
    const scoreElement = gameStage.querySelector(".game-score");
    const grid = gameStage.querySelector(".memory-grid");

    symbols.forEach((symbol) => {
        const card = document.createElement("button");
        card.className = "memory-card";
        card.type = "button";
        card.textContent = "?";
        card.dataset.symbol = symbol;
        card.onclick = () => {
            if (locked || card.classList.contains("found") || card === firstCard) return;
            card.textContent = symbol;
            card.classList.add("revealed");
            if (!firstCard) {
                firstCard = card;
                return;
            }
            if (firstCard.dataset.symbol === card.dataset.symbol) {
                firstCard.classList.add("found");
                card.classList.add("found");
                firstCard = null;
                pairs += 1;
                scoreElement.textContent = `Pary: ${pairs} / 6`;
                if (pairs === 6) {
                    grid.insertAdjacentHTML("afterend", '<p class="game-message">Wygrałeś pamięć!</p>');
                }
                return;
            }
            locked = true;
            setTimeout(() => {
                firstCard.textContent = "?";
                card.textContent = "?";
                firstCard.classList.remove("revealed");
                card.classList.remove("revealed");
                firstCard = null;
                locked = false;
            }, 650);
        };
        grid.appendChild(card);
    });
}

function createSnakeGame() {
    const canvasSize = 300;
    const cellSize = 15;
    let snake = [{ x: 10, y: 10 }];
    let apple = { x: 5, y: 5 };
    let direction = { x: 1, y: 0 };
    let nextDirection = direction;
    let apples = 0;
    let finished = false;

    gameStage.innerHTML = `<h3>Snake</h3><p class="game-score">Jabłka: 0 / 7</p><canvas id="snake-canvas" width="${canvasSize}" height="${canvasSize}"></canvas><p>Używaj klawiszy W, A, S i D.</p>`;
    const canvas = document.getElementById("snake-canvas");
    const context = canvas.getContext("2d");
    const scoreElement = gameStage.querySelector(".game-score");

    function randomApple() {
        apple = {
            x: Math.floor(Math.random() * (canvasSize / cellSize)),
            y: Math.floor(Math.random() * (canvasSize / cellSize))
        };
    }

    function draw() {
        context.fillStyle = "#d9f2d0";
        context.fillRect(0, 0, canvasSize, canvasSize);
        context.fillStyle = "#e85d75";
        context.fillRect(apple.x * cellSize, apple.y * cellSize, cellSize - 1, cellSize - 1);
        context.fillStyle = "#28734e";
        snake.forEach((part) => context.fillRect(part.x * cellSize, part.y * cellSize, cellSize - 1, cellSize - 1));
    }

    function move() {
        if (finished) return;
        direction = nextDirection;
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };
        const hitWall = head.x < 0 || head.y < 0 || head.x >= canvasSize / cellSize || head.y >= canvasSize / cellSize;
        const hitSnake = snake.some((part) => part.x === head.x && part.y === head.y);
        if (hitWall || hitSnake) {
            snake = [{ x: 10, y: 10 }];
            direction = { x: 1, y: 0 };
            nextDirection = direction;
            apples = 0;
            scoreElement.textContent = "Jabłka: 0 / 7";
            randomApple();
            draw();
            return;
        }
        snake.unshift(head);
        if (head.x === apple.x && head.y === apple.y) {
            apples += 1;
            scoreElement.textContent = `Jabłka: ${apples} / 7`;
            if (apples === 7) {
                finished = true;
                gameStage.insertAdjacentHTML("beforeend", '<p class="game-message">Wygrałeś Snake!</p>');
            }
            randomApple();
        } else {
            snake.pop();
        }
        draw();
    }

    document.onkeydown = (event) => {
        const directions = {
            w: { x: 0, y: -1 },
            s: { x: 0, y: 1 },
            a: { x: -1, y: 0 },
            d: { x: 1, y: 0 }
        };
        const newDirection = directions[event.key.toLowerCase()];
        if (newDirection) {
            nextDirection = newDirection;
            event.preventDefault();
        }
    };

    draw();
    snakeTimer = setInterval(move, 130);
}
