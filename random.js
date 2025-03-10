function indexOfWeightedValue(valueWeightMap) {
    const totalWeight = valueWeightMap.reduce((sum, valueWeight) => sum + valueWeight[1], 0);

    const random = Math.random() * totalWeight;

    let cumulativeWeight = 0;
    let index = -1;

    for (let i = 0; i < valueWeightMap.length; i++) {
        cumulativeWeight += valueWeightMap[i][1];
        if (random < cumulativeWeight) {
            index = i;
            break;
        }
    }

    return index;
}

module.exports = {
    indexOfWeightedValue
};
