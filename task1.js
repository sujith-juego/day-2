// const user  = {
//     id: 009,
//     email: 'abc@linuxhint.com',
//     contactInfo: {
//         name: 'Harry',
//         address: {
//             city: 'Berlin',
//             country: 'Germany'
//             }
//         }
//     }


    // method1
// const person = { ...user};          //spread prop
// console.log(person);

// person .contactInfo.name = `sujith`;
// console.log(person)
// console.log(user)



// method 2 ----- Naive way
// function copy(user) {
//     let objCopy = {}; 
//     let key;
  
//     for (key in user) {
//       objCopy[key] = user[key];
//     }
//     return objCopy;
//   }
//   const user  = {
//     id: 009,
//     email: 'abc@linuxhint.com',
//     contactInfo: {
//         name: 'Harry',
//         address: {
//             city: 'Berlin',
//             country: 'Germany'
//             }
//         }
//     }
 
// //  console.log(copy(user));
// const use = copy(user);
// use.email = 'sujithijijij.com';
// console.log(use);



// method 3      ------------> json stringify and parse method

// const user  = {
//         id: 009 ,
//         email: 'abc@linuxhint.com',
//         contactInfo: {
//             name: 'Harry',
//             address: {
//                 city: 'Berlin',
//                 country: 'Germany'
//                 }
//             }
//         }
// const obj = Object.assign({},user);

// const obj = JSON.parse(JSON.stringify(user));

// console.log(obj);
// obj.contactInfo.name = 'sujith';
// console.log(obj);
// console.log(user);



// method 4 ----------------> assign prop
const user  = {
        id: 009 ,
        email: 'abc@linuxhint.com',
        contactInfo: {
            name: 'Harry',
            address: {
                city: 'Berlin',
                country: 'Germany'
                }
            }
    }
// const info = user ;
const info = Object.assign({},user);
// console.log(info);
info.contactInfo.name = 'sujith';
console.log(info);
console.log(user);