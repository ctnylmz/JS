// ❌ This function only logs the result to the console
function calculateTotal2(price, tax) {
    let total = price + tax;
    console.log(total); // Logged INSIDE the function (inside scope)
}

// The returned value is undefined because there is no return
let orderTotal2 = calculateTotal2(100, 20);

console.log(orderTotal2); 
// undefined → This log is OUTSIDE the function


// ✅ This function returns the calculated value
function calculateTotal(price, tax) {
    let total = price + tax;
    return total; // Returned to the outside world
}

// The returned value can be stored and reused
let orderTotal = calculateTotal(100, 20);

console.log(orderTotal); 
// 120 → Çünkü değer return ile fonksiyon dışına verildi
