// STACK: Pilha que utiliza o princípio LIFO  (Last In First Out), o último elemento inserido é o primeiro a ser retirado.
// A SEGUIR STACK ARRAY 

export class StackArray {
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

/* const stack = new StackArray()
console.log(stack.isEmpty())
stack.push(5)
stack.push(8)
console.log(stack.isEmpty())
console.log(stack)
console.log(stack.peek()) */



// A SEGUIR OUTRO TIPO DE STACK COM CONTADOR DIFERENÇA QUE RECEBE UM ELEMENTO POR VEZ E É BASEADO EM OBJETO

export class Stack {
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
    // Comportamento LIFO -> primeiro a entrar é o primeiro a sair.
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

/* let stack2 = new Stack()
stack2.push(5)
stack2.push(8)
console.log(stack2)
console.log(stack2.size())
console.log(stack2.isEmpty())
console.log(Object.getOwnPropertyNames(stack2))
console.log(Object.keys(stack2))
console.log(stack2.items)

console.log(stack2.pop())
console.log(stack2) */