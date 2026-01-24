const btn = document.querySelector("button");

var isRed = false;

btn.addEventListener("click", function () {

    if (isRed == true) {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        isRed = false;
    } else {
        document.body.style.backgroundColor = "gray";
         document.body.style.color = "white";
        isRed = true;
    }

})
