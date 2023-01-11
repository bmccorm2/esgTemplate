<script lang="ts">
	import { DateInput } from "date-picker-svelte";

	let meetingDate: Date;
	let engagementType: string;
</script>

<div class="card border-success">
	<div class="card-header text-center bg-success bg-gradient fs-4">Meeting</div>
	<div class="card-body">
		<div class="row align-items-center">
			<div class="col d-flex justify-content-end">
				<span class="input-group-text text-danger">Engagement Type</span>
				<select class="form-select" bind:value={engagementType} name="engagementType">
					<option value={undefined} hidden selected />
					<option value="1">Meeting</option>
					<option value="2">Call</option>
					<option value="3">Email</option>
				</select>
			</div>
			<div class="col text-center d-flex align-items-center justify-content-end">
				<span class="text-danger input-group-text"> Meeting Date</span>
				<DateInput
					closeOnSelection={true}
					format="yyyy-MM-dd"
					placeholder=""
					bind:value={meetingDate}
					name="meetingDate"
				/>
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
						name="subject"
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
