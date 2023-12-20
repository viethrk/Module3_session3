const fs = require("fs");
fs.writeFile(
  "./txt/file-demo.txt",
  "ghi de file bat dong bo",
  "utf-8",
  (err) => {
    if (err) {
      console.log(err);
    }
  }
);
