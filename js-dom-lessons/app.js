const openBtn = document.querySelector(".open-btn");
const popup = document.querySelector(".popup-overlay");
const closeBtn = document.querySelector(".close-btn");



openBtn.addEventListener("click", function(){

    popup.classList.remove("hidden")
})


closeBtn.addEventListener("click", function(){

    popup.classList.add("hidden")
})


popup.addEventListener("click", function (e) {
    
  if (e.target === popup) {
    popup.classList.add("hidden");
  }
});
