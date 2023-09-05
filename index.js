const DEFAULT_LENGHT = 20;

const input1Node = document.getElementById("input1");
const id1Node = document.getElementById("id1");
const id1BtnNode = document.getElementById("id1Btn");
const input2Node = document.getElementById("input2");
const id2Node = document.getElementById("id2");
const id2BtnNode = document.getElementById("id2Btn");

const testBtnNode = document.getElementById("testBtn");

const capitalLetters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
const lowercaseLetters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const specialSymbols = ["!", "@", "#", "$", "%", "&", "*", "_"];

const randomSymbol =
    specialSymbols[Math.floor(Math.random() * specialSymbols.length)];

function generateID(length) {
    return [...Array(length)]
        .map(() => Math.floor(Math.random() * 36).toString(36))
        .join("");
}

// Initial rendering
input1Node.value = DEFAULT_LENGHT;
const id1 = generateID(DEFAULT_LENGHT); // Produces a 10-character unique ID
console.log("ID1: ", id1);
id1Node.innerText = id1;
console.log("id1Node.value: ", input1Node.value); // Produces a 10-character unique ID

id1BtnNode.addEventListener("click", () => {
    id1Node.innerText = "";
    const newLenght = parseInt(input1Node.value);
    console.log("newLenght: ", newLenght);
    const newId1 = generateID(newLenght);
    id1Node.innerText = newId1;
});

testBtnNode.addEventListener("click", () => {
    const y = Math.random();
    console.log("Math.random() = ", y);
    // const c = (~~(y * 36)).toString(36);
    const a = y * 36;
    const b = Math.floor(y * 36);
    const c = Math.floor(y * 36).toString(36);
    console.log("Math.random() * 36 = ", a);
    console.log("~~(Math.random() * 36) = ", b);
    console.log("(~~(Math.random() * 36)).toString(36) = ", c);
});
