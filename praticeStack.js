/* let array =[1,23,15,18,19,32]
console.log(array.length)
console.log(array===0)
console.log(array[array.length -1])
array=[]
console.log(array.length) */

// STACK: Pilha que utiliza o princípio LIFO 
// A SEGUIR STACK ARRAY 

/* class StackArray {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  toArray() {
    return this.items;
  }

  toString() {
    return this.items.toString();
  }
}

const stack = new StackArray()
console.log(stack.isEmpty())
stack.push(5)
stack.push(8)
console.log(stack.isEmpty())
console.log(stack)
console.log(stack.peek()) */



// A SEGUIR OUTRO TIPO DE STACK COM CONTADOR DIFERENÇA QUE RECEBE UM ELEMENTO POR VEZ E É BASEADO EM OBJETO

class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--; // count representa o número de elementos por isso tem que decrementar para representar o número do indíce.
    const result = this.items[this.count]; //items[count] sem decremento não existe por isso -1 anteriormente pq o indíce inicia em 0
    delete this.items[this.count];
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count === 0;
  }

  size() {
    return this.count;
  }

  clear() {
    /* while (!this.isEmpty()) {
        this.pop();
      } */
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

let stack = new Stack()
stack.push(5)
stack.push(8)
console.log(stack)
console.log(stack.size())
console.log(stack.isEmpty())