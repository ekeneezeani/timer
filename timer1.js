const alarmTimes = process.argv.splice(2);

const childProcess = require("child_process");

// MACOS code

for (const delay of alarmTimes) {
  if (delay <= 0) {
    console.log("Alarm cannot be in the past");
    continue;
  }


  setTimeout(() => {
    console.log(delay/1000 +' second(s)');
    childProcess.exec("afplay /System/Library/Sounds/Glass.aiff");
  }, delay);


}
