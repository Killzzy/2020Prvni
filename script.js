function čus() {
  let jm = document.getElementById("jmeno").value;
  //výpis do konzole
  console.log(jm);
  alert("Bonjour " + jm + "!");
}

function vypocet() {
  let c1 = document.getElementById("cislo1").valueAsNumber;
  let c2 = document.getElementById("cislo2").valueAsNumber;
  let vysl = c1 + c2;
  console.log(vysl);

}