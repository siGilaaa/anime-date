const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const dateSection = document.getElementById("dateSection");
const confirmBtn = document.getElementById("confirmBtn");
const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {
    dateSection.classList.remove("hidden");
    result.innerHTML = "🥰 Yeay! Saya gembira awak cakap ya ❤️";
});

noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

confirmBtn.addEventListener("click", () => {
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (date === "" || time === "") {
        alert("Pilih tarikh dan masa dulu 😊");
        return;
    }

    result.innerHTML = `
        <h2>🎉 Yay!!</h2>
        <p>Terima kasih sebab sudi keluar dengan saya ❤️</p>
        <p>📅 <strong>${date}</strong></p>
        <p>🕒 <strong>${time}</strong></p>
        <p>Tak sabar nak jumpa awak! 🌸🥹</p>
    `;

    createHearts();
});

function createHearts() {
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.transition = "transform 4s linear, opacity 4s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.transform = `translateY(-120vh)`;
            heart.style.opacity = "0";
        }, 100);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}
