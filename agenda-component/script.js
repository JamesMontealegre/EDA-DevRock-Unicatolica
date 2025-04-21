//Parte Cristhian
class Nodo {
  constructor(nombre, telefono) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.next = null;
    this.prev = null;
  }
}

class ListaDoble {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  
}


const agenda = new ListaDoble();

document.getElementById("addBtn").addEventListener("click", () => {
  const nombre = document.getElementById("nombreInput").value.trim();
  const telefono = document.getElementById("telefonoInput").value.trim();
  if (nombre && telefono) {
    agenda.agregar(nombre, telefono);
    document.getElementById("nombreInput").value = "";
    document.getElementById("telefonoInput").value = "";
  } else {
    alert("Debe ingresar ambos campos");
  }
});

document.getElementById("searchBtn").addEventListener("click", () => {
  const nombre = prompt("Ingrese el nombre a buscar").trim();
  if (nombre) agenda.buscar(nombre);
});

document.getElementById("deleteBtn").addEventListener("click", () => {
  const inicial = prompt("Ingrese la primera letra del nombre").trim();
  const telefono = prompt("Ingrese el número de teléfono").trim();
  if (inicial && telefono) {
    agenda.eliminarPorInicialYTelefono(inicial, telefono);
  } else {
    alert("Debe ingresar ambos datos");
  }
});