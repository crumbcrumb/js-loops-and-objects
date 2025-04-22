// ✅ Part 1: For Loops

// 🔁 Problem 1: Count to 10
// Use a for loop to print numbers 1 through 10 in the console.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 🔁 Problem 2: Even Numbers
// Print all even numbers from 2 to 20 using a for loop.
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

// 🔁 Problem 3: Loop through an Array
// Loop through the animals array and print each animal with a message like:
// "I like dogs."
let animals = ["dog", "cat", "rabbit", "parrot"];
for (let i = 0; i < animals.length; i++) {
  console.log(`I like ${animals[i]}s`);
}

// 🔁 Problem 4: Reverse Array Output
// Use a for loop to print the array in reverse order.
let colors = ["red", "green", "blue", "yellow"];
for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}

// ✅ Part 2: Objects

// 🧾 Problem 5: Simple Object
// Create an object named person with properties:

// • name

// • age

// • favoriteColor

// Log a message using all three values.

// Example:

// "My name is Maya. I'm 30 and my favorite color is purple."

let person = {
  name: "Bob",
  age: 40,
  favoriteColor: "red",
};

console.log(
  `My name is ${person.name}. I'm ${person.age} and my favorite color is ${person.favoriteColor}.`
);

//🧾 Problem 6: Modify an Object
// Add a new property hobby to the person object using dot notation.
// Log the updated object.
person.hobby = "swimming";
console.log(person);

// 🧾 Problem 7: Array of Objects
// Create an array of 3 book objects. Each book should have:

// • title

// • author

// • pages

// Loop through the array and print each book like:

// "The Hobbit by J.R.R. Tolkien - 310 pages"

let books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", pages: "310" },
  {
    title: "Wicked",
    author: "Gregory Maguire",
    pages: "560",
    isFavorite: true,
  },
  { title: "Twilight", author: "Stephenie Meyer", pages: "498" },
];

for (let i = 0; i < books.length; i++) {
  let bookObject = books[i];
  console.log(
    `${bookObject.title} by ${bookObject.author} - ${bookObject.pages} pages`
  );
}

// 🧾 Problem 8: Favorite Book Finder
// Inside your array of books, add a property isFavorite: true to one of them.
// Use a for loop to find and print only the favorite book.

for (let i = 0; i < books.length; i++) {
  let bookObject = books[i];
  if (books[i].isFavorite === true)
    console.log(
      `${bookObject.title} by ${bookObject.author} - ${bookObject.pages} pages`
    );
}

// 🧠 Bonus Challenge
// Create a function called describePerson(obj) that takes an object with name, age, and hobby, and returns a sentence like:

// "Jane is 25 years old and loves painting."

let description = {
  name: "Mary",
  age: 20,
  hobby: "knitting",
};

function describePerson(obj) {
  return `${obj.name} is ${obj.age} and loves ${obj.hobby}`;
}

console.log(describePerson(description));
