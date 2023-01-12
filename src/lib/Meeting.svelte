<div class="card">
	<div class="card-header bg-jhJade-100 text-3xl">Meeting</div>
	<div class="p-4">
		<div class="flex items-center justify-around">
			<div class="">
				<span class="text-red-500">Engagement Type</span>
				<select class="">
					<option value={undefined} hidden selected />
					<option value="1">Meeting</option>
					<option value="2">Call</option>
					<option value="3">Email</option>
				</select>
			</div>
			<div class="">
				<span class="text-red-500"> Meeting Date</span>
				<input type="date" class="" />
			</div>
		</div>
		<div class="mt-3 flex">
			<span class="w-60">Subject</span>
			<input type="text" class="w-full rounded text-jhSlate-100 pl-2" />
		</div>
		<div class="mt-3 flex">
			<span class="w-60">Company Attendees</span>
			<input type="text" class="w-full rounded text-jhSlate-100 pl-2" />
		</div>
		<div class="mt-1 flex">
			<span class="w-60">JHI Attendees</span>
			<input type="text" class="w-full rounded text-jhSlate-100 pl-2" />
		</div>
	</div>
</div>

<!-- <style>
	:root {
		--date-picker-background: #1b1e27;
		--date-picker-foreground: #f7f7f7;
	}
</style> -->
