import { toArray } from '../util'

export default () => {
  const section = document.querySelector('[data-about]')
  const content = toArray('[data-about-piece]')

  // content index vars
  const min = 0
  const max = content.length - 1

  let current = 0

  // cache height of each piece
  content.forEach(piece => piece.setAttribute('data-height', piece.clientHeight))

  // show first content piece
  show(current)

  // bind plus & minus handlers
  const plus  = document.querySelector('[data-about-plus]')
  const minus = document.querySelector('[data-about-minus]')

  plus.addEventListener('click', event => {
    current < max && current++
    show(current)
  })

  minus.addEventListener('click', event => {
    current > min && current--
    show(current)
  })

  function show(index) {
    // adjust section height
    section.style.height = `${ content[current].getAttribute('data-height') }px`

    // add active class
    content.forEach(piece => piece.classList.remove('is-active'))
    content[current].classList.add('is-active')
  }
}
