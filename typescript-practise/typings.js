//these are all interfaces we define
var name3 = 'training';
var num = 7;
var toggle = true;
var und = undefined;
var date = new Date();
var fruits = ['banana', 'papaya', 'mango', 8, true];
console.log(name3, num, date, fruits, toggle);
var singleUser = {
    username: 'bala',
    id: 5,
    isLoggedIn: true,
    getUsername: function (id) {
        if (id === this.id) {
            return this.username;
        }
    },
    getLogDetails: function (bool) {
        if (bool === this.isLoggedIn) {
            return 'user logged in';
        }
    }
};
console.log(singleUser.getUsername(5));
var userReference = [
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
        isLoggedIn: true
    },
    {
        username: 'f',
        id: 5
    },
];
var getUsername = function (id) {
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
