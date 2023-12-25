const firstSets = new Set([2, 4, 6]);

if (firstSets.has(2)) {
    firstSets.delete(2);
    console.log(firstSets);
} else {
    firstSets.add(2);
}

for (let value of firstSets.entries()) {
    console.log(value);
}
