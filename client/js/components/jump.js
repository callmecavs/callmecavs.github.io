import Jump from 'jump.js'

import { toArray } from '../util'

export default () => {
  // cache selectors, instance, and options
  const instance = new Jump()
  const jumpers  = toArray('[data-jump]')
  const rules    = toArray('[data-rule]')

  const options = {
    duration: 1000
  }

  // bind click handlers
  jumpers.forEach(jumper => {
    jumper.addEventListener('click', event => {
      event.preventDefault()

      // determine target hr
      const attr = jumper.getAttribute('data-jump')

      const target = attr === '.header'
        ? attr
        : `[data-rule]:nth-of-type(${ parseInt(attr, 10) })`

      // make the jump
      instance.jump(target, options)
    })
  })
}
