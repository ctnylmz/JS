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

    pomodoroMinute = 25;
    pomodoroSecond = 0;

    time.innerHTML = pomodoroMinute.toString().padStart(2, "0") + ":" + pomodoroSecond.toString().padStart(2, "0")
})

btnBreakTime.addEventListener("click", function () {
    btnPomodoro.classList.remove("active")
    btnBreakTime.classList.add("active")

    clearInterval(interval);

    pomodoroMinute = 5;
    pomodoroSecond = 0;

    time.innerHTML = pomodoroMinute.toString().padStart(2, "0") + ":" + pomodoroSecond.toString().padStart(2, "0")
})

start.addEventListener("click", function () {
    clearInterval(interval);

    interval = setInterval(function () {


        if (pomodoroMinute === 0 && pomodoroSecond === 0) {
            alert("Finish")
            clearInterval(interval); // zamanlayıcı durur
        } else {
            if (pomodoroSecond === 0) {
                pomodoroMinute = pomodoroMinute - 1;
                pomodoroSecond = 59;
            }else {
                pomodoroSecond = pomodoroSecond - 1;
            }
             time.innerHTML = pomodoroMinute.toString().padStart(2, "0") + ":" + pomodoroSecond.toString().padStart(2, "0")
        }


    }, 1000)
})

pause.addEventListener("click", function () {
    clearInterval(interval); // zamanlayıcı durur
})
