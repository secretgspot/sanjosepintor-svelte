<script>
  import { _ } from 'svelte-i18n';
</script>

<section id="section--featured" class="content-wrapper">
	<h4>{$_("component.featured_in.title")}</h4>
	<div class="logo-wrapper">
		<img src="assets/sponsors/sponsor_lanacion.png" alt="la nacion">
		<img src="assets/sponsors/sponsor_lateja.png" alt="la teja">
		<img src="assets/sponsors/sponsor_teletica.png" alt="teletica">
		<img src="assets/sponsors/sponsor_ticotimes.png" alt="tico times">
	</div>
</section>

<style>
#section--featured {
  display: flex;
  flex-direction: column;
  user-select: none;
}
#section--featured h4 {
  text-align: center;
  cursor: default;
  margin-top: 3em;
}
#section--featured .logo-wrapper {
  padding: 0 1em;
  margin-bottom: 3em;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
#section--featured .logo-wrapper img {
  padding: 1em;
  max-width: 160px;
}
</style>