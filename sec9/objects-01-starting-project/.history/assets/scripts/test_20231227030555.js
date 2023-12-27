const human = {
    name: 'khaled',
    'last name': 'mohammed',
    age: 21,
    isMarried: false,
    test: 'ok',
    isOkay: 'yes he is',
};

delete human.age; // delete a property from the object
human.test = null; // null used to reset something but this will keep the property as it is without deleting from the object

// console.log(human)

const ok = 'isOkay';
// console.log(human[ok]);

console.log(human['last name']);
