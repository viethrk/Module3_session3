const fs = require("fs");
// doc file
const fileContent = fs.readFileSync("./txt/file-demo.txt", {
  encoding: "utf-8",
});

console.log(fileContent);
