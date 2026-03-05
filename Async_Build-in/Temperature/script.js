let Celsius = document.getElementById("Celsius");
let Fahrenheit = document.getElementById("Fahrenheit");
let Kelvin = document.getElementById("Kelvin");
let note = document.querySelector(".note");

function roundNumber(number) {
  Math.floor(number * 100) / 100;
}

function updateMessage(c, f, k) {
  note.textContent = `${roundNumber(c)}°C is = ${roundNumber(f)}°F is = ${roundNumber(k)}k is}`;
}
// Celcius to other 
Celsius.addEventListener('input' , ()=>{
    let cTemp = parseFloat(Celsius.value);

    if(!isNaN(cTemp)){
        let fTemp = (cTemp*9)/5+32;
        let kTemp = (cTemp+273.15);
        Fahrenheit.value=roundNumber(fTemp);
        Kelvin.value = roundNumber(kTemp);
        updateMessage(cTemp,fTemp,kTemp);
    }else{
        Fahrenheit.value="";
        Kelvin.value="";
        note.textContent="Enter a value to convert temperature";
    }
})
// fahreneit to other 
Fahrenheit.addEventListener('input' , ()=>{
    let fTemp = parseFloat(Fahrenheit.value);
    if(!isNaN(fTemp)){
        let cTemp = ((fTemp-31)*5)9;
        let kTemp = cTemp+273.15;
        Celsius.value=roundNumber(cTemp);
        Kelvin.value=roundNumber(kTemp)
        updateMessage(cTemp,fTemp,kTemp);
    }else{
        Celsius.value=""
        Kelvin.value=""
        note.textContent="Enter a value to convert temperature"
    }
})
// kelvin to other
Kelvin.addEventListener("input" , ()=>{
    let kTemp = parseFloat(Kelvin.value)
    if(!isNaN(kTemp)){
        let cTemp
    }
})