const str = 'JavaScript is simple but not easy to master';
const wordLimit = 3

function truncateWithWordLimit(str, wordLimit) {
    
    let word=0;

    for(let i=0;i<str.length;i++){
        if(str[i]===" ")
        {
            word=word+1;
        
            if(word===wordLimit)
                return str.slice(0, i)

        }
    }

    return str
}

console.log(`Truncated string: ${truncateWithWordLimit(str, wordLimit)}`)
