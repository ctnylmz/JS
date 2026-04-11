const form = document.getElementById("form");
const username = document.getElementById("username");
const password = document.getElementById("password");
const charCount = document.getElementById("charCount");
const capsWarning = document.getElementById("capsWarning");
const clearBtn = document.getElementById("clearBtn");

/* input */
username.addEventListener("input", (e) => {
    charCount.textContent = "Karakter: " + e.target.value.length;
});

/* keydown */
password.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Enter basıldı");
    }
});

/* keyup */
password.addEventListener("keyup", (e) => {
    if (e.getModifierState("CapsLock")) {
        capsWarning.textContent = "Caps Lock açık!";
    } else {
        capsWarning.textContent = "";
    }
});

/* submit */
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (username.value === "" || password.value === "") {
        alert("Alanlar boş bırakılamaz!");
        return;
    }

    alert("Giriş başarılı!");
});

/* click */
clearBtn.addEventListener("click", () => {
    form.reset();
    charCount.textContent = "0";
    capsWarning.textContent = "";
});
