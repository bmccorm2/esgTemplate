<script lang="ts">
	import Esg from "./lib/Esg.svelte";
	import Meeting from "./lib/Meeting.svelte";
	import Security from "./lib/Security.svelte";
</script>

<div class="container mx-auto mt-4 px-12">
	<div class="card">
		<form>
			<div class="card-header text-5xl bg-jhCerulean-100 text-white">
				ESG Template
			</div>
			<div class="flex">
				<div class="w-7/12 m-4">
					<Meeting />
				</div>
				<div class="w-5/12 my-4 mr-4">
					<Security />
				</div>
			</div>
			<div class="mt-3 mx-4">
				<Esg />
			</div>
			<div class="flex justify-center my-3">
				<button
					class="inline-block rounded mx-auto bg-jhIrisBlue-100 px-6 py-2 w-1/3 font-bold"
					>SUBMIT</button
				>
			</div>
		</form>
	</div>
</div>
