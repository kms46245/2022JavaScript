function wrap<T>(value: T) {  // generic - <...>의 ...를 데이터타입으로 쓸수있다.
    return value

}

const output = wrap('hello')    // T가 string타입으로 적용
console.log(output)

//
interface Woman {
    name: string
}

const woman: Woman = {name: 'hera'}
const woman2 = wrap(woman)  // woman의 타입을 제네릭을 통해 적용
console.log(woman, woman2)

//
interface Item<T> {
    id: number
    data: T
}

interface Animal {
    name: string
}

interface Place {
    location: string
}

const animalItem: Item<Animal> = {
    id: 1,
    data: {             // generic을 통해 fucntion인 Animal을 타입으로 받고 요소로 적용
        name: 'cat'
    }
}

const placeItem: Item<Place> = {
    id: 2,
    data: {
        location: 'seoul'   // function인 Place를 요소로 받음
    }
}

//
type Product<T> = {
    id: number
    data: T
}

class Queue<T> {
    list: T[] = []

    get length() {
        return this.list.length
    }

    enqueue(item: T) {
        this.list.push(item)
    }

    dequeue() {
        return this.list.shift()
    }
}

const queue = new Queue<number>()
queue.enqueue(0)
queue.enqueue(1)

let val = queue.dequeue()
val = queue.dequeue()
console.log(val)