const test = require('ava');
const functions = require('../submission/submission');

test('should greet mark ', t => {
    //act - call my function
    const actual = functions.greet('mark')

    //assert - compare what was actually returned against my expected result
    t.is(actual, 'hello mark');
});

test('should return count of bobs', t => {
    const actual = functions.countOfbobs([{ name: 'bob' }, { name: 'steve' }, { name: 'dave' }, { name: 'bob' }])
    t.is(actual, 2);
});

test('should return count of bobs when there are no bobs', t => {
    const actual = functions.countOfbobs([{ name: 'ronald' }, { name: 'steve' }, { name: 'dave' }, { name: 'hamburglar' }])
    t.is(actual, 0);
});

test('should return count of bobs when everyone is called bob', t => {
    const actual = functions.countOfbobs([{ name: 'bob' }, { name: 'bob' }, { name: 'bob' }, { name: 'bob' }])
    t.is(actual, 4);
});

test('should return no people when everyone under 18', t => {
    const actual = functions.peopleWhoCanVote([{ name: 'bob', age: 7 }, { name: 'bob', age: 7 }, { name: 'bob', age: 7 }, { name: 'bob', age: 7 }])
    t.deepEqual(actual, []);
});


test('should return people over 18', t => {
    const actual = functions.peopleWhoCanVote([{ name: 'bob', age: 17 }, { name: 'bob', age: 70 }, { name: 'bob', age: 77 }, { name: 'bob', age: 7 }])
    t.deepEqual(actual, [{ name: 'bob', age: 70 }, { name: 'bob', age: 77 }]);
});

test('should return who are 18', t => {
    const actual = functions.peopleWhoCanVote([{ name: 'rob', age: 18 }, { name: 'mark', age: 18 }, { name: 'dave', age: 18 }, { name: 'john', age: 18 }])
    t.deepEqual(actual, [{ name: 'rob', age: 18 }, { name: 'mark', age: 18 }, { name: 'dave', age: 18 }, { name: 'john', age: 18 }]);
});
test('should transform Person to ApiPerson', t => {
    const actual = functions.transformForApi({ id: 27, name: 'rob', age: 18 })
    t.deepEqual(actual, { _id: 27, personName: 'rob', ageYrs: 18 });
});
test('should pass valid person', t => {
    const actual = functions.personIsValid({ id: 42, name: 'rob', age: 18 })
    t.is(actual, true);
});

test('should pass valid person with no age', t => {
    const actual = functions.personIsValid({ id: 42, name: 'rob' })
    t.is(actual, true);
});

test('should fail  person with no id', t => {
    const actual = functions.personIsValid({ name: 'rob' })
    t.is(actual, false);
});

test('should fail person with no name', t => {
    const actual = functions.personIsValid({ id: 9, age: 99 })
    t.is(actual, false);
});

test('should fail person with undefined name', t => {
    const actual = functions.personIsValid({ name: undefined, id: 9, age: 99 })
    t.is(actual, false);
});

test('should fail  person no name or id ', t => {
    const actual = functions.personIsValid({ age: 99 })
    t.is(actual, false);
});

test('return oldest person', t => {
    const actual = functions.oldestPerson([{ name: 'jim', age: 12 }, { name: 'bob', age: 99 }, { name: 'jim', age: 98 }])
    t.deepEqual(actual, { name: 'bob', age: 99 });
});

test('returns 0 busses if 0 people', t => {
    const actual = functions.numberBusesRequired(0)
    t.is(actual, 0);
});

test('returns 1 busses if 1 people', t => {
    const actual = functions.numberBusesRequired(1)
    t.is(actual, 1);
});

test('returns 1 busses if 130 people', t => {
    const actual = functions.numberBusesRequired(129)
    t.is(actual, 1);
});

test('returns 4 busses if 500 people', t => {
    const actual = functions.numberBusesRequired(500)
    t.is(actual, 4);
});


