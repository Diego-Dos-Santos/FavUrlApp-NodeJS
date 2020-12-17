// APP MEMORIA ( Pequeña para saber la cantidad de memoria y el porcetaje de la misma )

const os = require("os");
const log = require('./logger')

//Función Global
setInterval(() => {
  // Desestructurar la variable al revés de dos, instaciamos en una
  const { freemem, totalmem } = os;

  const mem = parseInt(freemem() / 1024 / 1024);
  const total = parseInt(totalmem() / 1024 / 1024);
  const percents = parseInt((mem / total) * 100);

  const stats = {
    free: `${mem} MB`,
    total: `${total} MB`,
    usage: `${percents} %`,
  };
  console.clear()
  console.table(stats);

  log(`${JSON.stringify(stats)}\n`)
}, 1000);
