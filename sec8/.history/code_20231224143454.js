// Array like (string - nodeList for example ) vs iterable (normal array)
//array like defined as any obj has a  length and index properties
//normal array method => [] is better than this consturactor function method but the consturctor has it's own use cases

const arr1 = ['hi', 'bye', 'shaw'];
const arr = new Array('hi', 'bye', 'shaw'); //consturactor function  //note that we can remove the new keyword no diffrence will happen
console.log(arr);
