const $submit = document.getElementById("submit"),
      $email = document.getElementById("email"),
      $asunto = document.getElementById("asunto");

function validateImputs(){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const asuntoRegex = /^.{1,32}$/;
     if($email.value === ``){
        alert('No dejar el campo email vacio');
         
     }
     if($asunto.value === ``){
        alert('No dejar el campo asunto vacio');
         
     }
     if(!emailRegex.test($email.value)){
        alert("Ingrese el formato correcto en el email");
        $email.style.border = "1px solid red";
         
     }
     if(!asuntoRegex.test($asunto.value)){
        alert("Ingrese el formato correcto en el asunto");
        $asunto.style.border = "1px solid red";
         
     }


      
}

//Evento

document.addEventListener("click", (e)=>{
    if(e.target === $submit){
        e.preventDefault();
        validateImputs();
        
    }
});
