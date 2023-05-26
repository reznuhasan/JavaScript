class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    //getter method in js
    get getName(){
        return this.name;
    }
    //setter method in js
    set setName(name){
        this.name=name;
    }
}
class Crickter extends Person{
    constructor(name,age,type,country){
        super(name,age)
        this.type=type;
        this.country=country;
    }
    
    showDetials(){
        console.dir(`Name:${this.name} Age:${this.age} Type:${this.type} Country:${this.country}`)
    }
}

const Towhid=new Crickter('Towhid',21,'Batsman','Bangladesh')
Towhid.showDetials();
//used setter
Towhid.setName='Towhid Hridoy';
//used getter
console.log(Towhid.getName);
