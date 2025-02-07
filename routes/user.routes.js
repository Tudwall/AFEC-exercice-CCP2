import express from "express";
import UserController from "../controllers/user.controller.js";

const router = express.Router();
const userController = new UserController();

router.get("/", (req, res) => userController.getUsers(req, res));
router.get("/:id", (req, res) => userController.getUserById(req, res));

export default router;
