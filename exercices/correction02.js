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

const sampleData = ["5", "10", "fifteen", "20", "hugo"];

console.log(processNumbers(sampleData));