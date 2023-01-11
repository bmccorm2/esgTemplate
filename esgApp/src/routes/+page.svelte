<script lang="ts">
	import Meeting from "$lib/Meeting.svelte";
	import Esg from "$lib/Esg.svelte";
	import Security from "$lib/Security.svelte";
	import type { PageServerData } from "./$types";

	export let data: PageServerData;
</script>

<div class="container mt-3">
	<div class="card">
		<form method="post">
			<div class="card-header text-center bg-primary bg-gradient fs-2">ESG Template</div>
			<div class="card-body">
				<div class="row">
					<div class="col">
						<Meeting />
					</div>
					<div class="col-4">
						<Security />
					</div>
				</div>
				<div class="row mt-3">
					<div class="col">
						<Esg esgMapping={data.esgMapping} />
					</div>
				</div>
			</div>
			<div class="card-footer">
				<div class="row">
					<div class="col-6 d-grid mx-auto">
						<button type="submit" class="btn btn-primary bg-gradient">SUBMIT</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
