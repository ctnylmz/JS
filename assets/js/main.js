const users = [
    {
        id: 1,
        ad: "Çetin",
        soyad: "Yılmaz",
        email: "cetin@gmail.com",
        yas: 25
    },
    {
        id: 2,
        ad: "Ayşe",
        soyad: "Kara",
        email: "ayse.kara@example.com",
        yas: 30
    },
    {
        id: 3,
        ad: "Mehmet",
        soyad: "Demir",
        email: "mehmet.demir@example.com",
        yas: 28
    },
    {
        id: 4,
        ad: "Elif",
        soyad: "Yıldız",
        email: "elif.yildiz@example.com",
        yas: 22
    },
    {
        id: 5,
        ad: "Ahmet",
        soyad: "Çelik",
        email: "ahmet.celik@example.com",
        yas: 35
    }
];

// İndeks kontrolü gerekiyorsa (örneğin: belirli aralıklarla atlamak gibi).
for (let index = 0; index < users.length; index++) {
    console.log(users[index].ad);
}

for (let index in users) {
    console.log(users[index].ad);
}


for (let user of users) {
    console.log(user.ad);
}

// Her eleman için bir işlem yapılacaksa.
users.forEach(user => {
    console.log(user);
});
