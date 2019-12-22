const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');


stdin.on('data', (key) => {

  // beep if b is pressed
  if (key === '\u0062') {
    process.stdout.write('\x07');
  };

  // terminate process if ctrl + c is pressed
  if (key === '\u0003') {
    console.log(`Thanks for using me, ciao!`)
    process.exit();
  }

  if (key > 0 || key <= 9) {
    console.log(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, key * 1000)
 }

});
