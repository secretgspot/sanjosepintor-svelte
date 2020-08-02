<script>
	export let before;
	export let after;
	let divisor, handle, slider;

	function moveDivisor() {
		handle.style.left = slider + "%";
		divisor.style.width = slider + "%";
	}

	$: moveDivisor;
</script>


<section id="section--beforeafter" class="content-wrapper">
	<figure style="background-image:url({after})">
		<div id="handle" bind:this="{handle}"></div>
		<div id="divisor" bind:this="{divisor}" style="background-image:url({before})"></div>
	</figure>
	<input type="range" min="0" max="100" id="slider" bind:value="{slider}" on:touchstart="{moveDivisor}" on:mousedown="{moveDivisor}" aria-label="slider">
</section>


<style>
#section--beforeafter {
	height: 270px;
	position: relative;
	overflow: hidden
}

@media screen and (min-width: 768px) {
	#section--beforeafter {
		height:420px
	}
}

#section--beforeafter figure {
	position: absolute;
	background-size: cover;
	font-size: 0;
	width: 100%;
	height: 100%;
	margin: 0
}

#section--beforeafter #divisor {
	background-size: cover;
	position: absolute;
	width: 50%;
	-webkit-box-shadow: 0 5px 10px -2px rgba(0,0,0,.3);
	box-shadow: 0 5px 10px -2px rgba(0,0,0,.3);
	bottom: 0;
	height: 100%
}

#section--beforeafter #divisor:after,
#section--beforeafter #divisor:before {
	content: "";
	position: absolute;
	right: -2px;
	width: 4px;
	height: calc(50% - 25px);
	background: #fff;
	z-index: 3
}

#section--beforeafter #divisor:before {
	top: 0;
	-webkit-box-shadow: 0 -3px 8px 1px rgba(0,0,0,.3);
	box-shadow: 0 -3px 8px 1px rgba(0,0,0,.3)
}

#section--beforeafter #divisor:after {
	bottom: 0;
	-webkit-box-shadow: 0 3px 8px 1px rgba(0,0,0,.3);
	box-shadow: 0 3px 8px 1px rgba(0,0,0,.3)
}

#section--beforeafter #handle {
	position: absolute;
	height: 50px;
	width: 50px;
	top: 50%;
	left: 50%;
	-webkit-transform: translateY(-50%) translateX(-50%);
	transform: translateY(-50%) translateX(-50%);
	z-index: 1
}

#section--beforeafter #handle:after,
#section--beforeafter #handle:before {
	content: "";
	width: 0;
	height: 0;
	border: 6px inset transparent;
	position: absolute;
	top: 50%;
	margin-top: -6px
}

#section--beforeafter #handle:before {
	border-right: 6px solid #fff;
	left: 50%;
	margin-left: -17px
}

#section--beforeafter #handle:after {
	border-left: 6px solid #fff;
	right: 50%;
	margin-right: -17px
}

#section--beforeafter input[type=range] {
	-webkit-appearance: none;
	-moz-appearance: none;
	position: absolute;
	top: 0;
	bottom: 0;
	left: -25px;
	background-color: transparent;
	width: calc(100% + 50px);
	z-index: 2
}

#section--beforeafter input[type=range]:active,#section--beforeafter input[type=range]:focus {
	border: none;
	outline: none
}

#section--beforeafter input[type=range]::-webkit-slider-thumb {
	-webkit-appearance: none;
	border: none;
	height: 50px;
	width: 50px;
	border-radius: 50%;
	background: transparent;
	border: 4px solid #fff;
	-webkit-box-shadow: 0 0 8px 1px rgba(0,0,0,.3);
	box-shadow: 0 0 8px 1px rgba(0,0,0,.3)
}

#section--beforeafter input[type=range]::-moz-range-track {
	-moz-appearance: none;
	height: 15px;
	width: 100%;
	background-color: transparent;
	position: relative;
	outline: none
}
</style>