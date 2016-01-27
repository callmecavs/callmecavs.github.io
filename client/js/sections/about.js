import { toArray } from '../util'

export default () => {
  // cache selectors
  const wrap    = document.querySelector('[data-about-content]')
  const pieces  = toArray('[data-about-piece]')
  const buttons = toArray('[data-about-button]')

  // cache content index
  const min = 0
  const max = pieces.length - 1

  let current = 0

  // run through pieces
  const heights = pieces.map(piece => {
    // add display to them one at a time
    piece.hasAttribute('data-block')
      ? piece.style.display = 'block'
      : piece.style.display = 'inline'

    // cache wrap height each time
    return wrap.clientHeight
  })

  // set initial wrap height
  wrap.style.height = `${ heights[current] }px`

  // bind buttons handler
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      event.preventDefault()

      // cache button action
      const next = button.hasAttribute('data-about-next')

      // cache old content index
      const prev = current

      // adjust content index
      next
        ? current < max && current++
        : current > min && current--

      requestAnimationFrame(() => {
        // show or hide content
        // absurd use of ternary operator incoming
        pieces[next ? current : prev].classList[next ? 'add' : 'remove']('is-active')

        // set new wrap height
        wrap.style.height = `${ heights[current] }px`
      })
    })
  })
}
