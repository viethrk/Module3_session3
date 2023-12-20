const fs = require("fs");
const http = require("http");
const url = require("url");

const product = {
  name: "Iphone 15",
  img: "https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-thumbtz-650x650.png",
};

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("./html/login.html", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("Error: File not Found!!!");
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      }
      res.end();
    });
  } else {
    const htmlFile = fs.readFileSync("./html/product.html", {
      encoding: "utf-8",
    });

    // lay du lieu tu file json => string
    const jsonFile = fs.readFileSync("./data/data.json", {
      encoding: "utf-8",
    });

    // convert string => json
    const dataJson = JSON.parse(jsonFile);
    // lap qua tung phan tu trong mang
    let products = "";
    for (let i = 0; i < dataJson.length; i++) {
      const product = dataJson[i];
      products += `
        <div class="card" style="width: 18rem">
          <label>${product.image}</label>
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      `;
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    const fileData = htmlFile.replace(/{{children}}/g, products);
    res.write(fileData);
    res.end();
  }
});

server.listen("8080", () => {
  console.log("Server is running port 8080");
});
