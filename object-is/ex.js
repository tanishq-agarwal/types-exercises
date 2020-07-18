// TODO: define polyfill for `Object.is(..)`
if(!Object.is || true){  //to check if Object.is is not defined
    Object.is = function ObjectIs(x,y){
        var xNegZero = isItNegZero(x);
        var yNegZero = isItNegZero(y);

        if(xNegZero || yNegZero){ 
            return xNegZero && yNegZero;  //returns true if both of them are negative
        }
        else if(isItNaN(x) && isItNaN(y)) {
            return true;
        }
        else {
            return x === y;  //returns true if x and y are equal
        }

        function isItNegZero(v) {
            return v == 0 && (1/v) == -Infinity;  //condition for checking -0 ,if v=-0 and 1/(-0) is -infinity ,v is -0.(returns true)
        }
        function isItNaN(v){
            return v !== v; //returns true if it is not equal to itself
        }
    };
}


// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);//these are false statements therefore they will also return true
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
