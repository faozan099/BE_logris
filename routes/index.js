const routes = require("express").Router();
const { responseSucces, responseFailed } = require("../utils/response");
const loginRegister = require("./public/index")

routes.get("/", (req, res) => {
  try {
    responseSucces(200, null, "welcome", res);
  } catch (error) {
    responseFailed(500, error.message, res);
  }
});

routes.use(loginRegister)
module.exports = routes;
