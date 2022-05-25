//  Merge Sorted Arrays 

/**********************************************************************This is My Solution *************************************************************** */

const sortThisArray = [[1,2,4,9],[3,5,7,8]]

//  So Our first goal is to make this one array then we will try to sort this out . 

const newArr = []

for(let i = 0 ; i<=sortThisArray.length-1 ; i++){
    sortThisArray[i].map((item)=>{
        newArr.push(item)
    })
}
let sortedArray = []

for(let i=0 ; i<= newArr.length-1 ; i++){
    let howSmall = 0 ;
   for(let j=0 ; j <= newArr.length -1 ; j++){
    if(newArr[i] < newArr[j]){
       howSmall++
    }
   }
   sortedArray[howSmall] = newArr[i]
}

console.log(sortedArray , "trhis is our sorted array");


// This is Andre Solution***************************************************************

function mergeSortedArrays(array1 , array2){
    let mergedArray = []
    let array1Item = array1[0];
    let array2Item = array2[0]

    if(array1.length ===0){
        return array2
    }
    if(array2.length === 0){
        return array2
    } 

    while (array1Item || array2Item){
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item)
            array1Item = array1[i];
            i++;
        }else{
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++
        }
    }


    // check input 
}