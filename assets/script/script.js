function mostrarPesquisar() {
  const pesquisa = document.querySelector(".pesquisa");

  if (pesquisa.getAttribute("type") === "hidden") {
    pesquisa.setAttribute("type", "text");
  } else {
    pesquisa.setAttribute("type", "hidden");
  }
}

function mostrarMenu() {
  const menu = document.querySelector(".menu");

  if (menu.style.display == "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

// criar função para adicionar um zero a esquerda
function zeroAEsquerda(num) {
  if (num >= 10) {
    return num;
  } else {
    return "0" + num;
  }
}

//criar função para formatar do jeito brasileiro
function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());

  return `${dia}/${mes}/${ano}`;
}

// criar váriavel para data atual e para o dia
const data = new Date();
const dataBrasil = formataData(data);

// Pesquisar álbuns e faixas pelo nome
// Excluir uma faixa
// Excluir um álbum

// Ouvir as músicas - Bônus

// Criar variáveis de álbuns e faixas
const albuns = [];
const faixas = [];

function criarAlbum(nomeAlbum, descricaoAlbum) {
  return {
    nomeAlbum,
    descricaoAlbum,
    arrayFaixas: [],
    dataAlbum: dataBrasil,

    inserirFaixa(faixa) {
      faixas.push(faixa);
    },

    getNomeAlbum() {
      return nomeAlbum;
    },
  };
}

function criarFaixa(nomeFaixa, descricaoFaixa, letraFaixa) {
  return {
    nomeFaixa,
    descricaoFaixa,
    letraFaixa,
    dataFaixa: dataBrasil,
  };
}

//criar modelo 01 e 02
faixas.push(criarFaixa("Alma de boêmio", "3:15"));
faixas.push(criarFaixa("Teus beijos", ""));
albuns.push(criarAlbum("Rei do gado", "Feito em 1961"));
albuns.push(criarAlbum("Os reis do pagode", ""));

const album = new Object(albuns[0]);
const faixa1 = new Object(faixas[0]);
const faixa2 = new Object(faixas[1]);

album.arrayFaixas.push(faixa1);
album.arrayFaixas.push(faixa2);

const formFaixa = document.querySelector(".formFaixa");
const formAlbum = document.querySelector(".formAlbum");

// Adicionar um novo álbum
function inserirAlbum(nomeAlbum, descricaoAlbum) {
  const album = criarAlbum(nomeAlbum, descricaoAlbum);

  albuns.push(album);
}

// usar o button para realizar a ação, além de evitar que a página seja recarregada

const btnSalvarAlbum = document.querySelector(".btnSalvarAlbum");

btnSalvarAlbum.addEventListener("click", function (event) {
  event.preventDefault();

  inserirAlbum(formAlbum.nomeAlbum.value, formAlbum.descricaoAlbum.value);
});

function procurarIndice(array, atributo, valor) {
  let cont = 0;
  const indices = [];
  for (let i in array) {
    let row = array[i];
    if (row[atributo].includes(valor)) {
      indices.push(cont);
    }
    cont++;
  }
  return indices;
}

function pesquisarAlbumPorNome(nomeAlbum) {
  if (procurarIndice(albuns, "nomeAlbum", nomeAlbum) !== null) {
    const index = procurarIndice(albuns, "nomeAlbum", nomeAlbum);
    const albumPesquisa = new Object(albuns[index]);

    return albumPesquisa;
  } else {
    console.log("Álbum não encontrado");
  }
}

const pesquisa = document.querySelector(".pesquisa");



function pesquisarFaixaPorNome(nomeFaixa) {
  if (procurarIndice(faixas, "nomeFaixa", nomeFaixa) !== null) {
    const index = procurarIndice(faixas, "nomeFaixa", nomeFaixa);
    const faixaPesquisa = new Object(faixas[index]);

    return faixaPesquisa;
  } else {
    console.log("Álbum não encontrado");
  }
}

// Adicionar uma nova faixa em um álbum
function inserirFaixa(nomeFaixa, descricaoFaixa, letraFaixa) {
  const faixa = criarFaixa(nomeFaixa, descricaoFaixa, letraFaixa);

  faixas.push(faixa);
}

function inserirFaixaEmAlbum(faixaNome, albumNome) {
  const album = new Object(pesquisarAlbum(albumNome));
  const faixa = new Object(pesquisarFaixa(faixaNome));

  album.faixas.push(faixa);
}

const btnSalvarFaixa = document.querySelector(".btnSalvarFaixa");

btnSalvarFaixa.addEventListener("click", function (event) {
  event.preventDefault();

    inserirFaixa(formFaixa.nomeFaixa.value, formFaixa.descricaoFaixa.value)
});

// Ver listas de álbuns e faixas
function retornarTodosAlbuns() {
  const cont = document.querySelector(".container");
  const div = document.createElement("div");

  for (let i = 0; i < albuns.length; i++) {
    let albumDiv = document.createElement("div");
    let p = document.createElement("p");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let button = document.createElement("button");

    const album = albuns[i];

    p.innerHTML = album.nomeAlbum;
    p1.innerHTML = album.descricaoAlbum;
    p2.innerHTML = album.dataAlbum;
    button.innerHTML = 'Inserir Faixas';

    albumDiv.appendChild(p);
    albumDiv.appendChild(p1);
    albumDiv.appendChild(p2);
    albumDiv.appendChild(button);
    div.appendChild(albumDiv);
  }
  cont.appendChild(div);
}

function retornarTodasFaixas() {
  const cont = document.querySelector(".container");
  const div = document.createElement("div");

  for (let i = 0; i < faixas.length; i++) {
    let albumDiv = document.createElement("div");
    let p = document.createElement("p");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let button = document.createElement("button");

    const faixa = faixas[i];

    p.innerHTML = faixa.nomeFaixa;
    p1.innerHTML = faixa.descricaoFaixa;
    p2.innerHTML = faixa.dataFaixa;
    button.innerHTML = 'Inserir Faixas';

    albumDiv.appendChild(p);
    albumDiv.appendChild(p1);
    albumDiv.appendChild(p2);
    albumDiv.appendChild(button);
    div.appendChild(albumDiv);
  }
  cont.appendChild(div);
}