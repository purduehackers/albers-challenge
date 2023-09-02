<script>
	import Header from '$lib/Header.svelte';
</script>

<main>
	<Header />
	<slot />
</main>

<style>
	/*import global css file */
	@import '../../static/global.css';

	main {
		height: 100dvh;
		background-color: #444444;
	}
</style>
