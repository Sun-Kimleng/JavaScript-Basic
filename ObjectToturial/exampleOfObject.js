//object literals
let user = {
    name: 'Eii Eii',
    age: 30,
    email: 'EiiEii@gmail.com',
    location: 'Cambodia'

};
console.log(user);
console.log(user.email);
//or
console.log(user['email']);
//change
user['email'] = 'Emailchanged@gmail.com';
console.log(user.email);