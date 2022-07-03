<script context="module" lang="ts">
  import { writable } from "svelte/store";
  import conf from "../conf.yaml";
  export const state = writable({
    spin: false,
  });
  const task: Record<string, string> = {
    backend: "",
    frontend: "",
    feature: "",
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

<main
  class="fixed top-0 h-screen w-screen overflow-y-scroll bg-slate-900 gap-1 grid grid-cols-7"
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
    class="text-slate-400 text-4xl cursor-pointer bg-slate-700 col-span-2"
    >{$state.spin ? "Spinning..." : "Click here to start the spinner"}</button
  >
  <span class="p-5 text-slate-400 text-3xl bg-slate-800 col-span-5">
    <h3>Your Task</h3>
    {#if !$state.spin && firstSpin}
      <p class="text-justify">
        Use {task.backend} as the backend and {task.frontend} with {task.lang} as
        your frontend. If you need a database use {task.db}. Implement {task.feature}.
        Create a {task.app}
        for (a/an/the) {task.for}.
      </p>
    {/if}
  </span>
  {#each conf.colmns as col}
    <Column bind:selection={task[col.name]} {col} />
  {/each}
</main>
