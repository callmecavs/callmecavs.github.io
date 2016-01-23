import jax from 'jax.js'

export default () => {
  // get repos
  jax('http://localhost:8000/')
    .then(response => {
      // parse JSON
      const repos = JSON.parse(response)

      // create repos markup
    })
}
