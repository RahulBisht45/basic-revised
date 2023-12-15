const user={
    userName:"rahul",
    age:25,


    message: function(){
        console.log(`hey ${this.userName}, welcome to this site`);
        console.log(this);
    }

}
/*
user.message()
user.userName="roshan"
user.message()
*/
//onsole.log(this);

/*function soft(){
    
    console.log(this);
}
soft()

const soft= function(){
    let userName="rahul"
    console.log(this.userName);
}
*/

const soft= ()=>{
    let userName="rahul"
    console.log(this.userName);
}
soft()
/*
const sumTwo=(num1,num2)=>{
return num1+num2
}
console.log(sumTwo(5,10))
*/

const sumTwo=(num1,num2)=>num1+num2
    console.log(sumTwo(5,10))
   
    
    const addtwo=(num1,num2)=>(num1+num2)
    console.log(addtwo(5,15))

    const hey=(num1,num2)=>({userName:"rahul"})
    console.log(hey(3,4))