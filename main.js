const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');


btn1.addEventListener('click' , ()=>{
    btn1.classList.add('activeBtn');
    btn2.classList.remove('activeBtn');
})

btn2.addEventListener('click' , ()=>{
    btn2.classList.add('activeBtn');
    btn1.classList.remove('activeBtn');
})