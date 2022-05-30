//  TUtorial point solution...

const arr = [-2, -3, 4, -1, -2, 1, 5, -3];
const maximumSubarray = (arr = []) => {
   let max = -Infinity;
   let currentSum = 0;
   let maxStartIndex = 0;
   let maxEndIndex = arr.length - 1;
   let currentStartIndex = 0;
   arr.forEach((currentNumber, currentIndex) => {
      currentSum += currentNumber;
      if (max < currentSum) {
         max = currentSum;
         maxStartIndex = currentStartIndex;
         maxEndIndex = currentIndex;
      }
      if (currentSum < 0) {
         currentSum = 0;
         currentStartIndex = currentIndex + 1;
      }
   });
   return arr.slice(maxStartIndex, maxEndIndex + 1);
};
console.log(maximumSubarray(arr));
