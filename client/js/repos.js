import jax from 'jax.js'

export default () => {
  // repo children template
  const children = info => `
    <p class="repo-stars">${ info.stars }</p>
    <p class="repo-forks">${ info.forks }</p>
    <p class="repo-name">${ info.name }</p>
    <p class="repo-desc">${ info.desc }</p>
    <a class="repo-url" href="${ info.url }" target="_blank"></a>
  `

  // create repos markup
  jax('http://localhost:8000/').then(response => {
    const repos = JSON.parse(response)
    const frag = document.createDocumentFragment()

    repos.forEach(repo => {
      const wrap = document.createElement('div')
      wrap.classList.add('repo')
      wrap.innerHTML = children(repo)
      frag.appendChild(wrap)
    })

    document.querySelector('.wrapper').appendChild(frag)
  })
}
