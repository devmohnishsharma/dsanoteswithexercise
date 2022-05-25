// Write two functions that finds the factorial of any number . One should use recursive approach and the other should use a for loop 

function fidnfactorialRecursive(number){
    // Code here 
    return answer
}

function findFactorialIterative(number){
    let answer = 1;
    if(number === 2){
        answer = 2;
    }
    for(i=2 ; i <=number ; i++){
        answer = answer*i
    }
    console.log(answer , "this is answer...");
    return answer
}

findFactorialIterative(5)