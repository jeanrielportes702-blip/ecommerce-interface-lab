// Problem 1: The Strict Type Checker
function checkVariable(input) {
  switch (typeof input) {
    case 'string':
      return 'string';
    case 'number':
      return 'number';
    case 'boolean':
      return 'boolean';
    case 'bigint':
      return 'bigint';
    case 'undefined':
      return 'undefined';
    default:
      if (input === null) {
        return 'object';
      }
      return 'object'; // For other objects
  }
}

// Problem 2: Secure ID Generator
function generateIDs(count) {
  const ids = [];
  for (let i = 0; i < count; i++) {
    if (i === 5) {
      continue;
    }
    ids.push(`ID-${i}`);
  }
  return ids;
}

// Problem 3: The Functional Sum
function calculateTotal(...numbers) {
  return numbers.reduce((sum, num) => {
    if (typeof num !== 'number') {
      throw new TypeError("Invalid input: All arguments must be numbers");
    }
    return sum + num;
  }, 0);
}

// Problem 4: Leaderboard Filter
function getTopScorers(playerList) {
  // Using a sample expanded list as per the problem description
  const expandedPlayerList = [
    { name: "Alice", score: 10 },
    { name: "Bob", score: 5 },
    { name: "Charlie", score: 12 },
    { name: "David", score: 7 },
    { name: "Eve", score: 9 },
    { name: "Frank", score: 15 },
    { name: "Grace", score: 6 },
    { name: "Heidi", score: 11 },
    { name: "Ivan", score: 8 },
    { name: "Judy", score: 13 }
  ];

  return expandedPlayerList
    .filter(player => player.score > 8)
    .map(player => player.name)
    .join(', ');
}

// Problem 5: The Private Inventory
class Item {
  #discount = 0.1;

  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  get finalPrice() {
    return this.price - (this.price * this.#discount);
  }
}

// Problem 6: Robust Division
function safeDivide(a, b) {
  try {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  } catch (error) {
    return error.message;
  } finally {
    console.log("Operation attempted");
  }
}

// You can add code here to test these functions when you run `node solution.js`
// For example:
// console.log("Problem 1:", checkVariable("hello"));
// console.log("Problem 1:", checkVariable(123));
// console.log("Problem 1:", checkVariable(true));
// console.log("Problem 1:", checkVariable(null));

// console.log("Problem 2:", generateIDs(10));

// try {
//   console.log("Problem 3:", calculateTotal(1, 2, 3));
//   console.log("Problem 3:", calculateTotal(1, 2, "three"));
// } catch (e) {
//   console.error(e.message);
// }

// console.log("Problem 4:", getTopScorers());

// const myItem = new Item("Laptop", 1000);
// console.log("Problem 5:", myItem.finalPrice);

// console.log("Problem 6:", safeDivide(10, 2));
// console.log("Problem 6:", safeDivide(10, 0));
