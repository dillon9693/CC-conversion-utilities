import fs from 'fs';

import { convert } from './index';

const options = {input: 'vtt', output: 'xml'};

fs.readFile(`test.${options.input}`, 'utf8', (err, data) => {
  if(err) throw err;
  const outputData = convert(data, options);

  if(!outputData) {
    console.log('File could not be written.');
    return;
  }

  // write the file to output
  fs.writeFile(__dirname + `/output.${options.output}`, outputData, function(err) {
    if(err) throw err;

    console.log(`The file was saved to output.${options.output}.`);
  });
});