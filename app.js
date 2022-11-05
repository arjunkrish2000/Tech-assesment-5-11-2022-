var flag = true;
function convert(){
if(flag)
{
document.querySelectorAll(".btnBox").forEach( btn =>{


    btn.classList.remove("btn-primary");
    btn.classList.add("btn-secondary");
    flag = false;
    
});
document.querySelectorAll(".textBox").forEach(text =>{
    text.classList.add("form-control");
})
}
else{

    document.querySelectorAll(".btnBox").forEach( btn =>{
    btn.classList.remove("btn-secondary");
    btn.classList.add("btn-primary");
  
    flag = true;
});
document.querySelectorAll(".textBox").forEach(text =>{
    text.classList.remove("form-control");
})
}
}