<script lang="ts">
	export let text: string;
</script>

<button>{text}</button>

<style>
	button {
		width: 12rem;
		height: 4rem;
		border-radius: 2rem;
		border: 0.2rem solid black;
		background-color: rgba(255, 255, 255, 0.5);
		font-size: 2.5rem;
		box-shadow: 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.5);
		transition-duration: 0.1s;
	}
	button:hover {
		background-color: rgba(255, 255, 255, 0.8);
		transform: translate(-0.1rem, -0.1rem);
		box-shadow: 0.6rem 0.6rem 0rem rgba(0, 0, 0, 0.5);
	}

	button:active {
		background-color: rgba(255, 255, 255, 0.9);
		transform: translate(0.2rem, 0.2rem);
		box-shadow: 0.3rem 0.3rem 0rem rgba(0, 0, 0, 0.5);
	}
</style>
