const person={
    name:'Rizwan',
    age:24,
    height:5.6,
    character:function(){
        console.log('Good Boy')
    },
    showDetails:function(){
       this.character();
       return `name:${this.name} age:${this.age} height:${this.height}`
    }
}
console.log(person);
Object.freeze(person);
delete person.age;
person.height=6;
person.name="Nouman"
console.log(person)