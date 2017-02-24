'use strict';

const randomizer = require('../lib/randomizer.js');

let inFile = process.argv[2];
let outFile = process.argv[3];

if (!outFile) {
  throw('Script requires two arguments, an input and an output file');
}

randomizer(inFile, outFile);
