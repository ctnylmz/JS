
// sayiToplam(10, 20);

// function sayiToplam(sayi1, sayi2) {
//     console.log(sayi1 + sayi2);
// }

// sayiToplam(20, 20);


sayiToplam(10, 20);

function sayiToplam(...sayilar) {
    let toplam = 0;

    for (let i = 0; i < sayilar.length; i++) {
        toplam += sayilar[i];
    }

    console.log(toplam);
}

sayiToplam(20, 30,50);


