const card = document.querySelector(".card");
const inte = document.querySelector(".inte");


card.addEventListener("mousemove", function(e){

    inte.textContent = "X: " + e.offsetX + " Y:" + e.offsetY

});