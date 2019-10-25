document.getElementById('player').addEventListener("mouseover",sumaPunts);

punts = 0;
temps = 60;
necessari = 45;
function sumaPunts(){
  punts++;
  document.getElementById("punts").innerHTML = "Punts: <b>" + punts + "/" + necessari + "</b>";
  randNum = Math.round(Math.random()*500);
  randNum2 = Math.round(Math.random()*500);
  
  document.getElementById("player").style.marginTop =randNum + "px";
  document.getElementById("player").style.marginLeft =randNum2 + "px";
  if (punts == 45) {
    alert("T'HA COSTAT PERO MIRA COM HO HAS ACONSEGUIT DEMOSTRA QUE ETS MES LLEST QUE UN ORANGUTAN");
    temps = 60;
    necessari+= 10;
    punts = 55;
  }
}

function restaTemps() {
  temps--;
  document.getElementById("temps").innerHTML = "&nbsp;&nbsp;&nbsp;Temps: "+temps;
  if (temps == 0) {
    alert("60 SEGUNDOS Y NO LO COMPLETAS COMPA TENDRAS UNA MIERDA DE FUTURO :)")
    temps = 60;
    punts = 0;
  }
}

setInterval(restaTemps,1000);
