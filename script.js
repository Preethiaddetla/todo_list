n= new Date();
y=n.getFullYear();
m=n.getMonth() + 1;
d=n.getDate();
document.getElementById("date").innerHTML= m+ "/" + d + "/" + y;

function button(){
    let a=document.getElementById("text").value 
 
    let b=document.createElement('div')
    b.className='checktext'
    let c=document.createElement('input')
    c.type='checkbox'
    c.className='checkbox'
    let d=document.createElement('button')
    d.className='delete'
    let del_icon = document.createElement('i')
    del_icon.className="bi bi-trash"
    d.appendChild(del_icon)
    
    d.addEventListener('click',function(){
        b.remove();
       
    })
    b.appendChild(c)
    b.innerHTML+=a
    b.appendChild(d)
    document.body.appendChild(b)
    Text.value=" "
    

   
}
function myfun(){
    window.location="index.html";
  }



