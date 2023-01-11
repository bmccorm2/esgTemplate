<script lang="ts">
	import { fade } from "svelte/transition";
	import type { esgMapping_type } from "../types";

	export let esgMapping: [esgMapping_type];

	let esgSelections: Array<number> = [];
	let isCollaborative = false;
	let isComplete: number | undefined = undefined;
</script>

<div class="card border-success">
	<div class="card-header text-center bg-success bg-gradient fs-4">ESG Details</div>
	<div class="card-body">
		<div class="row">
			<div class="col d-flex justify-content-evenly">
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="inlineCheckbox1"
						value={1}
						bind:group={esgSelections}
						name="envCheckbox"
					/>
					<label class="form-check-label" for="inlineCheckbox1">ENV</label>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="inlineCheckbox2"
						value={2}
						bind:group={esgSelections}
						name="socCheckbox"
					/>
					<label class="form-check-label" for="inlineCheckbox2">SOC</label>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="inlineCheckbox3"
						value={3}
						bind:group={esgSelections}
					/>
					<label class="form-check-label" for="inlineCheckbox3">GOV</label>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="inlineCheckbox5"
						value={4}
						bind:group={esgSelections}
					/>
					<label class="form-check-label" for="inlineCheckbox5">Other</label>
				</div>
			</div>
		</div>
		<div class="row text-center">
			{#if esgSelections.find((e) => e === 1)}
				<div class="col border border-3 border-primary m-1" transition:fade>
					<h5 class="text-success"><u>Environment</u></h5>
					<div class="row m-auto">
						{#each esgMapping.filter((e) => e.component === "env") as topic}
							<div class="form-check text-start">
								<input
									class="form-check-input"
									type="checkbox"
									value=""
									id={`"${topic.value}"`}
									name={topic.value}
								/>
								<label class="form-check-label" for={`"${topic.value}"`}>
									{topic.value}
								</label>
							</div>
						{/each}
					</div>
				</div>
			{/if}
			{#if esgSelections.find((e) => e === 2)}
				<div class="col border border-3 border-primary m-1" transition:fade>
					<h5 class="text-success"><u>Social</u></h5>
					<div class="row m-auto">
						{#each esgMapping.filter((e) => e.component === "soc") as topic}
							<div class="form-check text-start">
								<input class="form-check-input" type="checkbox" value="" id={`"${topic.value}"`} />
								<label class="form-check-label" for={`"${topic.value}"`}>
									{topic.value}
								</label>
							</div>
						{/each}
					</div>
				</div>
			{/if}
			{#if esgSelections.find((e) => e === 3)}
				<div class="col border border-3 border-primary m-1" transition:fade>
					<h5 class="text-success"><u>Governance</u></h5>
					<div class="row m-auto">
						{#each esgMapping.filter((e) => e.component === "gov") as topic}
							<div class="form-check text-start">
								<input class="form-check-input" type="checkbox" value="" id={`"${topic.value}"`} />
								<label class="form-check-label" for={`"${topic.value}"`}>
									{topic.value}
								</label>
							</div>
						{/each}
					</div>
				</div>
			{/if}
		</div>
		<hr />
		<div class="row mt-3 align-items-center">
			<div class="col-4">
				<input class="form-control" type="file" id="formFile" />
			</div>
			<div class="col-4 text-end">
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="checkbox"
						id="inlineCheckbox4"
						bind:checked={isCollaborative}
					/>
					<label class="form-check-label" for="inlineCheckbox4">Collaborative</label>
				</div>
			</div>
			{#if isCollaborative}
				<div class="col-4">
					<input type="text" placeholder="Organizations/Initiatives" class="form-control" />
				</div>
			{/if}
		</div>
		<hr />
		<div class="row text-center mt-3">
			<div class="col">
				<span class="text-info me-2">Engagement Status</span>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="radio"
						name="engagementStatusOptions"
						id="inlineRadio11"
						bind:group={isComplete}
						value={1}
					/>
					<label class="form-check-label" for="inlineRadio11">New</label>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="radio"
						name="engagementStatusOptions"
						id="inlineRadio22"
						bind:group={isComplete}
						value={2}
					/>
					<label class="form-check-label" for="inlineRadio22">Follow Up</label>
				</div>
				<div class="form-check form-check-inline">
					<input
						class="form-check-input"
						type="radio"
						name="engagementStatusOptions"
						id="inlineRadio33"
						value={3}
						bind:group={isComplete}
					/>
					<label class="form-check-label" for="inlineRadio33">Completed</label>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col">
				<div class="form-floating">
					<textarea
						class="form-control"
						placeholder="ESG SUMMARY"
						id="floatingTextarea2"
						style="height: 100px"
						name="esgSummary"
					/>
					<label class="text-danger" for="floatingTextarea2"
						>ESG Summary - to be used for client reporting
					</label>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col">
				<div class="form-floating">
					<textarea
						class="form-control"
						placeholder="ESG SUMMARY"
						id="floatingTextarea2"
						style="height: 100px"
					/>
					<label for="floatingTextarea2">Objective(s) - Describe specific asks for a company</label>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col">
				<div class="form-floating">
					<textarea
						class="form-control"
						placeholder="ESG SUMMARY"
						id="floatingTextarea2"
						style="height: 100px"
					/>
					<label for="floatingTextarea2"
						>Outcome(s) - Any changes made; areas to follow up; impact on investment recommendation,
						etc</label
					>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col">
				<div class="form-floating">
					<textarea
						class="form-control"
						placeholder="Email Message"
						id="floatingTextarea2"
						style="height: 200px"
					/>
					<label for="floatingTextarea2">Details</label>
				</div>
			</div>
		</div>
	</div>
</div>
