const human = {
    name: 'khaled',
    age: 21,
    isMarried: false,
    test: 'ok',
    isOkay: 'yes he is',
};

delete human.age; // delete a property from the object
human.test = null; // null used to reset something but this will keep the property as it is without deleting from the object

const ok = 'isOkay';

console.log(human[ok]);
