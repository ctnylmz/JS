class Urun {
  constructor(ad, fiyat) {
    this.ad = ad;
    this.fiyat = fiyat;
  }

  bilgiYazdir() {
    return `Ürün: ${this.ad}, Fiyat: ${this.fiyat}₺`;
  }
}

class Kitap extends Urun {
  constructor(ad, fiyat, yazar) {
    super(ad, fiyat);
    this.yazar = yazar;
  }

  bilgiYazdir() {
    return `Kitap: ${this.ad}, Fiyat: ${this.fiyat}₺, Yazar: ${this.yazar}`;
  }
}

class Elektronik extends Urun {
  constructor(ad, fiyat, marka) {
    super(ad, fiyat);
    this.marka = marka;
  }

  bilgiYazdir() {
    return `Elektronik: ${this.ad}, Fiyat: ${this.fiyat}₺, Marka: ${this.marka}`;
  }
}

const urunler = [
  new Kitap("1984", 50, "George Orwell"),
  new Elektronik("Laptop", 15000, "Asus"),
  new Urun("Kalem", 5)
];

urunler.forEach(urun => {
  console.log(urun.bilgiYazdir());
});
