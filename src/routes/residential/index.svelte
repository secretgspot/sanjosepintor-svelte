<script>
  import { goto } from '@sapper/app';
  import { _ } from 'svelte-i18n';
  import { siteSettings } from '../../store.js';
  import Header from '../../components/layout/header/index.svelte';
  import Button from "../../components/basic/Button/index.svelte";
  import SvgIcon from '../../components/basic/SvgIcon/index.svelte';
  import InteriorSteps from '../../components/common/InteriorSteps/index.svelte';
  import Moving from '../../components/common/Moving/index.svelte';
  import ExteriorSteps from '../../components/common/ExteriorSteps/index.svelte';
  import ResidentialDetails from '../../components/common/ResidentialDetails/index.svelte';
  import ImageCompare from "../../components/basic/ImageCompare/index.svelte";
  import InstagramFeed from '../../components/common/InstagramFeed/index.svelte';
  import BookNow from '../../components/common/BookNow/index.svelte';
</script>

<svelte:head>
  <title>{$_('page.residential.title')}</title>
</svelte:head>

<article id="residential-painting" class="residential">
  <section id="section--residential-painting-hero">
    <div class="content-wrapper hero">
      <Header/>

      <div class="text">
        <h1>{$_("page.residential.hero.title")}</h1>
        <p>{$_("page.residential.hero.p")}</p>
        <Button color="primary" mode="needy" href="/booking">{$_("page.residential.hero.button")}</Button>
      </div>
    </div>

    <!-- BG Gradient -->
    <div class="bg-gradient"></div>
  </section>

  <InteriorSteps/>

  <Moving/>

  <ExteriorSteps/>

  <ResidentialDetails/>

  <ImageCompare
      before="/assets/before-after/residential_before_0.jpg"
      after="/assets/before-after/residential_after_0.jpg"
      contain="{true}"
  >
    <span slot="before">{$_("component.image_compare.before")}</span>
    <span slot="after">{$_("component.image_compare.after")}</span>
  </ImageCompare>

  <InstagramFeed/>

  <BookNow/>
</article>

<style>
#residential-painting {
  display: grid;
}
#residential-painting #section--residential-painting-hero {
  min-height: 600px;
  height: 90vh;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  background-image: url("/assets/backgrounds/residential-interior.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 60% top;
}
#residential-painting #section--residential-painting-hero .content-wrapper.hero {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}
#residential-painting #section--residential-painting-hero .text {
  margin: 2em;
  text-align: left;
}
@media screen and (min-width: 768px) {
  #residential-painting #section--residential-painting-hero .text {
    margin: 6em;
    font-size: 130%;
  }
  #residential-painting #section--residential-painting-hero .text h1 {
    font-weight: bold;
    margin-bottom: 2rem;
  }
  #residential-painting #section--residential-painting-hero .text :global(a) {
    margin-top: 2rem;
  }
}
#residential-painting :global(#section--beforeafter) {
  padding-top: 0;
	padding-bottom: 0;
}
</style>