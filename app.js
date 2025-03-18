let amigo = [];

function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nombreAmigo = inputAmigo.value;

  if (!nombreAmigo) {
    alert("¡Escribe un nombre!");
    return;
  }
  amigo.push(nombreAmigo);
  inputAmigo.value = "";
  inputAmigo.focus();
  listarAmigos();
}
function listarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigo.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigo[i];
    listaAmigos.appendChild(item);
  }
}