<script>
	import {onMount} from 'svelte';
	import {fly} from 'svelte/transition';
	export let words = [];
	export let interval = 2000;
	export let duration = interval / 2;
	export let delay = interval / 2;
	export let distance = 30;
	let current = 0;

	onMount(() => {
		setInterval(()=>{
			current = (current+1 === words.length) ? 0 : current+1;
		}, interval);
	});

</script>

	{#each words as word,i}
		{#if i === current}
		<h1 class="words" in:fly="{{ y: -distance, duration, delay }}" out:fly="{{ y: distance, duration, delay }}">...{word}</h1>
	  {/if}
	{/each}


<style>
	.words{margin:0; height:0}
</style>