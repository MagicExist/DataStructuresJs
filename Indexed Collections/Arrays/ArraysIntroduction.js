// Creating an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Diferents Way to iterate in a array
//Simple For
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// This for is better if you only wants to work with the elements from an array
for (let element of numbers) {
  console.log(element);
}

// This for applies a function in each array element
numbers.forEach((element) => {
  console.log(element);
});

//Trying to reverse iterate in an array

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}

//Another way
//Here the difference is that reverse function modifies the hole array and change its elements in place
numbers.reverse().forEach((element) => {
  console.log(element);
});
