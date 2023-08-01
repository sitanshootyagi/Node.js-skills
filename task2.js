function sumOfIntegers(arr) {
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}


const inputArray = [1,3,5,7];
const result = sumOfIntegers(inputArray);
console.log("sum = ", result);

 


