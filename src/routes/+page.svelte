<script lang="ts">
	import { goto } from "$app/navigation";
	import { onMount } from "svelte";
	import { makeid } from "$lib/helpers/seedHelper";

	let seed = makeid(8);

	onMount(() => {
		goto(`/game/${seed}`);
	});
	
</script>