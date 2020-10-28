
//these are all interfaces we define
let name3:string='training'

let num:number=7

let toggle:boolean=true

let und:undefined=undefined

let date:Date=new Date()

let fruits:Array<string|number|boolean>=['banana','papaya','mango',8,true]

console.log(name3,num,date,fruits,toggle)


interface Iuserreference{
  username:string,
  id:number|string,
  isTokengenerated?:boolean,
  isLoggedIn?:boolean,
  getUsername?:(userid:number)=>string,
  getLogDetails?(toggle:boolean):string
}

const singleUser:Iuserreference={
   username:'bala',
   id:5,
   isLoggedIn:true,
   getUsername:function(id:Iuserreference['id']):Iuserreference['username']{
       if(this.id===id){
           return this.username
       }
   },
   getLogDetails(bool:boolean):Iuserreference['username']{
         if(bool===this.isLoggedIn){
           return 'user logged in'
         }
   }
}

console.log(singleUser.getUsername(5))
console.log(singleUser.getLogDetails(true))


var userReference:Iuserreference[] = [
  {
      username: 'a',
      id: 0
  },
  {
      username: 'b',
      id: 1,
      isTokengenerated: true
  },
  {
      username: 'c',
      id: 2,
      isLoggedIn: true
  },
  {
      username: 'd',
      id: 3
  },
  {
      username: 'e',
      id: 4,
      isLoggedIn:true
  },
  {
      username: 'f',
      id: 5
  },
];

const getUsername =(id:Iuserreference['id']):Iuserreference['username']=> {
  var user = userReference.find(function (user) { return user.id === id; });
  return user ? user.username : 'user not found';
};


/*class UserDetails {
    public username: string;
    public id: number;
    constructor() {
      this.username = '';
      this.id = null;
   }
    map(data) {
      this.username = data.username;
      this.id = data.id;
    }
  }
   const userDetails: UserDetails = new UserDetails();
 userDetails.map(singleUser);
  console.log('user details >>', userDetails);*/


console.log(getUsername(2));
console.log(getUsername(8));
console.log(getUsername('sdsd'));
console.log(getUsername(6));
