<script lang="ts">
	import { esgMapping } from "../data";
	import { fade } from "svelte/transition";

	let esgSelections: Array<number> = [];
	let isCollaborative = true;
	let engagementType = "engagementForChange";
	let isComplete: number | undefined = undefined;
</script>

<div class="card">
	<div class="card-header bg-jhJade-100 text-3xl">ESG Details</div>
	<div class="flex justify-evenly align-middle mt-2">
		<div class="flex align-middle">
			<input
				class="w-5 rounded-lg border-4 border-white mr-1 "
				type="checkbox"
				id="inlineCheckbox1"
				value={1}
				bind:group={esgSelections}
			/>
			<label class="font-bold text-sky-500" for="inlineCheckbox1">ENV</label>
		</div>
		<div class="flex align-middle">
			<input
				class="w-5 rounded-lg border-4 border-white mr-1 "
				type="checkbox"
				id="inlineCheckbox2"
				value={2}
				bind:group={esgSelections}
			/>
			<label class="font-bold text-sky-500" for="inlineCheckbox2">SOC</label>
		</div>
		<div class="flex align-middle">
			<input
				class="w-5 rounded-lg border-4 border-white mr-1"
				type="checkbox"
				id="inlineCheckbox3"
				value={3}
				bind:group={esgSelections}
			/>
			<label class="font-bold text-sky-500" for="inlineCheckbox3">GOV</label>
		</div>
		<div class="flex align-middle">
			<input
				class="w-5 rounded-lg border-4 border-white mr-1 "
				type="checkbox"
				id="inlineCheckbox5"
				value={4}
				bind:group={esgSelections}
			/>
			<label class="font-bold text-sky-500" for="inlineCheckbox5">Other</label>
		</div>
	</div>
	<div class="flex justify-center my-2">
		{#if esgSelections.find((e) => e === 1)}
			<div
				class="border-4 border-sky-600 rounded m-1 px-2 pb-2 flex-grow"
				transition:fade
			>
				<h5 class="text-center text-2xl text-jhJade-100 mb-2 underline">
					Environment
				</h5>
				{#each esgMapping.filter((e) => e.component === "env") as topic}
					<div>
						<input class="" type="checkbox" value="" id={`"${topic.value}"`} />
						<label class="" for={`"${topic.value}"`}>
							{topic.value}
						</label>
					</div>
				{/each}
			</div>
		{/if}
		{#if esgSelections.find((e) => e === 2)}
			<div
				class="border-4 border-sky-600 rounded m-1 px-2 pb-2 flex-grow"
				transition:fade
			>
				<h5 class="text-center text-2xl text-jhJade-100 mb-2 underline">
					Social
				</h5>
				{#each esgMapping.filter((e) => e.component === "soc") as topic}
					<div>
						<input class="" type="checkbox" value="" id={`"${topic.value}"`} />
						<label class="" for={`"${topic.value}"`}>
							{topic.value}
						</label>
					</div>
				{/each}
			</div>
		{/if}
		{#if esgSelections.find((e) => e === 3)}
			<div
				class="border-4 border-sky-600 rounded m-1 px-2 pb-2 flex-grow"
				transition:fade
			>
				<h5 class="text-center text-2xl text-jhJade-100 mb-2 underline">
					Governance
				</h5>
				{#each esgMapping.filter((e) => e.component === "gov") as topic}
					<div>
						<input class="" type="checkbox" value="" id={`"${topic.value}"`} />
						<label class="" for={`"${topic.value}"`}>
							{topic.value}
						</label>
					</div>
				{/each}
			</div>
		{/if}
	</div>
	<hr class="mx-4" />
	<div class="flex my-2 align-middle px-5">
		<!-- <div class="w-6/12 text-center">
			<input type="file" id="formFile" />
		</div> -->
		<div class="w-2/12 text-center">
			<input
				class=""
				type="checkbox"
				id="inlineCheckbox4"
				bind:checked={isCollaborative}
			/>
			<label class="font-bold" for="inlineCheckbox4">Collaborative</label>
		</div>
		{#if isCollaborative}
			<div class="w-4/12">
				<input
					type="text"
					placeholder="Organizations/Initiatives"
					class="rounded w-full p-2"
				/>
			</div>
		{/if}
	</div>
	<hr class="mx-4" />
	<div class="flex justify-center mt-3">
		<div class="text-sky-500 me-2 mx-4 font-bold">Engagement Status</div>
		<div class="mx-2">
			<input
				type="radio"
				name="engagementStatusOptions"
				id="inlineRadio11"
				bind:group={isComplete}
				value={1}
			/>
			<label for="inlineRadio11">New</label>
		</div>
		<div class="mx-2">
			<input
				type="radio"
				name="engagementStatusOptions"
				id="inlineRadio22"
				bind:group={isComplete}
				value={2}
			/>
			<label for="inlineRadio22">Follow Up</label>
		</div>
		<div class="mx-2">
			<input
				type="radio"
				name="engagementStatusOptions"
				id="inlineRadio33"
				value={3}
				bind:group={isComplete}
			/>
			<label for="inlineRadio33">Completed</label>
		</div>
	</div>
	<div class="px-4 mt-2">
		<textarea
			class="form-control w-full h-20 rounded-md px-2 pt-2 text-jhSlate-100"
			placeholder="ESG SUMMARY - to be used for client reporting"
		/>
	</div>
	<div class="px-4 mt-2">
		<textarea
			class="form-control w-full h-20 rounded-md px-2 pt-2 text-jhSlate-100"
			placeholder=" Objective(s) - Describe specific asks for a company"
		/>
	</div>
	<div class="px-4 mt-2">
		<textarea
			class="form-control w-full h-20 rounded-md px-2 pt-2 text-jhSlate-100"
			placeholder="Outcome(s) - any changes made; areas to follow up; impact on investment recommendation, etc."
		/>
	</div>
	<div class="px-4 mt-2 mb-4">
		<textarea
			class="form-control w-full h-28 rounded-md px-2 pt-2 text-jhSlate-100"
			placeholder="Details"
		/>
	</div>
</div>
