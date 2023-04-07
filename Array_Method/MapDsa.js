const persons=new Map();
persons.set("Name","Rizwan");
persons.set("Age",24);
persons.set("Height",5.6);
console.log(persons)
//access
console.log(persons.get("Name"))
//access all keys
console.log(persons.keys)
for(let person of persons){
    console.log(person)
}