/* 
Global fonksiyon + array sorunu

Global namespace kirliliği → tüm fonksiyonlar ve array’ler her yerden erişilebilir.
Sistemi büyütürsen: hangisi neyi değiştiriyor, hangi veri ile ilişkili, hangi kullanıcıyla ilgili kontrol etmek zorlaşır.
Yani OOP’un asıl sebebi global fonksiyonları azaltmak ve sistemi organize etmek.

Yazılım topluluğunda OOP yaygın kullanıldığı için belirli bir kod düzeni oluşmuştur. 
Bu sayede geliştiriciler birbirlerinin kodunu daha kolay anlayabilir. 
Global fonksiyonlar ve dağınık yapılar ise kodun okunmasını ve bakımını zorlaştırır.

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
        console.log(`${this.username} giriş yaptı`);
        return this;
    }

    logout(){
        console.log(`${this.username} çıkış yaptı`);
        return this;
    }
}

const userOne = new User("can","can@gmail.com")
userOne.login().logout()
