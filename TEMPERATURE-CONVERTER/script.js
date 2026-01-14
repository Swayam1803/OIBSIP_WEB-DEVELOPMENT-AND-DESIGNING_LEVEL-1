function convert(){
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var temperature = parseFloat(document.getElementById('temperature').value);

    var convertedValue;
    var resultUnit;

    switch (from){
        case "C":
            if (to === "F"){
                convertedValue = (temperature * 9/5) +32;
                resultUnit = "F";
            } else if (to === "K"){
                convertedValue = temperature + 273.15;
                resultUnit = "K";
            }else{
                convertedValue = temperature;
                resultUnit = "C";
            }
            break;

            case "F":
            if (to === "C"){
                convertedValue = (temperature -32) * 5/9;
                resultUnit = "C";
            } else if (to === "K"){
                convertedValue = (temperature -32) * 5/9 + 273.15;
                resultUnit = "K";
            }else{
                convertedValue = temperature;
                resultUnit = "F";
            }
            break;

            case "K":
            if (to === "C"){
                convertedValue = temperature - 273.15;
                resultUnit = "C";
            }else if (to === "F"){
                convertedValue = (temperature - 273.15) * 9/5 +32;
                resultUnit = "F";
            }else{
                convertedValue = temperature;
                resultUnit = "K";
            }
            break;

    }

    document.getElementById("result").value = convertedValue.toFixed(2) + ' ' + resultUnit;
    
}