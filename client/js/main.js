import device from './device'

import about from './sections/about'
import repos from './sections/repos'

const main = () => {
  device()
  about()
  repos()
}

document.addEventListener('DOMContentLoaded', event => main())
