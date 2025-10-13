let a = [5, 4, 2, 6, 8, 1, 0, 9];

let pivot = a[0];
let i = 1;
let j = a.length - 1;

function swap(i, j) {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

while (i <= j) {
  while (pivot > a[i] && i < a.length) i++;

  while (pivot < a[j] && j >= 0) j--;

  if (i < j) {
    swap(i, j);
  }
}

console.log(a);
swap(0, j);
console.log(a);
