const myNumber = [1,2,3]

const myTotal = myNumber.reduce(function (accumulator,currentvalue){
    console.log(`acc: ${accumulator} and currval: ${currentvalue}`);
    return accumulator + currentvalue
},3)
// console.log(myTotal);


const myTotals = myNumber.reduce((accumulator,currentvalue) => accumulator+currentvalue ,0)

// console.log(myTotals);


const shoppingCart = [
    {
        itemName: 'js course',
        price: 999
    },
    {

        itemName: 'py course',
        price: 2999
    },
    {
        itemName: 'mobile dev course',
        price: 5999
    },
    {
        itemName: 'data science course',
        price: 12999
    }
    
]

const priceToPay = shoppingCart.reduce( (acc,item) => (acc + item.price),0)
// console.log(priceToPay);

