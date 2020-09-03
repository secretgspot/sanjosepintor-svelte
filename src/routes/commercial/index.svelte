<script>
  import { goto } from '@sapper/app';
  import { _ } from 'svelte-i18n';
  import { siteSettings } from '../../store.js';
  import Header from '../../components/layout/header/index.svelte';
  import Button from "../../components/basic/Button/index.svelte";
  import SvgIcon from '../../components/basic/SvgIcon/index.svelte';
  import OurOffer from '../../components/common/OurOffer/index.svelte';
  import ImageCompare from "../../components/basic/ImageCompare/index.svelte";
  import CommercialDetails from '../../components/common/CommercialDetails/index.svelte';
  import Powerwash from '../../components/common/Powerwash/index.svelte';
  import BookNow from '../../components/common/BookNow/index.svelte';
</script>

<svelte:head>
  <title>{$_('page.commercial.title')}</title>
</svelte:head>

<article id="commercial-painting" class="commercial">
  <section id="section--commercial-painting-hero">
    <div class="content-wrapper hero">
      <Header/>

      <div class="text">
        <h1>{$_("page.commercial.hero.title")}</h1>
        <p>{$_("page.commercial.hero.p")}</p>
        <Button color="primary" mode="needy" href="/booking">{$_("page.commercial.hero.button")}</Button>
      </div>
    </div>

    <!-- BG Gradient -->
    <div class="bg-gradient"></div>
  </section>

  <OurOffer/>

  <ImageCompare
      before="/assets/before-after/commercial_before_0.jpg"
      after="/assets/before-after/commercial_after_0.jpg"
      contain="{true}"
  >
    <span slot="before">{$_("component.image_compare.before")}</span>
    <span slot="after">{$_("component.image_compare.after")}</span>
  </ImageCompare>

  <CommercialDetails/>

  <Powerwash/>

  <BookNow/>
</article>

<style>
#commercial-painting {
  display: grid;
}
#commercial-painting #section--commercial-painting-hero {
  min-height: 600px;
  height: 90vh;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url("/assets/backgrounds/commercial_blur.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60% top;
}
#commercial-painting #section--commercial-painting-hero .content-wrapper.hero {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
#commercial-painting #section--commercial-painting-hero .text {
  margin: 2em;
  text-align: left;
}
@media screen and (min-width: 768px) {
  #commercial-painting #section--commercial-painting-hero .text {
    margin: 6em;
    font-size: 130%;
  }
  #commercial-painting #section--commercial-painting-hero .text h1 {
    font-weight: bold;
    margin-bottom: 2rem;
  }
  #commercial-painting #section--commercial-painting-hero .text :global(a) {
    margin-top: 2rem;
  }
}
#commercial-painting :global(#section--beforeafter) {
  padding-top: 0;
	padding-bottom: 0;
}
</style>