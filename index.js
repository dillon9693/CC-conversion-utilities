/**
 * Converter for XML files to VTT format
 */
import { xml2Vtt } from './xml2Vtt';
import { vtt2xml } from './vtt2xml';

function separateByLine(str) {
  return str.split('\n').map((line, index) => {
    return line = line.trim();
  });
}

export function convert(str, options = {input: 'xml', output: 'vtt'}) {
  const dataArr = separateByLine(str.trim());

  if(options.input.toLowerCase() === 'xml' && options.output.toLowerCase() === 'vtt') {
    return xml2Vtt(dataArr);
  }
  else if(options.input.toLowerCase() === 'vtt' && options.output.toLowerCase() === 'xml') {
    return vtt2xml(dataArr);
  }

  return;
};

export default {
  convert
};