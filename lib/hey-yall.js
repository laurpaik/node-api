'use strict';

const fs = require('fs');

const heyYall = function (inFile) {
  // fs.readFile(file, options, callback)
  fs.readFile(inFile, 'utf-8', (error, data) => {
    if (error) {
      console.error(error.stack);
      return;
    }

    let dataArray = data.split('\n');
    dataArray.pop();

    dataArray.forEach((name) => {
      console.log('HEYYYYY ', name);
    });

    // const showNames = function(name){
    //   console.log("HEYYYY ", name);
    // };
    //
    // dataArray.forEach(showNames);

  });
};

module.exports = heyYall;
