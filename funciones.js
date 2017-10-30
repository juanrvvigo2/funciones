/**
 * 
 * @file  Resumen de funciones en javascript
 * @author Juan Rodriguez
 * @version 0.1
 */

/**
 * @description piramideMediaInversa
 * @example 012345
 * @example 01234
 * @example 0123
 * @example 012
 * @example 01
 * @example 1
 
 *           
 * @param {number} altura Altura de la pirámide
 * @returns {void} Muestra en consola una media pirámide inversa
 */
function piramideMediaInversa(altura) {
    for (let i = 0; i < altura; i++) {
        let linea = "";
        for (let j = altura - i; j >= 0; j--) {
            linea = linea + j;
        }
        console.log(linea);
    }
    console.log(0);
}
/**
 * @description piramideMedia 
 * @param {number} altura Altura de la pirámide

 * @returns {void} Muestra en consola una pirámide partida por la mitad
 */

function piramideMedia(altura) {
    let contador = 0;
    for (let i = 0; i <= altura; i++) {
        let linea = "";
        for (let j = altura - i; j > 0; j--) {
            linea = linea + " ";
        }
        for (let k = i; k >= 0; k--) {
            linea = linea + k;
        }
        console.log(linea);
    }
}

/**
 * @description piramide
@example        10
@example       210
@example      3210
@example     43210
@example    543210
@example   6543210
@example  76543210
@example 876543210
 * @param {number} altura Altura de la pirámide 
 * @returns {void} Muestra en consola una pirámide completa en dos dimensiones
 */
function piramide(altura) {
    let contador = 0;
    for (let i = 0; i <= altura; i++) {
        let linea = "";
        for (let j = altura - i; j > 0; j--) {
            linea = linea + " ";
        }
        for (let j = i; j >= 0; j--) {
            linea = linea + j;
        }
        if (i > 0) {
            for (let j = 1; j <= i; j++) {
                linea = linea + j;
            }
        }
        console.log(linea);
    }
}

/**
 * @description piramideAsteriscos Función que muestra por consola una pirámide de asteriscos
 * @example     *
 * @example    ***
 * @example   *****
 * @example  *******
 * @example *********
 
 *           
 * @param {number} altura Altura de la pirámide de asteriscos
 * @returns {void} piramide de asteriscos
 */
function piramideAsteriscos(altura) {
    let contador = 0;
    for (let i = 0; i <= altura; i++) {
        let linea = "";
        for (let j = altura - i; j > 0; j--) {
            linea = linea + " ";
        }
        for (let j = i; j >= 0; j--) {
            linea = linea + "*";
        }
        if (i > 0) {
            for (let j = 1; j <= i; j++) {
                linea = linea + "*";
            }
        }
        console.log(linea);

    }
}


piramideMediaInversa(8);
piramideMedia(8);
piramide(8);
piramideAsteriscos(8);
