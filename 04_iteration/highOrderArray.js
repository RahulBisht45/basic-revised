//for (const iterator of object) {
    

const arr=[1,2,3,4,5]

/*for (const num of arr) {
 console.log(num);   
}

const greetings ="Hey brothers";

for (const greet of greetings) {
 console.log(`Each char is ${greet}`);   
}*/

//Map

const map=new Map()
map.set('In',"India")
map.set('USa',"ameriaca")
map.set('JP',"japan")
map.set('In',"India")

console.log(map);


for (const key of map) {
    console.log(key);
}

for (const [key,value] of map) {    //destructuring of array
    console.log(key, ':-', value);  
}
/*for (const key in map) {   not iteratable
    console.log(key);
}*/

/*const myObject={
    'player1':"Rahul",
    'player2': "Roshan"

}
 for (const [keyt] of myObject) {
    console.log(key, ':-', value);
 }
 
const myObject={
    js:'javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by apple"   
}

for (const key in myObject) {
    console.log(`${key} shortcut for ${myObject[key]}`);

}

const programming=["js","rb","py"]
for (const key in programming) {
   console.log(programming[key]);
}
*/


