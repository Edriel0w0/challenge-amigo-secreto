// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    const listaAmigos = document.getElementById("listaAmigos");

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    amigos.push(nombre);
    
    // Crear un nuevo elemento de lista y agregarlo al DOM
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombre;
    listaAmigos.appendChild(nuevoElemento);
    
    // Limpiar el campo de entrada
    input.value = "";
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSeleccionado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la lista de resultado
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>El amigo secreto sorteado es: <strong>${amigoSeleccionado}</strong></li>`;
    
    // Limpiar la lista de amigos visualmente y vaciar el array
    document.getElementById("listaAmigos").innerHTML = "";
    amigos = [];
}
