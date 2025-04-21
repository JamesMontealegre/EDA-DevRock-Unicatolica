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
// parte Humberto
  agregar(nombre, telefono) {
    const nuevo = new Nodo(nombre, telefono);

    if (!this.head) {
      // Si la lista está vacía
      this.head = this.tail = nuevo;
    } else {
      let actual = this.head;

      // Comparar y buscar dónde insertar el nuevo nodo según el orden alfabético
      while (actual && nuevo.nombre.localeCompare(actual.nombre) > 0) {
        actual = actual.next;
      }

      if (!actual) {
        // Insertar al final si no hay un nodo mayor
        this.tail.next = nuevo;
        nuevo.prev = this.tail;
        this.tail = nuevo;
      } else if (actual === this.head) {
        // Insertar al principio si el nuevo nodo es menor que el head
        nuevo.next = this.head;
        this.head.prev = nuevo;
        this.head = nuevo;
      } else {
        // Insertar en el medio
        const anterior = actual.prev;
        anterior.next = nuevo;
        nuevo.prev = anterior;
        nuevo.next = actual;
        actual.prev = nuevo;
      }
    }

    this.mostrar(); // Actualizar la tabla para reflejar los cambios
  }

  eliminarPorInicialYTelefono(inicial, telefono) {
    let actual = this.head;
    let eliminado = false;

    while (actual) {
      if (
        actual.nombre.trim().toLowerCase().startsWith(inicial.toLowerCase()) &&
        actual.telefono === telefono
      ) {
        if (actual === this.head) this.head = actual.next;
        if (actual === this.tail) this.tail = actual.prev;
        if (actual.prev) actual.prev.next = actual.next;
        if (actual.next) actual.next.prev = actual.prev;
        eliminado = true;
        break; // Solo elimina el primero que coincida
      }
      actual = actual.next;
    }

    if (eliminado) {
      alert("Contacto eliminado.");
    } else {
      alert("No se encontró ningún contacto con esa inicial y teléfono.");
    }

    this.mostrar();
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
