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

delete person.age;

console.log(person)