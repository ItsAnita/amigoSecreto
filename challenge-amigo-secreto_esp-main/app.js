// Array para almacenar los nombres de los amigos
let amigos = [];

// Funcion para agregar un amigo a la lista
function agregarAmigo(){
    //Capturar el valor del campo de entrada
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();
    
    // Validar la entrada
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos
    amigos.push(nombreAmigo);
    console.log('Nombres: ', amigos);
    
    // Limpiar el campo de entrada
    inputAmigo.value = '';
    
    // Enfocar nuevamente el campo para facilitar añadir más amigos
    inputAmigo.focus();

    // Actualizar la lista visual
    actualizarListaAmigos();
}

// Función para actualizar la lista visual de amigos
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigosElement = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigosElement.innerHTML = '';
    
    // Iterar sobre el arreglo de amigos y crear los elementos de la lista
    amigos.forEach(amigo => {
        const itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigosElement.appendChild(itemLista);
    });
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
    // Verificar que haya amigos disponibles para sortear
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Por favor, añade al menos un nombre.');
        return;
    }
    
    // Generar un índice aleatorio entre 0 y la longitud del array - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el amigo sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en la página
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = '';
    
    const itemResultado = document.createElement('li');
    itemResultado.textContent = `¡El amigo secreto sorteado es: ${amigoSorteado}!`;
    itemResultado.classList.add('resultado-sorteado');
    
    resultadoElement.appendChild(itemResultado);
}