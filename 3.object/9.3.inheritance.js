let animal = {
    name: 'animal'
}

animal = new Object()   // 위의 생성과 같은 개념이다.
animal.name = 'animal'

// 과제: 토끼를 object literal 및 생성자로 만들어라.
//       토끼는 age = 3 property를 갖고 있다.

let rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(animal.name, rabbit.age)

rabbit.__proto__ = animal   //__proto__를 상속의 개념으로 사용할 수 있다.
console.log(rabbit.__proto__)
console.log(rabbit.name, rabbit.age)


//
animal = {
    walk(){
        console.log('animal walk.')
    }
}

rabbit = {
    __proto__ : animal      // 생성시 지정해줄수도 있다.
}

rabbit.walk()               // prototype인 animal의 walk를 가져온다.


let user = {
    name: 'user'
}

let administrator = {
    __proto__: user
}

console.log(administrator.name)

administrator.name = 'jonadan'  // admin에 속성값을주면 prototype이아닌 본인것을 가져온다.
console.log(administrator.name)


animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.name} eat.`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal
}

animal.eat()
rabbit.eat()     // 없는 속성(eat)은 프로토타입에서 가져오지만, 
lion.eat()       // 본인이 가지고있는 속성(name)이 있다면, 그것을 우선적으로 사용한다.

console.log(Object.keys(rabbit))    // name을 제외한 나머지속성을 prototype을 통해 가져온것을 확인했다.

// 과제: rabbit의 key 들을 iterating 해서 출력하라.
for(let key in rabbit) {
    console.log(key)
 }     // for iteration을 이용하면 상속관계에 해당되는 key까지 가능하다.

for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)  // for-iterating을 쓰더라도 hasOwnProperty를 이용하면 본인이 가진 key만을 가려낼수 있다.
    if(isOwn) msg = (`child's key : ${key}`)
    else msg = (`parent's key : ${key}`)
    console.log(msg)
}