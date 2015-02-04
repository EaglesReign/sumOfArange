//Phil Hofer
//2/3/2015
//sumOfArange.js
//This program takes the range of two numbers and calculates the sum of
//this range. 

//This function takes the range of two numbers and puts them into an array.
function range(start, end, step) {
  var nums = [];
  if (step == undefined) {
    for (var i=start;i<=end;i++) {
      nums.push(i);
    }
  } else {
    for (var i=start;i<=end;i+=step) {
      nums.push(i);
    }
  }
  return nums;
}

//This function sums up the numbers in an array and retruns the total.
function sum(arr) {
  var total = 0;
  for (var i=0;i<arr.length;i++) {
    total += arr[i];
    //console.log("This is total: " + total);
  }
  return total;
}

console.log(range(1,10));
console.log(sum(range(1, 10)));

console.log(range(1,10,2));
console.log(sum(range(1,10,2)));
