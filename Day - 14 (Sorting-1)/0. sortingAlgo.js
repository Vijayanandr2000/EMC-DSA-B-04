// BUBBLE SORT
// Idea: Repeatedly compare neighbors and swap if they are in the wrong order.
// After each round, the biggest number "bubbles" to the end.
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// SELECTION SORT
// Idea: Find the smallest element from the unsorted part and put it at the beginning.
// Repeat until sorted.
function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // Swap the found smallest element with the first element
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

// INSERTION SORT
// Idea: Build a sorted list one element at a time by inserting each element into its correct position.
function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i]; // The element we want to insert
    let j = i - 1;
    // Move bigger elements to the right to make space
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key; // Insert in the right position
  }
  return arr;
}

// Example array
let arr = [5, 3, 8, 4, 2];

console.log("Original:", arr);
console.log("Bubble Sort:", bubbleSort([...arr]));
console.log("Selection Sort:", selectionSort([...arr]));
console.log("Insertion Sort:", insertionSort([...arr]));
