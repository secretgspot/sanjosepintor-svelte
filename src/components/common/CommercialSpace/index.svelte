<script>
  import { _ } from 'svelte-i18n';
  // import { siteSettings } from '../../../store.js';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
</script>

<section id="section--commercial" class="content-wrapper">
  <div class="left-side">
    <div class="text">
      <h2 class="white">{$_("component.commercial.title")}</h2>
      <a href="/commercial" class="cta-link white" title="Commercial painting details">
        <SvgIcon type="arrow" size="18" />
        {$_("component.commercial.link")}
      </a>
    </div>
  </div>
  <div class="right-side"></div>
</section>

<style>
#section--commercial {
  user-select: none;
  display: grid;
	grid-template-rows: 1fr 1fr;
}
@media screen and (min-width: 768px) {
  #section--commercial {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr;
  }
}
#section--commercial .left-side {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg-inverted);
}

#section--commercial .left-side .text {
  color: var(--txt-inverted);
  margin: 1rem 3em;
}
#section--commercial .left-side h2 {
  cursor: default;
}
#section--commercial .left-side a {
  font-family: Raleway, serif;
  font-weight: 400;
  font-style: italic;
  text-decoration: none;
  margin-bottom: 1em;
  display: block;
}
#section--commercial .left-side a :global(svg) {
  margin-right: 1rem;
}
#section--commercial .right-side {
  flex: 1 0 auto;
  min-height: 300px;
  background-image: url("/assets/backgrounds/commercial.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  filter: brightness(var(--brightness));
}
</style>