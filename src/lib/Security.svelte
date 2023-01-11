<script lang="ts">
	import { tickers } from "../tickers";
	import type { errors } from "src/types";
	import AutoComplete from "simple-svelte-autocomplete";
	import { security } from "../lib/stores";

	export let errors: errors = {};

	$: gicsSector = $security?.gicsSector;
	$: countryOfRisk = $security?.countryOfRisk;
	$: companyName = $security?.companyName;
</script>

<div class="card border-success">
	<div class="card-header text-center bg-success bg-gradient fs-4">Company</div>
	<div class="card-body">
		<div class="row mb-3">
			<div class="col d-grid">
				<div class="input-group">
					<div class="input-group-prepend">
						<span class="input-group-text sec-details-width text-danger">Ticker</span>
					</div>
					<AutoComplete
						items={tickers}
						labelFieldName="ticker"
						maxItemsToShowInList="10"
						inputClassName="ac-style form-control"
						bind:selectedItem={$security}
						showClear
						hideArrow
					/>
					<span class="error-text" class:error-display={errors.tickerError}>
						{errors.tickerError}
					</span>
				</div>
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
