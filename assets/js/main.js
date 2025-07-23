if (true) {
  let mesaj = "Merhaba";
}
console.log(mesaj); // ❌ ReferenceError


if (true) {
  var mesaj = "Merhaba";
}
console.log(mesaj); // 👉 "Merhaba" olur


function test() {
  var mesaj = "Çetin";
}

test()
console.log(mesaj); // ❌ ReferenceError

