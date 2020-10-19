
let username='',password=''
let x=document.getElementById('demo')
let y=document.getElementById('demo1')
let user=document.getElementById('username')
let passw=document.getElementById('password')
const handleusername=(event)=>{
    username=event.target.value
    console.log(username)
}

const handlepassword=(event)=>{
   password=event.target.value
   console.log(password)
}

const handlesubmit=(event)=>{
    event.preventDefault()
    let promise=new Promise(function(resolve,reject){
        if(username.length==0){
            reject('error')
        }else{
            resolve('success')
        }
    })
    promise.then(
        function(success){console.log(success)
            x.innerHTML=''
            user.style.border='2px solid #333'
        },
        function(error){
            console.log(error)
            x.innerHTML='username is required'
            user.style.border='1px solid red'
        }
    )
    let promise1=new Promise(function(resolve,reject){
        if(password.length==0){
            reject('error')
        }else{
            resolve('success')
        }
    })
    promise1.then(
        function(success){console.log(success) 
            y.innerHTML=''
            passw.style.border='2px solid #333'
        },
        function(error){
            console.log(error)
            y.innerHTML='password is required'
            passw.style.border='1px solid red'
        }
    )
    if(username.length>0 && password.length>0){
        localStorage.setItem('username',username)
        localStorage.setItem('password',password)
        window.location.href='./todo.html'
        document.getElementById('my-form').reset()
    }
}