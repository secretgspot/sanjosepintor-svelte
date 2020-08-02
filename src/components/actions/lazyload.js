// USAGE: https://svelte.dev/repl/873c8432fdd242328437b8f445ac00ff?version=3.23.2

export function lazyload(node) {
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
  }
  let fetchImage = url => {
    return new Promise((resolve, reject) => {
      let image = new Image()
      image.src = url
      image.onload = resolve
      image.onerror = reject
    })
  }
  let loadImage = image => {
    let src = image.dataset.src
    fetchImage(src).then(() => {
      image.src = src
    }).catch(err => console.log('err', err));
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