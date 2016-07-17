import jump from 'jump.js'

import toArray from '../utils/toArray.js'

export default () => {
  // cache elements
  const jumpers = toArray('[data-jump]')

  // bind click handlers
  jumpers.forEach(jumper => {
    jumper.addEventListener('click', event => {
      event.preventDefault()

      // determine target
      const attr = jumper.getAttribute('data-jump')

      const target = attr === '.header'
        ? attr
        : `[data-rule]:nth-of-type(${ parseInt(attr, 10) })`

      // make the jump
      jump(target)
    })
  })
}
