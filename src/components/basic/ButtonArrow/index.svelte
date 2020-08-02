<script>
	// svelte-ignore
	export let duration = 1600;
	export let direction = 'right';

	let arrow;
	let isAnimate = false;

	const innerStyle = () => {
		return `--duration: ${duration}ms;`;
	}

	function handleClick() {
		console.log('arrow', arrow);
    if(!isAnimate) {
				isAnimate = true;
        setTimeout(() => {
						isAnimate = false;
        }, duration);
    }
	}
</script>

<style>
	.arrow {
		--active: #fff;
		--border: rgba(255, 255, 255, .12);
		display: block;
		position: relative;
		width: 44px;
		height: 44px;
	}
	.arrow.left {
		transform: scaleX(-1);
	}
	.arrow.up {
		transform: rotate(-90deg);
	}
	.arrow.down {
		transform: rotate(90deg);
	}
	.arrow i {
		display: block;
		position: absolute;
		margin: -10px 0 0 -10px;
		width: 20px;
		height: 20px;
		left: 50%;
		top: 50%;
	}
	.arrow i:before, .arrow i:after {
		content: '';
		width: 10px;
		height: 2px;
		border-radius: 1px;
		position: absolute;
		left: 50%;
		top: 50%;
		background: var(--active);
		margin: -1px 0 0 -5px;
		display: block;
		transform-origin: 9px 50%;
	}
	.arrow i:before {
		transform: rotate(-40deg);
	}
	.arrow i:after {
		transform: rotate(40deg);
	}
	.arrow:before, .arrow:after {
		content: '';
		display: block;
		position: absolute;
		left: 1px;
		right: 1px;
		top: 1px;
		bottom: 1px;
		border-radius: 50%;
		border: 2px solid var(--border);
	}
	.arrow svg {
		width: 44px;
		height: 44px;
		display: block;
		position: relative;
		z-index: 1;
		color: var(--active);
		stroke-width: 2px;
		stroke-dashoffset: 126;
		stroke-dasharray: 126 126 0;
		transform: rotate(0deg);
	}
	.arrow.animate svg {
		animation: stroke calc(var(--duration) / 1.5) ease forwards calc(var(--duration) / 3);
	}
	.arrow.animate i {
		animation: arrow var(--duration)  ease forwards;
	}
	.arrow.animate i:before {
		animation: arrowUp var(--duration)  ease forwards;
	}
	.arrow.animate i:after {
		animation: arrowDown var(--duration)  ease forwards;
	}
	@keyframes stroke {
		52% {
			transform: rotate(-180deg);
			stroke-dashoffset: 0;
		}
		52.1% {
			transform: rotate(-360deg);
			stroke-dashoffset: 0;
		}
		100% {
			transform: rotate(-180deg);
			stroke-dashoffset: 126;
		}
	}
	@keyframes arrow {
		0%,
			100% {
			transform: translateX(0);
			opacity: 1;
		}
		23% {
			transform: translateX(17px);
			opacity: 1;
		}
		24%,
			80% {
			transform: translateX(-22px);
			opacity: 0;
		}
		81% {
			opacity: 1;
			transform: translateX(-22px);
		}
	}
	@keyframes arrowUp {
		0%,
			100% {
			transform: rotate(-40deg) scaleX(1);
		}
		20%,
			80% {
			transform: rotate(0deg) scaleX(0.1);
		}
	}
	@keyframes arrowDown {
		0%,
			100% {
			transform: rotate(40deg) scaleX(1);
		}
		20%,
			80% {
			transform: rotate(0deg) scaleX(0.1);
		}
	}
</style>

<!-- svelte-ignore a11y-invalid-attribute -->
<a href=""
	 bind:this="{arrow}"
	 style="{innerStyle()}"
	 class="arrow {direction}"
	 class:animate="{isAnimate}"
	 on:click="{handleClick}">
	<i></i>
	<svg>
		<use xlink:href="#circle"/>
	</svg>
</a>

<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" width="44px" height="44px" id="circle" fill="none" stroke="currentColor">
        <circle r="20" cy="22" cx="22" id="test"/>
    </symbol>
</svg>