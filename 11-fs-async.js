// go through it again

// [PAUSE](https://youtu.bebe/TNV0_7QRDwY?t=4709)

const { readFile, writeFile } = require('fs');
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
