var relog = document.getElementById("relogio");
var datas = document.getElementById("datas");
var diaSemanaExtenso = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
var mesExtenso = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var trocarFundoTela = document.getElementById("corpo");

function relogio() {
    //Aqui esta a variavis do relógio
    let data = new Date();
    let hor =  data.getHours();
    let min =  data.getMinutes();
    let seg = data.getSeconds();

    //Aqui é a variaveis da Data em português.
    let dia = data.getDate();
    let mes = data.getMonth();
    let anos = data.getFullYear();
    let semana = data.getDay();

    if (hor < 10) {
        hor = "0" + hor;
    }
    if (min < 10) {
        min = "0" + min;
    }
    if (seg < 10) {
        seg = "0" + seg;
    }
    if (hor == 19 && min >= 0) {
        trocarFundoTela.style.backgroundImage = "url('./imgs/jesus-4336337_1920.jpg')";
        document.getElementById("relogio").style.color = "#004064";
        document.getElementById("datas").style.color = "#004064";
    }
    else if (hor == 20 && min >= 30 && min<=35) {
        document.getElementById("relogio").style.display = "none"
        document.getElementById("datas").style.display = "none"
        document.getElementById("importante").style.display = "block"
        document.getElementById("corpo").style.backgroundImage = "url('./imgs/canyon-sky-landscape.jpg')"
    }
    else if (hor == 20 && min > 35 ) {
        document.getElementById("relogio").style.display = "block"
        document.getElementById("datas").style.display = "block"
        document.getElementById("importante").style.display = "none"
        trocarFundoTela.style.backgroundImage = "url('./imgs/prayer-1308663_1920.jpg')";
        document.getElementById("relogio").style.color = "#101b25";
        document.getElementById("datas").style.color = "#101b25";
    }
    
    else if (hor == 21 || hor == 0 && hor < 19) {
        trocarFundoTela.style.backgroundImage = "url('./imgs/jesus-4336337_1920.jpg')";
        document.getElementById("relogio").style.color = "#102939";
        document.getElementById("datas").style.color = "#102939";
    }

    var horas = hor + ":" + min + ":" + seg;
    relog.innerHTML = horas

    var calendario = diaSemanaExtenso[semana] + '  ' + dia + '/' + mesExtenso[mes] + '/' + anos;
    datas.innerHTML = calendario


}

var timer = setInterval(relogio, 1000);

