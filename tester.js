import fs from 'fs';

import { convert } from './index';

const output = 'output.vtt';

const file = fs.readFile('test.xml', 'utf8', (err, data) => {
  if(err) throw err;

  const outputData = convert(data, {input: 'vtt', output: 'xml'});
  if(!outputData) {
    console.log('File could not be written.');
    return;
  }

  // write the file to output
  fs.writeFile(__dirname + `/${output}`, outputData, function(err) {
    if(err) throw err;

    console.log(`The file was saved to ${output}.`);
  });
});