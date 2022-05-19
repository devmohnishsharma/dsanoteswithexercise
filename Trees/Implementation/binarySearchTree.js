// class Node {
//     constructor(value){
//       this.left = null;
//       this.right = null;
//       this.value = value;
//     }
//   }
  
//   class BinarySearchTree {
//     constructor(){
//       this.root = null;
//     }
    
//     insert(value){
//         const newNode = new Node(value)
//         // Check first if we have root node or not 
//         if(this.root === null){
//            return this.root = newNode
//         }

//         else{
//             let currentNode = this.root
//             while(true){
//                 if(value < currentNode.value){
//                     if(!currentNode.left ){
//                         currentNode.left = newNode
//                         return this
//                     }
//                    currentNode = currentNode.left
//                 }else{
//                     if(!currentNode.right){
//                         currentNode.right = newNode;
//                         return this
//                     }
//                     currentNode = currentNode.right
                    
//                 }
//             }
//         }
//     }
//     // remove
//   }
  
//   const tree = new BinarySearchTree();
//   tree.insert(9)
//   tree.insert(4)
//   tree.insert(6)
//   tree.insert(20)
//   tree.insert(170)
//   tree.insert(15)
// console.log(tree.insert(1));  
//   //     9
//   //  4     20
//   //1  6  15  170
  



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

}

const tree = new BinarySearchTree();
  tree.insert(6)
  tree.insert(20)
  tree.insert(170)
console.log(tree.insert(15));