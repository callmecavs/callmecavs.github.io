import about from './sections/about'
import repos from './sections/repos'

const main = () => {
  about()
  repos()
}

document.addEventListener('DOMContentLoaded', event => main())
