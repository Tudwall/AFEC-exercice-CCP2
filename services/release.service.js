import ReleaseRepository from "../repositories/release.repository.js";

class ReleaseService {
	constructor() {
		this.releaseRepository = new ReleaseRepository();
	}

	async createRelease({
		id,
		cover,
		title,
		discogs_release_id,
		artists,
		release_date,
	}) {
		try {
			return await this.releaseRepository.createRelease({
				id,
				cover,
				title,
				discogs_release_id,
				artists,
				release_date,
			});
		} catch (err) {
			throw new Error(err.message);
		}
	}
}

export default ReleaseService;
