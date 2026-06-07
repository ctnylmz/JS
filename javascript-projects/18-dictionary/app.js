const btn = document.querySelector(".btn");
const Input = document.querySelector(".input");

const Word = document.querySelector(".word");
const Description = document.querySelector(".description");
const audio = document.querySelector(".audio");



async function fectApi() {

    const word = Input.value;
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    const response = await fetch(url);
    const result = await response.json();

    if (result.message) {
        Word.innerHTML = result.message;
        Description.innerHTML = "";
        audio.style.display = "none";
        return;
    }

    audio.style.display = "block";
    Word.innerHTML = "Word:" + " " + result[0].word;
    Description.innerHTML = "description:" + " " + result[0].meanings[0].definitions[0].definition;
    audio.src = result[0].phonetics[0].audio;
}

btn.addEventListener("click", function () {
    fectApi();
})

