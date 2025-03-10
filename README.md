# Random

A support library for generating randomness.

## Installation

To install this function in your project, you can clone this repository.

### Clone the Repository

```bash
git clone https://github.com/chrisbrandt003/random.git
cd random
npm install
```

## Usage

The `indexOfWeightedValue` function allows you to select an index from a list of values with associated weights. It returns the index of a randomly selected value based on the weights provided in the input.

To use the `indexOfWeightedValue` function in your project:

### Example

```js
const { indexOfWeightedValue } = require('./random');

// Define an array of values with associated weights
const valueWeightMap = [
    ['A', 1], // 1 unit of weight for 'A'
    ['B', 3], // 3 units of weight for 'B'
    ['C', 6]  // 6 units of weight for 'C'
];

const selectedIndex = indexOfWeightedValue(valueWeightMap);

console.log(`The selected index is: ${selectedIndex}`);
```

### Explanation
- **`valueWeightMap`** is an array of tuples, where each tuple consists of a value (e.g., a string, number) and a weight (a number representing the relative chance of selecting that value).
- The function returns an index of the selected value based on the provided weights.

### Example Output

```bash
The selected index is: 2
```
