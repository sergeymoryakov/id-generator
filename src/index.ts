import {
    DEFAULT_LENGTH,
    capitals,
    lowercases,
    digits,
    symbols,
} from "./config/constants.js";

const arrayMapping: { [key: string]: string[] } = {
    capitals: capitals,
    lowercases: lowercases,
    digits: digits,
    symbols: symbols,
};

let customCharactersArray: string[] = [];

const input1Node = document.getElementById("input1") as HTMLInputElement;
const id1Node = document.getElementById("id1") as HTMLElement;
const id1BtnNode = document.getElementById("id1Btn") as HTMLElement;
const checkboxes = document.querySelectorAll(
    ".checkbox-1"
) as NodeListOf<HTMLInputElement>;

// Generate string-type ID based on required length and array with options:
function generateId1(lengthId: number, array: string[]): string {
    let newId1: string = "";
    const lengthArray: number = array.length;
    for (let i: number = 0; i < lengthId; i++) {
        newId1 += array[Math.floor(Math.random() * lengthArray)];
    }
    return newId1;
}

// Initiate or update charactersData for string-type ID:
function updateCustomCharactersArray(): void {
    customCharactersArray = [];
    let atLeastOneChecked: boolean = false;
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            const arrayName: string | null = checkbox.getAttribute("id");
            if (arrayName && arrayMapping[arrayName]) {
                const affectedArray: string[] = arrayMapping[arrayName];
                customCharactersArray =
                    customCharactersArray.concat(affectedArray);
                atLeastOneChecked = true;
            }
        }
    });
    // Make sure at least one checkbox is checked:
    if (!atLeastOneChecked) {
        alert("Please select at least one option.");
        checkboxes[0].checked = true;
        updateCustomCharactersArray(); // Recall self to make sure customCharactersArray is properly updated
        return;
    }
    // For Debugging and Testing:
    // console.log(customCharactersArray);
}

// Initial rendering:
if (input1Node) {
    input1Node.value = DEFAULT_LENGTH.toString();
    updateCustomCharactersArray();
    if (id1Node) {
        id1Node.innerText = generateId1(DEFAULT_LENGTH, customCharactersArray);
    }
}

// Execution and event listeners:
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => updateCustomCharactersArray());
});

if (id1BtnNode && input1Node && id1Node) {
    id1BtnNode.addEventListener("click", () => {
        const newLength: number = parseInt(input1Node.value, 10);
        id1Node.innerText = generateId1(newLength, customCharactersArray);
    });
}
