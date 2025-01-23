//function to convert any unit into meters

function convertMeters(value, fromUnit){
    if(fromUnit==="kilometers")
    {
        return value * 1000;
    }
    if(fromUnit==="centimeters")
    {
        return value/ 1000;
    }
    if(fromUnit==="feet")
    {
        return value/ 3.28084;
    }
    if(fromUnit==="inches")
    {
        return value /39.3701;
    }
    return value;

}
//function to convertfromMeters to other units
function convertFromMeters(meters, toUnit){
    if(toUnit ==="kilometers"){
        return meters/1000;
    }
    if(toUnit ==="centimeters"){
        return meters*100;
    }
    if(toUnit ==="feet"){
        return meters * 3.28084;
    }
    if(toUnit ==="inches"){
        return meters * 39.3701;
    }
    return meters;
}




//capture input value from the form


function convert(){

    const inputNum=document.getElementById('inputValue').value;
    console.log(inputNum);

    const from_unit=document.getElementById('fromUnit').value;
    console.log(from_unit);

    const to_unit=document.getElementById('toUnit').value;
    console.log(to_unit);

   //cal convert convertMeters function- converts input to meters
    let valueInMeters=convertMeters(Number(inputNum), from_unit);
    //convert meters to the target unit

   const resultInMeters =convertFromMeters(valueInMeters, to_unit);

   //display result
   document.getElementById("result").innerHTML= inputNum +" "+ from_unit +"=" + resultInMeters +" "+ to_unit;
}