class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(){
        this.array = [];
    }

    peek(){
        return this.array[this.array.length-1];
    }

    push(value){
        return this.array.push(value);
    }
    pop(){
        this.array.pop();
        return this
    }
}

myStack.pop()

