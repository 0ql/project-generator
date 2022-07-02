<script context="module" lang="ts">
  import { writable } from "svelte/store";
  import conf from "../conf.yaml";
  export const state = writable({
    spin: false,
  });
  const task: Record<string, string> = {
    backend: "",
    frontend: "",
    lang: "",
    db: "",
    app: "",
    for: "",
  };
  let firstSpin = false;
</script>

<script lang="ts">
  import Column from "src/components/column.svelte";
</script>

<main class="fixed top-0 h-screen w-screen bg-slate-900 gap-1 grid grid-cols-6">
  <button
    on:click={() => {
      $state.spin = !$state.spin;
      firstSpin = true;
    }}
    class="text-slate-400 text-4xl cursor-pointer bg-slate-800 col-span-3"
    >{$state.spin ? "Stop" : "Start"}</button
  >
  <span
    class="p-5 text-slate-400 text-4xl cursor-pointer bg-slate-800 col-span-3"
  >
    <h3>Your Task</h3>
    {#if !$state.spin && firstSpin}
      <p class="text-justify">
        Use {task.backend} as the backend and {task.frontend} with {task.lang} as
        your frontend. If you need a database use {task.db}. Create a {task.app}
        for a {task.for}.
      </p>
    {/if}
  </span>
  {#each conf.colmns as col}
    <Column bind:selection={task[col.name]} {col} />
  {/each}
</main>
