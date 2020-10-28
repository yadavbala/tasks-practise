

const name1:string='bala'

const bool:boolean=true

const no:number=8

const today:Date=new Date()

const und:undefined=undefined

const cars:Array<string>=['yamaha','maruti']

interface Props{
   name:string,
   id:number,
   price:number,
   description?:string,
   getusername?:(id:number)=>string,
   getLogged?():string
}


const obj1:Props={
   name:'bala yadav',
   id:5,
   price:40,
   getusername:function(id:Props['id']):Props['name']{
            if(id===this.id){
                return this.name
            }
   }
}


const hello=(id:Props['id']):Props['name']=>{
    if(id===5){
        return 'kdkadh'
    }
}

interface otherdet{
    state:string,
    country?:string
}

interface deta{
    city:string,
    pincode?:number
    other:otherdet
}
interface Details{
   det:deta

}

interface Define extends deta{
     thaluk:string,
     present?:boolean
}


const detai:Define={
   city:'kdjkdj',
   other:{
       state:'tamilnad'
   },
   thaluk:'bhajak'
}


const and:Props&otherdet={
   name:'skjskjs',
   id:6,
   price:78,
   state:'ldlsdlk'
}



const details:Details={
   det:{
       city:'erode',
       other:{
           state:'tamilnad'
       }
   }
}


const cit:Pick<deta,'city'|'pincode'>={
    city:'erode',
    pincode:638301
}


const vit:unknown={
   name:'kadjkad',
   city:'kdjkdj'
}


const mit:any={
name:'KDJKD'
}

const cit1:Record<string,number|string>={
    price:5,
    name:'kajdkjd',
    

}


interface simple<T,AT>{
    name:T,
    age:AT,
    desc?:T
}

const sim:simple<string,number>={
  name:'bala',
  age:30
}


const id=document.getElementById('hello')! as HTMLFormElement
const title=document.getElementById('ho')! as HTMLInputElement
const head=document.getElementById('hhh')! as HTMLElement


const handleChange1=():void=>{
   console.log(title.value)
   console.log(id.reset())
}

title.addEventListener('change',handleChange1)


if(head){
    head.onclick=()=>{
        head.innerHTML='dmkdkdkn'
    }
}


const handleChange3=()=>{
    title.value
}


const inp3=document.getElementById('demo1')! as HTMLInputElement
const inp4=document.getElementById('demo2')! as HTMLInputElement
const butt=document.getElementById('demo3')! as HTMLButtonElement

function add (a:number,b:number):number{
      return a+b
}

butt.onclick=()=>{
    console.log(add(+inp3?.value,+inp4?.value))
}


let a='hello'

let b:Array<string|number>=['hel','hi',3,4]

interface Cars{
  name:string,
  price:number,
  description:string,
  arr:[string,number]
}

const object:Cars={
    name:'hello',
    price:40,
    description:'this is an object',
    arr:['maruti',30]
}









