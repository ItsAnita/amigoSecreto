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