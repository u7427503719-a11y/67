// TU DODAJESZ WPISY SAMODZIELNIE
const posts = [
    {
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

// LISTA TYTUŁÓW
const list = document.getElementById("post-list");

posts.forEach((post, index) => {
    const div = document.createElement("div");
    div.className = "post-title";
    div.textContent = post.title;
    div.onclick = () => openModal(index);
    list.appendChild(div);
});

// MODAL
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");

function openModal(index) {
    document.getElementById("modal-title").textContent = posts[index].title;
    document.getElementById("modal-img1").src = posts[index].img1;
    document.getElementById("modal-img2").src = posts[index].img2;
    document.getElementById("modal-desc").textContent = posts[index].desc;

    modal.style.display = "block";
}

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
};