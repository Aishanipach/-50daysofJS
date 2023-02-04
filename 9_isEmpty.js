const obj = {};

function isEmpty(obj) {
    let check=Object.keys(obj).length
    return (check==0)

}

console.log(`is empty object: ${isEmpty(obj)}`)
