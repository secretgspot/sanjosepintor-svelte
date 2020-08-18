<script>
  import { goto, stores } from '@sapper/app';
	import { _, locale, locales } from 'svelte-i18n';
	import { siteSettings } from '../../../store.js';
	import LangSwitcher from '../langswitch/index.svelte';
	import SvgLogo from '../../basic/SvgLogo/index.svelte';
	import Hamburger from '../../basic/Hamburger/index.svelte';
  let showMobileMenu = false;
  const { page } = stores();
</script>

<header id="siteheader" class="header" class:open="{showMobileMenu}">
	<div class="logo-wrapper" layout-align="start center">
		<SvgLogo size="81" on:click="{() => goto('/')}" />
		<div class="extra-meta" layout="column">
			<span class="pink phone">{$siteSettings.phone}</span>
      <span class="towns">{$siteSettings.cities}</span>
		</div>
	</div><!-- /logo-wrapper -->

  <Hamburger on:click="{() => showMobileMenu = !showMobileMenu}" isOpen="{showMobileMenu}"/>

	<nav class="main-nav" role="navigation">
    <a class="nav-item first after" class:selected="{$page.path === '/residential'}" href="residential">{$_('component.header.link.residential')}</a>
    <a class="nav-item second after" class:selected="{$page.path === '/commercial'}" href="commercial">{$_('component.header.link.commercial')}</a>
    <a class="nav-item mobile" class:selected="{$page.path === '/about'}" href="/about">{$_("component.header.link.about")}</a>
    <a class="nav-item mobile" class:selected="{$page.path === '/contact'}" href="/about#contact">{$_("component.header.link.contact")}</a>
    <a class="nav-item mobile" class:selected="{$page.path === '/booking'}" href="/booking">{$_("component.header.link.booking")}</a>
    <!-- <a class="nav-item mobile" href="{$siteSettings.googleurl}" target="_blank" rel="noreferrer">{$_("component.footer.connect.google")}</a> -->
    <!-- <a class="nav-item mobile" href="{$siteSettings.instagurl}" target="_blank" rel="noreferrer">{$_("component.footer.connect.instagram")}</a> -->
	</nav><!-- /main-nav -->

	<!-- <LangSwitcher class="language"/> -->
</header>

<style>
#siteheader {
	position: absolute;
	top: 0;	left: 0;	right: 0;
	padding: 1rem;
	user-select: none;
	display: grid;
}
#siteheader :global(.burger) {
  position: absolute;
	top: 2rem; right: 2rem;
}
#siteheader.open .main-nav {
  display: grid;
}
.logo-wrapper {
	display: grid;
	grid-template-columns: auto 1fr;
}
.extra-meta {
  display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	color: var(--color-blue);
	font-style: italic;
	cursor: default;
}
.extra-meta .phone {
	font-weight: bold;
	font-size: 1.6rem;
	color: var(--color-red);
	line-height: 1;
}
.main-nav {
	display: none;
	align-items: center;
	background: var(--bg-primary);
  box-shadow: 0px 3px 1px var(--shadow);
	margin-top: 1rem;
  border-radius: 1rem;
	z-index: 10;
}
.main-nav .nav-item {
	padding: 2rem 1rem;
  text-align: center;
}
.main-nav .nav-item:first-child {
  border-radius: 1rem 1rem 0 0;
}
.main-nav .nav-item:last-child {
  border-radius: 0 0 1rem 1rem;
}
.selected {
  background-color: var(--bg-inverted);
	color: var(--txt-inverted);
}
</style>