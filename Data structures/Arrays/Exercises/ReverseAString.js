//  Reverse a string in js 

// String -> "Hi I am Mohnish Sharma"

const string = "Hi I am Mohnish Sharma"

const stringToArray = string.split('')

console.log(stringToArray);

let reverseArr = []

for(let i = stringToArray.length-1 ; i >0 ; i--){
    console.log(stringToArray[i] , "this is the value of i");
    reverseArr.push(stringToArray[i])
}

console.log(reverseArr.join(''));


