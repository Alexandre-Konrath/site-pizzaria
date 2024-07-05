
let btnNavegacao = document.getElementById('btn-navegacao');
let telaNavegacao = document.getElementById('tela-atalho');

function alternarNavegacao() {
  telaNavegacao.classList.toggle('hidden');
}
btnNavegacao.addEventListener('click', alternarNavegacao);


function abrirDepoimento(depoimento) {
  document.getElementById('container-depoimento-1').classList.add('hidden');
  document.getElementById('container-depoimento-2').classList.add('hidden');
  document.getElementById('container-depoimento-3').classList.add('hidden');

  document.getElementById('btn-depoimento-1').classList.remove('active');
  document.getElementById('btn-depoimento-2').classList.remove('active');
  document.getElementById('btn-depoimento-3').classList.remove('active');

  document.getElementById('container-depoimento-' + depoimento).classList.remove('hidden');
  document.getElementById('btn-depoimento-' + depoimento).classList.add('active');

  console.log(depoimento)

  if(depoimento === 3) {
    console.log('chegou no 3')
  }
}

const htmlBotao = `
  <button onclick={abrirDepoimento(4)} class="" id="btn-depoimento-4" title="proximo depoimento" type="button">
    <span>4</span>
  </button>
`

function exibirBotao() {
  const container = document.getElementById('button-radio')
  container.insertAdjacentHTML('beforeend', htmlBotao)
}

  const button = document.getElementById('exibirBtn')
  button.addEventListener('click', exibirBotao)


  //* -------------------------------------------------------------------------------------

  const btnVerMais = document.getElementById('btn-ver-mais')

  let pizza = document.querySelectorAll('#pizza')

  btnVerMais = document.addEventListener('click', () => {
    pizza.forEach(element => {
      element.classList.remove('hidden')
    })
    btnVerMais.classList.add('hidden')

  })





    let btnEnviar = document.getElementById('enviar')

    let inputComentario = document.getElementById('inputComentario')
    let inputNome = document.getElementById('inputNome')


    let paragrafo = document.getElementById('paragrafo-comentario')

    btnEnviar.addEventListener('click', () => {
      let inputNomeValue = inputNome.value
      let inputComentarioValue = inputComentario.value
      localStorage.setItem('chave', inputComentarioValue, inputNomeValue)
      paragrafo.textContent = inputComentarioValue + inputNomeValue
    })

    const valor = localStorage.getItem('chave')
    if(valor) {
      paragrafo.textContent = valor
    }
