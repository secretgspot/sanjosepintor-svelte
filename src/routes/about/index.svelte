<script>
  import { _, locale } from 'svelte-i18n';
  import { siteSettings } from '../../store.js';
  import Header from '../../components/layout/header/index.svelte';
  import SvgIcon from '../../components/basic/SvgIcon/index.svelte';
  import ContactUs from '../../components/common/ContactUs/index.svelte';
  import BookNow from '../../components/common/BookNow/index.svelte';
</script>

<svelte:head>
  <title>{$_('page.about_us.title')}</title>
</svelte:head>

<article class="about about-us content-wrapper">
  <Header/>

  <section id="section--about-us">
    <div class="main-content">
      <figure>
        <img src="/assets/van/van_{$locale.startsWith('en') ? 'en' : 'es'}.png" class="company-van" alt="company vehicle" />
      </figure>
      <!-- <h2>{$_("page.about_us.title")}</h2> -->
      <div class="grouped">
        <h2>{$_("page.about_us.mission.title")}</h2>
        <p>{$_("page.about_us.mission.p_1")}</p>
        <p>{$_("page.about_us.mission.p_2")}</p>
      </div>

      <div class="grouped">
        <h2>{$_("page.about_us.top_rated.title")}</h2>
        <p>{$_("page.about_us.top_rated.p")}</p>
      </div>

      <div class="grouped">
        <h2>{$_("page.about_us.guarantee.title")}</h2>
        <p>{$_("page.about_us.guarantee.p_1")}</p>
        <p>{$_("page.about_us.guarantee.p_2")}</p>
      </div>
    </div>
  </section>

  <ContactUs/>

  <BookNow/>
</article>

<style>
#section--about-us {
  display: grid;
}
#section--about-us .main-content {
  margin: 9em 1em 3em 1em;
}
@media screen and (min-width: 768px) {
  #section--about-us .main-content {
    margin: 9em 3em 3em 3em;
  }
}
#section--about-us figure {
  margin-bottom: 3rem;
}
#section--about-us h2 {
  font-weight: bold;
}
#section--about-us .grouped {
  margin-bottom: 3em;
}
#section--about-us img.company-van {
  max-width: 100%;
  filter: brightness(var(--brightness));
}
</style>