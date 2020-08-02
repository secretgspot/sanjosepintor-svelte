<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--residential-details" class="content-wrapper" layout="column">
  <div class="content-wrap"
      layout="column" layout-md="row"
      layout-align-xs="center center"
      layout-align-sm="center start"
      layout-align-md="center end">

    <div class="left-side" layout="column" layout-align="center start" flex="auto">
      <h2 class="white">{$_("component.residential_details.title")}</h2>
      <p>{$_("component.residential_details.p")}</p>
    </div>

    <div class="right-side" layout="row" layout-align="space-between start" layout-wrap>
      <div class="add-item">
        <!-- <img class="svg" src="/assets/images/window.svg" alt="window"> -->
        <SvgIcon type="house_window" size="45" />
        <div class="meta" hide-xs>
          <span class="add-on">{$_("component.residential_details.detail.windows")}</span>
          <!-- <span class="price">$60</span> -->
        </div>
      </div> <!-- END OF ITEM -->

      <div class="add-item">
        <!-- <img class="svg" src="/assets/images/trim.svg" alt="trim"> -->
        <SvgIcon type="house_trim" size="45" />
        <div class="meta" hide-xs>
          <span class="add-on">{$_("component.residential_details.detail.trims")}</span>
          <!-- <span class="price">$60</span> -->
        </div>
      </div> <!-- END OF ITEM -->

      <div class="add-item">
        <!-- <img class="svg" src="/assets/images/door.svg" alt="door"> -->
        <SvgIcon type="house_door" size="45" />
        <div class="meta" hide-xs>
          <span class="add-on">{$_("component.residential_details.detail.doors")}</span>
          <!-- <span class="price">$60</span> -->
        </div>
      </div> <!-- END OF ITEM -->

      <div class="add-item">
        <!-- <img class="svg" src="/assets/images/time.svg" alt="time"> -->
        <SvgIcon type="house_extra" size="45" />
        <div class="meta" hide-xs>
          <span class="add-on">{$_("component.residential_details.detail.extra")}</span>
          <!-- <span class="price">++</span> -->
        </div>
      </div> <!-- END OF ITEM -->
    </div>
  </div>
</section>

<style>
#section--residential-details {
	background: var(--bg-inverted);
	color: var(--txt-inverted);
	display: grid;
}

#section--residential-details,#section--residential-details .content-wrap {
	flex-direction: column;
}

#section--residential-details .content-wrap {
	margin: 3em 0;
	align-items: center;
}

#section--residential-details .left-side,#section--residential-details .right-side {
	margin: 0 2em;
}

#section--residential-details .left-side {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	flex: 1 0 auto;
}

#section--residential-details .left-side h2 {
	margin-bottom: 0;
}

#section--residential-details .left-side p {}

#section--residential-details .right-side {
	justify-content: space-between;
	align-items: flex-start;
}

#section--residential-details .right-side,
#section--residential-details .right-side .add-item {
	display: flex;
	flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
}

#section--residential-details .right-side .add-item {
	color: var(--color-blue);
}

#section--residential-details .right-side .add-item :global(svg) {}

#section--residential-details .right-side .meta { display: none; }

#section--residential-details .right-side .meta .add-on {
	display: block;
	font-size: 13px;
	margin-bottom: 0;
}
</style>