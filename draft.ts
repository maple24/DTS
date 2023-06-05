console.log(Math.PI);

function getArrayLength(arr) {
    return arr.length
}


getArrayLength([1, 2, 3])


const person: Person = {
    name: 'maple', age: 25
}

// function doNothing(fn: DescribableFunction) {
//     console.log(fn.description + " returned " + fn(6) + " length " + fn.isAcceptable("1234567"));
// }
// function myFunc(someArg: number) {
//     return someArg > 3;
// }
// myFunc.description = "default description";
// myFunc.isAcceptable = (s: string) => {
//     return s.length > 6 ? true : false
// }

// doNothing(myFunc);