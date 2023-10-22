const botonPacientes=document.querySelector('#botonPacientes')
botonPacientes.addEventListener('click',cargarPacientes)

function cargarPacientes(){
    const result=fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => cargar(json))

}

function cargar(datos){
    datos.forEach(element => {
        const {id,name,username,email, address: {street, suite, city}}=element
        //console.log(street)
    });

}