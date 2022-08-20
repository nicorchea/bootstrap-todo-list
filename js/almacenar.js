"use strict";

// Alerta en caso de que el input este vacio

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
}

//* Pauta

//* 1 - Realicen las modificaciones necesarias para que al pulsar el botón Agregar, y si hay contenido en el campo para añadir nuevos ítems:

//* Se agregue el nuevo ítem al listado guardado
//* Se actualice la vista del listado
//* Se limpie el campo para añadir nuevos ítems

//* 2 - El contenido del listado (y su visualización) deben mantenerse aún cuando el navegador se cierre y se vuelva a abrir.

//* 3 - Realicen las modificaciones necesarias para que al pulsar el botón Limpiar:

//* Se elimine el listado almacenado
//* Se actualice la vista del listado (ahora vacío)

// * ---------- DOM ----------

const btn_agregar = document.getElementById("agregar");

const btn_limpiar = document.getElementById("limpiar");

const item = document.getElementById("item");

const cont_items = document.getElementById("contenedor");

// * ---------- BOTONES ----------

// AL CLICKEAR BOTON AGREGAR
btn_agregar.onclick = () => {
  if (item.value === "") {
    showAlertError();
    return;
  }
  addItem(item.value);
  item.value = "";
};

// AL CLICKEAR BOTON LIMPIAR
btn_limpiar.onclick = () => {
  localStorage.clear();
  location.reload();
};

//* ---------- LOCAL STORAGE ----------

// Se inicia un cotador en 0 y una lista vacia
let counter = 0;
let items_list = [];

// Setea el contador en el local storage
const setCounter = () => {
  localStorage.setItem("counter", counter);
};

// Se utiliza para inicializar el contador al cargar la pagina
const initializeCounter = () => {
  counter = getCounter();
};

// Setea la lista items_list en el local storage
const setItemList = () => {
  localStorage.setItem("items_list", JSON.stringify(items_list));
  addToHTML();
};

// Metodo getter que obtiene los datos del contador local storage
const getCounter = () => {
  const cont = localStorage.getItem("counter");
  return cont;
};

// Metodo getter que obtiene los datos de la lista del local storage
const getItemList = () => {
  // Se ejecuta setCounter() para amuentar el contador por item ingresado
  setCounter();
  const list = JSON.parse(localStorage.getItem("items_list"));
  return list;
};

// Agrega items a la lista del local storage y aumenta el contador previamente declarado en 1
const addItem = (description) => {
  counter++;
  let objItem = {
    id: counter,
    description: description,
  };

  if (getItemList() != null) {
    items_list = getItemList();
  }

  items_list.push(objItem);
  setItemList();
};

//Añade el item al contenedor del HTML
const addToHTML = () => {
  cont_items.innerHTML = "";

  if (getItemList() != null) {
    for (let item of getItemList()) {
      cont_items.innerHTML += `<li id="${item.id}" class="list-group-item list-group-item-action
  ">${item.description} </li> `;
    }
  }
};

// * ---------- INICIADORES ----------

// Iniciadores necesarios para mostrar los datos guardados luego de recargar o cerar el navegador
initializeCounter();
addToHTML();

// Algunas de las funciones no son necesarias de momento pero permitiran agregar mas funciones a la pagina en un futuro

// Realizado por: Joaquín Arnold Leivas
//                Nicolas Silva Augustyniak
