
/*
function sum(num1,num2) {
    console.log(num1+num2);

}*/

function sum(num1,num2) {
  //let result=num1+num2;
  //return result
  
  return num1+num2;

}
const result=sum(2,4);

//console.log("result :",result);

function loginUser(userName){
   // if(userName===undefined)
    if(!userName)
   {
        console.log("plz enter a user name");
        return
    }
    return `${userName} just logged in`
}

//console.log(loginUser("rahul"));
//console.log(loginUser());



function calculateCartPrice(val1,val2,...num1){
    return num1     // it will return [400,500]
}
//console.log(calculateCartPrice(2))
 console.log(calculateCartPrice(200,300,400,500))

 const user={
    userName:"Rahul",
    age:25
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.userName} and age is ${anyobject.age}`);

}
//handleObject(user);

handleObject({
    userName:"ROHAN",
    age:26
})

const myNewArr=[100,300,500,700]

function returnThirdvalue(getArray){
    return getArray[2]
}
//console.log(returnThirdvalue(myNewArr));
console.log(returnThirdvalue([300,500,700,800]));