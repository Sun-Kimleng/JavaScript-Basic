let cars= ['BMW', 'TOYOTA', 'CHEVEROLET','LUXUS'];
//(car)=> can replace by function(car)
cars.forEach((car)=>{
    console.log(car);
});

//shows index of any value
cars.forEach((car, index)=>{
    console.log(index, car);
});

//or we can use combination with foreach

const CarDetail = (car, index)=>{
    console.log(`${index} - ${car}`);
}

cars.forEach(CarDetail);