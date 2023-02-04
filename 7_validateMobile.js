const number = '99876543210';

function validateMobile(number) {
    
    let expr = /^(\+91|0)?\s?\d{10}$/;
    
    return expr.test(number)
        
}

console.log(`is a valid Indian mobile number: ${validateMobile(number)}`)
