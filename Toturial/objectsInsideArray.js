//create object inside array
//Note there is no multidimension array in javascript like PHP ex $person=[[.....], [.....]];
//also there is no Associate Array ex: $person=['name' => 'Eii Eii'];
// const persons = [
//     {name: 'Eii Eii', age: 20},
//     {name: 'Leng Leng', age: 21}
// ];
// console.log(persons);

const person = {

    //prop
    //array
    persons:
     [
        {name: 'Eii Eii', age: 20},
        {name: 'Leng Leng', age: 21}
    ],
    //function

    getDetails: function(){
        this.persons.forEach((person)=>{
            console.log(`${person.name} is ${person.age} years old.`);
        })
    }
};

person.getDetails();
