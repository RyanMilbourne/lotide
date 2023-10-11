const assertEqual = require('../assertEqual')
const head = require('../head')

// Driver Code
assertEqual((head([5, 6, 7]), 5), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual((head([25, 50, 75], "testing")), 25.5);
assertEqual((head([5, 6, 7]), 5), 5);