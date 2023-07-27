<script context="module" lang="ts">
	import { writable } from "svelte/store";
	import conf from "../conf.yaml";

	export type Project = {
		name: string;
		link: string;
	};

	export const state = writable({
		spin: false,
	});

	const task: Record<string, any> = {
		backend: "",
		frontend: "",
		feature: "",
		lang: "",
		db: "",
		project: { name: "", link: "" },
	};
	let firstSpin = false;
</script>

<script lang="ts">
	import Column from "./column.svelte";
</script>

<main
	class="w-screen h-screen overflow-y-scroll bg-slate-900 gap-1 grid grid-cols-5 scrollbar scrollbar-rounded scrollbar-w-0.3rem scrollbar-track-color-transparent scrollbar-thumb-color-slate-500"
>
	<button
		on:click={() => {
			if (!$state.spin) {
				$state.spin = true;
				setTimeout(() => {
					$state.spin = false;
				}, 5000);
			}
			firstSpin = true;
		}}
		class="text-slate-400 text-4xl cursor-pointer bg-slate-700 col-span-1"
		>{$state.spin ? "Spinning..." : "Click here to start the spinner"}</button
	>
	<span class="p-5 text-slate-400 text-3xl bg-slate-800 col-span-4">
		<h3>Your Task</h3>
		{#if !$state.spin && firstSpin}
			<p class="text-justify">
				Use {task.backend} as the backend and {task.frontend} with {task.lang} as
				your frontend. If you need a database use {task.db}. Implement {task.feature}.
			</p>
		{/if}
	</span>
	{#each conf.colmns as col}
		<Column bind:selection={task[col.name]} {col} />
	{/each}
</main>
