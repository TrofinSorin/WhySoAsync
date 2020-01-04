var array = ['John', 'Arianna', 'Alex'];

// Pushing an item into array

array.push('Newitem');

// CTRL + ALT + W + Arrows;

// Removes the last item of the array

var removedItem = array.pop();

// Unshift - Add a new item at the beginning of the array

array.unshift('NewItemAtTheBeggining')

// Shift - Which removes the first item

array.shift();

// SPLICE- Insert new item at a specific index, or remove it

array.splice(2, 1, 'NewAlex');

// SLICE

var newArray = array.slice(2, 3);

// CONCAT

var array1 = [10, 20, 30];
var array2 = [40, 50 ,60];

var newNumbersArray = array1.concat(array2);

// FOR EACH

newNumbersArray.forEach((item) => {
  // console.log('item:', item)
})

// INDEX OF 

var indexOf = newNumbersArray.indexOf(50);

// FIND


var findItem = newNumbersArray.find((item) => {
  return item < 20
})

// FILTER

var filteredArray = newNumbersArray.filter((item) => {
  return item > 20;
})

// MAP

var mappedArray = newNumbersArray.map((item) => {
  return item * 20;
})


// SORT

var sortedArray = newNumbersArray.sort(function(a, b) {
  return b - a
})


// REVERSE

var reversedArray = sortedArray.reverse();

// REDUCE

var reduce = sortedArray.reduce((sum, current) => sum + current, 0);

// IS ARRAY

// console.log(Array.isArray([]));

// INCLUDES

// console.log(sortedArray.includes(20));

// SPLIT AND JOIN

var name = 'John';

// console.log(name.split('').join(','));

// SOME

console.log('sortedArray:', sortedArray)
// console.log(sortedArray.some((item) => item > 100));

// EVERY

console.log(sortedArray.every((item) => item > 5));
