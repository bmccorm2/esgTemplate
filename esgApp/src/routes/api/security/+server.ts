import { error } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { getXataClient } from "../../../xata";
import dotenv from "dotenv";
import { contains } from "@xata.io/client";

dotenv.config();
export const GET = (async ({ url }) => {
	const keyword = url.searchParams.get("keyword") ?? "";
	if (keyword === "") {
		throw error(400, "Please input a search term.");
	}

	const xata = getXataClient({
		apiKey: process.env.XATA_API_KEY,
	});
	const page = await xata.db.security.filter("ticker", contains(keyword)).getPaginated({
		pagination: {
			size: 15,
		},
	});

	return new Response(JSON.stringify(page.records));
}) satisfies RequestHandler;
