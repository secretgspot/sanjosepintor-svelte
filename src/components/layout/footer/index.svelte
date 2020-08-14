<script>
  import { goto, stores } from '@sapper/app';
  import { _, locale, locales } from 'svelte-i18n';
  import { siteSettings } from '../../../store.js';
  import LangSwitcher from '../langswitch/index.svelte';
  import SvgLogo from '../../basic/SvgLogo/index.svelte';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
  import Toucan from '../../basic/Toucan/index.svelte';
  const { page } = stores();
</script>

<footer id="sitefooter" class="content-wrapper grid-container">

	<div class="top-bar">
    <SvgLogo footer="{true}" on:click="{() => goto('/')}" />
		<!-- <a href="/" :alt="company" tag="img" src="/assets/images/footer-logo.svg" class="svg logo"/> -->

		<Toucan scale="0.3"></Toucan>

		<div class="icons">
      <SvgIcon type="pantone" size="27" />
      <SvgIcon type="scraper" size="27" />
      <SvgIcon type="water_bucket" size="27" />
      <SvgIcon type="paint_roller" size="27" />
      <!-- <SvgIcon type="paint_bucket" size="27" /> -->
		</div>
	</div><!-- End of Top Bar -->

	<div class="mid-bar">
		<div class="details">
			<h5>{$_("component.footer.moto")}</h5>
			<div class="extra-meta">
				<span class="pink phone">{$siteSettings.phone}</span>
				<span class="towns">{$siteSettings.cities}</span>
			</div>
		</div><!-- END OF DETAILS -->

		<div class="links">
			<div class="company column">
				<div class="col-title">{$_("component.footer.company.title")}</div>
				<ul>
					<li><a class:selected="{$page.path === '/about'}" href="about" class="first after">{$_("component.footer.company.about")}</a></li>
					<li><a class:selected="{$page.path === '/contact'}" href="about#contact" class="first after">{$_("component.footer.company.contact")}</a></li>
					<!-- <li><a href="/faq">{$_("component.footer.company.faq")}</a></li> -->
				</ul>
			</div><!-- END OF COMPANY -->

			<div class="services column">
				<div class="col-title">{$_("component.footer.services.title")}</div>
				<ul>
					<li><a class:selected="{$page.path === '/residential'}" href="residential" class="third after">{$_("component.footer.services.residential")}</a></li>
					<li><a class:selected="{$page.path === '/commercial'}" href="commercial" class="third after">{$_("component.footer.services.commercial")}</a></li>
					<!-- <li><a href="/powerwash" class="third after">{$_("component.footer.services.powerwash")}</a></li> -->
				</ul>
			</div><!-- END OF SERVICES -->

			<div class="connect column">
				<div class="col-title">{$_("component.footer.connect.title")}</div>
				<ul>
					<li><a href="{$siteSettings.googleurl}" class="second after" target="_blank" rel="noreferrer external">{$_("component.footer.connect.google")}</a></li>
					<li><a href="{$siteSettings.instagurl}" class="second after" target="_blank" rel="noreferrer external">{$_("component.footer.connect.instagram")}</a></li>
				</ul>
			</div><!-- END OF CONNECT -->
		</div><!-- END OF LINKS -->
	</div><!-- END OF MID-BAR -->

	<div class="bottom-bar">
		<div class="copyright">
			<span>{$_("component.footer.copyleft.mark")} {$siteSettings.company}</span>
			<a class:selected="{$page.path === '/terms'}" href="terms">{$_("component.footer.terms")}</a> | <a class:selected="{$page.path === '/privacy'}" href="privacy">{$_("component.footer.privacy")}</a>
		</div>

		<LangSwitcher />
	</div><!-- END OF BOTTOM-BAR -->
</footer>

<style>
#sitefooter {
  user-select: none;
  margin-top: 2rem;
  display: grid;
}
#sitefooter .top-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--bg-tertiary);
  padding: 0 1rem 1rem;
}
#sitefooter .mid-bar {
  display: flex;
  flex-direction: column;
  padding: 0 1rem 1rem;
}

#sitefooter .bottom-bar {
  border-top: 1px solid var(--bg-tertiary);
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
}
#sitefooter :global(.logo) {
  height: 45px;
  cursor: pointer;
}
#sitefooter :global(#toucan) { display: none; }
@media screen and (min-width: 768px) {
  #sitefooter :global(#toucan) { display: block; }
}
#sitefooter .icons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
}
#sitefooter .icons :global(svg) { margin: 0 0.2rem; }
#sitefooter .icons :global(svg:first-child) { margin-left: 0; }
#sitefooter .icons :global(svg:last-child) { margin-right: 0; }

#sitefooter .details {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2em 0 1rem;
}
@media screen and (min-width: 768px) {
  #sitefooter .details {
    flex: 1 1 auto;
    border-right: 1px solid var(--bg-tertiary);
  }
}
#sitefooter .details h5 {
  color: var(--txt-tertiary);
}
#sitefooter .details .extra-meta {
  font-family: Raleway, serif;
	font-style: italic;
}
#sitefooter .details .extra-meta .phone {
  font-weight: 600;
  font-size: 18px;
}
#sitefooter .details .extra-meta .pink {
  color: var(--color-red);
}
#sitefooter .details .extra-meta .towns:before {
  content: "|";
  position: relative;
  padding: 0 9px 0 6px;
}
#sitefooter .links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}
@media screen and (min-width: 768px) {
  #sitefooter .links {
    flex: 1 1 auto;
  }
}
#sitefooter .links ul {
  margin: 0.5em 0;
  padding: 0;
}
#sitefooter .links ul > li {
  margin: 0;
  list-style: none;
  font-size: 15px;
  line-height: 1.65;
  padding: 0;
}
#sitefooter .links .column {
  margin-top: 1em;
  text-align: left;
}
#sitefooter .links .column a {
  font-size: 13px;
  text-decoration: none;
  color: var(--link);
}
#sitefooter .links .column a:hover {
  color: var(--link_hover);
}
#sitefooter .links .col-title {
  font-weight: 700;
  cursor: default;
  margin-bottom: 0.5em;
}
#sitefooter .copyright {
  font-size: 12px;
  color: var(--txt-tertiary);
  text-align: left;
  flex: 1 1 auto;
}
#sitefooter .copyright span {
  display: block;
}
#sitefooter .copyright a {
  text-decoration: none;
  color: var(--link);
}
#sitefooter .copyright a:hover {
  color: var(--link_hover);
}
.selected {
  position: relative;
  display: inline-block;
}
.selected::after {
  position: absolute;
  content: '';
  /* width: calc(100% - 1em); */
  width: calc(100%);
  height: 2px;
  background-color: var(--color-red);
  display: block;
  bottom: -1px;
}
</style>