import device from './device'
import jump from './components/jump'
import code from './sections/code'

const main = () => {
  device()
  code()
  jump()
}

document.addEventListener('DOMContentLoaded', main)
