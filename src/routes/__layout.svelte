<script lang="ts">
  import "uno.css";
  import Navbar from "src/components/navbar.svelte";
</script>

<!-- <Navbar /> -->
<slot />

<style global>
  @import url("https://fonts.googleapis.com/css2?family=Finlandica:wght@500&display=swap");
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
    outline: none;
    border: none;
    color: currentColor;
    display: block;
    font-family: "Finlandica", sans-serif;
  }
</style>
