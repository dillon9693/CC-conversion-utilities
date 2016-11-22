import fs from 'fs';

import { convert } from './index';

console.log('TESTER');

const file = fs.readFile('package.json', 'utf8', (err, data) => {
  if(err) throw err;

  var convertedData = convert(data);
});