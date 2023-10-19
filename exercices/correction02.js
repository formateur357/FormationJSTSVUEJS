function divideNumbers(nums, divisors) {
    let results = [];
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < divisors.length; j++) {
            try {
                if (typeof nums[i] !== 'number') {
                    throw new TypeError(`Invalid number at index ${i} of nums.`);
                }
                if (typeof divisors[j] !== 'number') {
                    throw new TypeError(`Invalid number at index ${j} of divisors.`);
                }
                if (divisors[j] === 0) {
                    throw new Error(`Division by zero at index ${j} of divisors.`);
                }
                results.push(nums[i] / divisors[j]);
            } catch (e) {
                results.push(e.message);
            }
        }
    }

    return results;
}

function divideNumbersforEach(nums, divisors) {
    let results = [];

    nums.forEach(num => {
        divisors.forEach(divisor => {
            try {
                if (typeof num !== 'number') {
                    throw new TypeError(`Invalid number at ${num} of nums.`);
                }
                if (typeof divisor !== 'number') {
                    throw new TypeError(`Invalid number at ${divisor}} of divisors.`);
                }
                if (divisor === 0) {
                    throw new Error(`Division by zero at ${divisor} of divisors.`);
                }
                results.push(num / divisor);
            } catch (e) {
                results.push(e.message);
        }})
    })

    return results;
}

let start = performance.now();
console.log(divideNumbers([1, 2, 3, "john", 5], [1, 0, 3, 4, 5]));
let end = performance.now();
let time = end - start;

console.log(`La coommande a pris ${time} milisecondes pour s'éxecuter.`);

function processNumbers(strArr) {
    let result = [];

    for (let i = 0; i < strArr.length; i++) {
        try {
            let num = Number(strArr[i]);
            if (isNaN(num)) {
                throw new Error();
            }
            result.push(num + 10);
        } catch (e) {
            console.log(`Error processing array at index ${i}: Not a valid number.`);
            return ;
        }
    }

    return result;
}

// const sampleData = ["5", "10", "fifteen", "20", "hugo"];

// console.log(processNumbers(sampleData));

