
/*let x= window.prompt("Number?");
if (x<0){
    console.log("a szám negatív")
}else if(x==0){
    console.log("nulla")
}else {
    console.log("a szám pozitív")
}*/


//Irj egy programot, ami bekér be két számot a és b
// változóba és eldönti, hogy melyik nagyobb
// esetleg egyenlő a kettő. Ha a változó nagyobb, írja ki, pl:
//    “a=2  nagyobb, mint b=1” ,
// és fordítva”. Egyenlőség esetén írja ki:
//   “a=5 és b=5 egyenlő”

/*let a= window.prompt("first num");
let b= window.prompt("second num");
if( a < b){
    console.log("a="+ a +"kisebb mint b=" + b);
}else if(a==b){
    console.log(a+"="+ b);
}else {
    console.log("a="+ a +"nagyobb mint b=" + b);
}*/

//Írj egy programot, ami bekér két számot. majd a harmadik
// bekérésnél megadott matematikai műveletet (+, -, /, * ) elvégzi
// és kiiratja a konzolra és a html dokumentum “result” id-val rendelkező
// span elemébe egyaránt!
//
//
// MEgjegyzés: a feladatot “if” ”else if” “else”  utasításokkal old meg

/*let num1 = window.prompt("first num");
let num2 = window.prompt("second num");
let op = window.prompt("what i do");
if (op ==="+"){
    let result= Number.parseInt(num1) + Number.parseInt(num2);
    console.log(result);
    document.getElementById("result").innerHTML= result;
}else if (op ==="-") {
    let result= num1 - num2;
    console.log(result)
    document.getElementById("result").innerHTML = result;
}else if (op ==="/") {
    let result= num1 / num2;
    console.log(result)
    document.getElementById("result").innerHTML = result;
}else if(op ==="*") {
    let result= num1 * num2;
    console.log(result)
    document.getElementById("result").innerHTML = result;
}*/
// Ird meg a  3. feladat “switch” elágazásos verzióját

/*let numero1= window.prompt("unce");
let numero2= window.prompt("secunde");
let oper = window.prompt("Kalkulátor (+ , - , / , *)");
switch (oper) {
    case "+":
        let plus = Number.parseInt(numero1) + Number.parseInt(numero2);
        console.log(plus);
        document.getElementById("result").innerHTML = plus;
        break;
    case "-":
        let minus= numero1 - numero2;
        console.log(minus);
        document.getElementById("result").innerHTML = minus;
        break;
    case "/":
        let division = numero1 / numero2;
        console.log(division);
        document.getElementById("result").innerHTML = division;
        break;
    case "*":
        let multiplay = numero1 * numero2;
        console.log(multiplay);
        document.getElementById("result").innerHTML = multiplay;
}*/

//Osztályzó program (+Github)
// Írj egy programot, amit a beírt pontszám alapján kiszámolja az megérdemelt osztálzatot!
// - A dolgozatok maximális pontszáma 55pont (100%).
//
// Az osztályzatok számítása:
// - 20% alatt → 1
// - 20% és 40% → 2
// - 40% és 60% → 3
// - 60% és 80% → 4
// - 80% fölött → 5
//
// Egész számra kerekítésnél
// Math.round(5.233);  //eredmény 5

let maxPoint= window.prompt("Get point: min 0, max. 55p");
if(maxPoint > 0 && maxPoint <= Math.round(11)){
    console.log("result 1")
    document.getElementById("result").innerHTML = "result 1";
}
if(maxPoint > Math.round(11) && maxPoint <= Math.round(22)){
    console.log("result 2")
    document.getElementById("result").innerHTML = "result 2";
}
if(maxPoint > Math.round(22) && maxPoint<= Math.round(33)){
    console.log("result 3")
    document.getElementById("result").innerHTML = "result 3";
}
if(maxPoint > Math.round(33) && maxPoint <= Math.round(44) ){
    console.log("result 4")
    document.getElementById("result").innerHTML = "result 4";
}
if(maxPoint > Math.round(44) && maxPoint <= Math.round(55) ){
    console.log("result 5")
    document.getElementById("result").innerHTML = "result 5";
}
if(maxPoint > Math.round(55)){
    console.log("Not allowed point")
    document.getElementById("result").innerHTML = "Not allowed point";
}