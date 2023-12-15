
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
console.log(loginUser());