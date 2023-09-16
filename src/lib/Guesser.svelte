<script lang="ts">
	import { rgbToHex } from '$lib/helpers/colorHelper';

	let selection: { r: number; g: number; b: number } = {r: 128, g: 128, b: 128};

	export let guess: string;

	$: selection.r = Math.min(selection.r, 255);
	$: selection.g = Math.min(selection.g, 255);
	$: selection.b = Math.min(selection.b, 255);
	
	$: guess = rgbToHex(selection);
</script>

<main>
	<label>
		Red:
		<input type="number" min="0" max="255" bind:value={selection.r}/>
	</label>
	<label>
		Green:
		<input type="number" min="0" max="255" bind:value={selection.g}/>
	</label>
	<label>
		Blue:
		<input type="number" min="0" max="255" bind:value={selection.b}/>
	</label>
</main>

<style>
	/* one row, five columns */
	main {
		display: grid;
		width: 100%;
		height: 100%;
		grid-template-columns: 1fr;
		grid-template-rows: repeat(3, 1fr);
		gap: 1rem;
		padding: 1rem;
		place-items: center;
	}
	label {
		width: 12rem;
		height: 3rem;
		border-radius: 2rem;
		padding: 0.1rem 0.5rem;
		font-size: 1rem;
		box-shadow: 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.5);
		display: grid;
		place-items: center;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
		color: rgba(255, 255, 255, 0.9);
		transition-duration: 0.1s;
	}
	input {
		width: 4rem;
		height: 2rem;
		border: none;
		border-radius: 1rem;
		text-align: center;
		font-size: 1rem;
		padding: 0.1rem 0.5rem;
		font-size: 1rem;
		width: 4.5rem;
		border: none;
		padding: 0 0.1rem;
		border-radius: 1rem;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.2);
		transition-duration: 0.1s;
		color: rgba(255, 255, 255, 0.9);
	}

	input:focus {
		outline: none;
		background-color: rgba(0, 0, 0, 0.5);
	}

	label:focus-within {
		transform: translate(-0.1rem, -0.1rem);
		box-shadow: 0.6rem 0.6rem 0rem rgba(0, 0, 0, 0.5);
	}

	/*remove number arrows*/
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	/* Firefox */
	input[type='number'] {
		appearance: textfield;
	}

	label:nth-child(1) {
		background-color: rgba(255, 0, 0, 0.3);
	}
	label:nth-child(2) {
		background-color: rgba(0, 255, 0, 0.3);
	}
	label:nth-child(3) {
		background-color: rgba(0, 0, 255, 0.3);
	}
</style>
