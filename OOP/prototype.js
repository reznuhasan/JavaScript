
function Person(name,age){
    const person=Object.create(Person.prototype)
    person.name=name;
    person.age=age;
    return person
}
Person.prototype={
    eat(){
        console.log(`Person is eating ${this.name}`)
    },
    sleep(){
        console.log('Person is sleeping')
    }
    ,
    play(){
        console.log('Person is playing')
    }
}
function PersonWithName(name,age){
    this.name=name;
    this.age=age;
}
PersonWithName.prototype={
    eat(){
        console.log(`Person is eating ${this.name}`)
    },
    sleep(){
        console.log('Person is sleeping')
    }
    ,
    play(){
        console.log('Person is playing')
    }
}


const sakib=Person("Sakib",35);
const tamim=Person("Tamim",35);
tamim.eat()

const Towhid=new PersonWithName("Towhid",21)
Towhid.eat()