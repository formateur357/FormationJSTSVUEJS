function getRandomNumber(div) {
    const randomNumber = Math.floor(Math.random() * 12) + 1;

    const resultInput = document.getElementById('resultInput');

    resultInput.innerText = randomNumber;

    const playButton = document.getElementById("playButton");
    playButton.innerText = "Rejouer";
}

const randomNumber = Math.floor(Math.random() * 12) + 1;

const resultInput = document.getElementById('resultInput');

resultInput.value = randomNumber;