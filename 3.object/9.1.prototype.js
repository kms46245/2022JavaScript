let animal = {
    isAlive: true
}

function Rabbit(name){
    this.name = name
}

//prototype - 해당 객체의 프로토타입을 지정한다. (처음에는 빈값(undef)이나 함수에서는 {constructor : fn}이 존재함)
console.log(Rabbit.prototype)

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive)     // rabbit function에는 isalive가 없기때문에 당연히 undef다

Rabbit.prototype = animal       // 프로토타입을 animal로 지정해준다.
console.log(Rabbit.prototype)   // animal을 상속받는 개념과 비슷하다.

rabbit = new Rabbit('white')
console.log(rabbit.isAlive)     // 해당 함수에는 없는값이므로 지정된 prototype을 통해 animal의 isalive를 가져온것이다.


function Duck(name) {
    this.name = name
}

console.log(Duck.prototype)
console.log(Duck.prototype.constructor)
console.log(Duck.prototype.constructor == Duck) // 최초의 프로토타입이 가리키는 주소가 Duck이기때문에 서로 같다.

let duck = new Duck('duck')
console.log(duck.__proto__) // __proto__ -> prototype의 getter
console.log(duck.__proto__.constructor) //getter로 가져온 prototype이 가리키고있는 duck function을 가리킨다.

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__)  // 여러개를만들어도 결국 생성자의 프로토타입 주소를 받기때문에 변경되지않은이상 같다.

let duck3 = new duck.__proto__.constructor('duck')  // 이런식으로 prototype이 가리키는것을 이용해 객체를 생성 할 수 도 있다.
duck3 = new duck.constructor('duck')                // 객체에 먼저 찾아보고 없어서 prototype에있는 constructor를 이용해 객체를 만든다.
