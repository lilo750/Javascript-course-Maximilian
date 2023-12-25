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

function findMinMax(...arrays) {
    const minMaxArr = arrays.flat().find((num, idx, arr) => {
        return [num === Math.min(...arr), num === Math.max(...arr)];
    });

    return minMaxArr;
}

const maxValue = findMinMax(arr);
// console.log(maxValue);
