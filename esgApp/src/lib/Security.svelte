<script lang="ts">
	import { json } from "@sveltejs/kit";
	import AutoComplete from "simple-svelte-autocomplete";
	import type { security_type } from "../types";

	let selectedSecurity: security_type;

	$: gicsSector = selectedSecurity?.gicsSector;
	$: countryOfRisk = selectedSecurity?.countryOfRisk;
	$: companyName = selectedSecurity?.companyName;

	const getSecurities = async (keyword: string) => {
		const url = `/api/security?keyword=${keyword.toUpperCase()}`;
		const response = await fetch(url);
		const json = await response.json();
		return json;
	};
</script>

<div class="card border-success">
	<div class="card-header text-center bg-success bg-gradient fs-4">Company</div>
	<div class="card-body">
		<div class="row mb-3">
			<div class="col d-grid">
				<AutoComplete
					searchFunction={getSecurities}
					delay={200}
					localFiltering={false}
					labelFieldName="ticker"
					inputClassName="ac-style test"
					bind:selectedItem={selectedSecurity}
					showClear
					placeholder="Ticker"
					hideArrow
					name="selectedSecurity"
				/>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text sec-details-width" id="basic-addon3">Company</span>
					</div>
					<input
						type="text"
						class="form-control readOnly"
						id="basic-url"
						aria-describedby="basic-addon3"
						readonly
						bind:value={companyName}
					/>
				</div>
			</div>
		</div>
		<div class="row mt-1">
			<div class="col">
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text sec-details-width" id="basic-addon3">GICS Sector</span>
					</div>
					<input
						type="text"
						class="form-control readOnly"
						id="basic-url"
						aria-describedby="basic-addon3"
						readonly
						bind:value={gicsSector}
					/>
				</div>
			</div>
		</div>
		<div class="row mt-1">
			<div class="col">
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text sec-details-width" id="basic-addon3">Country Of Risk</span
						>
					</div>
					<input
						type="text"
						class="form-control readOnly"
						id="basic-url"
						aria-describedby="basic-addon3"
						readonly
						bind:value={countryOfRisk}
					/>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.readOnly {
		background-color: lightgray;
	}
	.sec-details-width {
		width: 140px;
	}
</style>
