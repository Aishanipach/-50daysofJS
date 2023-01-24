let num = 18

function reverseAnInteger(num) {

    let temp = 0
    while (num > 0.1) {
        let i = num % 10;
        temp = (temp * 10) + i
        num = Math.floor(num / 10);

    }
    return temp;

}

console.log(`Reversed number is:${reverseAnInteger(num)}`)
