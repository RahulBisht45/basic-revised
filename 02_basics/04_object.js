//singleton


//const instaUser=new Object()
const instaUser={}

instaUser.id="1212bc"
instaUser.name="harry"
instaUser.isLoggedIn=false


//console.log(instaUser);

const regUser={
    email:"hey@gmail.com",
    fullname:{
        userName:{
            fname:"rahul",
            Lname:"bisht"
        }
    }
}

//console.log(regUser.fullname.userName.Lname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
/*
console.log(obj3);

console.log(instaUser);

console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));


console.log(instaUser.hasOwnProperty('isLoggedIn'));
*/


//destructing object

const course={
    courseName:"web dev",
    price:"free",
    plateform:"youtube"
}

const {courseName:name}=course
//console.log(courseName);
console.log(name);
/*
//eg.
//const navbar=(props.company)=>{
const navbar=({company})=>{

}

navbar(company="rahul")

*/


