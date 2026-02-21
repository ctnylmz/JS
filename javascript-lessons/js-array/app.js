// Add Array
let productList = [["iphone", 100, false], ["samsung", 50, true], "huawei" ]
   
console.log("product list:", [...productList])

// Remove the last element ("huawei" string)
productList.pop()

console.log("After pop :", [...productList])

// Add Huawei 
productList.push(["huawei", 25, false])

console.log("After push", [...productList])


// add additionalProducts concat
let additionalProducts = [["asus", 75, false],["hp", 50, true]]
      
productList = productList.concat(additionalProducts)

console.log("After merging additional products:", [...productList])

// filter
let inactiveProducts = productList.filter(product => {
   return !product[product.length - 1]
})

console.log("Inactive products:", inactiveProducts)


// Map
let discountedPrices = productList.map(product => {
    let price = product[1]  
    return price - 10
})

console.log("Discounted prices:", discountedPrices)


// find and filter

let colorList = ["red","black","yellow","blue","green","yellow"]

const firstYellow = colorList.find(color => color === "yellow")

console.log("First yellow:", firstYellow)

const yellowCount = colorList.filter(color => color === "yellow").length

console.log("Yellow count:", yellowCount)

