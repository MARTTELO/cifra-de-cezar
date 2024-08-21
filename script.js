const alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const seletor = document.getElementById("deslocamento");
const texto = document.getElementById("para-criptografar");
const botao = document.getElementById("botao");
const resposta = document.getElementById('resposta')
   
// criando o alfabeto no select
for (let i = 0; i < alfabeto.length; i++) {
    seletor.innerHTML = seletor.innerHTML + `<option value="${i}">${alfabeto[i]}</option>}`;
}

// criando evento do botão
botao.addEventListener("click", () => {
  //pega o texto dentro do input atraves da classe "para-criptografar"
  let textoPraCriptografar = texto.value;
  // pego o valor do deslocamento, tendo como referência a letra selecionada pelo select
  let deslocamento = +seletor.value;
  let cifrado = cifrar(textoPraCriptografar, deslocamento);
  resposta.classList.remove('invisivel')
  resposta.innerText = cifrado

})

//funcao recebe o texto do input e o valor do deslocamento do alfabeto
function cifrar(texto, deslocamento) {
  //tranforma o texto do input para maiusculo, para que seja conpativel com o array de alfabeto
  let textoMaiusculo = texto.toUpperCase().split("");
  //criando um novo array
  let textoCriptografado = [];
  //pegando o indice do alfabeto
  //criando um laço para percorter o texto do input pegando o indice e deslocando a posição segundo o que foi informado no select
  for (let i = 0; i < textoMaiusculo.length; i++) {
    let indicieDaLetra = alfabeto.indexOf(textoMaiusculo[i]);
    if (indicieDaLetra >= 0) {
      textoCriptografado.push(letraPorIndice(indicieDaLetra+deslocamento));
    } else {
      texto.textoCriptografado.push(textoMaiusculo[i]);
    }
  }
  return textoCriptografado.join("")
}

function letraPorIndice(indice) {
  let indiceFinal;
  if (indice >= 0) {
    indiceFinal = indice % alfabeto.length;
  } else {
    indiceFinal = alfabeto.length + indice % alfabeto.length;
  }
  return alfabeto[indiceFinal];
}
