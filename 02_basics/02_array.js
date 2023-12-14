const rahul=["be","mech","berozgar","poor"];
const pradeep=["bsc","it","pro","rich"];
 //rahul.push(pradeep);

 //console.log(rahul);

 //console.log(rahul[4][2]);
 //const realArr=rahul.concat(pradeep);
 //console.log(realArr);

 const allBro=[...rahul,...pradeep]
 console.log(allBro);


 const compArr=[1,2,3,4,5,6,7,[10,20,[30,40,2],5],8,9];

 const realAnotherArr=compArr.flat(Infinity);
 console.log(realAnotherArr);

 console.log(Array.isArray("rahul"));

 console.log(Array.from("rahul"));


 let sub1=30;
 let sub2=50;
 let sub3=70;

 console.log(Array.of(sub1,sub2,sub3));
 