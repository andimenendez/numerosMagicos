const numero = document.getElementById('numeroUs');
const enviar = document.getElementById('enviar');
const inicio = document.getElementById('inicioJuego');
const numIngresado = document.getElementById('numIngresado')
const intentos = document.getElementById('intentos');
let cantIntentos = 1;

const inicioJuego = () =>{

  let numAleatorio = Math.floor(Math.random () *100) +1;
  console.log ("numero aleatorio",numAleatorio);

  const enviarNum = () =>{
      let numUsuario = Number(numeroUs.value);
      console.log("num de usuario: ", numUsuario);

      if(cantIntentos === 3){
        intentos.innerHTML= 'SE ACABO EL JUEGO NO TE QUEDAN MAS VIDAS'
        resetear();
        }else{
        intentos.innerHTML = `te quedan ${3-cantIntentos} vidas`;
      }

      if(numUsuario == numAleatorio && !isNaN(numUsuario)){
        alert ('¡FELICIDADES GANASTE!');
        numIngresado.innerHTML = `El numero que ingresaste es: ${numUsuario}`
      }else if(numUsuario != numAleatorio && !isNaN(numUsuario)){
      alert ('No adivinaste, vuelve a intentar');
    }
      if(isNaN(numUsuario)){
      alert('INGRESE UN NUMERO VALIDO')
    }  

    cantIntentos = cantIntentos+1;
    console.log('vidas:',cantIntentos);
    }

    let resetear =()=>{
      enviar.disabled = true;
      numero.disabled = true;
    }
    enviar.addEventListener('click',enviarNum);
    
}
inicio.addEventListener('click',inicioJuego);
