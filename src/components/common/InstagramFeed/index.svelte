<script>
  import { onMount } from 'svelte';
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
  <!-- <div class="text" ng-hide="offline">
    <h3>{$_("component.instagram_feed.title")}</h3>
    <p>{$_("component.instagram_feed.p")} <a :href="instagurl" target="_blank" rel="noreferrer">feed</a>.</p>
  </div> -->

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
    <p style="color: red">{error.message}</p>
  {/await}
</section>

<style>
#section--instagram-feed {
  padding: 3rem 0;
  content-visibility: initial;
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
}
#section--instagram-feed .placeholder {
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 333px;
}
</style>