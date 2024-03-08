# Solution

## Code of project2

``` javascript

const form=document.querySelector('form')
//this usecase will give you empty value
//const height= parseInt(document.querySelector('#height').value);
   
form.addEventListener('submit',function(e){
    e.preventDefault()
   const height= parseInt(document.querySelector('#height').value);
   const weight= parseInt(document.querySelector('#weight').value);
   const result= document.querySelector('#result');
   
   

   if(height===''|| height<0 ||isNaN(height))
    {
        result.innerHTML="please give a valid height";
   }
   else if(weight===''|| weight<0 ||isNaN(weight))
    {
        result.innerHTML="please give a valid weight";
   }
   else{
   const bmi= (weight/((height*height)/10000)).toFixed(2);
    //show the result

    result.innerHTML=`<span>${bmi}</span>`;
}
});

```



# solution of project3


``` JAvascript
const clock=document.getElementById('clock')
//const clock=document.querySelector('#clock')


setInterval(function(){
    let date=new Date();
   // console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();
},1000)


```