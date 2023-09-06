const DEFAULT_LENGHT = 20;

window.capitals = [
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
window.lowercases = [
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
window.digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
window.symbols = ["!", "@", "#", "$", "%", "&", "*"];

// FOR TEST PURPOSE:
// const charactersData = capitals.concat("", lowercases, digits, symbols);
let selectedArray = [];

const input1Node = document.getElementById("input1");
const id1Node = document.getElementById("id1");
const id1BtnNode = document.getElementById("id1Btn");
const checkboxes = document.querySelectorAll(".checkbox-1");
const input2Node = document.getElementById("input2");
const id2Node = document.getElementById("id2");
const id2BtnNode = document.getElementById("id2Btn");

const testBtnNode = document.getElementById("testBtn");

// Generate string-type ID based on required length and array with options:
function generateId1(lengthId, array) {
    let newId1 = "";
    const lengthArray = array.length;
    for (let i = 0; i < lengthId; i++) {
        newId1 += array[Math.floor(Math.random() * lengthArray)];
    }
    return newId1;
}

// Initiate or update charactersData
function reviseCharactersData() {
    selectedArray = [];
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const arrayName = checkbox.getAttribute("id");
            // console.log("arrayName: ", arrayName);
            const affectedArray = window[arrayName];
            // console.log(affectedArray);
            selectedArray = selectedArray.concat("", affectedArray);
        }
    });
    console.log(selectedArray);
}
// let newArray = [];
// if (checkbox.checked == true) {
// }
// console.log("checkbox.id: ", checkbox.id);
// console.log("checkbox.value: ", checkbox.value);
// console.log("checkbox.checked: ", checkbox.checked);

// Initial rendering
input1Node.value = DEFAULT_LENGHT;
reviseCharactersData();
const id1 = generateId1(DEFAULT_LENGHT, selectedArray);
// console.log("ID1: ", id1);
id1Node.innerText = id1;
// console.log("id1Node.value: ", input1Node.value);

id1BtnNode.addEventListener("click", () => {
    id1Node.innerText = "";
    const newLenght = parseInt(input1Node.value);
    console.log("newLenght: ", newLenght);
    const newId1 = generateId1(newLenght, selectedArray);
    id1Node.innerText = newId1;
});

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => reviseCharactersData());
});

// testBtnNode.addEventListener("click", () => {
//     const testId = generateId1(10, selectedArray);
//     console.log(testId);
// });

// Generate string-type ID based on required length:
// function generateID(length) {
//     return [...Array(length)]
//         .map(() => Math.floor(Math.random() * 36).toString(36))
//         .join("");
// }

// TEST: Generate random character based on .toString(36) method:
// const y = Math.random();
// console.log("Math.random() = ", y);
// // const c = (~~(y * 36)).toString(36);
// const a = y * 36;
// const b = Math.floor(y * 36);
// const c = Math.floor(y * 36).toString(36);
// console.log("Math.random() * 36 = ", a);
// console.log("~~(Math.random() * 36) = ", b);
// console.log("(~~(Math.random() * 36)).toString(36) = ", c);
