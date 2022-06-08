const btn = document.querySelector('button')
const question = document.querySelector('input')
const resposta = document.querySelector('#resposta')

btn.addEventListener('click', () => {
  let conta = Math.random()
  resposta.innerHTML = ''
  resposta.innerHTML += `<span>'${question.value}'</span>`
  if (conta >= 0.5) {
    resposta.innerHTML += `<p>Sinais apontam que sim!</p>`
  } else {
    resposta.innerHTML += `<p>Minhas fontes dizem que não.</p>`
  }
})