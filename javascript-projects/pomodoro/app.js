const btnPomodoro = document.querySelector(".pomodoro .btn-pomodoro")
const btnBreakTime = document.querySelector(".pomodoro .btn-break-time")

const time = document.querySelector(".pomodoro .time")

const start = document.querySelector(".pomodoro .start")
const pause = document.querySelector(".pomodoro .pause")

let pomodoroSecond = 0;
let pomodoroMinute = 0;
let interval;


// Sayfa yüklendiğinde click event’ini tetikle
window.addEventListener("load", function () {
    btnPomodoro.click();
});


btnPomodoro.addEventListener("click", function () {
    btnBreakTime.classList.remove("active")
    btnPomodoro.classList.add("active")

    clearInterval(interval);
    interval = null;

    pomodoroMinute = 25;
    pomodoroSecond = 0;

    time.innerHTML = "25:00"
})

btnBreakTime.addEventListener("click", function () {
    btnPomodoro.classList.remove("active")
    btnBreakTime.classList.add("active")

    clearInterval(interval);
    interval = null;

    pomodoroMinute = 5;
    pomodoroSecond = 0;

    time.innerHTML = "5:00"
})

start.addEventListener("click", function () {
    if (interval) return;

    interval = setInterval(() => {


        if (pomodoroSecond === 0) {
            if (pomodoroMinute >= 1) {
                pomodoroSecond = 60;
                pomodoroMinute = pomodoroMinute - 1;
            }
        }

        pomodoroSecond = pomodoroSecond - 1;

        let s = pomodoroSecond.toString().padStart(2, "0");
        let m = pomodoroMinute.toString().padStart(2, "0");

        time.innerHTML = `${m}:${s}`;

        if (pomodoroMinute === 0 && pomodoroSecond === 0) {
            alert("Finish")
            clearInterval(interval); // zamanlayıcı durur
            interval = null;
        }

    }, 1000)
})

pause.addEventListener("click", function () {
    clearInterval(interval); // zamanlayıcı durur
    interval = null; // tekrar başlatmayı mümkün kılmak için
})
