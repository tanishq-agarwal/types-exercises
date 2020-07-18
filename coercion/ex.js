// TODO: write the validation functions
function isValidName(name) {
    if (
        typeof name == "string" &&
        name.trim().length >=3
    ){
        return true;
    }
    return false;
}
function hoursAttended(attended,length){
    if(
        typeof attended == "string" &&
        attended.trim() != "" //is not equal to empty string
    ){
        attended = Number(attended); //change into integer
    }
    if(
        typeof length == "string" &&
        length.trim() != "" //is not equal to empty string
    ){
        length = Number(length); //change into integer
    }
    if(
        typeof attended == "number" && //Suppose NaN or null is a parmeter ,we would first check whether it's a number or not
        typeof length == "number" &&
        attended >=0 &&
        length >= 0 &&
        Number.isInteger(attended) &&  //checks if it is actually an integer which means it doesn't contain any fractional component(checking for whole number)
        Number.isInteger(length) &&
        attended <= length
    ){
        return true;
    }
    return false;
}

// tests:
console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);





/*OUTPUT
All will be true
*/