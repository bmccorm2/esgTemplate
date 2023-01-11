import { getXataClient } from "../xata";
import type { PageServerLoad } from "./$types";
import type { Actions } from "./$types";
import dotenv from "dotenv";
import { dataset_dev } from "svelte/internal";

dotenv.config();

export const load = (async () => {
	const xata = getXataClient({
		apiKey: process.env.XATA_API_KEY,
	});

	const esgMapping = await xata.db.esgMapping.getAll();

	return {
		esgMapping,
	};
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		try {

		} catch (e) {

		}
	},
};
