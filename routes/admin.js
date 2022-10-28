const express = require("express");
const Router = express.Router();

const { signup, signin } = require("../modules/admin/admin.controller");

Router.post("/up", signup);
Router.post("/sign", signin);

module.exports = Router;