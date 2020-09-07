<!-- <script>
	import { _ } from 'svelte-i18n';
	export let status;
	export let error;
	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	h1,
	p {
		margin: 0 auto;
	}
	h1 {
		font-size: 2.8em;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	p {
		margin: 1em auto;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<h1>{status}</h1>
<h1>{$_('messages.error', { values: { status } })}</h1>

<p>{error.message}</p>

{#if dev && error.stack}
	<pre>{error.stack}</pre>
{/if} -->

<script>
	import { _ } from 'svelte-i18n';
	import Header from '../components/layout/header/index.svelte';
	export let status;
	export let error;

	const dev = process.env.NODE_ENV === 'development';
</script>

<style>
	.error-wrapper {
		display: grid;
		min-height: 60vh;
		padding-top: 6rem;
	}
	.error-group {
		display: flex;
		justify-content: center;
		flex-direction: row;
		align-items: center;
	}
	.error-group h1 {
		margin: 0 1rem 0 0;
		font-weight: bold;
		padding: 0 1rem 0 0;
		border-right: 3px solid var(--border);
		color: var(--color-blue);
	}
	.error-group div {
		max-width: 333px;
	}
</style>

<svelte:head>
	<title>{status}</title>
</svelte:head>

<section class="error-wrapper content-wrapper">
	<Header/>

	<div class="error-group">
		<h1>{status}</h1>
		<div>
			<p>{error.message}</p>
			{#if dev && error.stack}
				<pre>{error.stack}</pre>
			{/if}
		</div>
	</div>
</section>
