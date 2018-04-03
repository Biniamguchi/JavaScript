var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]
for (var name in students){
console.log(students[name].first_name, students[name].last_name);
}

console.log("----------------");

var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 };

for(var name in users){
    console.log(name);

for(var i in users[name]){
    var numLength = users[name][i].first_name.length+users[name][i].last_name.length;
    console.log(i+" -",users[name][i].first_name,users[name][i].last_name,"- "+numLength);
  }

}

// for(i in users){
//     var j = users[i];

//     console.log(i);

//     for(k in j){
//         var l = j[k];
//         var nmLen = l.firstName.length+l.lastName.length;
//         console.log(k+" -",l.firstName,l.lastName,"- "+nmLen);
//     }
// }