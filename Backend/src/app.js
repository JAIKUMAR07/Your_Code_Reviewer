const express = require("express");

const aiRoutes = require("./routes/ai.routes");
const cors = require("cors");

const app = express();
//kaise ho
app.use(cors());
// body lene ke liye
// ye ek middle ware hai
app.use(express.json());

// aisi home  route me
app.get("/", (req, res) => {
  res.send("hello world");
});

//app.use("/ai", aiRoutes); ka matlab hai "/ai" ke saath start hone wale routes aiRoutes.js me search honge.
app.use("/ai", aiRoutes);

module.exports = app;

// express configure kr liye ab isko app me bind kr diye
