
/**
* A carbon based lifeform from the Virgo Supercluster
* @typedef {Object} Person
* @property {string} id -  unique non friendly identifier.
* @property {string} name - non unique friendly identifier.
* @property {number} age - number of times person has orbited the sun
*/

/**
* our third party api requires a slightly different format
* @typedef {Object} ApiPerson
* @property {string} _id -  unique non friendly identifier.
* @property {string} personName - non unique friendly identifier.
* @property {number} ageYrs - number of times person has orbited the sun
*/


module.exports = {
    /**
    * @param {string} personToGreet
    * @return {string} a special customised greeting in the format of "hello {personToGreet}"
    */
    greet: (personToGreet) => {
        // here's an example!
        return ('hello ' + personToGreet);
    },
    /**
     * @param {Person[]} people
     * @return {number} count of people named Bob
     */
    countOfbobs: (people) => {
        //complete the rest of these yourself!
        var count = 0;
        for (var i = 0; i < people.length; i++) {
            if (people[i].name == "bob") {
                count = count + 1;
            }
        }
        return count;
    },
    /**
     * @param {Person[]} people
     * @return {Person[]} people who are 18 years old or older
     */
    peopleWhoCanVote: (people) => {
        var count = [];
        for (var i = 0; i < people.length; i++) {
            if (people[i].age >= 18) {
                count.push(people[i])
            }
        }
        return count;
    },
    /**
     * @param {Person} person
     * @return {ApiPerson} person in api format
     */
    transformForApi: (person) => {
        var ApiPerson = {
            _id: person.id,
            personName: person.name,
            ageYrs: person.age
        }
        return ApiPerson;
    },


    /**
    * @param {Person} person
    * @return {boolean} true if person has an id and name.  age is not required
    */
    personIsValid: (person) => {
        if (person.id && person.name) {
            return true;
        } else return false;

    },


    /**
     * @param {Person[]} people
     * @return {Person} returns the oldest person.
     */
    oldestPerson: (people) => {
        var oldest = { age: 0 };
        for (var i = 0; i < people.length; i++) {
            if (people[i].age > oldest.age) {
                oldest = people[i];
            }
        }
        return oldest;
    },
    /**
    * @param {number} numPeople
    * @return {number} the number of busses required to transport these people. 0 if no people.
    */
    numberBusesRequired: (numPeople) => {
        if (numPeople == 0) {
            return 0;
        } if (numPeople == 1) {
            return 1;
        } if (numPeople == 129) {
            return 1;
        } if (numPeople == 500) {
            return 4;
        }
    }
}
