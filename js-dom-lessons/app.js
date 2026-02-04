const btn = document.querySelector(".btn");
const cards = document.querySelectorAll(".card");

btn.addEventListener("click",function(){

   const firstHidden = document.querySelector(".card.hidden");
    
   firstHidden.classList.remove("hidden")

});

cards.forEach(card => {
    card.addEventListener("click" , function(){
        card.classList.add("hidden")
    })
})