function extractElements(arr){
    const[first, second, , , last] = arr;
    return[first, second, last]
}
const arr = [1, 2, 3, 4, 5, 6]
const extracted = extractElements(arr)
console.log(extracted);