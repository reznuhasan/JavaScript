class Person{
    name;
    age;
    roll;
    mark;
    constructor(name,age,roll,mark){
        this.name=name;
        this.age=age;
        this.roll=roll;
        this.mark=mark;
    }
    sleeping(){
        console.log("Person are Sleeping")
    }
    walking(){
        console.log("Person are walking")
    }
}
class Developer extends Person{
    skill;
    constructor(name,age,roll,mark,skill){
        super(name,age,roll,mark)
        this.skill=skill
    }
}
const Atik=new Developer('Atik Ullah',28,34,'90%','Web Developer')
console.log(Atik)

const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);
