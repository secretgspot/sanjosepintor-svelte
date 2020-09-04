<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--residential-details" class="content-wrapper">
  <div class="content-wrap">
    <div class="left-side">
      <h2 class="white">{$_("component.residential_details.title")}</h2>
      <p>{$_("component.residential_details.p")}</p>
    </div>

    <div class="right-side">
      <div class="add-item">
        <SvgIcon type="house_window" size="45" />
        <div class="meta">
          <span class="add-on">{$_("component.residential_details.detail.windows")}</span>
        </div>
      </div> <!-- END OF ITEM -->

      <div class="add-item">
        <SvgIcon type="house_trim" size="45" />
        <div class="meta">
          <span class="add-on">{$_("component.residential_details.detail.trims")}</span>
        </div>
      </div> <!-- END OF ITEM -->

      <div class="add-item">
        <SvgIcon type="house_door" size="45" />
        <div class="meta">
          <span class="add-on">{$_("component.residential_details.detail.doors")}</span>
        </div>
      </div> <!-- END OF ITEM -->

      <div class="add-item">
        <SvgIcon type="house_extra" size="45" />
        <div class="meta">
          <span class="add-on">{$_("component.residential_details.detail.extra")}</span>
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
@media screen and (min-width: 768px) {
  #section--residential-details .content-wrap {
    padding: 3rem;
  }
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
#section--residential-details .right-side .meta { display: none; }
#section--residential-details .right-side .meta .add-on {
	display: block;
	font-size: 13px;
	margin-bottom: 0;
}
</style>