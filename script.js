//let age=prompt("what is your age ?");
//if(age>=18)
//{
 //alert(" you are an adult " );
   
//}
//else{
 //alert(" you are an minor " );
   
//}

function fillform(){
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    
    console.log("Name :" +name);
    alert("Name :" +name+"\n Email : " + email );
}   

function modechange(){
    document.body.classList.toggle("dark-mode");
}