import mariadb from "mariadb";
import dotenv from "dotenv";
dotenv.config();

class UserRepository {
	constructor() {
		this.pool = mariadb.createPool({
			host: process.env.DB_HOST,
			port: process.env.DB_PORT,
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DATABASE,
			connectionLimit: 5,
		});
	}

	async createUser({ id, pfp, name, bio, email, pwd }) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			await conn.query(
				"INSERT INTO Users (id, pfp, name, bio, email, pwd) VALUES (?,?,?,?,?,?)",
				[id, pfp, name, bio, email, pwd]
			);
			return { id, pfp, name, bio, email, pwd };
		} catch (err) {
			throw new Error(
				"Erreur lors de la création de l'utilisateur" + err.message
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async getUsers() {
		let conn;
		try {
			conn = await this.pool.getConnection();
			return await conn.query("SELECT * FROM Users");
		} catch (err) {
			throw new Error(
				"Erreur lors de la récupération des utilisateurs: " + err.message
			);
		} finally {
			if (conn) conn.release();
		}
	}

	async getUserById(id) {
		let conn;
		try {
			conn = await this.pool.getConnection();
			const rows = await conn.query("SELECT * FROM Users WHERE id = ?", [id]);
			return rows[0] || null;
		} catch (err) {
			throw new Error(
				"Erreur lors de la récupération de l'utilisateur: " + err.message
			);
		}
	}
}

export default UserRepository;
