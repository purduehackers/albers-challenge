<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageData } from './$types';
	import ColorBox from '$lib/ColorBox.svelte';
	import Guesser from '$lib/Guesser.svelte';
	import SubmitButton from '$lib/SubmitButton.svelte';
	import { getRandomColor } from '$lib/helpers/colorHelper';

	export let data: PageData;	

	$: color = getRandomColor(data.seed);
	let guess: string;

    function submitGuess() {
        goto(`/result/${color.substring(1)}/${guess.substring(1)}`);
    }
</script>

<!-- style="background-color: {color};" -->
<main>
	<div>
		<ColorBox bind:color />
		<Guesser bind:guess />
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
		grid-template-rows: 2fr 1fr;
		place-items: start center;
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
			max-width: 90vw;
		}
		main > div {
			max-width: 90vw;	
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
	}
</style>
