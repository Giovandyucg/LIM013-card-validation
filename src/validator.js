

const validator = {
  // ...
  isValid: function(caracter){
    // declaro las variables que necesitare
    let total=0,option=false,l=caracter.length-1,numero;
    if(caracter.length<10||caracter.length>19){
      return option;
    }
    while(l>=0){
      // convirtiendo la longitud en entero 
      // admitiendo caracteres solo de base 10
      numero=parseInt(caracter.charAt(l),10);
      // return console.log(num);
      // esta condicion debe ser falsa para q la sgte 
      // condicion tambien suceda
      if(isNaN(numero)){
        return option;
      }
      // evaluando mi condicion falsa
      if(option){
        //  entonces numero se multiplico por dos
        numero*=2;
        //si  numero es mayor a 9
        if(numero>=10){
          // entonces aqui sumo los digitos dividiendo 
          // entre 10 para que el resto se sume con 1
          numero=(numero%10)+1;        
      }
    }
    // voltea la negacion para que se cumpla mi condicion real
    option=!option;
    // agregar al resto de la suma
    total+=numero;
    //ir al siguiente digito decremento
    l--;
  
  }
  // retorna si es valido la tarjeta
  return total%10===0; 
    },  
    
  
    
    
  
    // let tarjeta=caracter.toString();
    // let longitud=tarjeta.length;
    // let digito=null;
    // let digitos=null;
    // let total=0;
    // for(let i=0;i<longitud;i+=2){
    //   digito=parseInt(tarjeta.charAt(i))*2;
    //   if(digito>9){
    //     digitos=digito.toString();
        
    //     digito=parseInt(digitos.charAt(0))+ parseInt(digitos.charAt(1));
    //   }
    //   total+=digito
    // };
    // for(let i=1;i<longitud;i+=2){
    //   total+=parseInt(tarjeta.charAt(i));
    // }


  //   if(total%10===0){
  //     alert("su tarjeta es valida");
    
  // }else{
  //     alert("su tarjeta no es valida");
     
  //   }

    // }else{
      
   


//  return total%10===0;

maskify: function(caracter){
  // declaro mi longitud
  let longitud=caracter.length-4;
  let string="";
  // iterando mi input 
     for(let i =0;i<caracter.length;i++){
       if(i>=longitud){
         string+=caracter[i];
       }else{
         string+="#";
       }
     }
     return string;
    }
  };
  
  export default validator;console
  
  
  
  
  
  
  // let longitud=caracter.length;
  // let string="";
  // // let resultados="";
  // if(longitud-4){
  //   for(let i=0;i<caracter.length;i++){
  //     if(i>=caracter.length-4){
  //       string+=caracter[i];
  //     }else{
  //       string+="#";
  //      }
  //    }

  //    }else{
  //    string= caracter;
  //  }
  //  return string;
 

// const Chain=caracter.slice(-4,caracter.length);
//  if(caracter.length<=4){
//    return caracter;
//  }else{
//    for(let i=0;i<caracter.length-4;i++){
//      newChain+="#";
//    }
//  }
//  return `${newChain+Chain}`;
//  let newChain="";
//  let longitud=caracter.length-4;
// for(let i=0;i<chain.length;i++){
//   if(i<chain.length-4){
//     newChain+="#";
//     // let str=newChain+chain
//   }else{
//     newChain+=chain[i];
    
//   }
// }debugger
// console.log(newChain);
