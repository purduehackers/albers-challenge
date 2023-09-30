<script lang="ts">
	import { rgbToHex } from '$lib/helpers/colorHelper';


	export let roundingFactor: number;

	let selection: { r: number; g: number; b: number } = {r: 128/roundingFactor, g: 128/roundingFactor, b: 128/roundingFactor};

	$: selection.r = selection.r

	export let guess: string;
	$: guess = rgbToHex(selection, roundingFactor);
</script>

<main>
	<div>
		<label for="red">
			<input name="red" type="range" min="0" max={256/roundingFactor} bind:value={selection.r} />
		</label>
		<label>
			<input disabled name="red" type="number" min="0" max="255" value={selection.r * roundingFactor} />
		</label>
	</div>
	<div>
		<label for="green">
			<input name="red" type="range" min="0" max={256/roundingFactor} bind:value={selection.g} />
		</label>
		<label>
			<input disabled type="number" min="0" max="255" value={selection.g * roundingFactor} />
		</label>
	</div>
	<div>
		<label>
			<input type="range" min="0" max={256/roundingFactor} bind:value={selection.b}/>
		</label>
		<label>
			<input disabled type="number" min="0" max="255" value={selection.b * roundingFactor} />
		</label>
	</div>
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
		padding: 1rem;
	}

	main div {
		display: grid;
		gap: 1rem;
		grid-template-columns: 1fr 1fr;
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

	label:nth-child(2) {
		width: fit-content;
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

	div:focus-within > label {
		transform: translate(-0.2rem, -0.2rem);
		box-shadow: 0.7rem 0.7rem 0rem rgba(0, 0, 0, 0.5);
	}



	input[type="number"] {
		height: 2rem;
		border: none;
		border-radius: 1rem;
		text-align: center;
		font-size: 1rem;
		padding: 0.1rem 0.5rem;
		font-size: 1rem;
		width: 3rem;
		border: none;
		padding: 0 0.1rem;
		border-radius: 1rem;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.2);
		transition-duration: 0.1s;
		color: rgba(255, 255, 255, 0.9);
	}

	input[type="number"]:focus {
		outline: none;
		background-color: rgba(0, 0, 0, 0.5);
	}

	/*remove number arrows*/
	input[type="number"]::-webkit-outer-spin-button,
	input[type="number"]::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
	/* Firefox */
	input[type='number'] {
		appearance: textfield;
	}



	div:nth-child(1) label {
		background-color: rgba(255, 0, 0, 0.3);
	}
	div:nth-child(2) label {
		background-color: rgba(0, 255, 0, 0.3);
	}
	div:nth-child(3) label {
		background-color: rgba(0, 0, 255, 0.3);
	}

	@media screen and (max-width: 800px) {
		main {
			place-items: start center;
		}

		main div {
			grid-template-columns: 6fr 4fr;
		}

		label:nth-child(1) {
			place-self: center start;
		}
		label:nth-child(2) {
			place-self: end center;
		}
	}
</style>
