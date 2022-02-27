<script context="module">
	export const hydrate = false;
  export const prerender = true;
</script>

<svelte:head>
	<title>Donate</title>
</svelte:head>

<section class="donate">
  <a href="https://www.buymeacoffee.com/alagsirhc" target="_blank">
      <img 
        src="https://cdn.buymeacoffee.com/buttons/v2/default-red.png" 
        alt="Buy Me A Coffee" 
        style="height: 60px !important; width: 217px !important;" >
  </a>
</section>

<style>
  .donate {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
  }
</style>