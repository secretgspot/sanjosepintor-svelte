<script>
  export let video = "";
	export let image = ""


  let user = {
    clickedVideo: false
  };
  function toggle() {
    user.clickedVideo = !user.clickedVideo;
  }

</script>

<style>
  .btn {
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 2em;
    position: relative;
  }

  .btn--play {
    fill: white;
    height: 6em;
    width: 6em;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn--play::before,
  .btn--play::after {
    border-radius: 100%;
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 20;
    width: 100%;
  }

  .btn--play::before {
    background-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 0.2rem white;
    transition: background-color 0.3s ease, box-shadow 0.3s ease, fill 0.3s ease, -webkit-transform 0.3s ease;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, fill 0.3s ease;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, fill 0.3s ease, -webkit-transform 0.3s ease;
  }

  .btn--play:hover {
    fill: #333;
  }

  .btn--play:hover::before {
    background-color: rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 0 0.2rem #333;
    -webkit-transform: scale(1.2);
    transform: scale(1.3);
  }

  .btn--play:hover:after {
    display: none;
  }

  .btn--play::after {
    -webkit-animation: radiate 1.75s ease-out infinite;
    animation: radiate 1.25s ease-out infinite;
    box-shadow: inset 0 0 0 1em rgba(255, 255, 255, 0);
    opacity: 0;
    pointer-events: none;
  }

  .icon {
    width: 6em;
    height: 6em;
  }

  @-webkit-keyframes radiate {
    0% {
      opacity: 1;
      -webkit-transform: scale3d(1.2, 1.2, 1);
      transform: scale3d(1.2, 1.2, 1);
    }

    80% {
      box-shadow: inset 0 0 0 0.2rem rgba(255, 255, 255, 0.8);
      opacity: 0.1;
    }

    100% {
      box-shadow: inset 0 0 0 0.2rem rgba(255, 255, 255, 0.8);
      opacity: 0;
      -webkit-transform: scale3d(1.5, 1.5, 1);
      transform: scale3d(1.5, 1.5, 1);
    }
  }

  @keyframes radiate {
    0% {
      opacity: 1;
      -webkit-transform: scale3d(1.2, 1.2, 1);
      transform: scale3d(1.2, 1.2, 1);
    }

    80% {
      box-shadow: inset 0 0 0 0.2rem rgba(255, 255, 255, 0.8);
      opacity: 0.1;
    }

    100% {
      box-shadow: inset 0 0 0 0.2rem rgba(255, 255, 255, 0.8);
      opacity: 0;
      -webkit-transform: scale3d(1.5, 1.5, 1);
      transform: scale3d(1.5, 1.5, 1);
    }
  }



  section {
    background-color: lightgray;
    padding: 120px 0px 125px 0px;
    max-width: 720px;
    margin: 0 auto;
    margin-bottom: 80px;
		background-size: cover;
    background-position: center;
  }
</style>

{#if user.clickedVideo}
	<center>
   <iframe title="youtube" width="720" height="450" src="https://www.youtube.com/embed/{video}?controls=0&autoplay=1&loop=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; loop" allowfullscreen></iframe>
  </center>
{:else}

	<section style="background-image: url('{image}')">
	<center>
	<svg style="display: none;" xmlns="http://www.w3.org/2000/svg">
  <symbol id="icon-arrow" viewBox="0 0 120 120">

    <path class="play-arrow" d="M54.48 45.443L73.27 59.2a1 1 0 0 1 .01 1.606L54.49 74.929a1 1 0 0 1-1.6-.8V46.25a1 1 0 0 1 1.59-.806z"/>
  </symbol>
</svg>
	<!-- Play Button -->
	<button type="button" class="btn btn--play" on:click={toggle}>
	  <svg class="icon">
		  <use xlink:href="#icon-arrow"></use>
  	</svg>
	</button>
	</center>
	</section>

{/if}