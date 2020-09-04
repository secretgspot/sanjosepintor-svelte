<script>
  import { goto } from '@sapper/app';
  import { _ } from 'svelte-i18n';
  import { siteSettings } from '../store.js';
  import Header from '../components/layout/header/index.svelte';
  import Button from "../components/basic/Button/index.svelte";
  import SvgIcon from '../components/basic/SvgIcon/index.svelte';
  import AboutIntro from '../components/common/AboutIntro/index.svelte';
  import Steps from '../components/common/Steps/index.svelte';
  import CommercialSpace from '../components/common/CommercialSpace/index.svelte';
  import Calculator from '../components/common/Calculator/index.svelte';
  import BookNow from '../components/common/BookNow/index.svelte';
  import FeaturedIn from '../components/common/FeaturedIn/index.svelte';
</script>

<svelte:head>
  <title>{$_('page.home.title')}</title>
</svelte:head>

<article id="home" class="home">
  <section id="section--home-hero">
    <div class="content-wrapper hero">
      <Header/>

      <div class="text">
        <h2 class="large">{$_("page.home.hero.title_1")} <SvgIcon type="paint_roller" size="45" /></h2>
        <h2 class="large"> <SvgIcon type="coffee_break" size="45" />{$_("page.home.hero.title_2")}</h2>
      </div>

      <Button color="primary" mode="needy" href="/booking">
        <span>{$_("page.home.hero.button.text")}</span>
        <span class="estimate-amount price">{ $siteSettings.price }</span>
        <span class="size">{$_("page.home.hero.button.size")}<sup>2</sup></span>
      </Button>

      <!-- Meta Information in header -->
      <div class="meta-info" hide-xs>
        <ul>
          <li><SvgIcon type="star" size="18" />{$_("page.home.hero.bonded")}</li>
          <li><SvgIcon type="star" size="18" />{$_("page.home.hero.trained")}</li>
          <li><SvgIcon type="star" size="18" />{$_("page.home.hero.eco")}</li>
        </ul>
      </div>
    </div>

    <!-- BG Gradient -->
    <div class="bg-gradient"></div>
  </section>

  <AboutIntro/>

  <Steps/>

  <CommercialSpace/>

  <!-- <testimonials id="section--testimonials" class="content-wrapper" layout="row" layout-xs="column"></testimonials> -->
  <!-- <Testimonials/> -->

  <Calculator/>

  <BookNow/>

  <!-- <FeaturedIn/> -->
</article>

<style>
#home {
  display: grid;
	grid-gap: 2rem;
}
#home #section--home-hero {
  min-height: 420px;
  height: 81vh;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  user-select: none;
  background-image: url("/assets/backgrounds/home-hero_orig.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 52% top;
}
#home #section--home-hero .content-wrapper.hero {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
#home #section--home-hero .text {
  cursor: default;
  margin-bottom: 3em;
}
#home #section--home-hero .text h2 {
  margin: 0;
  font-size: clamp(2rem, 10vw, 4rem);
  font-weight: bolder;
}
#home #section--home-hero .text :global(svg) {
  width: clamp(25px, 10vw, 45px);
	vertical-align: middle;
}
#home #section--home-hero .price {
  font-size: 2rem;
	position: relative;
	margin-left: 1rem;
	margin-right: 0.5rem;
  display: inline-block;
  line-height: 1;
}
#home #section--home-hero .price:before {
  content: "$";
  position: absolute;
  top: 0; left: 0;
  margin-left: -0.5rem;
  font-size: 0.9rem;
}
#home #section--home-hero .size sup {
  margin-left: 0.2rem;
}
#home #section--home-hero .meta-info {
  cursor: default;
  display: none;
  z-index: 1;
}
@media screen and (min-width: 768px) {
  #home #section--home-hero .meta-info {
    display: block;
    position: absolute;
    bottom: 0;
  }
}
#home #section--home-hero .meta-info ul {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0;
}
#home #section--home-hero .meta-info ul li {
  display: flex;
	align-items: center;
	/* font-size: 72%; */
	margin: 1em;
}
#home #section--home-hero .meta-info :global(svg) {
  vertical-align: top;
  margin-right: 0.6rem;
  color: var(--color-blue);
}
</style>