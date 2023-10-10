function mergeSort(arr){
    // Base case: If the array has 0 or 1 elements, it's already sorted
    if(arr.length <= 1){
        return arr
    }

    // Split the array into two halves
    const middle = Math.floor(arr.length/2)
    const leftHalf = arr.slice(0, middle)
    const rightHalf = arr.slice(middle)

    // Recursively sort both halves
    const leftSorted = mergeSort(leftHalf)
    const rightSorted = mergeSort(rightHalf)
    
    // merge the sorted halves
    return merge(leftSorted, rightSorted)
}

function merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    // compare elements from both arrays and push the smaller one into the result array
    while (leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++
        } else {
            result.push(right[rightIndex]);
            rightIndex++
        }
    }
    // concatenate any remaining elements from both arrays (if any)
    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// example
const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);