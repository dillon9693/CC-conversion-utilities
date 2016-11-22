/**
 * Converter for XML files to VTT format
 */

function separateByLine(str) {
  return str.split('\n').map((line, index) => {
    return line = line.trim();
  });
}

export function convert(str) {
  const dataArr = separateByLine(str.trim());

  return 'WEBVTT\n\n' + dataArr.filter((line, index) => {
    // get all lines that contain a begin attribute and have the 'hide_from_transcript class'
    return line.indexOf('begin="') > -1 && line.indexOf('class="hide_from_transcript"') > -1;
  });
};

export default {
  convert
};