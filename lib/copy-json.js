'use strict';

const fs = require('fs');

const copyJson = function (inFile, outFile, outFileFlag) {
  fs.readFile(inFile, { encoding: 'utf8' }, (error, data) => {
    let json, pojo;
    if (error) {
      console.error(error.stack);
      return;
    }

    try {
      pojo = JSON.parse(data);
    } catch (error) {
      console.error(error.stack);
      return;
    }

    json = JSON.stringify(pojo, null, 2);

    fs.writeFile(outFile, json, { flag: outFileFlag }, error => {
      if (error) {
        console.error(error.stack);
        return;
      }

      console.error('\ncopied');
    });
  });
};

module.exports = copyJson;
