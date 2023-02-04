const str = '("F(X) !== G(X) !== F(X)")';

function getTheGapX(str) {
    // write your solution here
let count=-1;
let start=-1;
let ind=-1;
    for(let i=0;i<str.length;i++){
        if(str[i]==='X' && start===-1)
          {
            
            count=0;
            start=i
            
            continue
          }

          if(str[i]==='X' && start!==-1){
            ind=i
          }
    }
    if(ind!==-1)
    count=ind-start
    return count
}

console.log(`Gap between the X's: ${getTheGapX(str)}`)
