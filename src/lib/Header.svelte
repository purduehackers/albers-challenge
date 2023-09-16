<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import Modal from './helpers/Modal.svelte';
	let showModal: boolean = false;

	let customSeed: string;

	//on click outside of modal or press enter
	function newSeedReload() {
		goto(`/game/${customSeed}`);
	}

	let modal: Modal;
	function detectEnterPress(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			console.log('enter pressed');
			e.preventDefault();
			newSeedReload();
			modal.close();
		}
	}
</script>

<main>
	<p>Color Game</p>
	<button class={showModal ? 'held' : ''} on:click={() => (showModal = true)}> Seed </button>
	<Modal bind:this={modal} bind:showModal on:close={newSeedReload}>
		<input type="text" bind:value={customSeed} on:keypress={detectEnterPress} />
	</Modal>
</main>

<style>
	main {
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 6rem;
		padding: 0.5rem 1rem;
		background-color: rgba(255, 255, 255, 0.5);
		place-items: center;
	}
	main > p {
		text-shadow: 0.1rem 0.1rem 0rem rgba(0, 0, 0, 0.5);
		font-weight: 900;
		font-size: 3rem;
	}

	input[type='text'] {
		border-radius: 1rem;
		width: 100%;
		max-width: 20rem;
		height: 100%;
		font-size: 2rem;
		text-align: center;
		border: none;
		box-shadow: 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.5);
		transition-duration: 0.1s;
	}

	input[type='text']:focus {
		transform: translate(-0.2rem, -0.2rem);
		box-shadow: 0.7rem 0.7rem 0rem rgba(0, 0, 0, 0.5);
		outline: none;
	}

	button {
		width: 8rem;
		height: 3rem;
		border-radius: 1rem;
		border: 0.2rem solid black;
		background-color: rgba(255, 255, 255, 0.5);
		font-size: 2rem;
		box-shadow: 0.5rem 0.5rem 0rem rgba(0, 0, 0, 0.5);
		transition-duration: 0.1s;
	}
	button:hover {
		background-color: rgba(255, 255, 255, 0.8);
		transform: translate(-0.1rem, -0.1rem);
		box-shadow: 0.6rem 0.6rem 0rem rgba(0, 0, 0, 0.5);
	}

	button:active,
	.held {
		background-color: rgba(255, 255, 255, 0.9);
		transform: translate(0.2rem, 0.2rem);
		box-shadow: 0.3rem 0.3rem 0rem rgba(0, 0, 0, 0.5);
	}

	/*media query for if screen is less than 600px wide*/
	@media (max-width: 900px) {
		main > p {
			font-size: 2rem;
		}
	}

	/* @media (max-width: 450px) {
		label {
			flex-flow: column wrap;
			font-size: 1.5rem;
		}

		input[type='text'] {
			border-radius: 1rem;
			width: 6rem;
			height: 80%;
			font-size: 1rem;
			box-shadow: 0.3rem 0.3rem 0rem rgba(0, 0, 0, 0.5);
		}
	} */
</style>
