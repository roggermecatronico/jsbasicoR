// Función que genera una jugada aleatoria de la máquina
function jugarMaquina() {
    let opciones = ["piedra", "papel", "tijera"];
    let indice = Math.floor(Math.random() * 3);
    return opciones[indice];
  }
  
  // Función que determina el ganador de la partida
  function determinarGanador(jugador, maquina) {
    if (jugador === maquina) {
      return "Empate";
    } else if (
      (jugador === "piedra" && maquina === "tijera") ||
      (jugador === "papel" && maquina === "piedra") ||
      (jugador === "tijera" && maquina === "papel")
    ) {
      return "Ganaste";
    } else {
      return "Perdiste";
    }
  }
  
  // Juego contra la máquina
  let jugador = prompt("Elige piedra, papel o tijera:");//pedir por consola un valor
  jugador = jugador.toLowerCase();//hacer las letras minusculas
  
  if (jugador === "piedra" || jugador === "papel" || jugador === "tijera") {
    let maquina = jugarMaquina();
    let resultado = determinarGanador(jugador, maquina);
  
    console.log(`Jugador: ${jugador}`);
    console.log(`Máquina: ${maquina}`);
    console.log(`Resultado: ${resultado}`);
  } else {
    console.log("Jugada inválida");
  }