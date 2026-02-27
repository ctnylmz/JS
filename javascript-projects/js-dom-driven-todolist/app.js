const form = document.querySelector(".hero")
const search = document.querySelector(".search")
const list = document.querySelector(".list")

form.addEventListener("submit", function (e) {
    e.preventDefault()

    list.innerHTML += `<li >${form.text.value} <button class="btn delete">Delete</button></li>`

    form.text.value = ""

})

list.addEventListener('click', e => {

    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

search.addEventListener("input", function () {
    const lists = document.querySelectorAll(".list li")

    lists.forEach(li => {
        const text = li.childNodes[0].nodeValue.trim().toLowerCase()

        if (text.includes(search.value)) {
            li.style.display = "flex"
        } else {
            li.style.display = "none"
        }
    })
})