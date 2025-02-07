import UserService from "../services/user.service.js";

class UserController {
	constructor() {
		this.userService = new UserService();
	}

	async getUsers(req, res) {
		try {
			const users = await this.userService.getUsers();
			res.status(200).json({ users });
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
}

export default UserController;
