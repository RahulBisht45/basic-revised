# solution code

## project1
```JavaScript

const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body');

buttons.forEach(function (button) {
    console.log(button);
    button.addEventListener('click',function(event){
        console.log(event);
        console.log(event.target);

        if(event.target.id==='grey')
        {
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id==='brown')
        {
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id==='lightgreen')
        {
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id==='skyblue')
        {
            body.style.backgroundColor=event.target.id
        }
        if(event.target.id==='purple')
        {
            body.style.backgroundColor=event.target.id
        }
    })

});

```