import { toArray } from '../util'

export default () => {
  // cache selectors
  const wrap    = document.querySelector('[data-about-content]')
  const pieces  = toArray('[data-about-piece]')
  const buttons = toArray('[data-about-button]')

  // cache index
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

  //
  // // bind events
  // toggles.forEach(toggle => {
  //   toggle.addEventListener('click', event => {
  //     event.preventDefault()
  //
  //     const prev = current
  //
  //     toggle.hasAttribute('data-about-plus')
  //       ? current < max && current++
  //       : current > min && current--
  //
  //     prev !== current && update(prev, current)
  //   })
  // })
  //
  // function update(prev, current) {
  //   // remove active class
  //   pieces[prev].classList.remove('is-active')
  //
  //   // adjust wrap height
  //   setTimeout(() => wrap.style.height = `${ pieces[current].getAttribute('data-height') }px`, 500)
  //
  //   // add active class
  //   setTimeout(() => pieces[current].classList.add('is-active'), 1000)
  // }
}
