<script>
	import { _, locale, locales } from 'svelte-i18n';
</script>

<div class="language">
	{#each $locales as item}
		<span
			class="a"
			class:selected={$locale.includes(item)}
			href={`#!${item}`}
			on:click={() => ($locale = item)}>
			{$_('languages.' + item.replace('-', '_'))}
		</span>
	{/each}
</div>

<style>
.language {
  font-size: 13px;
}
.language span {
  display: inline-block;
  padding: 0.2em;
  margin: 0.2em;
  border-radius: 3px;
  line-height: 1;
	cursor: pointer;
	color: var(--link);
}
.language span:hover {
	color: var(--link_hover);
}
.selected {
	border: 1px solid var(--color-red);
}
</style>