// This is our first linked list

// let myLinkedList = {
//     head : {
//         value: 10 ,
//         next: {
//             value : 5,
//             next : {
//                 value : 16,
//                 next : null
//             }
//         }
//     }
// }

class LinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null
      };
      this.tail = this.head
      this.length = 1;
    }
    append(value) {
      const newNode = {
        value: value,
        next: null
      }
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
          }

          newNode.next = this.head;
        //   this.tail.next = this.head
          this.head = newNode
          this.length++
          return this
    
    }

    printList(){
        const array = []
        let currrentNode = this.head;
        while (currrentNode !== null){
            array.push(currrentNode.value)
            currrentNode = currrentNode.next
        }
        return array
      }

    insert(index,value){
        // check params
        if(index >=this.length){
            return this.append(value)
        }
        const newNode = {
            value : value,
            next:null
        }

        // SO basicaaly in linked list we only have reference to the head and tail so the idea is to get the previous node of where we wanna add new Node .

        //  For that we will treverse through the linked list as many times as index-1 and once we get our leader node . We willl adjust the nodes and next to insert it in between .

        const leader = this.traverseToIndex(index-1)
        const holdingPointer = leader.next;
        leader.next = newNode;
        newNode.next = holdingPointer;
        this.length++
        return this.printList()
    }

    remove(index){
      const previousNode = this.traverseToIndex(index-1);
      // const nextNode = this.traverseToIndex(index+1)

      const unwantedNode = previousNode.next;

      previousNode.next = unwantedNode.next


      // previousNode.next = nextNode

      this.length--

      return this

    }

    traverseToIndex(index){
      // check for parameters 

      let counter = 0;

      let currrentNode = this.head;
      while (counter !== index){
        currrentNode = currrentNode.next;
        counter++;
      }
      return currrentNode;
    }
  }


  
  let myLinkedList = new LinkedList(10);
  // console.log(myLinkedList.append(5));
    myLinkedList.prepend(20)
    myLinkedList.append(16)
console.log(myLinkedList.insert(1,90));
  console.log(myLinkedList.printList());

  console.log(myLinkedList.remove(2));