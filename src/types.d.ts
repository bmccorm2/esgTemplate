declare module "simple-svelte-autocomplete";

export interface securityType {
	ticker: string | undefined;
	sector: string;
	country: string;
	companyName: string;
	rating: string;
	esgRating: string;
	coveringAnalyst: string;
	source: string;
}

export interface meetingType {
	engagementType: string | undefined;
	meetingDate: Date | undefined;
	subject?: string;
	companyAttendees?: string;
	jhiAttendees?: string;
}

export interface esgDetailsType {
	esgSummary: string | undefined;
}

export interface errors {
	tickerError?: string | null;
	engagementTypeError?: string | null;
	esgSummary?: string | null;
	meetingDate?: string | null;
}
