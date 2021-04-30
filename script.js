// write a function that takes the input string and reverses it
function reverseThisString(string) {
  //split string into char array
  let charArr = string.split("");
  //reverse the array
  charArr.reverse();
  //concat array into string
  return charArr.join("");
}
console.log(reverseThisString("Hello"));

// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
function swapCase(string) {
  //split string into char array
  let charArr = string.split("");
  for (let i = 0; i < charArr.length; i++) {
    //check if char is uppercase, if yes, change it to lowercase
    //check if char is lowercase, if yes, change it to uppercase
    if (charArr[i] == charArr[i].toUpperCase()) {
      charArr[i] = charArr[i].toLowerCase();
    } else {
      charArr[i] = charArr[i].toUpperCase();
    }
  }
  return charArr.join("");
}
console.log(swapCase("Hello World"));

// convert array of numbers from farenheit to celcius
function toCelsius(array) {
  const celcius = (x) => (x - 32) * (5 / 9);
  //create a new array with result of calling celcius function
  return array.map(celcius);
}
const farenheit = [23, 32, 41, 50, 59];
console.log(toCelsius(farenheit));

// write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
function passOrFail(array) {
  //create new array of boolean values testing x>=75
  const grade = array.map((x) => (x >= 75 ? true : false));
  return grade;
}
const gradeArr = [20, 30, 50, 80, 90, 100];
console.log(passOrFail(gradeArr));

// write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
function germanNumbers() {
  const cardinalNumbers = [2, 3, 4, 5, 6];
  const germanNumbers = ["zwei", "drei", "vier", "fünf", "sechs"];
  let newArr = [];
  for (let i = 0; i < cardinalNumbers.length; i++) {
    //create template literal string
    let str = `${cardinalNumbers[i]} is ${germanNumbers[i]}`;
    //push str to beginning of array
    newArr.push(str);
  }
  return newArr;
}
console.log(germanNumbers());

// write code that returns an array of ONLY prime numbers that are in the array numbers
function returnPrimeNumbers() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const primeNum = (x) => {
    //base case 1
    if (x == 1) {
      return false;
    }
    //base case 2
    else if (x == 2) {
      return true;
    }
    //check if the x has any multiples besides 1 and itself
    else {
      for (let i = 2; i < x; i++) {
        if (x % i == 0) {
          return false;
        }
      }
      return true;
    }
  };
  //filter the array
  return numbers.filter((x) => primeNum(x));
}
console.log(returnPrimeNumbers());

// Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
function printConditions() {
  for (let i = 1; i <= 100; i++) {
    //check if multiple of 3 and 5
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("CSC225 RULES I LOVE JAVASCRIPT");
    }
    //check if multiple of 3
    else if (i % 3 == 0) {
      console.log("CSC225 RULES");
    }
    //check if multiple of 5
    else if (i % 5 == 0) {
      console.log("I LOVE JAVASCRIPT");
    }
    //print number
    else {
      console.log(i);
    }
  }
}
printConditions();
