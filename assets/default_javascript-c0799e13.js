const r=`class Node {\r
    constructor(data) {\r
        this.data = data;\r
        this.left = null;\r
        this.right = null;\r
    }\r
}\r
\r
class BinaryTree {\r
    constructor() {\r
        this.root = null;\r
    }\r
\r
    // Insertar un nuevo valor en el árbol\r
    insert(data) {\r
        const newNode = new Node(data);\r
\r
        if (this.root === null) {\r
            this.root = newNode;\r
        } else {\r
            this.insertNode(this.root, newNode);\r
        }\r
    }\r
\r
    // Método auxiliar para insertar un nodo en el árbol\r
    insertNode(node, newNode) {\r
        if (newNode.data < node.data) {\r
            if (node.left === null) {\r
                node.left = newNode;\r
            } else {\r
                this.insertNode(node.left, newNode);\r
            }\r
        } else {\r
            if (node.right === null) {\r
                node.right = newNode;\r
            } else {\r
                this.insertNode(node.right, newNode);\r
            }\r
        }\r
    }\r
\r
    // Método para recorrer el árbol en orden (inorder)\r
    inorder(node) {\r
        if (node !== null) {\r
            this.inorder(node.left);\r
            console.log(node.data);\r
            this.inorder(node.right);\r
        }\r
    }\r
\r
    // Método para iniciar el recorrido inorder desde la raíz\r
    inorderTraversal() {\r
        this.inorder(this.root);\r
    }\r
}\r
\r
// Uso del árbol binario\r
const bt = new BinaryTree();\r
bt.insert(15);\r
bt.insert(25);\r
bt.insert(10);\r
bt.insert(7);\r
bt.insert(22);\r
bt.insert(17);\r
bt.insert(13);\r
\r
console.log("Recorrido Inorder del árbol binario:");\r
bt.inorderTraversal();\r
`;export{r as default};
