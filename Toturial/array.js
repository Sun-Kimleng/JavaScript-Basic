//array

let person = ['Leng Leng','Eii Eii', 'Bora'];

//call index of array
console.log(person[0]);

//override
person[2] = 'Bara';
console.log(person[2]);

//join all element of an array together by (-) in between

let result = person.join('-');
console.log(result);

//concat to add multivalue to an array (can't change the existing arrays)

let result2 = person.concat('Pisey, Socheata');
console.log(result2);

//push any value to an array 
person.push('Monynet');
console.log(person);

//pop is use to delete the last element of an array
person.pop();
console.log(person); 
