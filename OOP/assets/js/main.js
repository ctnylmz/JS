/* 
Encapsulation, veriyi dış dünyadan gizleyip sadece kontrollü erişim sağlamaktır.
Banka Hesabı
Banka hesaplarında bakiye doğrudan kullanıcı tarafından değiştirilemez. Kullanıcı sadece para yatırma veya çekme işlemleri yapabilir. Böylece bakiye kontrol altında tutulur ve yanlışlıkla ya da kötü niyetle değiştirilmesi engellenir.

Kullanıcı Şifreleri
Kullanıcıların şifreleri program içinde gizli tutulur, dışarıdan doğrudan erişim ya da değiştirme mümkün olmaz. Şifre değiştirme işlemleri özel fonksiyonlarla yapılır. Bu sayede güvenlik artırılır.

Öğrenci Notları
Öğrencinin notları, sadece belirli kurallara göre güncellenebilir. Örneğin, not negatif ya da 100’den büyük olamaz. Notlara doğrudan erişim engellenir, sadece kontrollü metodlar ile değiştirilir.

Araba Durumu
Arabanın motor durumu gibi hassas bilgiler dışarıdan erişilmez. Motoru çalıştırmak ya da durdurmak için sadece belirli metotlar kullanılır. Böylece sistem kontrol altında tutulur.







class Kisi {
  constructor(ad, yas) {
    this.ad = ad;
    this.yas = yas; // dışarıdan erişilebilir
  }
}

const kisi1 = new Kisi("Çetin", 25);
console.log(kisi1.yas); // erişilebilir
kisi1.yas = -5;          // saçma bir değer verildi!
console.log(kisi1.yas);  // -5 => mantıksız


*/


class Kisi {
  #yas; // özel alan (private field)

  constructor(ad, yas) {
    this.ad = ad;
    this.#yas = yas;
  }

  getYas() {
    return this.#yas;
  }

  setYas(yeniYas) {
    if (yeniYas >= 0 && yeniYas <= 120) {
      this.#yas = yeniYas;
    } else {
      console.warn("Geçersiz yaş değeri girildi.");
    }
  }
}

const kisi1 = new Kisi("Çetin", 25);
console.log(kisi1.yas); // Çalışmaz çünkü #yas private bir alan
console.log(kisi1.getYas()); // 25 – get metodu ile erişim sağlandı

kisi1.yas = 5; // Bu işlem geçersizdir, sadece dışarıdan yeni bir property tanımlar (gerçek yaş değişmez)
console.log(kisi1.getYas()); // 25 – içteki #yas değeri hâlâ değişmedi

kisi1.setYas(10);  // set metodu ile yaş güvenli şekilde değiştirildi
console.log(kisi1.getYas()); // 10 – değişiklik başarılı


