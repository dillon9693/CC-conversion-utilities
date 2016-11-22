export function xml2Vtt(data) {
  return 'WEBVTT\n\n' + data.filter((line, index) => {
    // get all lines that contain a begin attribute and have the 'hide_from_transcript class'
    return line.indexOf('begin="') > -1 && line.indexOf('class="hide_from_transcript"') > -1;
  }).map((line, index) => {
    const begin = line.match(/begin=\"(\d:\d{2}:\d{2}.\d{2})\"/)[1],
          end = line.match(/end=\"(\d:\d{2}:\d{2}.\d{2})\"/)[1],
          text = line.match(/<p .*>(.*)<\/p>/)[1];

    return `${begin} --> ${end}\n${text}`;
  }).join('\n\n');
};