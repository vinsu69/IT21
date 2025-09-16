class Hero{
    #health

    constructor(name,health,attack){
        this.name = name;
        this.#health = health;
        this.attack = attack;

    }

    getName(){
        return this.name;
    }

    getHealth(){
        return this.#health;
    }

    showStats(){

        console.log("Name: "+this.name);
        console.log("Health: "+this.#health);
        console.log("Attack: "+ this.attack);
        console.log("---------------------");
    }
}

const hero1 = new Hero("thorin",100,10);
const hero2 = new Hero("Granelf",100,8);

hero1.showStats();
hero2.showStats();


