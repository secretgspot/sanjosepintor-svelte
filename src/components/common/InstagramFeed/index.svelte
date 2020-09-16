<script>
  import { onMount } from 'svelte';
  import { siteSettings } from '../../../store.js';
  import { _ } from 'svelte-i18n';
  import Zooming from 'zooming';
  import SvgLogo from '../../basic/SvgLogo/index.svelte';

	let promise = [];

	async function fetchInstagramPhotos(profileName) {
		const baseUrl = "https://www.instagram.com";
		const profileUrl = `${baseUrl}/${profileName}`;
		const jsonDataUrl = `${profileUrl}/?__a=1`;

		const response = await fetch(jsonDataUrl);
		const jsonData = await response.json();
		const pictures = jsonData.graphql.user.edge_owner_to_timeline_media.edges;

		if (response.ok) {
			return pictures;
		} else {
			throw new Error(pictures);
    }
	}

  const zoomable = element => (new Zooming({ bgColor: 'var(--bg-primary)' }).listen(element));

  onMount(() => {
    promise = fetchInstagramPhotos('sanjosepintor');
  });
</script>

<section id="section--instagram-feed" class="content-wrapper">
  {#await promise}
    <div class="placeholder">
      <SvgLogo size="63" animated="{true}"/>
    </div>
  {:then pictures}
    <div class='images'>
    {#each pictures as picture}
      <img use:zoomable
          src='{picture.node.thumbnail_resources[0].src}'
          data-original='{picture.node.thumbnail_resources[3].src}'
          data-zooming-width='{picture.node.thumbnail_resources[3].config_width}'
          data-zooming-height='{picture.node.thumbnail_resources[3].config_height}'
          alt='{picture.node.accessibility_caption}'
          class='img-zoomable' />
    {/each}
    </div>
  {:catch error}
    <p class="error">{error.message}. <a href="{$siteSettings.instagurl}" target="_blank" rel="noreferrer external">{$_("component.instagram_feed.p")}</a></p>
  {/await}
</section>

<style>
#section--instagram-feed {
  padding: 3rem 0;
  /* content-visibility: initial; */
}
#section--instagram-feed .images {
  display: grid;
	grid-gap: 1rem;
	grid-auto-rows: auto;
	grid-auto-flow: dense;
	grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	place-items: center;
  margin: 0 1rem;
}
#section--instagram-feed .images .img-zoomable {
	object-fit: fill;
  width: 100%;
  filter: brightness(var(--brightness));
}
#section--instagram-feed .placeholder {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 333px;
}
#section--instagram-feed .error {
  color: var(--color-danger);
  text-align: center;
}
</style>