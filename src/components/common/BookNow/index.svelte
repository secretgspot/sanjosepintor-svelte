<script>
  import { goto } from '@sapper/app';
  import { _ } from 'svelte-i18n';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
	// import Icon from "../../basic/SvgIcon/index.svelte";
	// import Logo from "../../basic/SvgLogo/index.svelte";
	// import ImageCompare from "../../basic/ImageCompare/index.svelte";
	// import Loader from "../../basic/Loader/index.svelte";
	// import BtnArrow from "../../basic/ButtonArrow/index.svelte";
	import Button from "../../basic/Button/index.svelte";
	// import Youtube from "../../basic/YoutubeEmbed/index.svelte";
	// import ScrollSkew from "../../basic/ScrollSkew/index.svelte";
	// import WordRoller from "../../basic/WordRoller/index.svelte";
</script>

<!-- <h1>Word Roller</h1>
<WordRoller words={['one','two','three']}/> -->

<!-- <h1>ScrollSkew</h1>
<section style="background-color: cyan">
	<ScrollSkew>
		<h1>
			Hello
		</h1>
	</ScrollSkew>
</section>
<section style="background-color: skyblue">
	<ScrollSkew>
		<h1>
			Goodbye
		</h1>
	</ScrollSkew>
</section> -->

<!-- <h1>Button Ripple</h1>
<BtnRipple on:click="{() => { console.log('One') }}">CLICK</BtnRipple>
<BtnRipple color="blue" on:click="{() => { console.log('Two') }}">CLICK me Too</BtnRipple>
<BtnRipple color="blue" mode="disabled" on:click="{() => { console.log('Three') }}">NOT CLICKABLE</BtnRipple> -->

<!-- <h1>Youtube</h1>
<Youtube video="L4ChZfQ1nPg"
				 image="https://placekitten.com/408/287"/> -->


<!-- <h1>Loader</h1>
<Loader />
<Loader mode="square" />
<Loader mode="triangle" /> -->

<!-- <h1>Compare</h1>
<ImageCompare
    before="//placehold.it/600x200/E8117F/FFFFFF"
    after="//placehold.it/600x200/CCCCCC/FFFFFF"
    contain={false}
>
	<span slot="before">BEFORE</span>
	<span slot="after">AFTER</span>
</ImageCompare> -->

<!-- <h1>Button Arrow</h1>
<div style="background: dodgerblue">
  <BtnArrow direction="left" duration="333" />
  <BtnArrow direction="right" duration="666" />
  <BtnArrow direction="down" duration="999" />
  <BtnArrow direction="up" duration="1200" />
</div> -->

<section id="section--booking" class="content-wrapper" layout="column">
  <SvgIcon type="booking" size="45" />
  <!-- <img class="svg" src="@/assets/images/book-white.svg" alt="booklet"> -->

  <h2 class="white">{$_("component.book_now.title")}</h2>

  <Button href="/booking" mode="needy" color="white">{$_("component.book_now.button")}</Button>
</section>


<style>

#section--booking {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-blue);
  color: var(--color-white);
  padding: 3rem 0;
  user-select: none;
}

#section--booking h2 {
  cursor: default;
	margin: 3rem 1rem;
	text-align: center;
}

	/* :global(html) {
		scroll-snap-type: y mandatory;
	}
	section {
    min-height: 300px;
    width: 666px;
		display: flex;
		align-items: center;
		justify-content: center;
		scroll-snap-align: start;
	} */
</style>