<script lang="ts">
	export let color: string;
</script>

<div style="background-color: {color};" />

<style>
	div {
		border-radius: 1rem;
		width: 100%;
		aspect-ratio: 1;
		box-shadow: 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.5);
	}
	@media screen and (max-width: 800px) {
		div {
			aspect-ratio: 2 / 1;
			max-width: 80vw;
		}
	}

	@media screen and (max-width: 400px) {
		div {
			aspect-ratio: 1 / 1;
		}
	}
</style>
