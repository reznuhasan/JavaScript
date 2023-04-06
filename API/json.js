const user={id:1,name:'gorib',job:'actor'};
const stringified=JSON.stringify(user)
const parsed=JSON.parse(stringified)
console.log(user);
console.log(stringified.name)
console.log(parsed)