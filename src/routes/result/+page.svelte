<script lang="ts">
	import ColorBox from '$lib/ColorBox.svelte';
	import Result from '$lib/Result.svelte';

	let score = 0;
</script>

<main>
	<div>
		<ColorBox color="#FF0000" />
		<Result actual={{ r: 255, g: 0, b: 0 }} guess={{ r: 255, g: 255, b: 0 }} />
		<ColorBox color="#FFFF00" />
	</div>
	<p>Score: {score}%</p>
</main>

<style>
	main {
		display: grid;
		padding: 2rem;
		grid-template-columns: 1fr;
		grid-template-rows: 2fr 1fr 1fr;
	}
	main > div {
		display: grid;
		height: 20rem;
		grid-template-columns: 1fr 2fr 1fr;
		padding: 1rem;
		grid-template-rows: 1fr;
		place-items: center;
	}
	p {
		font-size: 3rem;
		color: white;
		text-align: center;
		padding: 2rem;
	}
</style>
