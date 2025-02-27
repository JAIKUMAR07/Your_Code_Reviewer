require("dotenv").config();
//  env ka configuation le liya
// isse pehle npm i dotenv  install krna pada

const app = require("./src/app");
// package.json me jaake  main: atribute me  server.js likh dena by defaul inex.html hota
// sever jb start hoga   to () => under jo rahgea wo chalega

app.listen(3000, () => {
  console.log("server chal rha hai ");
});
