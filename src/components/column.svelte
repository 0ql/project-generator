<script lang="ts">
  import { state } from "src/routes/index.svelte";
  export let selection: string;
  export let col: {
    name: string;
    values: string[];
  };
  let interval: any;
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
    {#each col.values as val}
      <span class="block bg-slate-800 p-4 rounded-sm">{val}</span>
    {/each}
  </div>
</section>
