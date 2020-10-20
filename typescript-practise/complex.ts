enum Gender{
  male,
  female
}

interface Iproductinfo{
  name:string,
  rating:number,
  description?:string
}

interface IstreetInfo{
  firstLine:string,
  secondLine:string,
  thirdLine?:string
}

interface Iaddress{
  street:IstreetInfo,
  city?:string,
  pincode?:string
}

interface Iotherinfo{
  name:string,
  isQualified:boolean,
  graduatedOn:Date,
  address:Iaddress
}

interface Iuserinfo{
  username:string,
  email:string,
  firstName:string,
  token:string,
  isLoggedIn:boolean,
  lastLoginTime:string,
  gender:Gender,
  otherInfo:Iotherinfo
}

interface IApplicationState{
  categories:Array<string>,
  products:Array<Iproductinfo>,
  userInfo:Iuserinfo
}

const applicationState1: IApplicationState = {
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
      gender: Gender.male,
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

//picking from interface
  
  const productState:Pick<IApplicationState,'categories'|'products'>={
          categories:['banana','mango'],
          products:[{name:'bala yadav',rating:7}]
  }


  const userState:Pick<Iuserinfo,'username'|'firstName'>={
      username:'bala',
      firstName:'Bala'
  }


  interface ProductInfo extends Iproductinfo{
    price:number,
    quantity?:number
  }

  const productstate:ProductInfo={
    name:'hello',
    rating:5,
    price:100
  }

  /*const otherinformation:ProductInfo & Iuserinfo={
          price:10,
          name:'hello',
          rating:4,
          firstName:'bala',
          isLoggedIn:true,

  }*/

  /*const getuserName = (): never => {
    if(false) {
      return;
    }
  };*/
  
 

  //console.log(productState.categories)

  //console.log(userDetails2.email)

  //console.log(applicationState.categories)