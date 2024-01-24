const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    card.addEventListener('click', () => {
        console.log(card.id);
        window.open(`https://zo-snow.github.io/${card.id}`);
    })
})