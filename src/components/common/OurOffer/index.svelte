<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--our-offer" class="content-wrapper">
  <div class="content-wrap">
    <h2 class="white">{$_("component.our_offer.title")}</h2>
    <div class="offer-list">
      <ul>
        <li>{$_("component.our_offer.offer_1")}</li>
        <li>{$_("component.our_offer.offer_2")}</li>
        <li>{$_("component.our_offer.offer_3")}</li>
        <li>{$_("component.our_offer.offer_4")}</li>
        <li>{$_("component.our_offer.offer_5")}</li>
        <li>{$_("component.our_offer.offer_6")}</li>
        <li>{$_("component.our_offer.offer_7")}</li>
        <li>{$_("component.our_offer.offer_8")}</li>
        <li>{$_("component.our_offer.offer_9")}</li>
        <li>{$_("component.our_offer.offer_10")}</li>
        <li>{$_("component.our_offer.offer_11")}</li>
        <li>{$_("component.our_offer.offer_12")}</li>
      </ul>
    </div>
  </div>
</section>

<style>
#section--our-offer {
	background: var(--bg-inverted);
	color: var(--txt-inverted);
}
#section--our-offer .content-wrap { margin: 3rem 2rem; }
#section--our-offer .offer-list { margin-bottom: 0; }
#section--our-offer .offer-list ul {
  padding-left: 0;
  list-style-type: "✓ ";
  list-style-position: inside;
}
@media screen and (min-width: 768px) {
  #section--our-offer .offer-list ul {
    column-count: 2;
    column-gap: 3rem;
  }
}
#section--our-offer .offer-list ul li::marker {
  color: var(--color-blue);
}
</style>