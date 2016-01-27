import jax from 'jax.js'

// children template
const children = info => `
  <a class="repo-name" href="${ info.url }" target="_blank">${ info.name }</a>
  <p class="repo-desc">${ info.desc }</p>

  <div class="repo-stats">
    <p class="repo-stat">
      <img class="repo-stat-icon" src="images/repos/star.svg">
      <span class="repo-stat-text">${ info.stars }</span>
    </p>

    <p class="repo-stat">
      <img class="repo-stat-icon" src="images/repos/fork.svg">
      <span class="repo-stat-text">${ info.forks }</span>
    </p>
  </div>

  <a class="repo-url" href="${ info.url }" target="_blank">Launch<img class="repo-url-icon" src="images/repos/url.svg"></a>
`

export default () => {
  // create repos markup
  jax('https://callmecavs.herokuapp.com/').then(response => {
    const repos = JSON.parse(response)
    const frag = document.createDocumentFragment()

    repos.forEach(repo => {
      const wrap = document.createElement('div')
      wrap.classList.add('repo')
      wrap.innerHTML = children(repo)
      frag.appendChild(wrap)
    })

    document.querySelector('.repos').appendChild(frag)
  })
}
