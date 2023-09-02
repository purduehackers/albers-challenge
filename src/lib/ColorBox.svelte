<script lang="ts">
	import { getRandomColor } from './helpers/colorHelper';

	export let color: string;

	if (!color) {
		color = getRandomColor();
	}
</script>

<div style="background-color: {color};" />

<style>
	div {
		border-radius: 1rem;
		aspect-ratio: 1;
		width: 100%;
		box-shadow: 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.5);
	}
</style>
