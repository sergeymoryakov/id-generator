import { DEFAULT_LENGHT } from "./config/constants.js";

let customCharactersArray = [];

const input1Node = document.getElementById("input1");
const id1Node = document.getElementById("id1");
const id1BtnNode = document.getElementById("id1Btn");
const checkboxes = document.querySelectorAll(".checkbox-1");

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
    // Make sure at least one checkbox is checked:
    if (!atLeastOneChecked) {
        alert("Please select at least one option.");
        checkboxes[0].checked = true;
        updateCustomCharactersArray(); // Recall self to make sure customCharactersArray is properly updated
        return;
    }
    console.log(customCharactersArray);
}

// Initial rendering:
input1Node.value = DEFAULT_LENGHT;
updateCustomCharactersArray();
id1Node.innerText = generateId1(DEFAULT_LENGHT, customCharactersArray);

// Execution and event listeners:
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => updateCustomCharactersArray());
});

id1BtnNode.addEventListener("click", () => {
    const newLenght = parseInt(input1Node.value);
    id1Node.innerText = generateId1(newLenght, customCharactersArray);
});
