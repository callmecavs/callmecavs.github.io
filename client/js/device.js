export default () => {
  const userAgent = navigator.userAgent.toLowerCase()

  // check for iOS
  const iOS = /iphone|ipad|ipod/i.test(userAgent)
  iOS && document.body.classList.add('is-ios')
}
