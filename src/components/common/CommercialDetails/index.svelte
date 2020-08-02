<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--commercial-details" class="content-wrapper" layout="column">
  <div class="content-wrap">
    <h2 class="white">{$_("component.commercial_details.interior.title")}</h2>
    <div class="offer-list">
      <ul layout="row" layout-wrap class="styled"
        layout-align-xs="center center"
        layout-align-sm="space-between start"
        layout-align-gt-sm="end start">
        <li>{$_("component.commercial_details.interior.point_1")}</li>
        <li>{$_("component.commercial_details.interior.point_2")}</li>
        <li>{$_("component.commercial_details.interior.point_3")}</li>
        <li>{$_("component.commercial_details.interior.point_4")}</li>
        <li>{$_("component.commercial_details.interior.point_5")}</li>
        <li>{$_("component.commercial_details.interior.point_6")}</li>
        <li>{$_("component.commercial_details.interior.point_7")}</li>
        <li>{$_("component.commercial_details.interior.point_8")}</li>
        <li>{$_("component.commercial_details.interior.point_9")}</li>
        <li>{$_("component.commercial_details.interior.point_10")}</li>
        <li>{$_("component.commercial_details.interior.point_11")}</li>
      </ul>
    </div>

    <!-- DIV -->

    <h2 class="white">{$_("component.commercial_details.exterior.title")}</h2>
    <div class="offer-list">
      <ul layout="row" layout-wrap class="styled"
        layout-align-xs="center center"
        layout-align-sm="space-between start"
        layout-align-gt-sm="end start">
        <li>{$_("component.commercial_details.exterior.point_1")}</li>
        <li>{$_("component.commercial_details.exterior.point_2")}</li>
        <li>{$_("component.commercial_details.exterior.point_3")}</li>
        <li>{$_("component.commercial_details.exterior.point_4")}</li>
        <li>{$_("component.commercial_details.exterior.point_5")}</li>
        <li>{$_("component.commercial_details.exterior.point_6")}</li>
        <li>{$_("component.commercial_details.exterior.point_7")}</li>
        <li>{$_("component.commercial_details.exterior.point_8")}</li>
        <li>{$_("component.commercial_details.exterior.point_9")}</li>
        <li>{$_("component.commercial_details.exterior.point_10")}</li>
        <li>{$_("component.commercial_details.exterior.point_11")}</li>
        <li>{$_("component.commercial_details.exterior.point_12")}</li>
        <li>{$_("component.commercial_details.exterior.point_13")}</li>
      </ul>
    </div>

    <!--<md-button class="md-raised input-submit md-primary" flex-xs="grow" ui-sref="faq">Questions</md-button>  End of Action-Bar -->
  </div>
</section>

<style>
#section--commercial-details { display: grid; }
#section--commercial-details .content-wrap { margin: 3rem 2rem; }
#section--commercial-details h2 {}
#section--commercial-details .offer-list { margin-bottom: 3rem; }
#section--commercial-details .offer-list:last-child { margin-bottom: 0; }
#section--commercial-details .offer-list ul { padding-left: 2rem; }
</style>