// sets spics : iterable - order not guaranteed - no duplicates - no index

const firstSets = new Set([2, 4, 6]);

if (firstSets.has(2)) {
    firstSets.delete(2);
    console.log(firstSets);
} else {
    firstSets.add(2);
}

// loop throw my sets
for (let value of firstSets.values()) {
    console.log(value);
}

// will do the same code as above
for (let value of firstSets.entries()) {
    console.log(value[0]);
}

console.log(firstSets.entries());
