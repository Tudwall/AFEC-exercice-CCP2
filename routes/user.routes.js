import express from "express";
import UserController from "../controllers/user.controller.js";

const router = express.Router();
const userController = new UserController();

router.get("/", (req, res) => userController.getUsers(req, res));

export default router;
