const generateBox = document.getElementById("generateBox");
const lengthController = document.getElementById("length");
const copyBtn = document.getElementById("copy-btn");
const numberCheck = document.getElementById("number");
const characterCheck = document.getElementById("characters");
const generateBtn = document.getElementById("generate-btn");
const sliderValueBox = document.getElementById("sliderValueBox");

function updateSliderValue() {
    sliderValueBox.textContent = lengthController.value;
}

updateSliderValue();
lengthController.addEventListener("input", updateSliderValue);

generateBtn.addEventListener("click", () => {
    let length = lengthController.value;
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "0123456789";
    let symbols = "!@#$%^&*()_+{}[]<>?";
    let characters = letters;

    if (numberCheck.checked) characters += numbers;
    if (characterCheck.checked) characters += symbols;
    if (characters.length === 0) {
        alert("Select at least one option");
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    generateBox.value = password;
});

copyBtn.addEventListener("click", () => {
    if (generateBox.value === "") return;
    generateBox.select();
    document.execCommand("copy");
    alert("Password copied!");
});
