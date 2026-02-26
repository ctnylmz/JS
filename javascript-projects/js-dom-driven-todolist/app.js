const text = document.querySelector(".text")
const btn = document.querySelector(".btn")
const search = document.querySelector(".search")
const list = document.querySelector(".list")

btn.addEventListener("click", function () {
    list.innerHTML += `<li>${text.value} <button class="btn" onclick="deletes(event)">Delete</button>  </li>`

    text.value = ""

})

function deletes(e) {
    e.target.closest("li").remove();
    input.value = ""
}

search.addEventListener("input", function () {
    const lists = document.querySelectorAll(".list li")

    lists.forEach(li => {
        const text = li.childNodes[0].nodeValue.trim().toLowerCase()

        if (text.includes(search.value)) {
            li.style.display = "list-item"
        } else {
            li.style.display = "none"
        }
    })
})