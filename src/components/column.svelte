<script lang="ts">
  import { state, type Project } from "src/routes/index.svelte";
  export let selection: Project | string;
  let interval: any;

  export let col: {
    name: string;
    values: Array<Project | string>;
  };
  state.subscribe((st) => {
    clearInterval(interval);
    if (st.spin) {
      interval = setInterval(() => {
        selection = col.values[col.values.length - 1];
        col.values.unshift(selection);
        col.values.pop();
        col = col;
      }, Math.random() * 600);
      return;
    }
  });
</script>

<section class="text-slate-400">
  <h1 class="text-center p-5 bg-slate-800">{col.name}</h1>
  <div class="grid py-1 gap-1">
    {#if typeof col.values[0] === "object"}
      {#each col.values as val}
        <a
          class="block bg-slate-800 p-4 rounded-sm hover:bg-slate-700"
          href={val.link}>{val.name}</a
        >
      {/each}
    {:else}
      {#each col.values as val}
        <span class="block bg-slate-800 p-4 rounded-sm">{val}</span>
      {/each}
    {/if}
  </div>
</section>
