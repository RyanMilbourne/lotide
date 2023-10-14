# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @__ryan_m__lotide`

**Require it:**

`const _ = require('@__ryan_m__/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: prints the first index of an array
* `tail`: prints the array without the first index
* `middle`: prints the middle value(s) of af array. 1 value if array is odd and 2 if array is even
* `eqArrays`: compares two arrays and their content
* `assertEqual`: compares two arguments and prints either a truthy or falsey statement
* `assertArraysEqual`: compares two arrays and prints either a truthy or falsey statement