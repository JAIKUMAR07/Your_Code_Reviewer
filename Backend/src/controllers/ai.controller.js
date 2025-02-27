const aiService = require("../services/ai.service");

// isko ai,.routes me n likh ke yha likhe
module.exports.getReview = async (req, res) => {
  const code = req.body.code;
  if (!code) {
    return res.status(400).send("prompt is required");
  }
  // ai service  ke under prompt pass kr diya
  const response = await aiService(code);

  // ajane ke baad send kr denge
  res.send(response);
};
