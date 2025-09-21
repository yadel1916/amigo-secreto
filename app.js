// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  // Validación: que no esté vacío
  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Agregar al array
  amigos.push(nombre);

  // Limpiar el campo de texto
  input.value = "";

  // Mostrar la lista actualizada
  mostrarAmigos();
}

// Función para mostrar la lista en el <ul> del HTML
function mostrarAmigos() {
  let lista = document.getElementById("listaAmigos");

  // Limpiar lista antes de volver a renderizar
  lista.innerHTML = "";

  // Recorrer el array y agregar cada amigo como <li>
  amigos.forEach((amigo) => {
    let li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
  let resultado = document.getElementById("resultado");

  // Validar que haya amigos en la lista
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  // Generar un índice aleatorio
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el amigo sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar resultado en el <ul> de resultado
  resultado.innerHTML = `<li>🎉 Amigo sorteado: ${amigoSorteado}</li>`;
}