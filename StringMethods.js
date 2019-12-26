//String Methods
    //toUpperCase
let msg = "You Are Beautiful"

let upperCase = msg.toUpperCase();

upperCase

    //toLowerCase
let lowerCase = msg.toLowerCase();

lowerCase

    //trim
let city = "         New Orleans      "
city

let trimmed = city.trim();

trimmed

// we can chain these methods


let chained = city.trim().toUpperCase();

chained

// some methods accept arguments that modify their behavior. We pass these arguments inside of the parentheses. 

    //indexOf
let tvShow = 'catdog';

let catIndex = tvShow.indexOf('cat');

let dogIndex = tvShow.indexOf('dog');

let whatIndex = tvShow.indexOf('bob');

catIndex
dogIndex
whatIndex
// returns -1 when sub-string is not found

    //slice
let catsAreBest = tvShow.slice(0,3);

catsAreBest

let price = "$50.60".slice(1);
price

    //replace

let lightSwitch = "turn on"

let offSwitch = lightSwitch.replace("on", "off");

offSwitch
