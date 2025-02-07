import UserRepository from "../repositories/user.repository.js";

class UserService {
	constructor() {
		this.userRepository = new UserRepository();
	}

	async getUsers() {
		try {
			return await this.userRepository.getUsers();
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

export default UserService;
