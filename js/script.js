// Pour chaque question, implémentez la fonction demandée.
// Pour chaque fonction, faire au moins 2 appels de la fonction avec des paramètres différents et afficher les résultats dans la console.

/* ------------------------------------------------------*/

console.log("1/ Implémentez une fonction qui retourne la somme de ses 2 paramètres.");

function getSum (a, b) {
    return a + b;
}

console.log(getSum(4, 8));
console.log(getSum(10, 4));


/* ------------------------------------------------------*/

console.log("2/ Implémentez une fonction qui retourne la plus petite des 2 valeurs passées en paramètre.");

function getMinValue(a, b) {
    if (a < b) {
        return a;
    }
    return b;
}

console.log(getMinValue(8, 100));
console.log(getMinValue(50, 14));


/* ------------------------------------------------------*/

console.log("3/ Implémentez une fonction qui retourne la dernière valeur d'un tableau.");

/**
 * Get last value of an array
 * @param {array} Array 
 * @returns {value} Last value
 */
function getLastArrayValue(array) {
    return array[array.length - 1];
}

const arrayOne = [10, 5, 75, 63];
const arrayTwo = ["Luc", "John", "Bryan", "Laura"]

console.log(getLastArrayValue(arrayOne));
console.log(getLastArrayValue(arrayTwo));


/* ------------------------------------------------------*/

console.log("4/ Implémentez une fonction qui retourne la valeur en entrée augmentée d'un pourcentage d'augmentation.");

/**
 * Gives value increased of a percentage
 * @param {number} value 
 * @param {number} percentage 
 * @returns {number} 
 */
function getValuePercentageIncreased(value, percentage) {
    return value + value*percentage/100;
}

console.log(getValuePercentageIncreased(85, 100));
console.log(getValuePercentageIncreased(100, 25));

/* ------------------------------------------------------*/

console.log("5/ Implémentez une fonction qui retourne la valeur maximale entre 3 valeurs.");
/**
 * Get max value between three values
 * @param {*} a 
 * @param {*} b 
 * @param {*} c 
 * @returns 
 */
function getMaxValue (a, b, c) {
    return Math.max(a, b, c);
}

console.log(getMaxValue(50, 150, 75));
console.log();


/* ------------------------------------------------------*/

console.log("6/ Implémentez une fonction qui retourne la somme des valeurs d'un tableau.");

/**
 * Gets sum of an array values
 * @param {array} array 
 * @returns {number} 
 */
function getArraySum(array) {
    let sum = 0;
    for (const value of array) {
        sum+= value;
    }
    return sum;
}

const arrayThree = [14, 15, 45, 6];
const arrayFour = ["Luc", "John", "Bryan", "Laura"]


console.log(getArraySum(arrayThree));
console.log(getArraySum(arrayFour));


/* ------------------------------------------------------*/

console.log("7/ Implémentez une fonction qui retourne une valeur aléatoire ENTIERE entre 0 et un nombre.");

/**
 * Gets random value between 0 and a number
 * @param {number} number 
 * @returns {number} random number
 */
function getRandomValue(number) {
    return Math.floor((number + 1) * Math.random());
}

console.log(getRandomValue(1));
console.log(getRandomValue(560));


/* ------------------------------------------------------*/

console.log("8/ Implémentez une fonction qui retourne la moyenne des valeurs d'un tableau.");

/**
 * Gets average of an array values
 * @param {array} array - numbers only
 * @returns {number} - average
 */
function getArrayAverage(array) {
    let sum = 0;
    for (const value of array) {
        sum+= value;
    }
    return sum / array.length;
}

const arrayFive = [10, 15, 25, 35];
const arraySix = [154, 856, 123, 854];

console.log(getArrayAverage(arrayFive));
console.log(getArrayAverage(arraySix));


/* ------------------------------------------------------*/

console.log("9/ Implémentez une fonction qui retourne une durée en heures et minutes depuis une durée en minutes.");

console.log();
console.log();


/* ------------------------------------------------------*/

console.log("10/ Implémentez une fonction qui retourne la valeur minimale d'un tableau.");

/**
 * Gets min value of an array
 * @param {array} array - numbers only
 * @returns {number} min value of the array
 */
function getMinArrayValue(array) {

    let minValue;

    for (const value of array) {
        if (value < minValue || minValue === undefined) {
            minValue  = value;
        }
    }
    return minValue;
}

const arraySeven = [2, 75, 789, 354, 123];
const arrayEight = [452, 652, 84];

console.log(getMinArrayValue(arraySeven));
console.log(getMinArrayValue(arrayEight));


/* ------------------------------------------------------*/

console.log("11/ Implémentez une fonction qui retourne la clé d'un objet pour la valeur maximale .");

/**
 * Gets key with the max value
 * @param {object} object
 * @returns {key} Key with the max value
 */
function getMaxObjectKey(object) {

    let maxValue;

    for (const key in object) {
        if (object[key] > maxValue || maxValue === undefined){
            maxValue = object[key];
            keyMax = key;
        }
    }
    return keyMax;
}

const objectArrayOne = {
    Nicolas: 900,
    Samir: 857,
    Tom: 483,
    Loanne: 1000,
  };

  const objectArrayTwo = {
    Nicolas: 1200,
    Samir: 857,
    Tom: 4000,
    Loanne: 1000,
  };

console.log(getMaxObjectKey(objectArrayOne));
console.log(getMaxObjectKey(objectArrayTwo));


/* ------------------------------------------------------*/

console.log("12/ Implémentez une fonction qui retourne une valeur aléatoire dans un tableau.");

console.log();
console.log();


/* ------------------------------------------------------*/

console.log("13/ Implémentez une fonction qui retourne le nombre de mots dans un texte.");

console.log();
console.log();