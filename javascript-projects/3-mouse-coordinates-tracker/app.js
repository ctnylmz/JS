const mouseWrapper = document.querySelector(".mouse .mouse-wrapper")

const say = document.querySelector(".mouse .mouse-wrapper .say")

mouseWrapper.addEventListener("mousemove", function (e) {

    say.innerHTML = "X:" + e.clientX + " " + "Y:" + e.clientY

})
