/*
Provide 3 unique implementations of the following function in TypeScript.

- Comment on the complexity or efficiency of each function.

**Input**: `n` - any integer

*Assuming this input will always produce a result lesser than `Number.MAX_SAFE_INTEGER`*.

**Output**: `return` - summation to `n`, i.e. `sum_to_n(5) === 1 + 2 + 3 + 4 + 5 === 15`
*/

/**
 * Way 1:   use the arithmetic series formula
 * @param n 
 * @return
 */
function sum_to_n_a(n: number): number {
    return n * (n + 1) / 2;
}

console.log(sum_to_n_a(5));


/**
 * Way 2: use recursion
 * @param n 
 * @return
 */
function sum_to_n_b(n: number): number {
    if (n === 1) {
        return 1;
    }
    return n + sum_to_n_b(n - 1);
}

console.log(sum_to_n_b(5));


/**
 * Way 3: use the loop
 * @param n 
 * @return
 */
function sum_to_n_c(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sum_to_n_c(5));