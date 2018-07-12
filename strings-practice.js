// Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
//
// Examples:
// makeAbba("Hi", "Bye") → "HiByeByeHi"
// makeAbba("Yo", "Alice") → "YoAliceAliceYo"
// makeAbba("What", "Up") → "WhatUpUpWhat"
//
// function makeAbba(a, b) {
//
// }

function makeAbba(a, b) {
  return a + b + b + a;


}
console.log(makeAbba("Hi", "Bye"));

// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).
//
// Examples:
// comboString("Hello", "hi") → "hiHellohi"
// comboString("hi", "Hello") → "hiHellohi"
// comboString("aaa", "b") → "baaab"
//
// function comboString(a, b) {
//    function comboString (a, b){
//
//

function comboString(word1, word2) {
  return short + long + short;
  if (word1.length > word2.length) {
    return word2 + word1 + word2
  } else {
    return word1 + word2 + word1
  }
  console.log(comboString("hi", "hello"))


  function lastTWO(str) {
    "tomato".length

  }