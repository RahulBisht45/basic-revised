//reduce method


const numbers=[1,2,3,4,5,6,7,8,9]

const totalvalue=numbers.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc+currval

},0)

//const totalvalue=numbers.reduce( (acc,currval)=>acc+currval,0)

console.log(totalvalue);


const shippingCart=[
    {
        itemName: "js",
        price:999
    },
    {
        itemName: "py",
        price:1999
    },{
        itemName: "java",
        price:2999
    },{
        itemName: "dataSc",
        price:7999
    },{
        itemName: "reactjs",
        price:6999
    },   
]
const totalPrice=shippingCart.reduce( (acc,currval)=>{
     return acc+currval.price
},0)

console.log(totalPrice);