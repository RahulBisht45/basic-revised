

let myDate=new Date()
console.log(myDate);
console.log(myDate.toString());

/*console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
*/

//let createdDate=new Date(2023,11,12,20,44)
let createdDate=new Date("12-12-2023")

console.log(createdDate.toDateString());
console.log(createdDate.toLocaleString());

let timeStamp=Date.now()

console.log(timeStamp);


//***** */

let newDate=new Date();

newDate.toLocaleString('default',{
    weekday:"short"
})

console.log(newDate);

