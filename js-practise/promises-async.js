const fetchuserdet=()=>{
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('user name is bala')
        },2000);
    })
}

const fetchusercity=()=>{
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            resolve('user city is erode')
        },3000);
    })
}

const serviceapi=async()=>{
    const getuserdetails=await fetchuserdet().then((data)=>data).catch((err)=>err)
    const getusercity=await fetchusercity().then((data)=>data).catch((err)=>err)
    console.log(getusercity,getuserdetails)
}

serviceapi()

//try catch finally