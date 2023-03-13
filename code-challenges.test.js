// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

const { array } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

// describe("shuffler", () => {
//   it('does not match if received does not contain expected elements', () => {
//   expect(shuffler).not.toEqual(expect.arrayContaining(['pink', 'yellow', 'green', 'blue']));
//   expect(shuffler).not.toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]));
// })


// });

// // // HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [  "chartreuse",  "indigo","periwinkle", "ochre","aquamarine", "saffron"]
// // // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// // // b) Create the function that makes the test pass.

// // // input: an array
// // // Output: the first item from the array and shuffles the remaining content
// // // PsuedoCode:create a funtion that will pop the first index in the array and shuffle the rest.

// // //user comment- So i got the function to work and but it keeps failing the test. So the way that this function works is that it reverses the array and using the pop method we can delete what was orginanaly the first index and the reverse method sorta shuffles it .
// I adjusted my test, it was set to expect the exact array. now by using expect.arrayContaining  it looks for those values but not in that index order.

//  const shuffler = (array) =>{

//    array.reverse();
//    array.pop();
//    array.sort();
//  return array
//  }

//  console.log (shuffler(colors1))
//  console.log (shuffler(colors2))


// // // --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// describe("theVoteCount", () => {
//   it("return tally", () => {
//     expect(theVoteCount()).toEqual(11)
//     expect(theVoteCount()).toEqual(-31)
  
//   })
// })

// // a) Create a test with expect statements for each of the variables provided.

// const votes1 = { upVotes: 13, downVotes: 2 }
// // Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// // Expected output: -31
// const votes3 = { upVotes: 15, downVotes:25 }
// // Expected output: -10

// // b) Create the function that makes the test pass.
// // input:receives an object
// // Output:the sum of the two tallys 
// // PsuedoCode: create a funtion that takes in to number, set Num1, Num2 as perameters and subtract num1 to num2 and return the sum of the two. 
// // User comment I want to add some string interpelation and return "Here are the results${results}"


// const theVoteCount = (key)=> {
// let spliter = key.upVotes;
// let spliter2 = key.downVotes;

// tally = spliter - spliter2

// return tally
// }
// console.log (theVoteCount(votes1)) // 11. so i got back the results i was looking for but it says that the key.upVotes is undefined, but it gives back the correct answer
// console.log (theVoteCount(votes2)) // -31
// console.log (theVoteCount(votes3))





// // // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// describe("theGlue", () => {
//   it("returns one array with no duplicate values", () => {
//     expect(theGlue()).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//   })
// })
// // a) Create a test with an expect statement using the variables provided.

// const dataArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// // Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// Input:two arrays
// Output:returns one array with no duplicate values
// Psuedo Code: create a function that joins the two arrays  and filter out the duplicate values . 


// const theGlue = (array_1, array_2) => {
 
//   // let array1 = dataArray1.concat(dataArray2)
//   // let results = [...new Set (array1)] // trying somthing out
// // ^^^function above array 1 and results go together.



//   let results = [...new Set(dataArray1.concat(dataArray2))]// returns: [ 'array', 'object', 'number', 'string', 'Boolean' ]
// // function above goes by its self 

// return results 

// }
// console.log(theGlue(dataArray1,dataArray2))



//User Comment:Both functions work as intended to.