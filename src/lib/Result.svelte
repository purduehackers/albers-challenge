<script lang="ts">
	export let actual: { r: number; g: number; b: number };
	export let guess: { r: number; g: number; b: number };
</script>

<main>
	<p>(R:{actual.r}, G:{actual.g}, B:{actual.b})</p>
	<div />
	<p>(R:{guess.r}, G:{guess.g}, B:{guess.b})</p>
</main>

<style>
	main {
		width: 100%;
		display: grid;
		padding: 2rem;
		grid-template-rows: 1fr 2fr 1fr;
	}

	p {
		padding: 0.5rem;
		border-radius: 1rem;
		text-align: center;
		background-color: rgba(0, 0, 0, 0.2);
		box-shadow: 0.3rem 0.3rem 0rem rgba(0, 0, 0, 0.5);
		color: rgba(255, 255, 255, 0.8);
		font-size: 1.5rem;
		place-self: center start;
	}
	p:nth-child(3) {
		place-self: center end;
	}
</style>
