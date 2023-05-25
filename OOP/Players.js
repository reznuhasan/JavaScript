class Player{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    setName(name){
       this.name=name;
    }
    getName=()=>{
        return this.name;
    }
}

const Rizwan=new Player('Rizwan',25);
console.log(Rizwan.getName())
Rizwan.setName('Riznu');
console.log(Rizwan.getName())