# id-generator

An ID generator and timestamp converter.

## Generate Unique ID

Generate a unique random ID string.
Reference: https://www.npmjs.com/package/generate-unique-id

### Installation

<code>npm i generate-unique-id</code>

### Usage

<code>
const generateUniqueId = require('generate-unique-id');

// example 1
const id1 = generateUniqueId();

// example 2
const id2 = generateUniqueId({
length: 32,
useLetters: false
});

// example 3
const id3 = generateUniqueId({
includeSymbols: ['@','#','|'],
excludeSymbols: ['0']
});
</code>

### Options

Option Type Default Description
length number 20 Length of the generated ID.
useLetters boolean true Use letters (English alphabet) as part of the generated ID.
useNumbers boolean true Use numbers as part of the generated ID.
includeSymbols array [] Use additional letters as part of the generated ID.
excludeSymbols array [] Do not use these symbols as part of the generated ID.

### License

MIT license
