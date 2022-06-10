const btn = document.querySelector('button')
const question = document.querySelector('input')
const resposta = document.querySelector('#resposta')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

btn.addEventListener('click', () => {
  if(question.value == "") {
    alert("Digite sua pergunta")
    return
  }
  btn.setAttribute("disabled", true)
  const pergunta = `<span>'${question.value}'</span>`
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
  resposta.innerHTML = pergunta + respostas[numeroAleatorio]
  resposta.style.opacity = 1;
  setTimeout(function() {
    resposta.style.opacity = 0;
    btn.removeAttribute("disabled")
  }, 3000)
})
