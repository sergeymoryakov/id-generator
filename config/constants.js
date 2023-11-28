export const DEFAULT_LENGHT = 12;
export const DEFAULT_FORMAT = "DDCDDDDCDD-DD";

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

export const charactersAlfa = digits.concat("", capitals, lowercases);
export const charactersXray = charactersAlfa.concat("", symbols);

export const FORMAT_CHARACTERS = {
    D: () => randomFromArray(digits),
    C: () => randomFromArray(capitals),
    L: () => randomFromArray(lowercases),
    A: () => randomFromArray(charactersAlfa),
    S: () => randomFromArray(symbols),
    X: () => randomFromArray(charactersXray),
    "-": () => "-",
    _: () => "_",
    ":": () => ":",
};

// Generate random character from specific array:
function randomFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
