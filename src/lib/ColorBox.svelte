<script lang="ts">
	import { getRandomColor } from "./helpers/colorHelper";

	export let color: string;
	let contextColor1 = getRandomColor(color + "AWHDIUEHFU");
	let contextColor2 = getRandomColor(color + "WUIRUFIURN");

</script>
<main>
	<div id="context" style="background-color: {contextColor1}">
		<div id="guess" style="background-color: {color};" />
	</div>
	<div id="bar" style="background-color: {contextColor2}"></div>
	<div id="bar" style="background-color: {contextColor1}"></div>
	<div id="context" style="background-color: {contextColor2}">
		<div id="guess" style="background-color: {color};" />
	</div>
</main>
<style>
	main {
		width: 100%;
		height: 100%;
		display: flex;
		border-radius: 1rem;
		box-shadow: 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.5);
	}
	#context {
		width: 35%;
		aspect-ratio: 1 / 2;
		display: grid;
		place-items: center;
	}
	#bar {
		width: 15%;
		aspect-ratio: 1 / 2;
		display: grid;
		place-items: center;
	}

	#context:nth-child(1) {
		border-radius: 1rem 0 0 1rem;
	}
	#context:nth-child(4) {
		border-radius: 0 1rem 1rem 0;
	}

	#guess {
		width: 60%;
		aspect-ratio: 1;
	}

	#context:nth-child(1) > #guess {
		border-radius: 0.5rem 0 0 0.5rem;
		place-self: center end;
	}
	#context:nth-child(4) > #guess {
		border-radius: 0 0.5rem 0.5rem 0;
		place-self: center start;
	}
	@media screen and (max-width: 800px) {
		#context {
			max-width: 80%;
		}
	}

</style>
