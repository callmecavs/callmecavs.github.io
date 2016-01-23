import jax from 'jax.js'

export default () => {
  // repo template
  const template = `
    <div class="repo">
      <p class="repo-name"></p>
    </div>
  `

  // get repos
  jax('http://localhost:8000/').then(response => {
    // parse JSON
    const repos = JSON.parse(response)

    // create document fragment
    const frag = document.createDocumentFragment()

    // create markup for each repo
    repos.forEach(repo => {
      const wrap = document.createElement('div')
      wrap.classList.add('repo')

      ;['name', 'desc', 'url', 'stars', 'forks'].forEach(prop => {
        const child = document.createElement('p')
        child.classList.add(`repo-${ prop }`)
        child.textContent = repo[prop]

        wrap.appendChild(child)
      })

      frag.appendChild(wrap)
    })

    // append fragment
    document.querySelector('.wrapper').appendChild(frag)
  })
}
