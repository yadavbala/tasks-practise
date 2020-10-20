document.getElementById('heading').innerHTML=`Hello ${localStorage.getItem('username')}`

let todo='',i=0,res=[]

const months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']

const handletodo=(event)=>{
   todo=event.target.value
   console.log(todo)
}

const addtodo=(event)=>{
  event.preventDefault()
    if(todo.length==0){
        document.getElementById('demo').innerHTML='todo is required'
    }
    else{
        document.getElementById('demo').innerHTML=''
        //res.push(todo)
        let todoList=document.getElementById('mylist')
        let li=document.createElement('li')
       li.appendChild(document.createTextNode(`${++i} ${todo} \u00A0\u00A0\u00A0\u00A0${new Date().getDate()} ${months[new Date().getMonth()]} `))
        todoList.appendChild(li)
        li.addEventListener('dblclick',removeItem)
        //document.getElementById('my-form').reset()
    }
}

const removeItem=(event)=>{
    event.target.outerHTML=''
  console.log('removeitem',event)
}


