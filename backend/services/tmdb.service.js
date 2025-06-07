import axios from "axios";
import { ENV_VARS } from "../config/envVars.js";

export const fetchFromTMDB = async (url) => {
	try {
		const joinChar = url.includes("?") ? "&" : "?";
		const fullUrl = `${url}${joinChar}api_key=${ENV_VARS.TMDB_API_KEY}`;

		const response = await axios.get(fullUrl);

		if (response.status !== 200) {
			throw new Error("Failed to fetch data from TMDB: " + response.statusText);
		}

		return response.data;
	} catch (error) {
		console.error("Error in fetchFromTMDB:", error.message);
		throw error;
	}
};
