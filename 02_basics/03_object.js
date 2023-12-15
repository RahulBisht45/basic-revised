//singleton  - when we make object using constructor, it will make singleton
//Object.create


//object Literals

const sym=Symbol("hey");

const JsUser={
    name:"rahul",
    "full name":"Rahul Bisht",
    [sym]:"hello brother",
    age:25,
    email:"rahul@gmail.com",
    isLoggedIn:false,
    login:["mon","wed"]
}
/*
console.log(JsUser.name);
console.log(JsUser.email);
console.log(JsUser['email']);
console.log(JsUser["full name"]);
//console.log(typeof JsUser.sym);
console.log(JsUser[sym]);
*/

JsUser.name="Rahul";
//Object.freeze(JsUser);
JsUser.name="roshn";
//console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello  users");
}
console.log(JsUser.greeting());

JsUser.greeting2=function(){
    console.log(`hello user ${this.name}`);
}
console.log(JsUser.greeting2());