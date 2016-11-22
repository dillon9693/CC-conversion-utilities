/**
 * Converter for XML files to VTT format
 */

function separateByLine(str) {
  return str.split('\n').map((line, index) => {
    return line = line.trim();
  });
}

export function convert(str) {
  console.log("Beginning Conversion...");
  const dataArr = separateByLine(str.trim());

  return dataArr.join("\n");
}

export default {
  convert
}