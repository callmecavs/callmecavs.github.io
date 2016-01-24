export function toArray(selector) {
  return Array.prototype.slice.call(document.querySelectorAll(selector))
}
