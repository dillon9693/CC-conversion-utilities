/**
 * Converter for XML files to VTT format
 */
import fs from 'fs';

function convert() {
  console.log("Beginning Conversion...");
  const file = fs.readFile('package.json', 'utf8', (err, data) => {
    if(err) throw err;

    data = data.trim();
  });
}

export default {
  convert
}