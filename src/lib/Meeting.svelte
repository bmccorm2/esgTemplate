<script lang="ts">
	import type { errors } from "src/types";
	import { meeting } from "./stores";

	export let errors: errors = {};
</script>

<div class="card border-success">
	<div class="card-header text-center bg-success bg-gradient fs-4">Meeting</div>
	<div class="card-body">
		<div class="row align-items-center">
			<div class="col d-flex justify-content-end">
				<span class="input-group-text text-danger">Engagement Type</span>
				<select class="form-select" bind:value={$meeting.engagementType}>
					<option value={undefined} hidden selected />
					<option value="1">Meeting</option>
					<option value="2">Call</option>
					<option value="3">Email</option>
				</select>
				<span class="error-text" class:error-display={errors.engagementTypeError}>
					{errors.engagementTypeError}
				</span>
			</div>
			<div class="col text-center d-flex align-items-center justify-content-end">
				<span class="text-danger input-group-text"> Meeting Date</span>
				<input type="date" class="form-control" bind:value={$meeting.meetingDate} />
				<span class="error-text" class:error-display={errors.meetingDate}>{errors.meetingDate}</span
				>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col">
				<div class="input-group">
					<span class="input-group-text w-25" id="basic-addon1">Subject</span>
					<input
						type="text"
						class="form-control"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col">
				<div class="input-group">
					<span class="input-group-text w-25" id="basic-addon1">Company Attendees</span>
					<input
						type="text"
						class="form-control"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>
			</div>
		</div>
		<div class="row mt-1">
			<div class="col">
				<div class="input-group">
					<span class="input-group-text w-25" id="basic-addon1">JHI Attendees</span>
					<input
						type="text"
						class="form-control"
						aria-label="Username"
						aria-describedby="basic-addon1"
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- <style>
	:root {
		--date-picker-background: #1b1e27;
		--date-picker-foreground: #f7f7f7;
	}
</style> -->
