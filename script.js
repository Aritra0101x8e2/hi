function playHoliSong() {
    let audio = document.getElementById("holiSong");
    audio.play().catch(error => console.log("Autoplay blocked, user interaction needed."));
}

function throwColors() {
    const positions = [
        { x: 0, y: 0 },
        { x: 1, y: 0 },
        { x: 0, y: 1 },
        { x: 1, y: 1 }
    ];
    
    positions.forEach(pos => {
        confetti({
            particleCount: 150,
            spread: 100,
            origin: { x: pos.x, y: pos.y }
        });
    });
}

function burstColors() {
    setInterval(() => {
        confetti({
            particleCount: 200,
            spread: 80,
            origin: { x: Math.random(), y: Math.random() * 0.6 }
        });
    }, 1500);
}

burstColors();

const quotes = [
    "Bura na maano, Holi hai 😊😊",
    "Celebrate this festival with colors of happiness!",
    "May this Holi fill your life with vibrant colours and sweet memories 💭",
    "Splash yourself in the color of joy. Happy Holi!",
    "Enjoy every color of Holi and experience the warmth of love!"
];

function showQuotes() {
    let quoteIndex = 0;
    setInterval(() => {
        document.getElementById("quotes").innerText = quotes[quoteIndex];
        quoteIndex = (quoteIndex + 1) % quotes.length;
    }, 3000);
}

showQuotes();
