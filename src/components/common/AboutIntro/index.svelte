<script>
  import { _ } from 'svelte-i18n';
  import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
  import Button from '../../basic/Button/index.svelte';
</script>

<section id="section--about-intro" class="content-wrapper">
  <div class="side-left">
    <ul class="cities">
      <li><SvgIcon type="city_sj" size="45" /><span>San Jose</span></li>
      <li><SvgIcon type="city_yours" size="63" /><span>{$_("component.about_intro.your_city")}</span></li>
      <li><SvgIcon type="city_heredia" size="45" /><span>Heredia</span></li>
    </ul>

    <!-- <h2 layout-align-gt-xs="end end">{$_("component.about_intro.why")} {$siteSettings.company}?</h2> -->

    <SvgIcon type="seal_100" size="120" />
  </div>

  <div class="side-right">
    <p>{$_("component.about_intro.p_1")}</p>
    <p>{$_("component.about_intro.p_2")}</p>

    <div class="meta-info">
      <ul>
        <li><SvgIcon type="star" size="18" />{$_("page.home.hero.bonded")}</li>
        <li><SvgIcon type="star" size="18" />{$_("page.home.hero.trained")}</li>
        <li><SvgIcon type="star" size="18" />{$_("page.home.hero.eco")}</li>
      </ul>
    </div>

    <Button href="/residential" color="black">{$_("component.about_intro.button")}</Button>
  </div>
</section>

<style>
#section--about-intro {
  user-select: none;
  display: grid;
  border-bottom: 1px solid var(--border);
  padding: 0 0 3rem 0;
}

@media (min-width: 768px) {
  #section--about-intro {
    grid-template-columns: 1fr 1fr;
  }
}

#section--about-intro .side-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1em;
  cursor: default;
}

#section--about-intro .side-left ul.cities {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  padding: 1em 0;
  margin: 0;
}
#section--about-intro .side-left ul.cities li {
	display: flex;
	flex-direction: column;
	align-items: center;
	align-content: space-between;
}
#section--about-intro .side-left ul.cities li :global(svg) {
  display: block;
  margin-bottom: 1em;
  color: var(--color-blue);
}
#section--about-intro .side-left :global(.guarantee-seal) {
  margin: 2rem auto 1rem;
}
#section--about-intro .side-right {
	display: flex;
	flex-direction: column;
  margin: 1em;
  text-align: left;
}

#section--about-intro .side-right p {
  cursor: default;
  font-size: 120%;
}
#section--about-intro .side-right :global(a) {
  margin-top: auto;
}
@media screen and (min-width: 768px) {
  #section--about-intro .side-right :global(a) {
    margin-top: 2rem;
  }
}
#section--about-intro .side-right .meta-info {
  margin: 2rem 0;
}
@media screen and (min-width: 768px) {
  #section--about-intro .side-right .meta-info {
    display: none;
  }
}
#section--about-intro .side-right .meta-info :global(svg) {
  vertical-align: top;
  margin-right: 0.6rem;
  color: var(--color-blue);
}
#section--about-intro .side-right .meta-info ul {
  padding: 0;
}

#section--about-intro .side-right .meta-info ul li {
  display: inline-block;
  margin-bottom: 15px;
}
#section--about-intro .side-right .meta-info ul li:last-child { margin-bottom: 0; }
</style>