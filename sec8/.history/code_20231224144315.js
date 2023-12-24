// Array like (string - nodeList for example ) vs iterable (normal array)
//array like defined as any obj has a  length and index properties
//normal array method => [] is better than this consturactor function method but the consturctor has it's own use cases

const arr1 = ['hi', 'bye', 'shaw']; //normal arr creation way
const arr = new Array('hi', 'bye', 'shaw'); //consturactor function way  //note that we can remove the new keyword no diffrence will happen

const str = 'hello lilo';
const lettersArr = Array.from(str); //Array.from(arrayLike) this convert the array like to real arr + this is one of use cases

const data = [
    [5, 'ok'],
    ['yea', 5, 2, { name: khaled, age: 21 }],
];
