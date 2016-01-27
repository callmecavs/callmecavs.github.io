import { toArray } from '../util'

export default () => {
  // cache selectors
  const wrap   = document.querySelector('[data-about]')
  const pieces = toArray('[data-about-piece]')

  const plus  = document.querySelector('[data-about-plus]')
  const minus = document.querySelector('[data-about-minus]')

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

}

// export default () => {

//   // show first content piece
//   show(current)
//
//   // bind plus & minus handlers
//   const plus  = document.querySelector('[data-about-plus]')
//   const minus = document.querySelector('[data-about-minus]')
//
//   plus.addEventListener('click', event => {
//     event.preventDefault()
//     current < max && current++
//     show(current)
//   })
//
//   minus.addEventListener('click', event => {
//     event.preventDefault()
//     current > min && current--
//     show(current)
//   })
//
//   function show(index) {
//     // adjust section height
//     section.style.height = `${ content[current].getAttribute('data-height') }px`
//
//     // add active class
//     content.forEach(piece => piece.classList.remove('is-active'))
//     content[current].classList.add('is-active')
//   }
// }
