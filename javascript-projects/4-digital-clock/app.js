const clock = document.querySelector(".clock .clock-number")
const date = document.querySelector(".clock .clock-date")

let js = new Date();

let year = js.getFullYear()
let month = (js.getMonth() + 1).toString().padStart(2, "0");
let day = js.getDate().toString().padStart(2, "0")



date.innerHTML = year + "." + month + "." + day

setInterval(function () {
  let js = new Date();

  clock.innerHTML = js.getHours() + ":" + js.getMinutes() + ":" + js.getSeconds().toString().padStart(2,"0")
}, 1000)


