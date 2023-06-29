const atracoes = document.querySelector('#list-atracoes');

function createAtracao([img,nome,url]){
    let code = `
        <a id="#foto-atracao" href="${url}" class="card-atracoes">
        <img src="${img}" alt="${nome}">
        <h6 id="#nome-atracao">${nome}</h6>
        </a>
    `;
    atracoes.innerHTML += code;
}

let praiaItapebussus = [
    "../riodasostras/praias/praiaitapebussus/foto_01.jpeg",
    "Praia de Itapebussus",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let praiaAreiasNegras = [
    "../riodasostras/praias/areiasnegras/foto_01.jpg",
    "Praia das Areias Negras",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let praiaJoana = [
    "../riodasostras/praias/praiajoana/foto_01.jpg",
    "Praia da Joana",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let praiaCemiterio = [
    "../riodasostras/praias/praiacemiterio/foto_01.jpg",
    "Praia do Cemitério",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let praiaVirgem = [
    "../riodasostras/praias/praiavirgem/foto_01.jpg",
    "Praia Virgem",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let praiaRemanso = [
    "../riodasostras/praias/praiaremanso/foto_01.jpg",
    "Praia do Remanso",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let praiaPedrinhas = [
    "../riodasostras/praias/praiapedrinhas/foto_01.jpg",
    "Praia das Pedrinhas",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let praiaEnseadaGaivotas = [
    "../riodasostras/praias/praiaenseadagaivotas/foto_01.jpg",
    "Praia da Enseada das Gaivotas",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let praiaMarNorte = [
    "../riodasostras/praias/praiamardonorte/foto_01.jpg",
    "Praia Mar do Norte",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let praiaCentro = [
    "../riodasostras/praias/praiacentro/foto_01.jpg",
    "Praia do Centro",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let praiaCostazul = [
    "../riodasostras/praias/praiacostazul/foto_01.jpg",
    "Praia Costazul",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let praiaAbrico = [
    "../riodasostras/praias/praiaabrico/foto_01.jpg",
    "Praia do Abricó",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let ilhaCosta = [
    "../riodasostras/praias/ilhacosta/foto_01.jpg",
    "Ilha do Costa",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

let lagoaIriry = [
    "../riodasostras/praias/lagoairiry/foto_01.jpg",
    "Lagoa do Iriry",
    "../riodasostras/praias/praiaitapebussus/index.html"
];

createAtracao(praiaItapebussus);
createAtracao(praiaAreiasNegras);
createAtracao(praiaJoana);
createAtracao(praiaCemiterio);
createAtracao(praiaVirgem);
createAtracao(praiaRemanso);
createAtracao(praiaPedrinhas);
createAtracao(praiaEnseadaGaivotas);
createAtracao(praiaMarNorte);
createAtracao(praiaCentro);
createAtracao(praiaCostazul);
createAtracao(praiaAbrico);
createAtracao(ilhaCosta);
createAtracao(lagoaIriry);
