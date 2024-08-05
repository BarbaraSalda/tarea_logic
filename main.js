//1
/*Write a program that prompts a user for their data: username, age, and a list of their favorite movies. Store the information and then showcase it in the console. Take note that the output for the films should add a small message like: 'The film {film} is one of my favorites'.*/

function datosUsuario() {
    let nombre = prompt("Ingrese su nombre de usuario:");
    let edad = parseInt(prompt("Ingrese su edad:")); //parseInt para convertir una cadena de texto a un número entero
    let peliculasFavoritas = []; //almacenamos la lista de películas en un array
    
    while(true) {//este tipo de bucle infinito se ejecutaá hasta que se tope con un While
        let pelicula = prompt("Ingrese un nombre de película favorita. Cuando termine ingrese 'listo!':");
        
        if(pelicula.toLowerCase() === 'listo!') { /*El método toLowerCase se usa comúnmente en situaciones donde necesitas asegurarte de que la comparación de cadenas sea insensible a mayúsculas y minúsculas.  */
            break; // Sale del bucle cuando el usuario ingresa "listo!"
        }
        
        peliculasFavoritas.push(pelicula); // Agrega la película a la lista de películas favoritas
}
    
    console.log(`Hola ${nombre}! Tu edad es ${edad} años.`);
    console.log("Mis películas favoritas son:");
    
    peliculasFavoritas.forEach(pelicula => {
        console.log(`La película  ${pelicula} es una de mis favoritas.`);
    });
}/*Se imprime un saludo con el nombre y la edad del usuario, un mensaje indicando que se mostrarán las películas favoritas y se itera sobre el arreglo peliculasFavoritas usando forEach y se imprime cada película. */

datosUsuario();

/*La función datosUsuario() pide al usuario que ingrese su nombre, edad, y una lista de películas favoritas. Luego, muestra el nombre y la edad del usuario en la consola, y para cada película en la lista, muestra un mensaje indicando que es una de sus favoritas. */

//2°
/*Número más alto
Escribe un programa que pida 10 números. Utilizando operadores lógicos y cualquier otra función o estructura de JavaScript que hayas visto antes, determina y genera el mayor de esos números. */

function mayorNumero() {
    let numeros = [];//almaceno mis números
    
    for(let i = 0; i < 10; i++) { //se realizaran 10 iteraciones
        let numero = parseInt(prompt(`Ingrese un número ${i+1}:`));//pedir al usuario un número y pasarlo a un  núemro entero
        numeros.push(numero); //Para agregar un núemro al final de la lista
    }
    
    let mayor = numeros[0]; //// Inicializar `mayor` con el primer número del arreglo
    
    for(let i = 1; i < numeros.length; i++) {//iteramos desde 1 hasta lo largo de la cadena de números
        if(numeros[i] > mayor) { //comparación
            mayor = numeros[i];//Nos vamos moviendo según sea la situación
        }
    }
    
    console.log(`El número mayor ingresado es: ${mayor}`);
}       

//3°
/*Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time. */

function alarma() {
    let segundos = parseInt(prompt("Ingrese la cantidad de segundos hasta que suene la alarma:"));/*Se usa prompt para solicitar al usuario la cantidad de segundos hasta que suene la alarma. */
    
    let intervalo = setInterval(() => {//setInterval es útil para tareas que necesitan repetirse en intervalos regulares, como actualizaciones de estado.// se usa para ejecutar una función cada 1000 milisegundos (1 segundo).
        segundos--;//hay una decrementación
        
        if(segundos < 0) {
            clearInterval(intervalo); // Detener el intervalo cuando los segundos sean 0
            alert("alarma!!!");//se detiene el intervalo y se muestra la alarmaa
        } else {
            console.log(`${segundos} para que se muestre la alarma.`);//se imprimen la cantidad de segundos restantes
        }
    }, 1000);
}
alarma();

//4°
/*Escribe un programa que te pida que introduzcas una palabra o frase (puede estar en mayúsculas, tener espacios y signos de puntuación). Determina si la frase o palabra es un palíndromo o no. Ignora los signos de puntuación, los espacios y las letras mayúsculas.*/

function esPalindromo() {
    let frase = prompt("Ingrese una frase o palabra:");
    let sinSignos = frase.toLowerCase().replace(/[\W_]/g, '');/*El método toLowerCase se usa comúnmente en situaciones donde necesitas asegurarte de que la comparación de cadenas sea insensible a mayúsculas y minúsculas.  */
    
    let esPalindromo = sinSignos === sinSignos.split('').reverse().join('');//Compara las cadenas
    
    if(esPalindromo) {
        console.log("Es un palíndromo.");//imprime esto
    } else {
        console.log("no es un palíndromo.");//sino esto si no es palindromo
    }
}

esPalindromo();



//5°
//Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

function factorial(n) {
    if (n < 1) {// verifica y devuelve el error
        return "El número debe ser 1 o mayor.";
    }
    if (n === 1) { //porue factorial de 1 es 1
        return 1;
    }
    return n * factorial(n - 1); //  n x factorial(n - 1)
}
function calcularFactorial() {
    let input = prompt("Ingrese un número positivo (n >= 1):"); //para que el usuario ingrese un núemro positicvo y entero
    let numero = parseInt(input); //para verificar esi el numero es entero y positivo
    if (Number.isNaN(numero) || numero < 1) {
        console.log("Por favor, ingrese un número entero positivo.");//marca un error y pide qeu ingrese  un numero positivo y entero correctamente
    } else {
        let resultado = factorial(numero);
        console.log(`El factorial de ${numero} es: ${resultado}`);
    }
}
calcularFactorial();//se muestra el resultado 

//6°
/*Matriz plana Escriba un programa que tome la siguiente matriz anidada y la aplane (la convierta en una matriz unidimensional). Utilice cualquier tipo de algoritmo que desee, como devoluciones de llamadas, recursión, etc.
ejemplo: let multiDimension = [1, [2, 3, [4, 5, [6]]]]; */

function aplanarMatriz(matriz) {
    let resultado = []; //matriz vacía que ira recolectando los resyltados
    function aplanar(elemento) {//se verifica si el elemento es una matriz
        if (Array.isArray(elemento)) {
            for (let i = 0; i < elemento.length; i++) {
                aplanar(elemento[i]);//la función aplanar se llamará así misma para cada elemento si es una matriz
            }
        } else {
            resultado.push(elemento); // Se agrega directamente al resultado si no es una matriz
        }
    }

    aplanar(matriz);
    return resultado;
}

let multiDimension = [1, [2, 3, [4, 5, [6]]]]; //ejemplod ematriz anidada
let matrizAplanada = aplanarMatriz(multiDimension);// la versión unidimensional

console.log("La matriz aplanada es:", matrizAplanada);//resultadoo



















