import { writable } from "svelte/store";
import type { securityType, meetingType, esgDetailsType } from "src/types";

export const security = writable<securityType>({
	ticker: undefined,
});
export const meeting = writable<meetingType>({
	engagementType: undefined,
	meetingDate: undefined,
});

export const esgDetails = writable<esgDetailsType>({
	esgSummary: undefined,
});
