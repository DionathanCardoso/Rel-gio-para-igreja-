'use strict'

const diaSemanaExtenso = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
const mesExtenso = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const container = document.getElementById("container");
const body = document.body;
//const time = document.getElementById("time");


const diaSemana = (diaSemanaExtenso, mesExtenso) => {
    const data = new Date;
    const Data = document.getElementById("data");
    // console.log()
    //Exibir na tela
    Data.children[0].innerHTML = `${diaSemanaExtenso[data.getDay()]},`;
    Data.children[1].innerHTML = `0${data.getDate()}/${mesExtenso[data.getMonth()]}/${data.getFullYear()}`.slice(-16);
}
/*
A função relógio criará dentro da tag um relógio digital.
*/
const relogio = () => {
    let data = new Date();
    const wallClock = document.getElementById("wall-Clock");
    
    //Exibir na tela
    wallClock.children[0].innerHTML = `0${data.getHours()}`.slice(-2);
    wallClock.children[1].innerHTML = `0${data.getMinutes()}`.slice(-2);
    wallClock.children[2].innerHTML = `0${data.getSeconds()}`.slice(-2);
}

const Dia = setInterval(diaSemana(diaSemanaExtenso, mesExtenso), 1000);
const Relogio = setInterval(relogio, 1000);

const avisoCulto = () => {
      
    body.style.backgroundImage = "url('./imgs/prayer-1308663_1920.jpg')";
}
avisoCulto()