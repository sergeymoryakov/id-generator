export const DEFAULT_LENGTH: number = 12;
export const DEFAULT_FORMAT: string = "DDCDDDDCDD-DD";

export const capitals: string[] = [
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

export const lowercases: string[] = [
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

export const digits: string[] = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
];
export const symbols: string[] = ["!", "@", "#", "$", "%", "&", "*"];

// Constants for Custom Password/ID Generator:
export const charactersAlfa: string[] = digits.concat("", capitals, lowercases);
export const charactersXray: string[] = charactersAlfa.concat("", symbols);

type TFORMAT_CHARACTERS = {
    D: () => string;
    C: () => string;
    L: () => string;
    A: () => string;
    S: () => string;
    X: () => string;
    "-": () => string;
    _: () => string;
    ":": () => string;
};

export const FORMAT_CHARACTERS: TFORMAT_CHARACTERS = {
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
function randomFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}
