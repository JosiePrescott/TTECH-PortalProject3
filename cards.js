let cardsList = document.querySelector(".cards");
let cards = [];
cards.push({title: "NextChapter", url: "https://josieprescott.github.io/TTECH-Interactive-Website/"});
cards.push({title: "YoshiClub", url: "https://josieprescott.github.io/TTECH-Marioclub-Project/ "});
cards.push({title: "MemoryGame", url: "https://josieprescott.github.io/TTECH-MemoryGame/"});



cards.forEach((item) => {
    cardsList.innerHTML += `
    <div class ="card">
        <div class="card-inner">
            <div class="card-front">
                <h2>${item.title}</h2>
            </div>
            <div class="card-back">
                <a href="${item.url}" target="_blank">Project Link</a>
            </div>
        </div>
    </div>
    `;
});

let navList = document.querySelector("nav ul");

cards.forEach((item) => {
    navList.innerHTML += `
    <li><a href="${item.url}" target="_blank">${item.title}</a></li>
    `;
})