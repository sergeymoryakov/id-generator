const DEFAULT_LENGHT = 12;

const input1Node = document.getElementById("input1");
const id1Node = document.getElementById("id1");
const id1BtnNode = document.getElementById("id1Btn");

function generateID(length) {
    return [...Array(length)]
        .map(() => (~~(Math.random() * 36)).toString(36))
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

// import { v4 as uuidv4 } from "./node_modules/uuid";

// console.log(uuidv4());

// const generateUniqueId = require("generate-unique-id");
// const id1 = generateUniqueId();
// const id2 = generateUniqueId({
//     length: 8,
//     useLetters: false,
// });
// const id3 = generateUniqueId({
//     includeSymbols: ["@", "$", "#"],
//     excludeSymbols: ["Z", "z"],
// });

// console.log(`New ID1: ${id1}.`);
// console.log(`New ID2: ${id2}.`);
// console.log(`New ID3: ${id3}.`);
