

console.log(this)

function sam(){
    console.log(this)
}
sam()
const obj={
    firstname:'bala',
    lastname:'yadav',
    fullname:function(){
        console.log(`${this.firstname} ${this.lastname}`)
    }
}

console.log('fullname',obj,obj.fullname())

console.log(obj['firstname'])

obj.lastname='kumar'

delete obj.firstname

obj.fullname()

const obj1={
    name:'bala',
    age:25,
    designation:'trainee developer'
}

for(const key in obj1){
    console.log(key,obj1[key])
}


console.log(Object.keys(obj1).length)

console.log(Object.values(obj1).includes('bala'))

console.log(obj1.hasOwnProperty('name'))

console.log(JSON.stringify(obj1))

obj.fullname=obj.fullname.toString()

console.log(JSON.stringify(obj))

//getter

const sample={
    name:'yadav',
    language:'no',
    get names(){
       return this.name 
    },
    set lang(lang){
        this.language=lang
    }
}

sample.lang='en'

console.log(sample.names,sample.language)

//object constructors

function NewObj(fname,lname){
   this.firstname=fname,
   this.lastname=lname,
   this.age=25;
   this.details=function(greet){
       return ` ${greet} ${this.firstname} ${this.lastname}`
   }
}

NewObj.prototype.age=function(age){
       this.age=age
}

NewObj.prototype.lang='english'

const n1=new NewObj('bala','yadav')
console.log(n1.firstname,n1.age)

const n2=new NewObj('sachin','tendulkar')
console.log(n2.details('hello'))

//seal

//Object.seal(obj1)//cannot add new props but can modify existing props
Object.freeze(obj1)//cannot modify properties and cannot add new props 

obj1.name='bala yadav'

console.log(obj1)

const num1={
    first:1
}
const num2={
    second:2
}

console.log(Object.assign({},num1,num2))

console.log(Object.entries(obj1))




