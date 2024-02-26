/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/
let eurkiekis = Math.floor(Math.random() * 1000) + 1;
function EurDolKonverteris(x) {
  let dol = 1.08;

  console.log("Euru kiekis", x, "Doleriu kiekis", (x * dol).toFixed(2));
}
EurDolKonverteris(eurkiekis);

/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
let dolkiekis = Math.floor(Math.random() * 1000) + 1;
function DolEurKonverteris(x) {
  let eur = 0.92;

  console.log("Doleriu kiekis", x, "Euru kiekis", (x * eur).toFixed(2));
}
DolEurKonverteris(dolkiekis);

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 

Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/
let svoris = 50;
let ugis = 1.82;
function KunoMasesIndeksas(s, u) {
  let bmi = s / u ** 2;
  if (bmi > 25) {
    console.log("Viršsvoris");
  } else if (bmi < 18.5) {
    console.log("Normalu");
  } else {
    console.log("Per mažas svoris");
  }
}
KunoMasesIndeksas(svoris, ugis);
/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

let dabar1 = new Date();
const date1 = new Date("1999/07/08 17:10:26");
let diff = Math.abs(dabar1 - date1);
console.log("Dabartinis laikas :", dabar1.toISOString());
console.log("Gimimo metai      :", date1.toISOString());

console.log("sekundemis", (diff / 1000).toFixed());
console.log("minutemis", (diff / 1000 / 60).toFixed());
console.log("valandomis", (diff / 1000 / 60 / 60).toFixed());
console.log("dienomis", (diff / 1000 / 60 / 60 / 24).toFixed());
/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/
function FarToCelKonverteris(far) {
  let cel = ((far - 32) * 5) / 9;
  console.log("Farengeitas i celciju", far, "----", cel.toFixed(2));
}
FarToCelKonverteris(-40);

function CelToFarKonverteris(cel) {
  let far = (9 / 5) * cel - 32;
  console.log("Celcijus i farengeita", cel, "----", far.toFixed(2));
}
CelToFarKonverteris(10);

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.*/

let masyvas3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let skaiciai = masyvas3.join("-");

console.log(skaiciai);

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/
let suma = "*";
for (let i = 0; i < 5; i++) {
  console.log(suma);
  suma += "*";
}

/*
8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
*/
now = new Date();
const kaledos = new Date("2024-12-25");

let dienos = Math.floor((kaledos - now) / 1000 / 60 / 60 / 24);
console.log("Dienos iki kaledu", dienos);

/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/
let vardas1 = "Tomas";
let vardas2 = "Dainius";
let vardas3 = "Paulius";
let vardas4 = "Jonas";
let masyvas1 = [`${vardas1},${vardas2},${vardas3},${vardas4}`];
let masyvas2 = [`${vardas1}+${vardas2}+${vardas3}+${vardas4}`];

console.log(masyvas1);
console.log(masyvas2);

/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/
let slaptazodis = []
let RandomMasyvas = [
'A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h','I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p','Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x','Y','y','Z','z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','_','^','&','*','(','|']

for (let i = 0; i <12 ; i ++){
    slaptazodis.push(RandomMasyvas[Math.floor(Math.random() * RandomMasyvas.length)])
}
console.log('slaptazodis:',slaptazodis.join(''))


