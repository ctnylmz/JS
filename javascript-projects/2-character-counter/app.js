const input = document.querySelector(".character .message-input");

const totalCount = document.querySelector(".character .total-count");
const remainingCount = document.querySelector(".character .remaining-count");


input.addEventListener("input" , function(){
    
    totalCount.innerHTML = "Total Characters: " + input.value.length
   
    remainingCount.innerHTML = "Remaining Characters: " + (50 - input.value.length)
})