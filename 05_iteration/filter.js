const coding=["js","py","html","css"]

const values=coding.forEach( (item)=>{
    console.log(item);
})

console.log(values);    //foreach does not return any values.


const myNums=[1,2,3,4,5,6,7,8,9,10]

//const newNums=myNums.filter((num)=>num>5)
/*const newNums=myNums.filter((num)=>{
     return num>5
})*/

const newNums=[]

myNums.forEach( (num)=>{
    if (num>5) {
        newNums.push(num)
        
    }
})

console.log(newNums);