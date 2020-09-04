<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--exterior-steps" class="content-wrapper">
  <div class="head-text">
    <h2>{$_("component.exterior_steps.title")}</h2>
    <p>{$_("component.exterior_steps.p_1")}</p>
    <p>{$_("component.exterior_steps.p_2")}</p>
    <p>{$_("component.exterior_steps.p_3")}</p>
    <p>{$_("component.exterior_steps.p_4")}</p>
    <p>{$_("component.exterior_steps.p_5")}</p>
    <p>{$_("component.exterior_steps.p_6")}</p>
  </div>

  <div class="steps">
    <div class="step">
      <SvgIcon type="number" number="1" size="45" />
      <div class="text">
        <h3>{$_("component.exterior_steps.wash.title")}</h3>
        <p>{$_("component.exterior_steps.wash.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step">
      <SvgIcon type="number" number="2" size="45" />
      <div class="text">
        <h3>{$_("component.exterior_steps.preparation.title")}</h3>
        <p>{$_("component.exterior_steps.preparation.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step">
      <SvgIcon type="number" number="3" size="45" />
      <div class="text">
        <h3>{$_("component.exterior_steps.paint.title")}</h3>
        <p>{$_("component.exterior_steps.paint.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step">
      <SvgIcon type="number" number="4" size="45" />
      <div class="text">
        <h3>{$_("component.exterior_steps.cleanup.title")}</h3>
        <p>{$_("component.exterior_steps.cleanup.p")}</p>
      </div>
    </div> <!-- End of Step -->

    <div class="step">
      <SvgIcon type="number" number="5" size="45" />
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
  display: grid;
	padding: 1rem;
	grid-template-columns: 1fr 2fr;
}
#section--exterior-steps .step :global(svg) {
  justify-self: center;
}
#section--exterior-steps .step .text { margin-right: 1rem; }
</style>