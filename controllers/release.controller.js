import ReleaseService from "../services/release.service.js";

class ReleaseController {
	constructor() {
		this.releaseService = new ReleaseService();
	}

	async createRelease(req, res) {
		const { id } = req.params;
		const { cover, title, discogs_release_id, artists, release_date } =
			req.body;
		try {
			const newRelease = await this.releaseService.createRelease({
				id,
				cover,
				title,
				discogs_release_id,
				artists,
				release_date,
			});
			res.status(201).json(newRelease);
		} catch (err) {
			res.status(400).json({ err: err.message });
		}
	}
}

export default ReleaseController;
