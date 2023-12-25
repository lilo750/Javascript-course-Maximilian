const arr = [1, 3, 4, 6, 32, 23, 12, 534, 64, 11, 26];

const filteredArr = arr.filter((num) => num > 6);
const mappedArr = arr.map((num) => {
    num: num;
});
const reducedValue = arr.reduce(sumVal, (current) => sumVal * current, 1);

console.log(filteredArr, mappedArr, reducedValue);
