<script lang="ts">
	import { rgbToHex } from '$lib/helpers/colorHelper';

	let selection: { r: number; g: number; b: number } = {r: 128, g: 128, b: 128};

	export let guess: string;
	$: guess = rgbToHex(selection);
</script>

<main>
	<label>
		<input type="range" min="0" max="255" bind:value={selection.r}/>
	</label>
	<label>
		<input type="range" min="0" max="255" bind:value={selection.g}/>
	</label>
	<label>
		<input type="range" min="0" max="255" bind:value={selection.b}/>
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
		place-items: center;
	}
	label {
		width: 12rem;
		height: 3rem;
		border-radius: 2rem;
		padding: 0.1rem 1rem;
		font-size: 1rem;
		box-shadow: 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.5);
		display: grid;
		place-items: center;
		color: rgba(255, 255, 255, 0.9);
		transition-duration: 0.1s;
		appearance: none;
		
	}
	input {
		width: 100%;
		height: 2rem;
	}

	input[type="range"] {
		-webkit-appearance: none;
		appearance: none;
		background: transparent;
		cursor: pointer;
	}

	/***** Chrome, Safari, Opera, and Edge Chromium *****/
	input[type="range"]::-webkit-slider-runnable-track {
		background: rgba(0, 0, 0, 0.5);
		border-radius: 0.5rem;
		height: 1rem;
	}
	
	input[type="range"]::-moz-range-track {
	background: rgba(0, 0, 0, 0.5);
	border-radius: 0.5rem;
	height: 1rem;
	}

	input[type="range"]::-webkit-slider-thumb {
		appearance: none;
		background-color: #a2a2a2;
		height: 2rem;
		margin-top: -0.5rem;
		border-radius: 50%;
		width: 2rem;   
		border: 0.2rem solid black;
	}
	input[type="range"]::-webkit-slider-thumb:hover, input[type="range"]::-webkit-slider-thumb:active {
		background-color: #dadada;
	}
	input[type="range"]::-moz-range-thumb{
		background-color: #a2a2a2;
		height: 2rem;
		border-radius: 50%;
		width: 2rem;
		border: 0.2rem solid black;
	}
	input[type="range"]::-moz-range-thumb:hover, input[type="range"]::-moz-range-thumb:active {
		background-color: #dadada;
	}

	label:focus-within {
		transform: translate(-0.2rem, -0.2rem);
		box-shadow: 0.7rem 0.7rem 0rem rgba(0, 0, 0, 0.5);
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
