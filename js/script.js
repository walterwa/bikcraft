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

