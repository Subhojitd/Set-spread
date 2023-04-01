const prompt = require("prompt-sync")();
function removeDuplicates(arr) {
    return [...new Set(arr)];
}
  
// Example usage:
const input = prompt('Enter numbers separated by commas:');
const numbers = input.split(',').map(Number);
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);
  