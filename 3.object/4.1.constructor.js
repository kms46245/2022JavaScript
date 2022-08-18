let makeUser = function(name, age) {
    return {
        //key: value  중복코드
        name: name,
        age: age
    }
}

makeUser = function(name, age) {
    return {
        //중복코드를 없애줌
        name,
        age
    }
}

console.log(makeUser('doris', 57))

/* 관례상 생성자라는것을 표현하기위해
 대문자를 사용한다. */
function User(name) {
   // this = {} //기본적으로 생략되어있음
    this.name = name
    this.greet = () => console.log(`I am ${this.name}.`)
    return this //return또한 생략되어있음
}
//생성자는 하나의 조건(new)을 더해야 생성자가 된다.

let user1 = User('bob') //undefined
user1 = new User('bob')
// user1 = new User('bob')  // 중복해서 실행은 되지않는다 (생성자가 같은걸 2번실행하기에)
console.log(user1)

user1.greet()
console.log(Object.keys(user1))

const user2 = new User('sarah')
user2.greet()

//일반 function string type
let str = String(1)
console.log(typeof str)

//생성자 Object type
str = new String(1)
console.log(typeof str)

//
let human = new function() {
    this.name ='meg'
    this.age = 27
}

console.log(typeof human, human.name)

//
function BigUser() {
    this.name = 'amy'
    return {name: 'beth'}
}

function SmallUser() {
    this.name = 'lorie'
}

console.log(new BigUser().name, new SmallUser().name)
//console.log(BigUser().name, SmallUser().name)
//과제: new를 하지않고, 앱이 살도록 위 코드를 수정하라.
console.log(BigUser().name, SmallUser()?.name)

//
const user = new Object()
console.log(user)
user.age = 12

//
const person = Object.create(user)
console.log(person)
console.log(person.age)
console.log(person == user) //false

person.name = 'mandarin'
console.log(user)