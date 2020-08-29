<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--exterior-steps" class="content-wrapper" layout="row" layout-xs="column" layout-wrap>
  <div class="head-text" flex-xs="grow">
    <h2>{$_("component.exterior_steps.title")}</h2>
    <p>{$_("component.exterior_steps.p_1")}</p>
    <p>{$_("component.exterior_steps.p_2")}</p>
    <p>{$_("component.exterior_steps.p_3")}</p>
    <p>{$_("component.exterior_steps.p_4")}</p>
    <p>{$_("component.exterior_steps.p_5")}</p>
    <p>{$_("component.exterior_steps.p_6")}</p>
  </div>

  <div class="steps"
    layout="row" layout-xs="column"
    layout-align-xs="center center"
    layout-align-gt-xs="space-between start"
    layout-wrap>
    <div class="step" layout="row">
      <!-- <img hide-xs class="svg" src="/assets/images/surface-wash.svg" alt="surface wash"> -->
      <SvgIcon type="one" size="45" />
      <div class="text">
        <h3>{$_("component.exterior_steps.wash.title")}</h3>
        <p>{$_("component.exterior_steps.wash.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step" layout="row">
      <!-- <img hide-xs class="svg" src="/assets/images/design-tool.svg" alt="surface preparation"> -->
      <SvgIcon type="two" size="45" />
      <div class="text">
        <h3>{$_("component.exterior_steps.preparation.title")}</h3>
        <p>{$_("component.exterior_steps.preparation.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step" layout="row">
      <!-- <img hide-xs class="svg" src="/assets/images/paint-roller_6.svg" alt="paint application"> -->
      <SvgIcon type="three" size="45" />
      <div class="text">
        <h3>{$_("component.exterior_steps.paint.title")}</h3>
        <p>{$_("component.exterior_steps.paint.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step" layout="row">
      <!-- <img hide-xs class="svg" src="/assets/images/broom.svg" alt="clean up"> -->
      <SvgIcon type="four" size="45" />
      <div class="text">
        <h3>{$_("component.exterior_steps.cleanup.title")}</h3>
        <p>{$_("component.exterior_steps.cleanup.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step" layout="row">
      <!-- <img hide-xs class="svg" src="/assets/images/eye.svg" alt="inspection"> -->
      <SvgIcon type="five" size="45" />
      <div class="text">
        <h3>{$_("component.exterior_steps.inspection.title")}</h3>
        <p>{$_("component.exterior_steps.inspection.p")}</p>
      </div>
    </div> <!-- End of Step -->
  </div> <!-- End of Steps -->
</section>

<style>
#section--exterior-steps {
  padding-bottom: 3em;
  background-repeat: no-repeat;
  background-position: 50% 33%;
  background-size: contain;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: left;
}
#section--exterior-steps .head-text {
  margin: 2em;
  flex: 1 1 auto;
}

#section--exterior-steps h2 {
  margin: 2em 0 auto;
}
#section--exterior-steps .steps {
	display: grid;
	grid-template-rows: 1fr;
	row-gap: 2rem;
}
@media screen and (min-width: 768px) {
  #section--exterior-steps .steps {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1rem;
  }
}

#section--exterior-steps .step {
	display: flex;
  padding: 1rem;
}
/* #section--exterior-steps .step:last-child {} */
#section--exterior-steps .step :global(svg) {
  justify-self: center;
  width: 100%;
}
#section--exterior-steps .step .text { margin-right: 1rem; }
/* #section--exterior-steps .step .text h3 {} */
/* #section--exterior-steps .step .text p {} */
</style>