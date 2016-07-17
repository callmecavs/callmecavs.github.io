export default selector => {
  return Array.prototype.slice.call(document.querySelectorAll(selector))
}
