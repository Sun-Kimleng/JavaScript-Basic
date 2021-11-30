//create an object

const person = {
    //properties
    name: 'Eii Eii',
    age: 20,
    Nationality: 'Cambodia',
    Location: 'Stoeng Treng',

    //arrays
    blogs: ['Person\'s favorite foods', 'Person\'s favorite movies'],

    //function
    login: function(){
        console.log('User logged in.');
    },

    logout: ()=>{
        console.log('User logged out.')
    },

    logblogs: function(){
        this.blogs.forEach((blog, index)=>{
            console.log(`${index} ${blog}`);
        }

        )
    }

}

console.log(`${person['age']} and name ${person['name'].toUpperCase()}`);
person.login();
person.logout();
person.logblogs();




























 