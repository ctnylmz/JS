const list = document.querySelector(".list");

let students = ["John", "Emma", "Michael", "Sophia", "Daniel"];


students.forEach(student => {
    list.innerHTML += `<li>${student}</li>`;
});

