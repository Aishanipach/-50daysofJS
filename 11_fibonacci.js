function fibonacci(n) {
	let [a, b] = [0, 1];
  while (n-- > 0) {
    [a, b] = [b, a + b];
    // console.log(n, "  ",a,b)
  }
  
// console.log(a)
  return a;
}
console.log(`fibonacci value at position 5: ${fibonacci(5)}`)
