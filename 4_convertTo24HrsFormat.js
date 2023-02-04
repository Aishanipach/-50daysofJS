const time = '01:59PM';

function convertTo24HrsFormat(time) {
    
    const x= time.slice(-2);
    
    let ans=""
    if(x==='AM'){

        if(time.slice(0,2)==='12')
        {
            ans='00'+time.slice(2,5)
            return ans
        }
        if(time.size==7)
            ans=time.slice(0,5)
        else
            ans='0'+time.slice(0,4)

    }

    else{
        if(time.slice(0,2)==='12')
        {
            ans=time.slice(0,5)
            return ans
        }

        let x=parseInt(time.slice(0,2))+12
        ans=Number(x)+time.slice(2,5)


    }

    return ans
}

console.log(`Converted time: ${convertTo24HrsFormat(time)}`)
