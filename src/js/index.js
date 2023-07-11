/*  
Objetivo 1 - quando o usuário clicar no botão de veja o trailer, devemos abri a modal com o vídeo do trailer
    - passo 1 - dar um jeito de pegar o elemento  que representa o botão na tela usando o js

    - passo 2 - dar um jeito de identificar quando o usuário clicar no botão

    - passo 3 - dar um jeito de pegar o elemento da modal no js

    - passo 4 - abri a modal na tela


Objetivo 2 - quando o usuário clicar no X devemos fechar a modal
    - passo 1 - dar um jeito de pegar o elemnto de fechar modal usando o js
    - passo 2 - dar um jeito de identificar quando o usuário clicar no X
    - passo 3 - fechar a modal
   // quando fechar o botao vai trocar o src pra vazio

    toggle = alternar
*/

const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});


botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});
