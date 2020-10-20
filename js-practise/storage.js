

const simplejson={
    name:'bala',
    skills:['html','css','js','react'],
    age:'25',
    address:{
        city:'erode',
        state:'tamilnadu'
    },
    designation:'trainee developer'
}


const loc=JSON.stringify(simplejson)

//document.getElementById('demo').innerHTML=loc

localStorage.setItem('au',loc)

document.getElementById('demo').innerHTML=((localStorage.getItem('au')))

console.log(JSON.parse(localStorage.getItem('au')))

const displayDate=()=>{
    document.getElementById('demo1').innerHTML=new Date()
}

function displayrandom(){
    const random=Math.round(Math.random()*10)
    document.getElementById('demo2').innerHTML=`the random no is ${random}`
}

document.getElementById('dateId').onclick=changeDate

function changeDate(){
    document.getElementById('date').innerHTML=Date()
}

function fetchvalue(){
    const x=document.getElementById('input')
    console.log(x.value)
    x.value=x.value.toUpperCase()
}

const nor=document.getElementById('paragraph')

/*nor.addEventListener('resize',handleresize)
nor.addEventListener('keypress',handlekeypress)
nor.addEventListener('mouseup',handlemouseup)*/



function whichevent(event){
    document.getElementById('event').innerHTML=event.keyCode
}

try{
    alerddd('hello')
}
catch(err){
    console.log(err.message)
    //fallback code
}
finally{
    console.log('always exec')
}

//console.log(localStorage.clear())

//localStorage.removeItem('au')


/*sessionStorage.setItem('ses',loc)

sessionStorage.getItem('ses')

sessionStorage.removeItem('ses')*/

//sessionStorage.clear()



const arr=[20,30,35,46,55]


    let every=arr.every(ele=>ele>30)
    let promise=new Promise(function(resolve,reject){
        if(every){
            resolve('a is resolved')
        }else{
            reject('a is rejected')
        }
    })

    promise.then(
        function(success){console.log(success)},
        function(error){console.log(error)}
    )



    let some=arr.some(ele=>ele>30)
    let promise1=new Promise(function(resolve,reject){
        if(every){
            resolve('b is resolved')
        }else{
            reject('b is rejected')
        }
    })

    promise1.then(
        function(success){console.log(success)},
        function(error){console.log(error)}
    )


    const simpleJson = {
        categories: [
          'Electronics', 'Mobiles', ''
        ],
        products: [
          {
            name: 'name',
            rating: 5
          }
        ],
        userInfo: {
          username: 'ranjith',
          email: 'ranjith@appknit.io',
          firstName: 'Ranjith',
          token: 'sakdjhaskdm',
          isLoggedIn: true,
          lastLoginTime: 'Wed Oct 14 2020 06:45:45 GMT+0530 (India Standard Time)',
          otherInfo: {
            name: 'some name',
            isQualified: true,
            graduatedOn: new Date(),
            address : {
              street: {
                firstLine: '35',
                secondLine: 'Some nagar',
                others: {
                  asdsd: {
                    sdas: {
      
                    }
                  }
                }
              }
            }
          }
        },
      };

      const {user,email,firstName}=simpleJson.userInfo

      const userinformation={user,email,firstName}

      console.log(userinformation)


     
      
