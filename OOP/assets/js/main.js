class Araba {
  constructor(marka, model) {
    this.marka = marka;
    this.model = model;
  }

  calistir() {
    console.log(`${this.marka} ${this.model} çalışıyor...`);
  }
}

const benimArabam = new Araba("Toyota","Corolla");
benimArabam.calistir();

