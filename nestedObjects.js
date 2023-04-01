function extractNameAndStreet(person){
    const {name, address : {street}} = person;
    return {name, street};
}

const person = {
    name: 'Subhajit',
    age: 21,
    address:{
        street:'Martin Road',
        city: 'Kolkata',
        state: 'West Bengal',
        pin: '743412'
    }

}

const result = extractNameAndStreet(person)
console.log(result)
