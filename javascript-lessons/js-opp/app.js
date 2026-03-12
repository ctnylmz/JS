/* 
Global fonksiyon + array sorunu

Global namespace kirliliği → tüm fonksiyonlar ve array’ler her yerden erişilebilir.
Sistemi büyütürsen: hangisi neyi değiştiriyor, hangi veri ile ilişkili, hangi kullanıcıyla ilgili kontrol etmek zorlaşır.
Yani OOP’un asıl sebebi global fonksiyonları azaltmak ve sistemi organize etmek.

let products = []
let cart = []

function addProduct() {}
function deleteProduct() {}
function addToCart() {}
function removeFromCart() {}
function getTotal() {}

*/

class User {
    constructor(username,email){
        this.username = username;
        this.email = email;
    }

    login(){
        return `${this.username} giriş yaptı`
    }
}

const userOne = new User("can","can@gmail.com")
console.log(userOne.login());
