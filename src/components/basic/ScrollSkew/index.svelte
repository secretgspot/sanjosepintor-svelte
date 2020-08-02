<script>
	import { tweened } from 'svelte/motion';
	import { elasticOut } from 'svelte/easing';

	const skew = tweened(0, {
		duration: 2000,
		easing: elasticOut
	});

	let scrollY = 0
	let stoppedScrolling = true
	let detectScrollStop = setTimeout(() => false, 0)

	const handleScroll = () => {
		stoppedScrolling = false
		clearTimeout(detectScrollStop)
		if (window.scrollY > scrollY) {
			skew.set(20)
		}
		if (window.scrollY < scrollY) {
			skew.set(-20)
		}
		detectScrollStop = setTimeout(() => {
			stoppedScrolling = true
			skew.set(0)
		}, 60)
	}
</script>

<svelte:window on:scroll={handleScroll} bind:scrollY/>

<div style="transform: skew({$skew}deg); transform-origin: center center">
	<slot/>
</div>