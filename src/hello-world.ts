function buildPersonData({firstName, lastName}, ...address) {
    return `${firstName} ${lastName} ${address}`;
}

const firstName = 'Kobe';
const lastName = 'Bryant';
const personData = { firstName, lastName};

const partialAddress = ['Street Name', 'Street Number', 'Po Box'];
const address = [...partialAddress ,'Staples Center']

console.log(buildPersonData(personData, address));