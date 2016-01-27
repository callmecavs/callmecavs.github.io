import device from './device'

import about from './sections/about'
import code from './sections/code'

document.addEventListener('readystatechange', event => {
  switch(document.readyState) {
    case 'interactive':
      device()
      code()
    break

    case 'complete':
      about()
    break
  }
})
