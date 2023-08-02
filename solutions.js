"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */

// Define a function named `isTrue` that takes in any input and returns true if the input provided is exactly equal to `true` in value and data type.

function isTrue(input){

    return input === true;
};

//Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.
//
//  isFalse(false)             // true
//  isFalse(true)              // false
//  isFalse(0)                 // false
//  isFalse(null)              // false
//  isFalse("")                // false
//  isFalse("Banana")          // false
//  isFalse([1, 2])            // false

function isFalse(input){

    return input === false;

}

//Define a function named not that takes in any input and returns the boolean opposite of the provided input

function not(input){

    return !input;
}

//Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.

function addOne(input){

return Number(input) + 1;

}