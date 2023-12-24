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

const arr2 = [1, 2, 3];
const arr3 = arr2.splice();
arr2.push(4);
console.log(arr3);
