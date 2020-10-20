var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
var applicationState = {
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
var productState = {
    categories: ['sdsdssd'],
    products: [{ name: 'asas', rating: 5, description: 'sasaa' }]
};
var userDetails2 = {
    username: 'bala',
    email: 'email'
};
console.log(productState.categories);
console.log(userDetails2.email);
console.log(applicationState.categories);
