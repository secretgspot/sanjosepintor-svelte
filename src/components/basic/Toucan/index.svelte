<script>
  export let scale = 1;
</script>

<div id="toucan" style="transform: scale({scale});">
	<div class="t"></div>
	<div class="o"></div>
	<div class="u"></div>
	<div class="c"></div>
	<div class="a"></div>
	<div class="n"></div>
</div>

<style>
  #toucan {
    position: relative;
    width: 135px;
    height: 100px;
    display: inline-block;
  }
  #toucan:hover .c {
    transform: rotate(20deg);
    top: 30px;
    margin-left: -5px;
  }
  #toucan:hover .o::after {
    top: 8px;
    left: 8px;
  }
  #toucan .t {
    position: absolute;
    left: 35px;
    z-index: 4;
    width: 45px;
    height: 72px;
    display: block;
    background: var(--bg-inverted);
    border-radius: 35px 0 30px 0;
  }
  #toucan .t::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 23px;
    height: 42px;
    display: block;
    background: var(--color-orange);
    border-radius: 50px 0 0 50px;
    content: "";
  }
  #toucan .o {
    position: absolute;
    z-index: 5;
    top: 10px;
    left: 50px;
    width: 25px;
    height: 25px;
    display: block;
    border-radius: 50%;
    background: var(--color-white);
  }
  #toucan .o::after {
    transition: all 0.3s;
    animation: wink 3s infinite;
    position: absolute;
    top: 5px;
    left: 5px;
    width: 16px;
    height: 16px;
    display: block;
    background: var(--color-black);
    border-radius: 50%;
    content: "";
  }
  #toucan .u {
    position: absolute;
    z-index: 2;
    top: 0;
    left: 80px;
    width: 60px;
    height: 20px;
    display: block;
    background: var(--color-purple);
    border-radius: 0 40px 0 0;
  }
  #toucan .u::after, #toucan .u::before {
    position: absolute;
    width: 20px;
    height: 100%;
    display: block;
    content: "";
  }
  #toucan .u::before {
    left: 0;
    background: var(--color-red);
  }
  #toucan .u::after {
    left: 20px;
    background: var(--color-blue);
  }
  #toucan .c {
    transition: all 0.3s, left 0.4s;
    position: absolute;
    left: 80px;
    top: 20px;
    z-index: 3;
    width: 60px;
    height: 9px;
    display: block;
    background: var(--color-purple);
    filter: brightness(1.2);
  }
  #toucan .c::after, #toucan .c::before {
    position: absolute;
    width: 20px;
    height: 100%;
    display: block;
    content: "";
  }
  #toucan .c::before {
    left: 0;
    background: var(--color-red);
  }
  #toucan .c::after {
    left: 20px;
    background: var(--color-blue);
  }
  #toucan .a {
    transform: rotate(-65deg);
    position: absolute;
    top: 8px;
    left: 10px;
    width: 35px;
    height: 70px;
    display: block;
    background: var(--bg-inverted);
    border-radius: 200px 0 0 200px;
  }
  #toucan .n {
    transform: rotate(21deg);
    position: absolute;
    top: 35px;
    left: 30px;
    display: block;
    border: 14px solid transparent;
    border-bottom: 40px solid var(--bg-inverted);
  }

  @keyframes wink {
    0%, 20%, 50%, 80%, 100% {
      transform: rotateX(0);
    }
    38% {
      transform: rotateX(180deg);
    }
  }
</style>