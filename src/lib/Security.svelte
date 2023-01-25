<script lang="ts">
	import { tickers } from "../tickers";
	import type { securityType } from "src/types";
	import AutoComplete from "simple-svelte-autocomplete";

	let security = {} as securityType;

	$: gicsSector = security?.gicsSector;
	$: countryOfRisk = security?.countryOfRisk;
	$: companyName = security?.companyName;
</script>

<div class="card">
	<div class="card-header bg-jhJade-100 text-3xl">Company</div>
	<div class="p-4">
		<div class="flex items-center justify-center">
			<AutoComplete
				items={tickers}
				id="tester"
				labelFieldName="ticker"
				placeholder="Ticker"
				maxItemsToShowInList="10"
				inputClassName="ac-style rounded w-full placeholder-red-600"
				bind:selectedItem={security}
				showClear
				hideArrow
			/>
		</div>
		<div class="flex mt-4">
			<span class="w-48">Company</span>
			<input
				type="text"
				class="bg-gray-300 rounded w-full text-jhSlate-100 px-2"
				readonly
				bind:value={companyName}
			/>
		</div>
		<div class="flex mt-1">
			<span class="w-48">GICS Sector</span>
			<input
				type="text"
				class="bg-gray-300 rounded w-full text-jhSlate-100 px-2"
				readonly
				bind:value={gicsSector}
			/>
		</div>
		<div class="flex mt-1">
			<span class="w-48">Country Of Risk</span>
			<input
				type="text"
				class="bg-gray-300 rounded w-full text-jhSlate-100 px-2"
				readonly
				bind:value={countryOfRisk}
			/>
		</div>
	</div>
</div>
