/**
 * ¡Es hora de poner el árbol de navidad en casa! 🎄

    Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

    Si le pasamos el argumento 5, se pintaría esto:

    ____*____
    ___***___
    __*****__
    _*******_
    *********
    ____#____
    ____#____
    Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
    Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

    Otro ejemplo con un árbol de altura 3:

    __*__
    _***_
    *****
    __#__
    __#__
    Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.
 */

export default function createXmasTree(height) {
  const treeTop = createTreeTop(height);
  const prunedTreeTop = pruneTree(treeTop);
  let tree =
    prunedTreeTop + "\n" + createTrunk(height) + "\n" + createTrunk(height);
  return tree;
}

function pruneTree(tree) {
  return tree
    .split("\n")
    .map((treeLine, index) => {
      if (index === 0) {
        return treeLine;
      }

      for (let j = 0; j < index; j++) {
        treeLine = treeLine.replaceAt(j, "_");
        treeLine = treeLine.replaceAt(treeLine.length - j - 1, "_");
      }

      if (!treeLine.includes("*")) {
        return;
      }

      return treeLine;
    })
    .reverse()
    .join("\n")
    .trim();
}

function createTreeTop(height) {
  const width = height * 2 - 1;
  let treeTop = "";

  for (let i = 0; i < height; i++) {
    treeTop = treeTop + "*".repeat(width) + "\n";
  }

  return treeTop;
}

function createTrunk(height) {
  return "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
}

String.prototype.replaceAt = function (index, replacement) {
  if (index >= this.length) {
    return this.valueOf();
  }
  return this.substring(0, index) + replacement + this.substring(index + 1);
};
