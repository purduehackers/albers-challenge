<script lang="ts">
	import {createEventDispatcher} from 'svelte';
	export let showModal: boolean;

	const dispatch = createEventDispatcher();

	let dialog: HTMLDialogElement;

	export function close() {
		dialog.close();
		dispatch('close');
	}

	$: if (dialog && showModal) dialog.showModal();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => {
	dialog.close();
	dispatch('close');
	}}
>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<!-- <button autofocus on:click={() => dialog.close()}>close modal</button> -->
		<slot name="header" />
		<slot />
		<!-- svelte-ignore a11y-autofocus -->
	</div>
</dialog>

<style>
	dialog {
		width: fit-content;
		margin: 7rem auto 0 auto;
		border-radius: 0.8em;
		border: none;
		padding: 0.7rem;
		background-color: transparent;
	}

	dialog:not([open]) {
		display: none;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
