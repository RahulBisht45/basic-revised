const programming=["js","rb","py","cpp","java"]

programming.forEach( (val)=>{
    console.log(val);
} )



programming.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const myObject=[

    {
        langName:"javascript",
        langFileName:"js"
    },
    {
        langName:"java",
        langFileName:"java"
    },
    {
        langName:"python",
        langFileName:"py"
    }
]
myObject.forEach( (item)=>{
    console.log(item.langFileName);
})