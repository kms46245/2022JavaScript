//3.5 function

function sayHi(myName, ...jobs){
    console.log(`Hi, i am ${myName}.`)
}
sayHi('john')

console.log(typeof sayHi)
console.log(sayHi.name)     //(func).name - 해당함수의 이름
console.log(sayHi.length)   // 함수의 길이는 1이다.(따질수 없음)


let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)
console.log(user.sayBye.name)

sayHi = function() {
    let count = 100
    console.log('hi')
    console.log(sayHi.count++)
}

sayHi()         // NaN으로 나오는건 sayHi내의 count는 지역변수이기에 함수종료시 존재하지않게 됨.

sayHi.count = 0 // 함수의 파라미터를 global에 선언해주면 존재하게되고 값이 나온다.
sayHi()
sayHi()
console.log(`call count : ${sayHi.count}`)




// 3.6 primitive
let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2)  // milisec 단위의 number type으로 표현

let user1 = {
    name: 'amanda',
    age: 20,        
    [Symbol.toPrimitive](hint) {    // symbol 사용 시 [] 붙임
        return hint == 'string' ? this.name : this.age  // toPrimitive - 리턴 타입을 지정해주는 메서드
    }
}

let user2 = {
    age: 38,
    [Symbol.toPrimitive](){  //toPrimitive 타입지정안하면 리턴받는 파라미터의 타입을 받는다. 
        return this.age
    }
}

console.log(`${user1}`)
console.log(user1 > user2)   // 20 > 38 -> user의 타입이 number타입으로 적용됐다.
console.log(user1 + 50)      // number 타입으로 받아서 합산된 결과나옴      
console.log(user2 + 50)


user1 = {
    name: 'neo',
    age: 11,
    toString() {        // toString() - string 타입으로 리턴
        return this.name
    }
}

console.log(user1 + '') // this.name(string)으로 리턴


// valueOf - 해당 fucntion을 리턴할 파라미터의 타입으로 리턴
user1.valueOf = function(){
    return this.age
}

console.log(user1 + 100) // valueOf 있을때 - 111 / 없을때 - neo100
// valueOf toString 둘다 없을 시에는 object로 리턴

userStr = JSON.stringify(user1) // JSON.stringfy() - user1의 파라미터 자체를 string타입으로 바꾼다.
console.log(userStr)        // name 과 age가 string type으로 읽힌다.
console.log(typeof userStr) // string 타입인것을 확인


// 3.7 call

user1 = {
    name: 'isabel',
    greet(){
        console.log(`I am ${this.name}`)
    }
}

user2 = {
    name: 'jade',
    greet(){
        console.log(`I am ${this.name}`)
    }
}

user1.greet()
user2.greet()  // 지금까지는 this를 해당 함수로 자동적으로 투입

// 지금부터는 수동으로 this의 값을 바꿀수 있다.
let name = 'morpheus'

function greet(){
    console.log(`I am ${this.name}.`)
}
greet() // undef로 지정된다 (this가 무엇을 명시하는지 없기때문)

//func.call(param) -> 해당 함수의 변수를 받아온다.
greet.call(user1)
greet.call(user2)

user2 = {
    name: 'colin'
}

user1.greet()
//user2.greet()   // type error - 새로선언한 user2에는 greet가없기때문에 해당 타입을 찾을수 없다는 에러가 뜸

//user1.greet를 이용해서, I am colin을 출력하라.
user1.greet.call(user2)