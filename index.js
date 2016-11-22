/**
 * Converter for XML files to VTT format
 */
import { xml2Vtt } from './xml2Vtt';

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

  return;
};

export default {
  convert
};