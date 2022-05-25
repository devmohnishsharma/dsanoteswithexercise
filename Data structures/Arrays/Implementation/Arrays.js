const strings = ['a', 'b', 'c', 'd']
//  

// Push 
strings.push('e')

strings.pop();
strings.pop(); // O(1)

// Unshift

strings.unshift('x') // Here we loop through everything and reshifed the indexes // o(n)

// Splice

strings.splice(2,0 , "alien") // O(n/2) => O(n)

console.log(strings);

// Classes in javascript 

// Refence Types

// instantiation

class Player {
    constructor (name , type){
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name , type){
        super(name , type)
    }
    play(){
        console.log(`WEEEEEEEEE I'm a ${this.type}`);
    }
}

const wizard1 = new Wizard('Shelly' , "Healer");
const wizard2 = new Wizard ('Shawn' , 'Dark Magic')