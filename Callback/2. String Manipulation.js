 function manipulateString(inputString, callback) {
    const manipulatedString = inputString.toUpperCase();

    callback(manipulatedString)
 }

 function logString() {
    console.log(`The manipulated String is: ${manipulatedString}`);
 }

 manipulateString("Hello", "Shk!", logString);