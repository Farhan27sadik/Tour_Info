//function expression to select element

const selectElement = (s) => document.querySelector(s);


//open the menu on click

selectElement('.open').addEventListener('click',()=>{
   selectElement('.nav-list').classList.add('active');
});


//close the menu on click

selectElement('.close').addEventListener('click',()=>{
   selectElement('.nav-list').classList.remove('active');
});


//for clock
function clock(){
    var hour=document.getElementById('hour');
    var min=document.getElementById('min');
    var sec=document.getElementById('sec');
    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();
    h =(h < 10) ? "0" + h : h
    m =(m < 10) ? "0" + m : m
    s =(s < 10) ? "0" + s : s
    
    hour.innerHTML=h;
    min.innerHTML=m;
    sec.innerHTML=s;
}
var interval = setInterval(clock,1000);