function čus() {
  let jm = document.getElementById("jmeno").value;
  //výpis do konzole
  console.log(jm);
  alert("Bonjour " + jm + "!");
}

function vypocet() {
  let c1 = document.getElementById("cislo1").valueAsNumber;
  let c2 = document.getElementById("cislo2").valueAsNumber;
  let op = document.getElementById("operace").value;
  console.log(op);

  let vysl = "?";
  if (isNaN(c1)) {
    alert("Není zadáno první číslo");
  } else if (isNaN(c2)) {
    alert ("Neni zadano druhe číslo");
  } else if (op == "plus"){
    vysl = c1 + c2;
  } else if (op == "minus"){
    vysl = c1 - c2;
  }
  console.log(vysl);
  document.getElementById("vysledek").value = vysl;
  document.getElementById("vysledek2").innerHTML = "Vysledek je <b>" + vysl + "</b>.";
  
}