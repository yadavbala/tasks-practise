//name, city, state, hobby1, hobby2, hasVotingRights
 
let person = {
    name:'Rahul',
    address: {
    city: 'Pune',
    state: 'MH'
    },
    hobbies: ["Reading", "Swiming"],
    hasVotingRights: true
   };


   const {name:name1,address:{city,state},hobbies,hasVotingRights,married=false}=person //alias and default value

   console.log(name1,city,state,hobbies[0],hobbies[1],hasVotingRights,married)

   //2.
//There is a marks object:
let marks = {
    "Ajay": 78,
    "Vijay": 92,
    "Sanjay": 67
    };
   // Create the function topScorer(marks) that returns the name of the top-scored person.
   // If marks is empty, it should return null.
   // Use Object.entries and destructuring to iterate over key/value pairs.

   function topScorer(marks){
       let greater=0,name=''
      if(Object.keys(marks).length===0){
          return null
      }
      else{
          for(const [key,value] of Object.entries(marks)){
              //console.log(key,value)
              if(value>greater){
                  greater=value
                  name=key
              }
          }
         return name
      }
   }

   console.log(topScorer(marks))

   console.log(Object.entries(marks))//keeps a 2d array