<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--steps" class="content-wrapper">
  <!-- <h3>{$_("component.steps.title")}</h3> -->
  <div class="steps">
    <div class="step">
      <SvgIcon type="step_estimate" size="54" />
      <div class="text">
        <h3>{$_("component.steps.estimate.title")}</h3>
        <p>{$_("component.steps.estimate.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step">
      <SvgIcon type="step_prepare" size="54" />
      <div class="text">
        <h3>{$_("component.steps.preparation.title")}</h3>
        <p>{$_("component.steps.preparation.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step">
      <SvgIcon type="step_job" size="54" />
      <div class="text">
        <h3>{$_("component.steps.job.title")}</h3>
        <p>{$_("component.steps.job.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step">
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
  padding: 3rem 0;
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

#section--steps .step :global(svg) {
  justify-self: center;
}
#section--steps .step .text {
  text-align: left;
  cursor: default;
  padding-right: 2rem;
}
#section--steps .step .text h3 {
  font-size: 150%;
}
</style>