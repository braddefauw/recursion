function fibs(n) {
    // first handle the cases where 'n' is less than or equal to 0, 1 or 2 separately
    if (n <= 0){
        return [];
    }else if (n === 1){
        return [0]
    }else if (n === 2){
        return [0, 1];
    }else{
        //for 'n' greater than 2, use a loop to calculate the fibonacci numbers 
        // iteratively and store them in an array, which is then returned
        const result = [0, 1];
        for(let i = 2; i < n; i++){
            const nextFib = result[i-1] + result[i-2];
            result.push(nextFib);
        }
        return result;
    }
}

// example usage
const fibArray = fibs(8)
console.log(fibArray)

function fibsRec(n){
    // first handle the cases where 'n' is less than or equal to 0, 1 or 2 separately
    if (n <= 0){
        return [];
    }else if (n === 1){
        return [0]
    }else if (n === 2){
        return [0, 1];
    }else{
        // for n greater than 2, the function calls itself recursively to generate the Fibonacci numbers up to 'n-1'
        const prevFibs = fibsRec(n-1)
        // then calculates the next Fibonacci number by adding the last two numbers in the previously generated array
        const nextFib = prevFibs(prevFibs.length - 1) + prevFibs(prevFibs.length - 2)
        // combines the results into a new array and returns it
        return [...prevFibs, nextFib]
    }
}

// example usage
const fibArrayAgain = fibs(8)
console.log(fibArrayAgain)