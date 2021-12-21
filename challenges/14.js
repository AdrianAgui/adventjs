/**
 * ¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

    Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

    👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

    👎 Lo malo: la lista está desordenada y podría faltar el último...

    Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:

    missingReindeer([0, 2, 3]) // -> 1
    missingReindeer([5, 6, 1, 2, 3, 7, 0]) // -> 4
    missingReindeer([0, 1]) // -> 2 (¡es el último el que falta!)
    missingReindeer([3, 0, 1]) // -> 2
    missingReindeer([9, 2, 3, 5, 6, 4, 7, 0, 1]) // -> 8
    missingReindeer([0]) // -> 1 (¡es el último el que falta!)
    Parece fácil con una complejidad de O(n)... ¿crees que podrías hacerlo mejor?
 */

export default function missingReindeer(ids) {
  const idsOrdered = ids.sort(function (a, b) {
    return a - b;
  });
  let previous = -1;

  const result =
    idsOrdered.find((num) => {
      if (num !== previous + 1) return num;
      previous = num;
    }) - 1;

  return result >= 0 ? result : ids.length;
}
