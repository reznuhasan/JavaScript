var student={
    name:"Riznu",
    roll:123,
    mark:45,
    section:'A'
}
const keys=Object.keys(student);
console.log(keys)
for(let i=0;i<keys.length;i++){
    console.log(student[keys[i]]);
}