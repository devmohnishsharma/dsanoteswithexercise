//  Fibonacci Problem using both recursion and iterative approach .

// 0,1,1,2,3,5,8,13,21,34,55,89,144 ...
// the pattern of the sequence is that each value is the sum of 2 previous values , that means that for N=5 -> 2+3

function fibinacciIterative(n){
    // Code here 

    let arr = [0,1]
    for(let i =2 ; i<n+1 ;i++){
        arr.push(arr[i-2 + arr[i-1]]);
    }
    return arr[n]
}

fibinacciIterative(3)

function fibinacciRecursive(n){
    if(n<2){
        return n
    }
    return fibinacciRecursive(n-1) + fibinacciRecursive(n-2)
}

console.log(fibinacciRecursive(10) , "this is fibonacci sequence,,,");