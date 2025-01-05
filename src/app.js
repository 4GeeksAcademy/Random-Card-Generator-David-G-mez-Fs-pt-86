/* eslint-disable */
import "bootstrap";
import "./style.css";

const listaDeValores1 = [
  "A",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K"
];

const listaDeTipos1 = ["♠️", "♥️", "♦️", "♣️"];

const getValorAleatorio = () => {
  let random = Math.random();
  let item = Math.floor(random * listaDeValores1.length);
  return listaDeValores1[item];
};
const getTipoAleatorio = () => {
  let random2 = Math.random();
  let item2 = Math.floor(random2 * listaDeTipos1.length);
  return listaDeTipos1[item2];
};
const setValorAleatorio = valor => {
  document.querySelector("#valor1").innerHTML = valor;
};
const setTipoAleatorio = tipo => {
  document.querySelector("#tipo1").innerHTML = tipo;
  document.querySelector("#segundo-Tipo").innerHTML = tipo;
};

const generaUnaCartaAleatoria = () => {
  const valor = getValorAleatorio();
  const tipo = getTipoAleatorio();
  setValorAleatorio(valor);
  setTipoAleatorio(tipo);
};
window.generaUnaCartaAleatoria = generaUnaCartaAleatoria;
