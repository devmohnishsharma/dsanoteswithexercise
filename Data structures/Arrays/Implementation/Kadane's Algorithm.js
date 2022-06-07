// This is the bruteforce way of solving it 

// const maxSumArray = (a)=>{
//    let max = 0;

//    for(let i=0 ; i < a.length ; i++){
//       for(let j = i ; j < a.length ; j++){
//          let sum = 0
//          for (let k = i ; k <= j ; k++){
//             sum += a[k]

//             if(max < sum){
//                max = sum
//             }
//          }
//       }
//    }
// }

// maxSumArray([1,2,3])


// THis is kadanes algorithms optimized solution with time complexity of o(n)

const maxSumArrayOptimizedApr  =(a)=>{
   let max = a[0] ;
   let curSum = a[0];

   for(let i=1 ; i< a.length ; i++){
      // curSum+a[i] > a[i] ? curSum = curSum+ a[i]: a[i]
      curSum = Math.max(a[i], curSum + a[i]);

      curSum > max ? max = curSum : max = max

   }
   return max
}

maxSumArrayOptimizedApr([-2,1,-3,4,-1,2,1,-5,4])






























































