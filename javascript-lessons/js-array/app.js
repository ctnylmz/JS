let products = [["iphone",100] , ["samsung",50],"huawei"]
let product2 = [["assus",75] , ["hp",50]]

products.pop();
products.push(["huawei",25])

products = products.concat(product2)

products.splice(0,1)

console.log(products);
