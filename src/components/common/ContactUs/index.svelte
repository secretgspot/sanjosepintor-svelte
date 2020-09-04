<script>
  import { _ } from 'svelte-i18n';
  import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="contact" class="content-wrapper">
  <div class="left-side"></div>
  <div class="right-side">
    <div class="text">
      <h2>{$_("component.contact_us.sub_title")}</h2>
      <div class="contact-option phone">
        <SvgIcon type="phone" size="36" />
        <a href="tel:{$siteSettings.phone}" title="Phone">{ $siteSettings.phone }</a>
      </div>
      <div class="contact-option email">
        <SvgIcon type="email" size="36" />
        <a href="mailto:{$siteSettings.email}" title="email">{ $siteSettings.email }</a>
      </div>
      <p>{$_("component.contact_us.p")}</p>
    </div>
  </div>
</section>

<style>
#contact {
  user-select: none;
  display: grid;
	grid-template-rows: 1fr 1fr;
}
@media screen and (min-width: 768px) {
  #contact {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
}

#contact .left-side {
  flex: 1 0 auto;
  min-height: 300px;
  background-image: url("/assets/backgrounds/contacts.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

#contact .right-side {
  background: var(--bg-inverted);
	color: var(--txt-inverted);
	display: flex;
	justify-content: center;
	align-items: center;
}

#contact .right-side .text {
  margin: 2rem 3em;
}

#contact .contact-option :global(svg) {
  vertical-align: middle;
	margin: 1em;
}
#contact a {
  font-size: 111%;
	text-decoration-color: var(--link);
}
#contact a:hover {
  color: var(--link_hover);
  filter: brightness(3);
}
</style>