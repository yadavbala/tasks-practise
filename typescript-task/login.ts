
let username1:string='',password:string=''
let x=document.getElementById('demo')! as HTMLElement
let y=document.getElementById('demo1')! as HTMLElement
let user=document.getElementById('username')! as HTMLInputElement
let passw=document.getElementById('password')! as HTMLInputElement
const form=document.getElementById('my-form')! as HTMLFormElement

const handleusername=():void=>{
   if(user){
       username1=user.value
   }
}

const handlepassword=():void=>{
    if(passw){
       password=passw.value
    }
}

const handlesubmit=(event):void=>{
    event.preventDefault()
    let promise=new Promise(function(resolve,reject){
        if(username1.length==0){
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
    if(username1.length>=3 && password.length>=3){
        localStorage.setItem('username',username1)
        localStorage.setItem('password',password)
        window.location.href='./todo.html'
       form.reset()
    }
}