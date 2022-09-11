// Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
    const url = location.href; //pegando a informação da url
    const href = link.href; //pegando a informação do link.
 
    
    if (url.includes(href)) { //verificando se o url inclu algo do href
        link.classList.add("ativo");
    }

}

links.forEach(ativarLink); //chamando a função ativarLink para cada um dos links de .header-menu 

// Ativar itens do orçamento

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
    const elemento = document.getElementById(parametro); //pegando o elemento pela id
    if(elemento) { //se elemento existir, ou seja, for true
        elemento.checked = true; //então elemento vai ficar marcado/checked
    }
}

parametros.forEach(ativarProduto);

//perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(event) {
    const pergunta = event.currentTarget; //puxar qual o elemento estamos clicando
    const controls = pergunta.getAttribute('aria-controls');
    const resposta = document.getElementById(controls);

    resposta.classList.toggle('ativa');
    const ativa = resposta.classList.contains("ativa"); //verificando se resposta já tem a classe 'ativa'
    console.log(ativa);
    pergunta.setAttribute('aria-expanded', ativa); //setando o valor true no atributo
    
}

function eventosPerguntas(pergunta) {
    pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);

// Galeria de Bicicletas
const galeria = document.querySelectorAll('.bicicleta-imagens img'); //selecionando todas as imagens da galeria
const galeriaContainer = document.querySelector('.bicicleta-imagens'); //selecionando o container da galeria

function trocarImagem(event) {
    const img = event.currentTarget;
    const media = window.matchMedia('(min-width: 1000px)').matches; //verificando se está acima ou abaixo de 1000px;
    if(media) {
        galeriaContainer.prepend(img);
    }   
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}


galeria.forEach(eventosGaleria);

//Animação
if(window.SimpleAnime) { //se existir o plugin chamado no HTML, então o ativamos 
    new window.SimpleAnime();
}
