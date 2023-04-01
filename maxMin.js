function findMaxMin(arr){
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return {max, min};
}
const arr = [23,54,67,87,23,45]
const result = findMaxMin(arr)
console.log(result);
