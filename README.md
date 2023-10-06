# recursion

### Assignment 1
1. Using iteration, write a function `fibs` which takes a number and returns an array containing that many numbers from the fibonacci sequence. Using an example input of `8`, this function should return the array `[0, 1, 1, 2, 3, 5, 8, 13]`.
2. Now write another function `fibsRec` which solves the same problem recursively. This can be done in just a couple of lines (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

## Project: merge sort
Sorting algorithms are a great way to get to grips with recursion. One such algorithm is [Merge Sort](http://en.wikipedia.org/wiki/Merge_sort), a type of sort that lends itself well to recursion and can be much faster than other algorithms such as bubble sort on the right data sets. You’ll build a function which sorts a given array but uses a “merge sort” function for doing so.

It can be a bit strange to wrap your head around, but just remember you’re “dividing and conquering” the problem.

### Assignment 2
1. Build a function `mergeSort` that takes in an array and returns a sorted array, using a recursive merge sort methodology.
2. Tips:
 - Think about what the base case is and what behavior is happening again and again and can actually be delegated to someone else (e.g. that same function!).
 - It may be helpful to check out the background videos again if you don’t quite understand what should be going on.