// O que precisamos fazer? - quando clicarmos no botão de troca de tema, temos que alterar a cor do tema da página para as cores do tema claro ou tema escuro

// -Objetivo 1 - Quando clicar no botão de troca de TextDecoderStream, adicionar a classe modo escuro no body para que os estilos do modo escuro sejam aplicados e mudar a imagem para lua

// -passo 1 - pegar no JS o elemento HTML correspondente ao botão de troca de tema
// -passo 2 - dar um jeito de pegar no JS o elemento HTML correnspondente ao body
// -passo 3 - dar um jeito de identificar o clique do usuário no botão de troca de tema
// -passo 4 - adicionar a classe modo-escuro no body
// -passo 5 - trocar a imagem do botão de alterar para lua

// - Objetivo 2 - quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe pra mudar pro modo claro e mudar imagem para o sol

// -passo- 6-verificar se o doby ja tem uma classe modo-escuro
// -passo- 7 - remover a classe do modo-escuro do body
// passo 8 - trocar a imagem do botão de alterar tema para sol

// getElementById - significa buscar elemento pelo id
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

// querySelector - consultar um seletor
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    body.classList.toggle("modo-escuro")

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
