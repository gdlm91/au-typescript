function buildPersonData({firstName, lastName, address}) {
    return `${firstName} ${lastName} ${address}`;
}

const firstName = 'Kobe';
const lastName = 'Bryant';
const address = 'Staples Center';


const personData = { firstName, lastName, address };

console.log(buildPersonData(personData));