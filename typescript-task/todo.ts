
const heading=document.getElementById('heading')! as HTMLElement
const todo1=document.getElementById('todo')! as HTMLInputElement
const demo=document.getElementById('demo')! as HTMLElement

heading.innerHTML=`Hello ${localStorage.getItem('username')}`

let todo:string='',i:number=0

const months:Array<string>=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']

const handletodo=()=>{
    if(todo1){
        todo=todo1.value
        console.log(todo)
    }
   
}

const addtodo=(event)=>{
  event.preventDefault()
    if(todo.length==0){
        demo.innerHTML='todo is required'
    }
    else{
       demo.innerHTML=''
        //res.push(todo)
        let todoList=document.getElementById('mylist')! as HTMLElement
        let li=document.createElement('li')! as HTMLElement
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


