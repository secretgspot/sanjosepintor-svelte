<script>
  import { _ } from 'svelte-i18n';
  import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--contact-us" class="content-wrapper">
  <div class="contact-info" layout="column" layout-align="center start">
    <!-- <h2>{$_("component.contact_us.title")}</h2> -->
    <h3>{$_("component.contact_us.sub_title")}</h3>
    <span class="contact-option phone">
      <!-- <img src="@/assets/images/telephone.svg" alt="phone-icon"> -->
      <SvgIcon type="phone" size="36" />
      <a href="tel:{$siteSettings.phone}" title="Phone">{ $siteSettings.phone }</a>
    </span>
    <span class="contact-option email">
      <!-- <img src="@/assets/images/email.svg" alt="email-icon"> -->
      <SvgIcon type="email" size="36" />
      <a href="mailto:{$siteSettings.email}" title="email">{ $siteSettings.email }</a>
    </span>

    <div class="grouped">
      <!-- <h3>{$_("component.contact_us.sub_title")}</h3> -->
      <p>{$_("component.contact_us.p")}</p>
    </div>
  </div>
</section>

<style>
#section--contact-us {
  display: grid;
  background: var(--bg-inverted);
	color: var(--txt-inverted);
}
#section--contact-us .contact-info {
  display: grid;
	margin: 3em 2em;
}

#section--contact-us .contact-option {}
#section--contact-us .contact-option :global(svg) {
  vertical-align: middle;
	margin: 1rem;
}
#section--contact-us a {
  font-size: 111%;
	text-decoration-color: var(--link);
}
#section--contact-us a:hover {
  color: var(--link_hover);
}
#section--contact-us h2, #section--contact-us h3 {}
#section--contact-us .grouped {
  margin-top: 1em;
}
#section--contact-us .grouped p {
  margin-top: 0;
}
</style>