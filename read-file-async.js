const fs = require("fs");
// doc file
fs.readFile("./txt/file-demo.txt", { encoding: "utf-8" }, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log("data: ", data);
  }

  console.log("end");
});

console.log(123);
