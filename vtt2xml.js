export function vtt2xml(data) {
  return data.filter((line) => {
    // filter out empty lines and first line
    return line.length > 0 && line.toUpperCase() !== 'WEBVTT';
  }).map((line, index, arr) => {
    // each vtt caption is 2 lines so skip second line
    if(index % 2 === 1) {
      return;
    }

    var timeArr = line.trim().replace(/\s+/, ' ').split(' '),
        text = arr[index + 1];

    return `      <p begin="${timeArr[0]}" end="${timeArr[2]}" class="hide_from_transcript">${text}</p>`;
  }).join('\n');
};