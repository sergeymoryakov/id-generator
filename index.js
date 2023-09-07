const DEFAULT_LENGHT = 20;
const DEFAULT_FORMAT = "DDdd-CCcc_llLL:AAaa-ssSS_xxXX";

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

const charactersAlfa = digits.concat("", capitals, lowercases);
const charactersXray = charactersAlfa.concat("", symbols);
console.log("charactersXray: ", charactersXray);
let customCharactersArray = [];

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

// Initiate or update charactersData for string-type ID:
function updateCustomCharactersArray() {
    customCharactersArray = [];
    let atLeastOneChecked = false; // Init a variable to track at least one checkbox is checked
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const arrayName = checkbox.getAttribute("id");
            const affectedArray = window[arrayName];
            customCharactersArray = customCharactersArray.concat(affectedArray);
            atLeastOneChecked = true;
        }
    });
    // Make sure at least one checkbox is checked
    if (!atLeastOneChecked) {
        alert("Please select at least one option.");
        checkboxes[0].checked = true;
        updateCustomCharactersArray(); // Recall self to make sure customCharactersArray is properly updated
        return;
    }
    console.log(customCharactersArray);
}

function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generateId2(string) {
    const capString = string.toUpperCase();
    let newId2 = "";
    for (let i = 0; i < capString.length; i++) {
        switch (capString[i]) {
            case "D":
                newId2 += randomFromArray(digits);
                break;
            case "C":
                newId2 += randomFromArray(capitals);
                break;
            case "L":
                newId2 += randomFromArray(lowercases);
                break;
            case "A":
                newId2 += randomFromArray(charactersAlfa);
                break;
            case "S":
                newId2 += randomFromArray(symbols);
                break;
            case "X":
                newId2 += randomFromArray(charactersXray);
                break;
            case "-":
                newId2 += "-";
                break;
            case "_":
                newId2 += "_";
                break;
            case ":":
                newId2 += ":";
                break;
            default:
                console.log("TEST PASSED");
                newId2 += "=";
        }
    }
    return newId2;
}

// Initial rendering
input1Node.value = DEFAULT_LENGHT;
updateCustomCharactersArray();
// const id1 = generateId1(DEFAULT_LENGHT, customCharactersArray);
// console.log("ID1: ", id1);
// id1Node.innerText = id1;
id1Node.innerText = generateId1(DEFAULT_LENGHT, customCharactersArray);
input2Node.value = DEFAULT_FORMAT;
id2Node.innerText = generateId2(input2Node.value);
// console.log("ID1: ", id1);
// console.log("id1Node.value: ", input1Node.value);

id1BtnNode.addEventListener("click", () => {
    id1Node.innerText = "";
    const newLenght = parseInt(input1Node.value);
    console.log("newLenght: ", newLenght);
    const newId1 = generateId1(newLenght, customCharactersArray);
    id1Node.innerText = newId1;
});

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => updateCustomCharactersArray());
});

id2BtnNode.addEventListener("click", () => {
    // id2Node.innerText = "";
    id2Node.innerText = generateId2(input2Node.value);
});
