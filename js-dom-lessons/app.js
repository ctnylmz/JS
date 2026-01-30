const colors = ["Red", "Blue", "Blue", "Black", "White"];

function readColors() {
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
}

readColors();

console.log("-------------------");
/* Arrow Function */

const arrayFunctionReadColors = () => {
    for (let i = 0; i < colors.length; i++) {
        console.log(colors[i]);
    }
};

arrayFunctionReadColors();
