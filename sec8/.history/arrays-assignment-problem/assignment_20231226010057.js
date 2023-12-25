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
    const maxValue = arrays.flat().find((num, idx, arr) => {
        return num === Math.max(...arr);
    });

    const minValue = arrays.flat().find((num, idx, arr) => {
        return num === Math.min(...arr);
    });

    return [minValue, maxValue];
}

function findMinMaxV2(...nums) {
    let curMax = nums[0];
    let curMin = nums[0];
    for (const num of nums) {
        if (num > curMax) {
            curMax = num;
        }
        if (num < curMin) {
            curMin = num;
        }
    }
    return [curMin, curMax];
}

console.log(findMinMaxV2(arr));

const [minValue, maxValue] = findMinMax(arr);
// console.log(minValue, maxValue);

const list = new Set([23, 2, 65, 1]);

function isDuplicated(value) {
    const isDuplicated = list.has(value) ? true : false;
    console.log(isDuplicated);
}

// isDuplicated(5);
