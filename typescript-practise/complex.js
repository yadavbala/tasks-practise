var Gender;
(function (Gender) {
    Gender["male"] = "male";
    Gender["female"] = "female";
})(Gender || (Gender = {}));
var applicationState1 = {
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
            address: {
                street: {
                    firstLine: '35',
                    secondLine: 'Some nagar'
                }
            }
        }
    }
};
//picking from interface
var productState = {
    categories: ['banana', 'mango'],
    products: [{ name: 'bala yadav', rating: 7 }]
};
var userstate = {
    firstName: 'bala',
    email: 'bala95@gmail.com'
};
var productstate = {
    name: 'hello',
    rating: 5,
    price: 100
};
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
