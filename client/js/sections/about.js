import { toArray } from '../util'

export default () => {
  const section = document.querySelector('[data-about]')
  const content = toArray('[data-about-piece]')

  // set height attribute of each piece
  content.forEach(piece => piece.setAttribute('data-height', piece.clientHeight))
}
