const arr = [1, 3, 4, 6, 32, 23, 12, 534, 64, 11, 26];

const filteredArr = arr.filter((num) => num > 6);
const mappedArr = arr.map((num) => {
    return {
        num: num,
    };
});
const reducedValue = arr.reduce((sumVal, current) => {
    return sumVal * current;
}, 1);

// console.log(filteredArr, mappedArr, reducedValue);

function findMax(...arrays) {
    const maxValue = arrays.reduce((max, currentArray) => {
        const arrayMax = Math.max(...currentArray);
        return arrayMax > max ? arrayMax : max;
    }, Number.NEGATIVE_INFINITY);

    return maxValue;
}

const arr = [1, 2, 3, 4, 5];
const maxValue = findMax(arr);
console.log(maxValue);
