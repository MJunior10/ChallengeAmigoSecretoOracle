//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo(){
  let amigoInserido = document.querySelector("input").value;
  console.log(amigoInserido);
  
  if (amigoInserido == ""){
    alert("Por favor, insira um nome");
    return;
  }
  if(amigos.includes(amigoInserido)){
    alert("Este nome já foi inserido");
    return;
  }
  amigos.push(amigoInserido);
  limparCampo();
  listaAmigos();
}

function listaAmigos(){
  let lista = document.querySelector("#listaAmigos");
  lista.innerHTML = "";
  for(let i=0; i<amigos.length; i++){
    let itemLista = document.createElement("li");
    itemLista.innerHTML = amigos[i];
    lista.appendChild(itemLista);
  }
}
function sortearAmigo(){
    if (amigos.length == 0){
        alert("Lista de amigos vazia"); 
      return;
    }else{
        let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
        document.getElementById("resultado").innerHTML = "Amigo Sorteado: " + amigoSorteado;      
    }
}

function limparCampo(){
  document.querySelector("input").value = "";
}
  
