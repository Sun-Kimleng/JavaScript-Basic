//Normal function
function getName(){
    return 'My name is Leng Leng';
}

console.log(getName());

//Varaible function
const book = function(name){
    return `This book's name is ${name}`;
}
const mybook = book('Tom and Jerry');
console.log(mybook);

//arrow function
const calcArea = (radius)=>{
    return 3.14*radius**2;
}
const area = calcArea(5);
console.log(area);

//arrow function second way
const calcArea2 = (radius, add)=> 3.14*(radius**2)*add;
const area2 = calcArea2(5, 6);
console.log(area2);

//array function
const Books = (names, type)=>{
    
    for (let i=0 ; i < 3 ; i++){
        console.log(`Book labeled ${names[i]} is a ${type} book`);
    }
    
}

let b = Books(['Tom and Jerry', 'Iron man', 'Spider man'],'Comic');
