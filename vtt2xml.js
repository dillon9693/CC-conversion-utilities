export function vtt2xml(data) {
  const preText = `<?xml version="1.0" encoding="UTF-8"?>
  <tt xmlns="http://www.w3.org/2006/04/ttaf1" xmlns:tts="http://www.w3.org/2006/04/ttaf1#styling" xml:lang="en">
  <head>
  <styling>
  <style id="defaultSpeaker" tts:fontSize="12px" tts:fontFamily="SansSerif" tts:fontWeight="normal" tts:fontStyle="normal" tts:textDecoration="none" tts:color="white" tts:backgroundColor="black" tts:textAlign="left" />
  <style id="defaultCaption" tts:fontSize="12px" tts:fontFamily="SansSerif" tts:fontWeight="normal" tts:fontStyle="normal" tts:textDecoration="none" tts:color="white" tts:backgroundColor="black" tts:textAlign="center" />
  </styling>
  </head>
  <body id="thebody" style="defaultCaption">
    <div xml:lang="en">\n`;

  return preText + data.filter((line) => {
    // filter out empty lines and first line
    return line.length > 0 && line.toUpperCase() !== 'WEBVTT';
  }).map((line, index, arr) => {
    // each vtt caption is 2 lines so skip second line
    if(index % 2 === 1) {
      return '';
    }

    var timeArr = line.trim().replace(/\s+/, ' ').split(' '),
        text = arr[index + 1];

    return `      <p begin="${timeArr[0]}" end="${timeArr[2]}" class="hide_from_transcript">${text}</p>`;
  }).join('\n') + `
    </div>
  </body>
</tt>`;
};