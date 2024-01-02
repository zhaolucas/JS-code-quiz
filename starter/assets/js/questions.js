// question banks with multiple choices of three 
const questions = [
    {
        question: "What is the output of the following code?\nlet x = '5';\nlet y = 9;\nconsole.log(x + y);",
        choices: [
          { text: "1. '59'", isCorrect: false },
          { text: "2. 14", isCorrect: true },
          { text: "3. Error", isCorrect: false },
        ],
      },
      
    {
      question: "What is the purpose of the return statement in a JavaScript function?",
      choices: [
        { text: "1. To terminate the function", isCorrect: false },
        { text: "2. To return a value from the function", isCorrect: true },
        { text: "3. To prevent the function from executing", isCorrect: false },
      ],
    },
    {
      question: "How do you access the properties of an object in JavaScript?",
      choices: [
        { text: "1. Using the dot operator (.)", isCorrect: true },
        { text: "2. Using the bracket operator []", isCorrect: false },
        { text: "3. Using the arrow operator ->", isCorrect: false },
      ],
    },
    {
      question: "What is the difference between an array and an object in JavaScript?",
      choices: [
        { text: "1. An array stores elements in a specific order, while an object stores key-value pairs.", isCorrect: true },
        { text: "2. An array is a data structure, while an object is a type of variable.", isCorrect: false },
        { text: "3. An array is mutable, while an object is immutable.", isCorrect: false },
      ],
    },
    {
      question: "How do you create a function that takes two arguments and returns their sum?",
      choices: [
        { text: `1. function add(a, b) { return a + b; }`, isCorrect: true },
        { text: `2. function sum(a, b) { return a + b; }`, isCorrect: false },
        { text: `3. const add = (a, b) => a + b;`, isCorrect: false },
      ],
    },
  ];
  
  export default questions;
  