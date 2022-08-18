"use strict";

// Alerta en caso de que el input este vacio

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

// Pauta

// 1 - Realicen las modificaciones necesarias para que al pulsar el botón Agregar, y si hay contenido en el campo para añadir nuevos ítems:

// Se agregue el nuevo ítem al listado guardado
// Se actualice la vista del listado
// Se limpie el campo para añadir nuevos ítems

// 2 - El contenido del listado (y su visualización) deben mantenerse aún cuando el navegador se cierre y se vuelva a abrir.

// 3 - Realicen las modificaciones necesarias para que al pulsar el botón Limpiar:

// Se elimine el listado almacenado
// Se actualice la vista del listado (ahora vacío)

// Entidad del html donde se va a cargar la lista
const contenedor = document.getElementById("contenedor");

// Se inicia la lista vacia
let itemList = [];

// La funcionalidad se implementa al hacer click en el boton agregar
agregar.addEventListener("click", function () {
  clearList();

  const input = document.getElementById("item");

  if (input.value === "") {
    showAlertError();
    return;
  }

  itemList.push(input.value);
  addToList();

  input.value = "";
});

// Funcion que hace un loop entre los items de la lista y los muetra en pantalla
function addToList() {
  if (itemList.length > 0) {
    itemList.forEach((item) => {
      contenedor.innerHTML += `<li class="list-group-item list-group-item-action
      ">${item}</li>`;
    });
  }
}

function clearList() {
  contenedor.innerHTML = "";
}

// limpiar.addEventListener("click", function () {
//   // limpiar lista y storage
// });
