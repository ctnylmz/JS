class Urun {
  constructor(ad, fiyat) {
    this.ad = ad;
    this.fiyat = fiyat;
  }

  bilgiGetir() {
    return `Ürün: ${this.ad}, Fiyat: ${this.fiyat}₺`;
  }
}

class Kitap extends Urun {
  constructor(ad, fiyat, yazar) {
    super(ad, fiyat);
    this.yazar = yazar;
  }

  bilgiYazdir() {
  
    console.log(super.bilgiGetir() + ` ve Yazar: ${this.yazar}`);
  }
}

const kitap1 = new Kitap("Sefiller", 99.90, "Victor Hugo");
kitap1.bilgiYazdir();
