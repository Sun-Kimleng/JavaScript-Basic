//template strings
let name = 'Leng Leng';
let age = 21;

//concatenation way
// let result = 'name: '+ name;

//template  string way
let result = `Name: ${name}`;

console.log(result);

//creating html templates 
let html =  `   
    <h2>name</h2>
        <h2>${name}</h2>
        <h2>${age}</h2>
`;

console.log(html);