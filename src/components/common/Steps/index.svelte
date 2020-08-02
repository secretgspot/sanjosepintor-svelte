<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--steps"  class="content-wrapper" layout="row" layout-xs="column" layout-wrap layout-align="center center">
  <!-- <h3 flex-xs="grow">{$_("component.steps.title")}</h3> -->
  <div class="steps" layout="row" layout-xs="column">
    <div class="step" layout="column" layout-xs="row">
      <!-- <img class="svg" src="/assets/images/pantone_2.svg" alt="free estimate"> -->
      <SvgIcon type="step_estimate" size="54" />
      <div class="text">
        <h3>{$_("component.steps.estimate.title")}</h3>
        <p>{$_("component.steps.estimate.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step" layout="column" layout-xs="row">
      <!-- <img class="svg" src="/assets/images/design-tool.svg" alt="prepare"> -->
      <SvgIcon type="step_prepare" size="54" />
      <div class="text">
        <h3>{$_("component.steps.preparation.title")}</h3>
        <p>{$_("component.steps.preparation.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step" layout="column" layout-xs="row">
      <!-- <img class="svg" src="/assets/images/paint-roller_6.svg" alt="do the job"> -->
      <SvgIcon type="step_job" size="54" />
      <div class="text">
        <h3>{$_("component.steps.job.title")}</h3>
        <p>{$_("component.steps.job.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step" layout="column" layout-xs="row">
      <!-- <img class="svg" src="/assets/images/broom.svg" alt="clean up"> -->
      <SvgIcon type="step_clean" size="54" />
      <div class="text">
        <h3>{$_("component.steps.cleanup.title")}</h3>
        <p>{$_("component.steps.cleanup.p")}</p>
      </div>
    </div> <!-- End of Step -->
  </div> <!-- End of Steps -->
</section>

<style>
#section--steps {
  user-select: none;
}

#section--steps .steps {
	display: grid;
	grid-template-rows: 1fr;
	grid-row-gap: 2rem;
}

#section--steps .step {
	display: grid;
	grid-template-columns: 1fr 2fr;
	grid-row-gap: 1rem;
}

#section--steps .step:last-child {}
#section--steps .step :global(svg) {
  /* width: 100%;
  height: fit-content; */
  justify-self: center;
}
#section--steps .step .text {
  text-align: left;
  cursor: default;
  padding-right: 2rem;
}
#section--steps .step .text h3 {}
#section--steps .step .text p {}
</style>