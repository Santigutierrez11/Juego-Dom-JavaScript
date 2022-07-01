let inputJugador1 = document.getElementById('jugador1');
let inputJugador2 = document.getElementById('jugador2');
let inputGanador = document.getElementById('ganador');

let submitSi = document.getElementById('Si');
let submitNo = document.getElementById('No');

let table = document.getElementById('table');
let tbody = document.createElement('tbody');



function jugar() {
    let jugador1 = Math.ceil(Math.random()*3);
    let jugador2 = Math.ceil(Math.random()*3)
    let gano;
    let item = [];
    let ganador = [];
    let opcion = [];
        
    inputJugador1.value = jugador1;
    inputJugador2.value = jugador2;
        
    if(jugador1 == 1 && jugador2 == 1){
        gano = "Empate";
        con = "Piedra";
        ganador.push(gano);
        opcion.push(con);
        inputGanador.value = gano;
    }else if(jugador1 == 1 && jugador2 == 2){
        gano = "Jugador 2";
        con = "Papel";
        ganador.push(gano);
        opcion.push(con);
        inputGanador.value = gano;
    }else if(jugador1 == 1 && jugador2 == 3){
        gano = "Jugador 1";
        con = "Piedra";
        ganador.push(gano);
        opcion.push(con);
        inputGanador.value = gano;
    }else if(jugador1 == 2 && jugador2 == 1){
        gano = "Jugador 1";
        con = "Papel";
        ganador.push(gano);
        opcion.push(con);
        inputGanador.value = gano;
    }else if(jugador1 == 2 && jugador2 == 2){
        gano = "Empate";
        con = "Papel";
        ganador.push(gano);
        opcion.push(con);
        inputGanador.value = gano;
    }else if(jugador1 == 2 && jugador2 == 3){
        gano = "Jugador 2";
        con = "Tijera";
        ganador.push(gano);
        opcion.push(con);
        inputGanador.value = gano;
    }else if(jugador1 == 3 && jugador2 == 1){
        gano = "Jugador 1";
        con = "Piedra";
        ganador.push(gano);
        opcion.push(con);
        inputGanador.value = gano;
    }else if(jugador1 == 3 && jugador2 == 2){
        gano = "Jugador 1";
        con = "Tijera";
        ganador.push(gano);
        opcion.push(con);
        inputGanador.value = gano;
    }else{
        gano = "Empate";
        con = "Tijera";
        ganador.push(gano);
        opcion.push(con);
        inputGanador.value = gano;
    }
        
    for (let i = 0; i < ganador.length; i++) {
        let tr = document.createElement('tr');
        let tditem = document.createElement('td');
        tditem.innerText = i;
        tr.appendChild(tditem);
        let tdGanador = document.createElement('td');
        tdGanador.innerText = ganador[i];
        tr.appendChild(tdGanador);
        let tdOpcion = document.createElement('td');
        tdOpcion.innerText = opcion[i];
        tr.appendChild(tdOpcion);
        tbody.appendChild(tr);
        table.appendChild(tbody);

    }
};

function detener(){
    inputJugador1.value = "";
    inputJugador2.value = "";
    inputGanador.value = "";
    table.removeChild(tbody);
}