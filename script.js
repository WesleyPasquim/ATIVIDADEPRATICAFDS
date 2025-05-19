//Quando o usuário clicar no botaoMensagem, uma mensagem (por exemplo uma frase de motivação, saudação, boas vindas, etc.) deverá aparecer abaixo do botão.
let botaoMensagem = document.querySelector("#botaoMensagem");
let respostaBotaoMensagem = document.querySelector("#respostaBotaoMensagem");

botaoMensagem.addEventListener("click",Mensagem)

function Mensagem (){
    text= "Não desista do curso de Análise e Desenvolvimento de Sistemas! É um caminho desafiador, mas recompensador. Acredite no seu potencial, foque nos seus objetivos e lembre-se do porquê começou essa jornada. A persistência e a determinação são chaves para o sucesso!"
    respostaBotaoMensagem.innerHTML = text
};