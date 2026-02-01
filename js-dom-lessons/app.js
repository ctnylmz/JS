const title = document.querySelector("h1");

title.innerText = "Hello Javascript Dom";


const list = document.querySelectorAll(".list li");

list.forEach(a => {
    a.innerText = 'New ' + a.innerText 
});


const finish = document.getElementById("finish");
finish.innerHTML = '<h4>Finish</h4>'


