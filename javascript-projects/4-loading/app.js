const loadingBar = document.querySelector(".loading .loading-bar")
const loadingNumber = document.querySelector(".loading .loading-number")

const loading = document.querySelector(".loading")


let setNumber = 0;

let interval = setInterval(function () {
    setNumber = setNumber + 1;

    loadingBar.style.width = setNumber + "%";
    loadingNumber.innerHTML = setNumber + "%";

    if (setNumber === 100) {
        clearInterval(interval)
        setTimeout(() => {
            loading.classList.add("hidden")
        }, 1000);
    }
}, 50)