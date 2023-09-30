<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import ColorBox from '$lib/ColorBox.svelte';
	import Guesser from '$lib/Guesser.svelte';
	import SubmitButton from '$lib/SubmitButton.svelte';
	import { getRandomColor } from '$lib/helpers/colorHelper';

	export let data: PageData;	

	const roundingFactor = 8;

	$: color = getRandomColor(data.seed, roundingFactor);
	let guess: string;

    function submitGuess() {
        goto(`/result/${color.substring(1)}/${guess.substring(1)}`);
    }
</script>

<!-- style="background-color: {color};" -->
<main>
	<h1>Guess the color of the smallest squares!</h1>
	<div>
		<ColorBox bind:color />
		<Guesser {roundingFactor} bind:guess />
	</div>
		<SubmitButton on:submitted={submitGuess} text="Guess!" />
</main>

<style>
	/* one column, 3 rows */
	main {
		display: grid;
		margin: 0 auto;
		padding-top: 0rem;
		width: 100%;
		max-width: 50rem;
		grid-template-columns: 1fr;
		grid-template-rows: 0.5fr 2fr 1fr;
		place-items: start center;
	}
	main > h1 {
		font-size: 2rem;
		font-weight: bold;
		color: white;
		place-self: center center;
	}
	main > div {
		width:90%;
		padding: 1rem;
		display: grid;
		grid-template-columns: 60% 40%;
		grid-template-rows: 1fr;
		place-items: center;
	}

	@media (max-width: 800px) {
		main {
			max-width: 100%;
		}
		main > div {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}

		main > h1 {
			font-size: 1.5rem;
			text-align: center;
			padding: ;
		}
	}
</style>
