const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const dateSection = document.getElementById("dateSection");
const confirmBtn = document.getElementById("confirmBtn");
const result = document.getElementById("result");

yesBtn.addEventListener("click", () => {
    dateSection.classList.remove("hidden");
    result.innerHTML = "Yay! ❤️ Jom pilih tarikh & masa";
});

noBtn.addEventListener("click", () => {
    result.innerHTML = "Alaa 😢 maybe lain kali...";
});

confirmBtn.addEventListener("click", () => {

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if(date === "" || time === ""){
        alert("Sila pilih tarikh & masa dulu 😊");
        return;
    }

    result.innerHTML = `
        <h3>💖 Deal dengan Syazliana!</h3>
        <p>📅 ${date}</p>
        <p>🕒 ${time}</p>
        <p>Tak sabar nak jumpa 🌸</p>
    `;
});
