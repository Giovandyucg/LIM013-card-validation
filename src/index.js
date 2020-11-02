import validator from './validator.js';

// const boton1 = document.querySelector('.contenedor')
let boton=document.getElementById("botoncito");
boton.addEventListener("click",function(){
  
  let numeros=document.getElementById("entrada").value;
    // document.getElementById("error").classList.remove("displayNone")
    // document.getElementById("error").classList.add("displayBlock")
    // document.getElementById("valida").classList.add("displayNone")
    // document.getElementById("valida").classList.remove("displayBlock")

    // let cardMask=validator.maskify(numeros);
    // let cardValid=validator.isValid(numeros);
    // console.log(cardValid);
    // console.log(cardMask);


  if(validator.isValid(numeros)){ 
    let valido = document.getElementById("texto1")
       valido.innerHTML=`Su tarjeta es Válido`
       valido.style.color="red";
       valido.style.height="40px";
        // if(numeros===""){
        //   alert("error !! Ingrese sus datos!!");
        // }
  }else if(numeros===""){
        alert("error !! Ingrese sus datos!!");
         }else{
      let error=document.getElementById("texto")
      error.innerHTML="Sus datos son incorrectos"
      error.style.color="red";
      error.style.height="30px";
        //  if(numeros===""){
        // alert("error !! Ingrese sus datos!!");
  }
  // trabajando con maskify   
  if(validator.maskify(numeros)){
  let valido = document.getElementById("texto1")
  valido.innerHTML=`${validator.maskify(numeros)}`
  valido.style.color="red";
  valido.style.height="40px";
  }
     // if(validator.isValid(numeros)){
    
  // }else{
  //   document.getElementById("error").innerHTML=`su tarjeta no es valida!!`
    
});
