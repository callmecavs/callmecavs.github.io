import { toArray } from '../util'

export default () => {
  // cache selectors
  const wrap   = document.querySelector('[data-about]')
  const pieces = toArray('[data-about-piece]')
  const toggles = toArray('[data-about-toggle]')

  // cache index vars
  let current = 0

  const min = 0
  const max = pieces.length - 1

  // cache height of pieces
  const heights = pieces.map(piece => piece.clientHeight)

  // cache height of pieces
  pieces.forEach(piece => {
    piece.setAttribute('data-height', piece.clientHeight)

    // set initial wrap height
    if(piece.classList.contains('is-active')) {
      wrap.style.height = `${ piece.getAttribute('data-height') }px`
    }
  })

  // bind events
  toggles.forEach(toggle => {
    toggle.addEventListener('click', event => {
      event.preventDefault()

      const prev = current

      toggle.hasAttribute('data-about-plus')
        ? current < max && current++
        : current > min && current--

      prev !== current && update(prev, current)
    })
  })

  function update(prev, current) {
    // remove active class
    pieces[prev].classList.remove('is-active')

    // adjust wrap height
    setTimeout(() => wrap.style.height = `${ pieces[current].getAttribute('data-height') }px`, 500)

    // add active class
    setTimeout(() => pieces[current].classList.add('is-active'), 1000)
  }
}
