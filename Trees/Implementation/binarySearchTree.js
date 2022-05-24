class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value
  }
}

class BinarySearchTree {
  constructor(value){
    this.root = null
  }

  insert(value){
    // Lets create a new Node first
    const newNode =  new Node(value)

    // Now check if the root is null or it has some value 

    if(this.root === null){
      this.root = newNode
    }
    
    // Now handle the case when root is not null it has some value 

  else{

    let currentNode = this.root

    while(true){
      if(currentNode.value < value){
        if(!currentNode.left){
          currentNode.left = newNode
          return this
        }
        currentNode = currentNode.left
      }else{
        if(!currentNode.right){
          currentNode.right = newNode;
          return this
        }
        currentNode = currentNode.right
      }
    }
    
  }
    return this 
  }
// My lookup solution....
  // lookup(value){
  //   if(this.root === null){
  //     return false
  //   }else{
  //     let currentNode  = this.root;

  //     while(true){
  //       if(currentNode.value < value){
  //         if(currentNode.value === value){
  //           console.log(currentNode , "yes we find the value... left");
  //             return true
  //         }
  //         if(currentNode.left){
  //           currentNode = currentNode.left
  //         }else{
  //           return false
  //         }
  //       }else{
  //         if(currentNode.value === value){
  //           console.log(currentNode , "yes we find the value... right");
  //           return true
  //         }
  //         if(currentNode.right){
  //           currentNode = currentNode.right
  //         }else{
  //           return false
  //         }
  //       }
  //     }
  //   }
  // }

  lookup(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
  }

}

const tree = new BinarySearchTree();
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
  tree.insert(15)
console.log(tree.lookup(20));