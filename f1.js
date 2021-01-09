let name = window.prompt("Hogy hívnak?");
let num = window.prompt("Kedvenc számod?");
console.log(name + " kedvenc száma " + num);
alert(name + " kedvenc száma " + num);
document.write(name + " kedvenc száma " + num);
//h1 változtatás
let result= "Név:" + name+ ","+ "kedvenc száma"+ num;
document.getElementById("feladat1").innerHTML= result;