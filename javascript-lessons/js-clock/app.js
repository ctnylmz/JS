const clock = document.querySelector(".clock");


setInterval(function () {

    const now = new Date();

    const hour = now.getHours();
    const minute = now.getMinutes();
    const second = now.getSeconds();

    clock.textContent = hour + " " + minute + " " + second

}, 1000);