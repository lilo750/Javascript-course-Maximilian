// Array like (string - nodeList for example ) vs iterable (normal array)
//array like defined as any obj has a  length and index properties
//normal array method => [] is better than this consturactor function method but the consturctor has it's own use cases

const arr1 = ['hi', 'bye', 'shaw']; //normal arr creation way
const arr = new Array('hi', 'bye', 'shaw'); //consturactor function way  //note that we can remove the new keyword no diffrence will happen

const str = 'hello lilo';
const lettersArr = Array.from(str); //Array.from(arrayLike) this convert the array like to real arr + this is one of use cases

// this form is called 2d array (array inside of array)
const data = [
    [5, 'ok'],
    ['yea', 5, 2, { name: 'khaled', age: 21 }],
];

//this is the way of how can i loop throw 2d array
for (const nestedArrays of data) {
    for (const element of nestedArrays) {
        // console.log(element);
    }
}

data.unshift(4); //add to the begging
data.shift(); //delete from the begging
data.push(4, 2); //add to the end
data.pop(); //delete from the end

// console.log(data);

//.splice() ==> add any thing to specific position in arr very easy
data.splice(-2, 1, 'here was an obj');
// console.log(data);

//.slice() ==> for ranges / taking a copy from the defined array only and not got effected by any change happen on it / taking a specific part of an array and save to another array
const arr2 = [1, 2, 3];
const arr3 = arr2.slice();
arr2.push(4);
// console.log(arr3);

const arr4 = arr2.slice(1); //starts from index 1 so it take from 2 to the end of the arr
// console.log(arr4);

//.concat() will take a copy from the arr and also add elements of arr without adding it as a single element to the original array
const arr5 = arr4.concat([5, 6, 7]);
// console.log(arr5);

//indexOf(value) - lastIndexOf(value) ==> return the idx of a specific value
// find(func) (will return the value) - findIndex(func) (will return the idx)

const four = arr5.indexOf(6); // 4
// console.log(four);

arr5.splice(3, 0, 2); //add 2 in index 3

const three = arr5.lastIndexOf(2); // 3
// console.log(three);

arr5.push({ name: 'khaled', age: 21 }, { name: 'Ali', age: 21 });

// console.log(arr5);

const khaledObj = arr5.find((value, idx, arr) => {
    return value.name === 'khaled';
});
const khaledIdx = arr5.findIndex((value, idx, arr) => {
    return value.name === 'khaled';
});

// map - forEach - sort - filter

const prices = [12, 54, 75, 67];

prices.forEach((price, idx, prices) => {
    console.log(price * 2);
});

const convertedPrices = prices.map((price, idx, prices) => {
    return price * 2;
});

console.log(convertedPrices);

const sortedPrices = prices.sort((a, b) => a - b); // from lower to higher
// const sortedPrices = prices.sort((a, b) => a + b); // from higher to lower
console.log(sortedPrices);
