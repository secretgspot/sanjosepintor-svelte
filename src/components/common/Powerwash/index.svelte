<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--powerwash" class="content-wrapper">
  <div class="left-side"></div>
  <div class="right-side">
    <div class="text">
      <h2>{$_("component.powerwash.title")}</h2>
      <p>{$_("component.powerwash.p")}</p>
    </div>
  </div>
</section>

<style>
#section--powerwash {
  user-select: none;
  display: grid;
	grid-template-rows: 1fr 1fr;
}
@media screen and (min-width: 768px) {
  #section--powerwash {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
}
#section--powerwash .left-side {
  flex: 1 0 auto;
  min-height: 300px;
  background-image: url("/assets/backgrounds/powerwash.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(var(--brightness));
}
#section--powerwash .right-side {
	background-color: var(--bg-secondary);
	color: var(--txt-primary);
	display: flex;
	justify-content: center;
	align-items: center;
}
#section--powerwash .right-side .text {
  margin: 1rem 3em;
}
#section--powerwash .right-side .text h2 {
  font-weight: bold;
}
</style>