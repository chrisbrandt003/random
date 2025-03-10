const Random = require('../random');

let weightedValues = [['A', 3], ['B', 3], ['C', 3]]; // equal probability for each
let i = Random.indexOfWeightedValue(weightedValues);

console.log(`The index of your weightedValue is ${i}, and can be found by \`weightedValues[i][0]\``);