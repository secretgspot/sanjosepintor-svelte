<script>
	export let isOpen = false;
</script>

<label class="menu">
    <input type="checkbox" bind:checked="{isOpen}" aria-label="Main Menu" on:click>
    <div>
        <span></span>
        <span></span>
    </div>
</label>

<style>
.menu {
  --front: var(--color-blue);
  --back: var(--color-danger);
  --icon: var(--color-white);
  -webkit-perspective: 600px;
          perspective: 600px;
  width: 48px;
  height: 48px;
  position: relative;
  cursor: pointer;
}
.menu input {
  display: none;
}
.menu input + div span {
  --rotateY: 0deg;
  --background: var(--front);
  -webkit-transform: rotateY(var(--rotateY));
          transform: rotateY(var(--rotateY));
  -webkit-transform-style: preserve-3d;
          transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: var(--background);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.2, 0.64, 0.48, 1.24);
  transition: -webkit-transform 0.6s cubic-bezier(0.2, 0.64, 0.48, 1.24);
  transition: transform 0.6s cubic-bezier(0.2, 0.64, 0.48, 1.24);
  transition: transform 0.6s cubic-bezier(0.2, 0.64, 0.48, 1.24), -webkit-transform 0.6s cubic-bezier(0.2, 0.64, 0.48, 1.24);
}
.menu input + div span:before, .menu input + div span:after {
  --rotate: 0deg;
  content: "";
  position: absolute;
  width: 16px;
  height: 2px;
  border-radius: 1px;
  top: 50%;
  left: 50%;
  background: var(--icon);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  -webkit-transform: translate(-50%, -50%) rotate(var(--rotate)) translateZ(6px);
          transform: translate(-50%, -50%) rotate(var(--rotate)) translateZ(6px);
}
.menu input + div span:first-child {
  --background: var(--back);
}
.menu input + div span:first-child:before {
  --rotate: -45deg;
}
.menu input + div span:first-child:after {
  --rotate: 45deg;
}
.menu input + div span:last-child {
  --rotateY: 180deg;
}
.menu input + div span:last-child:before {
  box-shadow: 0 -5px 0 var(--icon), 0 5px 0 var(--icon);
}
.menu input + div span:last-child:after {
  display: none;
}
.menu input:checked + div span:first-child {
  --rotateY: -180deg;
}
.menu input:checked + div span:last-child {
  --rotateY: 0deg;
}
</style>