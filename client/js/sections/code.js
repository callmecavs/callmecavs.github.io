import jax from 'jax.js'

// children template
const children = info => `
  <a class="repo-name" href="${ info.url }" target="_blank">${ info.name }</a>
  <p class="repo-desc">${ info.desc }</p>

  <div class="repo-meta">
    <p class="repo-info"><img class="repo-icon" src="images/repos/star.svg">${ info.stars }</p>
    <p class="repo-info"><img class="repo-icon" src="images/repos/fork.svg">${ info.forks }</p>
  </div>
`

export default () => {
  // create repos markup
  jax('https://callmecavs.herokuapp.com/')
    .then(res => {
      const repos = JSON.parse(res)
      const frag = document.createDocumentFragment()

      repos.forEach(repo => {
        const wrap = document.createElement('div')
        wrap.classList.add('repo')
        wrap.innerHTML = children(repo)
        frag.appendChild(wrap)
      })

      document.querySelector('.code-repos').appendChild(frag)
    })
    .catch(error => console.log(error))
}
