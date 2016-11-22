/**
 * Converter for XML files to VTT format
 */
import { xml2Vtt } from './xml2Vtt';

function separateByLine(str) {
  return str.split('\n').map((line, index) => {
    return line = line.trim();
  });
}

export function convert(str) {
  const dataArr = separateByLine(str.trim());

  return xml2Vtt(dataArr);
};

export default {
  convert
};