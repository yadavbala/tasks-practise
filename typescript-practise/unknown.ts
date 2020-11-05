const applicationState: unknown = {
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
      // gender: Gender.male,
      otherInfo: {
        name: 'some name',
        isQualified: true,
        graduatedOn: new Date(),
        address : {
          street: {
            firstLine: '35',
            secondLine: 'Some nagar',
          }
        }
      }
    },
  };
  
  //console.log(applicationState.userInfo.username);

//tuples in arr we want only string and number exactly in array then we use tuples
//enum is for human readable type

type Combinable=string|number //own aliases in ts
type Conversion1='as-numbers'|'as-string'

enum Role{
 user='user',admin='admin'
}
  interface Cars1{
    name:string,
    price:number,
    description:string,
    arr:[string,number],
    pincode1:Combinable //union type,
    conversion1:Conversion1
   
  }
  
  const object1:Cars1={
     name:'maruti',
      price:40,
      description:'this is an object',
      arr:['maruti',30],
      pincode1:'kdkjdkdj',
      conversion1:'as-numbers'
     
  }

  function add5(a:number,b:number):number{
    return a+b
  }

  function printres(num:number):void{
     console.log(num)
  }

  console.log(printres(add5(4,6)))

  let combvalue=add5
  

  combvalue(4,6)


  function resval(a:number,b:number,cb:(num:number)=>void){
      let c=a+b
      cb(c)
  }

  resval(10,20,(num)=>{
    console.log(num)
  })


  let d:unknown;
  let e:string

  d=20;
  d='max'
  
  
  if(typeof d==='string'){
    e=d
  }

  
  




  