// sets spics : iterable - order not guaranteed - no duplicates - no index

const firstSets = new Set([2, 4, 6]);

if (firstSets.has(2)) {
    firstSets.delete(2);
    // console.log(firstSets);
} else {
    firstSets.add(2);
}

// loop throw my sets
for (let value of firstSets.values()) {
    // console.log(value);
}

// will do the same code as above
for (let value of firstSets.entries()) {
    // console.log(value[0]);
}

// maps spics : iterable - order guaranteed - no duplicates - no index - store any kind of keys and values from any data type
// main purpose is add an addetional data to my key

const person = { name: 'lilo', age: 21 };
const person2 = { name: 'aly', age: 21 };

const firstMap = new Map([
    [person, { birthDate: '24 / 9 / 2002' }],
    [person2, { birthDate: '11 / 4 / 2003' }],
]);

console.log(firstMap);

firstMap.get(person);
