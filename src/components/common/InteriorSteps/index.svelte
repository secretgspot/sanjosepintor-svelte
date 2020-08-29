<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--interior-steps" class="content-wrapper" layout="row" layout-xs="column" layout-wrap>
  <div class="head-text" flex-xs="grow">
    <h2>{$_("component.interior_steps.title")}</h2>
    <p>{$_("component.interior_steps.p_1")}</p>
    <p>{$_("component.interior_steps.p_2")}</p>
    <p>{$_("component.interior_steps.p_3")}</p>
  </div>

  <div class="steps"
    layout="row" layout-xs="column"
    layout-align-xs="center center"
    layout-align-gt-xs="space-between start"
    layout-wrap>
    <div class="step" layout="row">
      <!-- <img hide-xs class="svg" src="/assets/images/pantone_2.svg" alt="set up"> -->
      <SvgIcon type="one" size="45" />
      <div class="text">
        <h3>{$_("component.interior_steps.setup.title")}</h3>
        <p>{$_("component.interior_steps.setup.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step" layout="row">
      <!-- <img hide-xs class="svg" src="/assets/images/design-tool.svg" alt="preparation"> -->
      <SvgIcon type="two" size="45" />
      <div class="text">
        <h3>{$_("component.interior_steps.preparation.title")}</h3>
        <p>{$_("component.interior_steps.preparation.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step" layout="row">
      <!-- <img hide-xs class="svg" src="/assets/images/paint-roller_6.svg" alt="paint application"> -->
      <SvgIcon type="three" size="45" />
      <div class="text">
        <h3>{$_("component.interior_steps.paint.title")}</h3>
        <p>{$_("component.interior_steps.paint.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step" layout="row">
      <!-- <img hide-xs class="svg" src="/assets/images/broom.svg" alt="clean up"> -->
      <SvgIcon type="four" size="45" />
      <div class="text">
        <h3>{$_("component.interior_steps.cleanup.title")}</h3>
        <p>{$_("component.interior_steps.cleanup.p")}</p>
      </div>
    </div> <!-- End of Step -->
  </div> <!-- End of Steps -->

  <div class="head-text" flex-xs="grow">
    <h2>{$_("component.interior_steps.wallpaper.title")}</h2>
    <p>{$_("component.interior_steps.wallpaper.p_1")}</p>

    <p>{$_("component.interior_steps.wallpaper.p_2")}</p>
  </div>
</section>

<style>
#section--interior-steps {
  padding-bottom: 3em;
  background-repeat: no-repeat;
  background-position: 50% 33%;
  background-size: contain;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
}
#section--interior-steps .head-text {
  margin: 2em;
  flex: 1 1 auto;
}

#section--interior-steps h2 {
  margin: 2em 0 auto;
}
#section--interior-steps .steps {
	display: grid;
	grid-template-rows: 1fr;
	row-gap: 2rem;
}
@media screen and (min-width: 768px) {
  #section--interior-steps .steps {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
}

#section--interior-steps .step {
	display: flex;
  padding: 1rem;
}
/* #section--interior-steps .step:last-child {} */
#section--interior-steps .step :global(svg) {
  justify-self: center;
  width: 100%;
}
#section--interior-steps .step .text { margin-right: 1rem; }
/* #section--interior-steps .step .text h3 {} */
/* #section--interior-steps .step .text p {} */
</style>