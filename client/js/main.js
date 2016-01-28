import device from './device'

import jump from './components/jump'

import about from './sections/about'
import code from './sections/code'

document.addEventListener('readystatechange', event => {
  switch(document.readyState) {
    case 'interactive':
      device()
      code()
      jump()
    break

    case 'complete':
      about()
    break
  }
})
