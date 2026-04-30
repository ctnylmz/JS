const cardHead = document.querySelectorAll(".card .card-head")



cardHead.forEach((ch, key) => {
    ch.addEventListener("click", function () {

        const description = document.querySelectorAll(".card .card-description")
        const faPlus = document.querySelectorAll(".card .fa-plus")
        const faMinus = document.querySelectorAll(".card .fa-minus")

        if (description[key].classList.contains("hidden")) {
            description.forEach((e, key) => {
                e.classList.add("hidden")
                faPlus[key].classList.remove("hidden")
                faMinus[key].classList.add("hidden")
            })

            description[key].classList.remove("hidden")
            faPlus[key].classList.toggle("hidden")
            faMinus[key].classList.toggle("hidden")
        } else {
            description.forEach((e, key) => {
                e.classList.add("hidden")
                faPlus[key].classList.remove("hidden")
                faMinus[key].classList.add("hidden")
            })
        }


    });
});
