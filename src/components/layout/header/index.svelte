<script>
  import { goto, stores } from '@sapper/app';
	import { _, locale, locales } from 'svelte-i18n';
	import { siteSettings } from '../../../store.js';
	import LangSwitcher from '../langswitch/index.svelte';
	import SvgLogo from '../../basic/SvgLogo/index.svelte';
	import SvgIcon from '../../basic/SvgIcon/index.svelte';
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

  <SvgIcon type="{!showMobileMenu ? 'menu_open' : 'menu_close'}" size="27" on:click="{() => showMobileMenu = !showMobileMenu}" />

	<nav class="main-nav" role="navigation">
		<!-- <img src="@/assets/images/burger.svg" class="burger mobile burger_open" on:click="{() => showMobileMenu = !showMobileMenu}" alt="open mobile menu" />
		<img src="@/assets/images/burger_close.svg" class="burger mobile burger_close" on:click="{() => showMobileMenu = !showMobileMenu}" alt="open mobile menu" /> -->

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
/* #siteheader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 1em;
  user-select: none;
  display: grid;
	grid-template-columns: 1fr auto;
}
@media screen and (min-width: 768px) {
  #siteheader .mobile {
    display: none !important;
  }
}
#siteheader img.burger_close {
  display: none;
}
#siteheader.open {
  bottom: 0;
  background: white;
  z-index: 9;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  position: fixed;
}
#siteheader.open nav.main-nav ul {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 100%;
  width: 100%;
}
#siteheader.open nav.main-nav li {
  margin: 0;
  align-self: stretch;
}
#siteheader.open img.burger_open {
  display: none;
}
#siteheader.open img.burger_close {
  display: block;
}
#siteheader nav.main-nav {
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
#siteheader nav.main-nav img.burger {
  width: 36px;
  position: absolute;
  top: 1em;
  right: 1em;
}
#siteheader nav.main-nav ul {
  display: none;
  margin: 0;
  padding: 0 1em;
  background: rgba(240, 248, 255, 0.33);
  border-radius: 3px;
}
@media screen and (min-width: 768px) {
  #siteheader nav.main-nav ul {
    display: flex;
  }
}
#siteheader nav.main-nav ul li {
  display: inline-block;
  margin-bottom: 0;
}
#siteheader nav.main-nav li:first-child {
  margin-left: 0;
}
#siteheader nav.main-nav .nav-item {
  margin-left: 1.45em;
}
#siteheader nav.main-nav a {
  line-height: 39px;
  font-size: 18px;
  text-decoration: none;
  color: #16374b;
  display: block;
}
#siteheader nav.main-nav a:hover {
  color: #1565c0;
}
 */
.selected {
	position: relative;
	display: inline-block;
}
.selected::after {
	position: absolute;
	content: '';
	width: calc(100% - 1em);
	height: 2px;
	background-color: rgb(255, 62, 0);
	display: block;
	bottom: -1px;
}
</style>