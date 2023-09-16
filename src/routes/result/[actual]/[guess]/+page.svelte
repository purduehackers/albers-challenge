<script lang="ts">
	import ColorBox from '$lib/ColorBox.svelte';
	import Result from '$lib/Result.svelte';
	import { hexToRgb } from '$lib/helpers/colorHelper';
	import type { PageData } from './$types';
	import type { rgbColor } from '$lib/types/rgbColor';

	export let data: PageData;
  	
	const actual: rgbColor = hexToRgb("#"+data.actual);
	const guess: rgbColor = hexToRgb("#"+data.guess);

	
	let score = 0;
	score += Math.abs(actual.r - guess.r);
	score += Math.abs(actual.g - guess.g);
	score += Math.abs(actual.b - guess.b);
	score = 100 - (score / 7.65);
	score = Math.round(score);
</script>

<main>
	<div>
		<ColorBox color={"#"+data.actual} />
		<Result {actual} {guess} />
		<ColorBox color={"#"+data.guess} />
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
