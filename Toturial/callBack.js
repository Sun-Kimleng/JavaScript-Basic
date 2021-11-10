//create call back function that means the first argument can use in the second argument in different function
const myFunc = (callBackFunc)=>{
    let value =50;
    callBackFunc(value);
};
//call back
myFunc(value=>{
    console.log(value);
});
