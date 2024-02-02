const map = new Map()
map.set('Ygritte', 'ygritte@email.com') // mapCode = 4
map.set('Jonathan', 'jonathan@email.com') // mapCode = 5
map.set('Jamie', 'jamie@email.com') // mapCode = 5
map.set('Jack', 'jack@email.com') // mapCode = 7
map.set('Jasmine', 'jasmine@email.com') // mapCode = 8
map.set('Jake', 'jake@email.com') // mapCode = 9
map.set('Nathan', 'nathan@email.com') // mapCode = 10
map.set('Athelstan', 'athelstan@email.com')
map.set('Sue', 'sue@email.com') // mapCode = 5
map.set('Aethelwulf', 'aethelwulf@email.com') // mapCode = 5
map.set('Sargeras', 'sargeras@email.com') // mapCode = 10

console.log(map.has('Ygritte'))
console.log(map.size)
console.log(map.has('Jonathan'))
console.log(map.has('Aethelwulf'))
map.delete('Aethelwulf')
console.log(map.size)
console.log('___')

const wekmap = new WeakMap()
const obj1 = { name: 'Marcos' }
const obj2 = { name: 'Vinicius' }
const obj3 = { name: 'Alves' }
map.set(obj1, 'maros@email.com')
map.set(obj2, 'vinicius@email.com')
map.set(obj3, 'alves@email.com')
console.log(map.has(obj1))
console.log(map.get(obj3))
map.delete(obj2)
console.log(map.has(obj2))
