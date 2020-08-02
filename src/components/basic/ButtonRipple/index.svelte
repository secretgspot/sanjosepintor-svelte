<script>
	import { onMount } from 'svelte';
	export let color = '';
	export let mode = '';
	let button;
	let circle;

	onMount(() => {
		button.onclick = function() {
			var rect = event.target.getBoundingClientRect();
			var x = event.clientX - rect.left;
			var y = event.clientY - rect.top;
			var isCircle = circle !=null;

			// console.log(rect, x, y, circle, isCircle, this);

			if (isCircle != false){
				circle.remove();
			}

			this.append(circle);

			circle.style.left = x+'px';
			circle.style.top = y+'px';
			circle.addEventListener("animationend", animationEnd);
		}
	});

	function animationEnd(event) {
		this.remove();
	}
</script>

<style>
button {
  display: block;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;
  width: 100%;
  border: none;
  padding: 20px 50px;
  background: #3ef5bc;
  color: white;
  font-family: sans-serif;
  font-weight: 100;
  font-size: 20px;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  transition: all ease 250ms;
}
button:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
button.blue {
  background: #559cf9;
}
button.disabled {
  background: transparent;
  border: 1px solid #d2d2d2;
  color: #d2d2d2;
  box-shadow: none;
  opacity: 0.8;
  pointer-events: none;
}
button #circle {
  position: absolute;
  width: 50%;
}
button #circle:before {
  display: block;
  animation-duration: 300ms;
  animation-timing-function: cubic-bezier(0.1, -0.6, 0.2, 0);
  animation-name: clicked;
  content: "";
  transition: all ease 250ms;
  background: black;
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  border-radius: 50%;
  opacity: 0;
}

@keyframes clicked {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  50% {
    opacity: 0.1;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.8);
    opacity: 0;
  }
}
</style>

<button bind:this="{button}" class="ripple {color} {mode}" type="button" on:click>
	<span id="circle" bind:this="{circle}" />
	<slot>Click me</slot>
</button>