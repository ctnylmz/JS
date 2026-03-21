// ------------------- 1. Basit Obje -------------------
console.log(" ------------------- 1. Basit Obje -------------------");

let basitAraba = {
    renk: "Sarı",
    hiz: 0,
    hizlandir: function () {
        this.hiz += 10;
    }
}

basitAraba.hizlandir();
console.log(basitAraba.hiz);


// ------------------- 2. ES5 Constructor -------------------
console.log(" ------------------- 2. ES5 Constructor -------------------");

function ArabaES5(renk) {
    this.renk = renk;
    this.hiz = 0;

    this.hizlandir = function (deger) {
        this.hiz += deger;
    }
}

const arabaES5 = new ArabaES5("Mor");
arabaES5.hizlandir(30);
console.log(arabaES5);


// ------------------- 3. ES6 Class -------------------
console.log(" ------------------- 3. ES6 Class -------------------");

class Araba {
    constructor(renk) {
        this.renk = renk;
        this.hiz = 0;
    }

    hizlandir(deger){
        this.hiz += deger;
    }
}

let modernAraba = new Araba("Siyah");
modernAraba.hizlandir(30);
console.log(modernAraba.renk, modernAraba.hiz);


// ------------------- 4. Inheritance (Kalıtım) -------------------
console.log(" ------------------- 4. Inheritance (Kalıtım) -------------------");

class MotorluAraba extends Araba {
    constructor(renk, motorTipi){
        super(renk);
        this.motorTipi = motorTipi;
    }
}

let motorluAraba = new MotorluAraba("Mor", "V8");
motorluAraba.hizlandir(100);
console.log(motorluAraba.hiz, motorluAraba.renk, motorluAraba.motorTipi);


// ------------------- 5. Encapsulation -------------------
console.log("------------------- 5. Encapsulation -------------------");

class GuvenliAraba {
    #hiz;

    constructor(renk) {
        this.renk = renk;
        this.#hiz = 0;
    }

    hizlandir(deger){
        this.#hiz += deger;
    }

    hizGoster(){
        return this.#hiz;
    }
}

let guvenliAraba = new GuvenliAraba("Siyah");
guvenliAraba.hizlandir(50);
console.log(guvenliAraba.hizGoster()); // 50
console.log(guvenliAraba.hiz); // undefined
// console.log(guvenliAraba.#hiz); ❌ hata


// ------------------- 6. Polymorphism -------------------
console.log("------------------- 6. Polymorphism -------------------");

class ArabaBase {
    calis() {
        console.log("Araba çalışıyor...");
    }
}

class ElektrikliAraba extends ArabaBase {
    calis() {
        console.log("Sessiz şekilde çalışıyor ⚡");
    }
}

class DizelAraba extends ArabaBase {
    calis() {
        console.log("Gürültülü çalışıyor 🚜");
    }
}

let klasikAraba = new ArabaBase();
let elektrikli = new ElektrikliAraba();
let dizel = new DizelAraba();

klasikAraba.calis(); // Araba çalışıyor...
elektrikli.calis();  // Sessiz şekilde çalışıyor
dizel.calis();       // Gürültülü çalışıyor


// ------------------- 7. Abstraction -------------------
console.log("------------------- 7. Abstraction -------------------");

/* 
Soyutlama, karmaşıklığı gizleyip kullanıcıya sadece 
"ne yapacağını" göstermek, "nasıl yapıldığını" gizlemektir.
*/

class ArabaSoyutlama {
    calistir() {
        this.#motoruCalistir();
        console.log("Araba çalıştı 🚗");
    }

    #motoruCalistir() {
        console.log("Motor çalışıyor...");
    }
}

let arabaAbstraction = new ArabaSoyutlama();
arabaAbstraction.calistir();
// arabaAbstraction.#motoruCalistir(); ❌ erişemezsin