// USAGE: https://svelte.dev/repl/873c8432fdd242328437b8f445ac00ff?version=3.23.2

export function lazyloadbg(node) {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  }
  let fetchImage = url => {
    return new Promise((resolve, reject) => {
			//console.log('fetchImage', url);
      let image = new Image()
      image.src = url
      image.onload = resolve
      image.onerror = reject
    })
  }
  let loadImage = image => {
		//console.log('loadImage', image.dataset.bgImage);
		let src = image.dataset.bgImage
    fetchImage(src)
			.then(() => {
				//console.log('loadImage > img ', image);
				image.style.backgroundImage = `url(${src})`;
				image.classList.add('loaded')
			})
			.catch(err => {
				console.log('err', err);
			});
  }
  let handleIntersection = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        loadImage(entry.target)
      }
    })
  }

  let io = new IntersectionObserver(handleIntersection, options)

  io.observe(node)

  return {
    destroy() {
      io.unobserve(node)
    },
  }
}