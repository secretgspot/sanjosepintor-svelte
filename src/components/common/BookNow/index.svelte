<script>
  import { goto } from '@sapper/app';
  import { _ } from 'svelte-i18n';
  import SvgIcon from '../../basic/SvgIcon/index.svelte';
	import Button from "../../basic/Button/index.svelte";
</script>

<section id="section--booking" class="content-wrapper">
  <SvgIcon type="booking" size="45" />
  <h2>{$_("component.book_now.title")}</h2>
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
</style>