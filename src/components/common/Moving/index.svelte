<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--moving" class="content-wrapper">
  <div class="left-side">
    <div class="text">
      <h2 class="white">{$_("component.moving.title")}</h2>
      <p>{$_("component.moving.p")}</p>
    </div>
  </div>
  <div class="right-side"></div>
</section>

<style>
#section--moving {
  user-select: none;
  display: grid;
	grid-template-rows: 1fr 1fr;
}
@media screen and (min-width: 768px) {
  #section--moving {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
}
#section--moving .left-side {
	background-color: var(--bg-secondary);
	color: var(--txt-primary);
	display: flex;
	justify-content: center;
	align-items: center;
}
#section--moving .left-side .text {
  margin: 1rem 3em;
}
#section--moving .left-side .text h2 {
  font-weight: bold;
}
#section--moving .right-side {
  flex: 1 0 auto;
  min-height: 300px;
  background-image: url("/assets/backgrounds/moving.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(var(--brightness));
}
</style>