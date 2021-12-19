const https = require("https");

https
  .get(
    "https://newsapi.org/v2/everything?q=bitcoin&apiKy=27ef942b38e14cc39a5e4a76be933396",
    (resp) => {
      let data = "";

      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        console.log(JSON.parse(data));
      });
    }
  )
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
