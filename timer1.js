const myArgv = process.argv.splice(2);

const sortedArgv = [];

// Testing Edge cases and removing items that are not numbers and <= zero
for (let i = 0; i < myArgv.length; i++) {
  if (myArgv[i] > 0 || myArgv[i] == Number) {
    sortedArgv.push(myArgv[i])
  }
  continue;
}

// Sorting input
sortedArgv.sort(function (a, b) {
  return a - b;
});


function alertTerminal() {
  for (let i = 0; i < sortedArgv.length; i++) {
    setTimeout(() => {
    process.stdout.write('\x07');
    }, sortedArgv[i] * 1000)
  }
}

alertTerminal()


