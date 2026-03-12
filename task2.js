function toCelsius(Fahrenheit) {
    let res1 = (5/9) * (Fahrenheit - 32);
    console.log(`${Fah} degrees Fahrenheit is ${Math.round(res1)} degrees Celsius.`)
}

function toFahrenheit(Celsius) {
    let res2 =  (Celsius * 9/5 + 32);
    console.log(`${Cel} degrees Celsius is ${Math.round(res2)} degrees Fahrenheit.`)
}

function toMiles(Kilometers) {
    let res3 = (Kilometers * 0.621371);
    console.log(`${Kilo} kilometers is ${Math.round(res3)} miles.`)
}

function toKilometers(Miles) {
    let res4 = (Miles / 0.621371);
    console.log(`${Mil} miles is ${Math.round(res4)} kilometers.`)
}

let Cel = 30;
let Fah = 80;
let Kilo = 100;
let Mil = 60;

let value1 = toCelsius(Fah);
let value2 = toFahrenheit(Cel);
let value3 = toMiles(Kilo);
let value4 = toKilometers(Mil);