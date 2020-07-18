function setsMatch(arr1,arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}
// TODO: write `findAll(..)`
function findAll(match,arr){ //Suppose (0,values) values is pass into arr
	var ret=[];//empty array to store the matched values(search the array from list of values)
	for(let v of arr) {
		if(Object.is(match,v)){  //match and v has same value
			ret.push(v);//returns true in cases like 4th and 5th and so on.
		} 
		else if(match == null && v == null){
			ret.push(v); //for cases like 1 , 2 ,etc.
		} 
		else if(typeof match == "boolean" && typeof v == "boolean"){
			if(match == v) {  //will use double equal as they both are boolean checked above so no need to include ===.
				ret.push(v);
			}
		}
		else if(typeof match == "string" && match.trim() != ""  && typeof v == "number" && !Object.is(v,-0)){
			if(match == v){
				ret.push(v);
			}
		}
		else if(
			typeof match == "number" && 
			!Object.is(match,-0) &&  //number is not -0
			!Object.is(match,NaN) && 
			!Object.is(match,Infinity) && 
			!Object.is(match,-Infinity) &&
			typeof v == "string" &&
			v.trim() != ""
			){
				if(match == v){
					ret.push(v);
				}
			}
	}
	return ret;
}


// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
console.log(setsMatch(findAll(-0,values),[-0]) === true);
console.log(setsMatch(findAll(13,values),[13]) === true);
console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
console.log(setsMatch(findAll("",values),[""]) === true);
console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
console.log(setsMatch(findAll("true",values),["true"]) === true);
console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log(setsMatch(findAll(myObj,values),[myObj]) === true);

console.log(setsMatch(findAll(null,values),[null,0]) === false);
console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
console.log(setsMatch(findAll(0,values),[0,-0]) === false);
console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
console.log(setsMatch(findAll(25,values),[25]) === false);
console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
console.log(setsMatch(findAll("",values),["",0]) === false);
console.log(setsMatch(findAll("false",values),[false]) === false);
console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
console.log(setsMatch(findAll(true,values),[true,1]) === false);
console.log(setsMatch(findAll(false,values),[false,0]) === false);



