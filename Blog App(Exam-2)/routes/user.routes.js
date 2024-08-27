const { Router } = require("express");
const { CreateUser, LoginData, GetUser } = require("../controller/user.controller");

const UserRouter = Router();

UserRouter.get("/", GetUser);
UserRouter.post("/signup", CreateUser);
UserRouter.post("/Login", LoginData);

module.exports = UserRouter;