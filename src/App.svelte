<script lang="ts">
	import Esg from "./lib/Esg.svelte";
	import Meeting from "./lib/Meeting.svelte";
	import Security from "./lib/Security.svelte";
	import { security, meeting, esgDetails } from "./lib/stores";
	import { z } from "zod";
	import type { errors } from "./types";

	let toastM: HTMLElement;

	const schema = z.object({
		engagementType: z.string(),
		meetingDate: z.date({
			invalid_type_error: "Please select a valid date.",
		}),
		ticker: z.string(),
		esgSummary: z.string(),
	});
	let errors: errors = {
		tickerError: null,
		engagementTypeError: null,
		esgSummary: null,
		meetingDate: null,
	};

	const submit = () => {
		const meetingDate = new Date($meeting?.meetingDate);
		const formData = {
			ticker: $security.ticker,
			engagementType: $meeting.engagementType,
			esgSummary: $esgDetails.esgSummary,
			meetingDate,
		};

		const results = schema.safeParse(formData);
		if (!results.success) {
			const formatted = results.error.format();
			errors.tickerError = formatted.ticker?._errors.join(", ") || "";
			errors.engagementTypeError = formatted.engagementType?._errors.join(", ") || "";
			errors.esgSummary = formatted.esgSummary?._errors.join(", ") || "";
			errors.meetingDate = formatted.meetingDate?._errors.join(", ") || "";
		} else {
			errors.tickerError = null;
			errors.engagementTypeError = null;
			errors.esgSummary = null;
			errors.meetingDate = null;
		}
	};
</script>

<div class="container mt-3">
	<div class="card">
		<form>
			<div class="card-header text-center bg-primary bg-gradient fs-2">ESG Template</div>
			<div class="card-body">
				<div class="row">
					<div class="col">
						<Meeting {errors} />
					</div>
					<div class="col-4">
						<Security {errors} />
					</div>
				</div>
				<div class="row mt-3">
					<div class="col">
						<Esg {errors} />
					</div>
				</div>
			</div>
			<div class="card-footer">
				<div class="row">
					<div class="col-6 d-grid mx-auto">
						<button class="btn btn-primary bg-gradient" on:click|preventDefault={submit}
							>SUBMIT</button
						>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
