let a = window.prompt("Mondj egy számot");
let b = window.prompt("Mondj egy másik számot");

var c= Number.parseInt(a) + Number.parseInt(b);

//megadott értékek összeadása
console.log(c);
//megadott értékek szorzata
console.log(a*b);
//megadott érték nényzetre emelése
console.log(a*a, a**b);
//kerület és terület számítás k= 2*pi * r, pi*rnégyzeten
let korker= 2*3.14 * a;
console.log("kör kerülete: " + korker);
let korter= 3.14*b**3.14*b;
console.log("kör területe:" + korter);
//pitagoras
let C= Math.sqrt(Number.parseInt(a) * Number.parseInt(a) + Number.parseInt(b) * Number.parseInt(b) )
console.log(C)