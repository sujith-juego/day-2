const user  = {
    id: 009,
    email: 'abc@linuxhint.com',
    contactInfo: {
        name: 'Harry',
        address: {
            city: 'Berlin',
            country: 'Germany'
            }
        }
    }

const person = { ...user};          //spread prop
console.log(person);

person .id = `010`;
console.log(person)