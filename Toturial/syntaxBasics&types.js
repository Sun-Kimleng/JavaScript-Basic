// common string methods

let email='leng@gmail.com';

//show the amount of index that end at 'n'
let result = email.lastIndexOf('n');
console.log(result);

//similar to substring using slice
result =  email.slice(0, 5); // between index 0 to 5
console.log(result);

//substr 
result = email.substr(2, 5); // from index 2 with 5 index
console.log(result);

//replace any string
result = email.replace('l', 'z'); //replace the first letter l to z
console.log(result);

//replace function with another function
result = email.replace(email.substr(0,3), 'B leng');
console.log(result);