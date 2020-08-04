<script>
  import { _ } from 'svelte-i18n';
  import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="contact" class="content-wrapper">
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
#contact {
  display: grid;
  background: var(--bg-inverted);
	color: var(--txt-inverted);
}
#contact .contact-info {
  display: grid;
	margin: 3em 2em;
}

#contact .contact-option {}
#contact .contact-option :global(svg) {
  vertical-align: middle;
	margin: 1rem;
}
#contact a {
  font-size: 111%;
	text-decoration-color: var(--link);
}
#contact a:hover {
  color: var(--link_hover);
}
#contact h2, #contact h3 {}
#contact .grouped {
  margin-top: 1em;
}
#contact .grouped p {
  margin-top: 0;
}
</style>