let nombreAmigos = [];


function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
    if (nombre.trim() === '' || !isNaN(nombre.trim())) {
        alert('Por favor inserte un nombre');
        document.getElementById('amigo').value='';
        return;
    }
        nombreAmigos.push(nombre.trim());
        document.getElementById('amigo').value='';
        mostrarLista();

    }
function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    for (let i = 0; i <nombreAmigos.length; i++) {
        lista.innerHTML += `<li>${nombreAmigos[i]}</li>`;

    }
}

function sortearAmigo() {
    if (nombreAmigos.length === 0) {
        alert('No hay amigos para sortear');
        return; 
    }  let indiceAleatorio = Math.floor(Math.random() * nombreAmigos.length);
    let amigoSorteado = nombreAmigos[indiceAleatorio];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    let li = document.createElement('li');
    li.textContent = `El amigo sorteado es: ${amigoSorteado}`;
    resultado.appendChild(li);


    
}