<script lang="ts">
	import { tickers } from "../tickers";
	import type { securityType } from "src/types";
	//@ts-ignore
	import AutoComplete from "simple-svelte-autocomplete";

	let security = {} as securityType;

	$: sector = security?.sector;
	$: country = security?.country;
	$: companyName = security?.companyName;
	$: rating = security?.rating;
	$: esgRating = security?.esgRating;
	$: coveringAnalyst = security?.coveringAnalyst;
	$: source = security?.source;
</script>

<div class="card">
	<div class="card-header bg-jhJade-100 text-3xl">Company</div>
	<div class="p-4">
		<div class="flex items-center justify-center mb-4">
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
		{#if source === 'equity'}
		<div class="flex mt-1">
			<span class="w-48">Company</span>
			<input
				type="text"
				class="bg-gray-300 rounded w-full text-jhSlate-100 px-2"
				readonly
				bind:value={companyName}
			/>
		</div>
		{/if}
		<div class="flex mt-1">
			<span class="w-48">{source === 'equity' ? 'GICS Sector' : 'Barclays Class 4'}</span>
			<input
				type="text"
				class="bg-gray-300 rounded w-full text-jhSlate-100 px-2"
				readonly
				bind:value={sector}
			/>
		</div>
		<div class="flex mt-1">
			<span class="w-48">Country Of Risk</span>
			<input
				type="text"
				class="bg-gray-300 rounded w-full text-jhSlate-100 px-2"
				readonly
				bind:value={country}
			/>
		</div>
		<div class="flex mt-1">
			<span class="w-48">{source === 'equity' ? 'Rating' : 'Recommendation'}</span>
			<input
				type="text"
				class="bg-gray-300 rounded w-full text-jhSlate-100 px-2"
				readonly
				bind:value={rating}
			/>
		</div>
		{#if source === 'fi'}
		<div class="flex mt-1">
			<span class="w-48">ESG Rating</span>
			<input
				type="text"
				class="bg-gray-300 rounded w-full text-jhSlate-100 px-2"
				readonly
				bind:value={esgRating}
			/>
		</div>
		{/if}
		{#if coveringAnalyst != ''}
		<div class="flex mt-1">
			<span class="w-48">Covering Analyst</span>
			<input
				type="text"
				class="bg-gray-300 rounded w-full text-jhSlate-100 px-2"
				readonly
				bind:value={coveringAnalyst}
			/>
		</div>
		{/if}
	</div>
</div>
