//3.8. bind
let user = {
    name: 'madonna',
    greet(){
        console.log(`I am ${this.name}`)
    }
}

user.greet()

//setTimeout(user.greet, 100)

let fn = user.greet
//setTimeout(fn, 200)

//setTimeout(() => user.greet(), 300)

user = {
    name: 'leo'
}

function greet(){
    console.log(`I am ${this.name}`)
}

greet()

//function.bind(object) - 해당객체 bind의 함수로 사용
//call - 주어 function 불러오기 / bind - 주어 function을 직접 리턴
fn = greet.bind(user)
fn()

//setTimeout(fn, 100)

// ****타임아웃한것은 나중에 확인필요시 해제할것****

user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}`)
    }
}

//과제 - user.greet를 할당하라 greet의 this엔 user가 담긴다.
fn = user.greet.bind(user)
//setTimeout(fn, 200)

console.log(fn == user.greet)   // 물리적으로는 다른 객체지만, 논리적으로 같다.



//3.9.1-2 prototype
let animal = {
    isAlive: true
}

function Rabbit(name){
    this.name = name
}

//prototype - 해당 객체의 프로토타입을 지정한다. (처음에는 빈값(undef)이나 함수에서는 {constructor : fn}이 존재함)
console.log(Rabbit.prototype)

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive) // rabbit function에는 isAlive 존재하지않음 -> undef

Rabbit.prototype = animal   // 프로토타입을 특정객체(함수)로 지정가능
console.log(Rabbit.prototype)// animal이 프로토타입이되었다.(상속의 개념과 비슷함)

rabbit = new Rabbit('white')
console.log(rabbit.isAlive) // 해당함수에없기때문에 프로토타입의 isAlive를 가져온다.


function Duck(name){
    this.name = name
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck) // 최초의 프로토타입은 가리키는 주소가 해당 객체이기때문에 같다.

let duck = new Duck('duck')
console.log(duck.__proto__) // __proto__ -> prototype의 getter
console.log(duck.__proto__.constructor) // getter로 가져온 prototype의 주소, 즉 Duck을 가리킨다.

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__)  // 같은 객체로 여러개를 만들더라도, 프로토타입은 같다.

let duck3 = new duck.__proto__.constructor('duck')  // 결국 Duck Function을 말하는것이기때문에 이렇게 생성도 가능하다.
duck3 = new duck.constructor('duck')    // 다른 객체에서 프로토타입을 이용해 그것으로 생성도 가능


let obj = {}    // {} -> 사실 new Object()를 축약해서 쓰는것이다.

console.log(obj.__proto__)
console.log(obj.__proto__ == Object.prototype)
console.log('')

obj = new Object()
console.log(Object.prototype)
console.log(obj.__proto__)
console.log(Object.prototype.__proto__) // Object타입의 최초프로토타입의 프로토타입은 존재하지않는다 (null)

console.log(obj.toString())

let arr1 = [1, 2]
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)
console.log(arr1.__proto__ == Array.prototype)

console.log(Array.prototype.__proto__)  // 중요***) Object를 제외한 모든 타입의 프로토타입의 프로토타입은 Object의 프로토타입으로 연결된다.
console.log(Object.prototype)   // 그렇기때문에 다른타입에서도 Object에 들어있는 함수들을 쓸수 있는것이다.
console.log(Array.prototype.__proto__ == Object.prototype)

console.log(arr2)
console.log(arr2.toString())    // 하지만 toString()은 array에도 존재하므로 존재한것을우선적으로 사용

let one = new Number(1)
console.log(one)    //number도 마찬가지

function User() {}
user = new User()
console.log(user.toString())    //  이렇게 toString이 없는 경우 object 프로토타입의 toString을 받아온다.
console.log(obj.toString())


//3.9.3 inheritance
animal = {
    name: 'animal'
}

animal = new Object()
animal.name = 'animal'

//과제 - 토끼를 object literal 및 생성자로 만들어라.
//       토끼는 property로 age = 3을 갖고있다.

rabbit = {
    age: 3
}

rabbit = new Object()
rabbit.age = 3

console.log(animal.__proto__)
console.log(rabbit.__proto__)

console.log(animal.name, rabbit.age)

rabbit.__proto__ = animal // __proto__를 상속의 개념으로 사용가능
console.log(rabbit.__proto__)
console.log(rabbit.name, rabbit.age)

animal = {
    walk() {
        console.log('animal walk')
    }
}

rabbit = {
    __proto__ : animal      // 생성할때 파라미터로 프로토타입을 지정해줄수 있다.
}

rabbit.walk()   //prototype인 animal의 walk를 rabbit이 사용

user = {
    name: 'user'
}

let administrator = {
    __proto__: user
}

console.log(administrator.name)

administrator.name = 'jonadan'  // admin에 없는속성값을 주게되면, 프로토타입에서 쓰지않고 본인의 속성값을 사용
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
rabbit.eat()    // 본인에게 없는 속성(eat)은 프로토타입에서 가져오지만,
lion.eat()      // 본인에게 있는 속성(name)은 본인의 속성값을 우선적으로 사용

console.log(Object.keys(rabbit))
//과제: rabbit의 key들을 iterating 하여 출력하라.
for(let key in rabbit) {
    console.log(key)
}   // for iteration 이용 시, 상속관계(prototype)에 해당되는 key까지 읽는다.

for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)  // for-iterating을 쓰면서 hasOwnProperty(key)로 해당객체가 가진 속성값을 확인할 수 있다.
    if(isOwn) msg = (`child's key : ${key}`)
    else msg = (`parent's key: ${key}`)
    console.log(msg)
}




//4.1 Class
class User1{     // syntactic sugar - 사용자가 좀더 보기 편한 문법(내부적으로은 원래 사용하던 문법이 작동중임)
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`I am ${this.name}`)
    }
}

user = new User1('john')
console.log(user.name)
user.introduce()

User1 = class {
    name    // 여기서 선언한건 멤버변수임을 명시해주는 것, 없어도 작동은됨
    age

    constructor(name, age){
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`${this.name} / ${this.age}`)
    }
}

new User1('abel', 12).introduce()

function makeClass(phrase){ // 클래스를 값으로 생각하면 클래스를 리턴형식으로 받을 수 도 있다.
    return class {
        sayHi(){
            console.log(phrase)
        }
    }
}

User1 = makeClass('hello')
new User1().sayHi() // param이 없는 constructor는 생략 가능(자동으로 생성)


class Animal {
    constructor(name){
        this.name = name
    }
    
    //생성자 뿐만 아니라 매서드에서도 this.를 이용하면 속성값을 추가/수정할수 있다.
    run(speed) {
        this.speed = speed
        console.log(this.name, this.speed, 'run.')
    }

    stop(){
        this.speed = 0
        console.log(this.name, 'stop.')
    }
}

animal = new Animal('animals')
console.log(animal)

animal.run(10)
console.log(animal) // 없던 속성값이 내부 메서드를 통해 생성된것을 확인했다.
animal.stop()
console.log(animal)