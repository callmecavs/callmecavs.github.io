import device from './device'

import about from './sections/about'
import repos from './sections/repos'

document.addEventListener('readystatechange', event => {
  switch(document.readyState) {
    case 'interactive':
      device()
      repos()
    break

    case 'complete':
      about()
    break
  }
})
