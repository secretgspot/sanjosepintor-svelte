<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--moving" class="content-wrapper" layout="row" layout-xs="column">
  <div class="left-side" flex="auto" flex-gt-xs="50">
    <div class="text">
      <h2 class="white">{$_("component.moving.title")}</h2>
      <p>{$_("component.moving.p")}</p>
    </div>
  </div>
  <div class="right-side" flex="auto"></div>
</section>

<style>
#section--moving {
  user-select: none;
  display: grid;
	grid-template-rows: 1fr 1fr;
}

#section--moving .left-side {
	background-color: var(--bg-secondary);
	color: var(--txt-primary);
	display: flex;
	justify-content: center;
	align-items: center;
}

#section--moving .left-side .text {
  margin: 1em;
}

#section--moving .right-side {
  flex: 1 0 auto;
  min-height: 300px;
  background-image: url("/assets/backgrounds/moving.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
</style>