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
		location.reload();
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
		padding-top: 2rem;
		width: 100%;
		max-width: 50rem;
		grid-template-columns: 1fr;
		grid-template-rows: 2fr 1fr;
		place-items: start center;
	}
	main > div {
		width: 80%;
		padding: 2rem;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		place-items: center;
	}

	@media (max-width: 800px) {
		main > div {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}
	}
</style>
