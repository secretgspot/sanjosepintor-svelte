<script context="module">
  import { isLoading, waitLocale } from 'svelte-i18n';
  export async function preload(page) {
    return waitLocale();
  }
</script>

<script>
  // import Header from '../components/layout/header/index.svelte';
  import SvgLogo from '../components/basic/SvgLogo/index.svelte';
  import Footer from '../components/layout/footer/index.svelte';
</script>

<style>
  /* main {
    position: relative;
    max-width: 56em;
    background-color: white;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  } */
  .loading {
    background-color: var(--color-black);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    z-index: 10;
  }
</style>

{#if $isLoading}
  <div class="loading">
    <SvgLogo size="81" animated="{true}" />
  </div>
{:else}
  <!-- <Header/> -->
  <!-- <main> -->
    <slot/>
  <!-- </main> -->
  <Footer/>
{/if}