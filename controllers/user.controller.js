import UserService from "../services/user.service.js";

class UserController {
	constructor() {
		this.userService = new UserService();
	}

	async createUser(req, res) {
		const { id } = req.params;
		const { pfp, name, bio, email, pwd } = req.body;
		try {
			const newUser = await this.userService.createUser({
				id,
				pfp,
				name,
				bio,
				email,
				pwd,
			});
			res.status(201).json(newUser);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}

	async getUsers(req, res) {
		try {
			const users = await this.userService.getUsers();
			res.status(200).json({ users });
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}

	async getUserById(req, res) {
		const { id } = req.params;
		try {
			const user = await this.userService.getUserById(id);
			res.status(200).json({ user });
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
}

export default UserController;
