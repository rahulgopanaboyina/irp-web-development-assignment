"use strict";

// PART 1: Types & Coercion

function parseAmount(amount) {
  if (amount === null || amount === undefined) {
    throw new Error("Amount is required.");
  }

  if (typeof amount !== "string" && typeof amount !== "number") {
    throw new Error("Amount must be a string or number.");
  }

  if (typeof amount === "string") {
    amount = amount.trim();

    if (amount === "") {
      throw new Error("Amount cannot be empty.");
    }
  }

  const convertedAmount = Number(amount);

  if (Number.isNaN(convertedAmount)) {
    throw new Error("Please enter a valid number.");
  }

  if (convertedAmount <= 0) {
    throw new Error("Amount must be greater than zero.");
  }

  return convertedAmount;
}

// Testing parseAmount with different inputs

const testAmounts = ["500", " 250 ", "", "abc", null, undefined, "12.5.3"];

testAmounts.forEach(function (amount) {
  try {
    const result = parseAmount(amount);
    console.log("Input:", amount, "| Valid amount:", result);
  } catch (error) {
    console.log("Input:", amount, "| Error:", error.message);
  }
});

// JavaScript type coercion examples

console.log("\nType Coercion Examples:");

console.log('"5" + 2 =', "5" + 2);
console.log('"5" - 2 =', "5" - 2);
console.log("typeof null =", typeof null);

// PART 2: Scoping & Hoisting

const BANK_NAME = "IRP Bank";
let transactionCounter = 0;

transactionCounter++;

console.log("\nBank Name:", BANK_NAME);
console.log("Transaction Counter:", transactionCounter);

// var hoisting example

console.log("\nVar Hoisting Example:");

console.log("Value before declaration:", accountStatus);

var accountStatus = "Active";

console.log("Value after declaration:", accountStatus);

// let temporal dead zone example

console.log("\nLet Hoisting Example:");

try {
  console.log(customerName);
  let customerName = "Rahul";
} catch (error) {
  console.log("Error:", error.message);
}

// Function declaration hoisting

console.log("\nFunction Declaration Example:");

showBankMessage();

function showBankMessage() {
  console.log("Welcome to", BANK_NAME);
}

// Function expression hoisting

console.log("\nFunction Expression Example:");

try {
  displayMessage();
} catch (error) {
  console.log("Error:", error.message);
}

var displayMessage = function () {
  console.log("This is a function expression.");
};

// Hoisting happens during the creation phase.
// During execution, JavaScript runs the statements in order.
// var is initialized with undefined, while let stays in the
// temporal dead zone until its declaration is reached.

// Asynchronous loop example: var

console.log("\nVar Loop Example:");

for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log("var i:", i);
  }, 1000);
}

// Asynchronous loop example: let

console.log("\nLet Loop Example:");

for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log("let j:", j);
  }, 1000);
}

// var shares one function-scoped variable across the loop.
// let creates a separate block-scoped binding for each iteration.
