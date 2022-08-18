let user1 = {
    name: 'isabel',
    greet(){
        console.log(`I am ${this.name}.`)
    }
}

let user2 = {
    name: 'jade',
    greet(){
        console.log(`I am ${this.name}.`)
    }
}

user1.greet()
user2.greet()
// 지금까지는 이렇게 this에 자동적으로 해당 값이 투입됐다.


// 수동으로 this의값을 바꿀수 있다.
let name = 'morpheus'

function greet(){
    console.log(`I am ${this.name}.`)
}
greet()     // undef로 지정된다. (this에 지정된 값이 없기 때문)

greet.call(user1) // func.call(param) -> 해당 변수의 값을 골라서 이용 할 수 있다.
greet.call(user2)

user2 = {
    name: 'colin'
}

user1.greet()
//user2.greet()   // type error - 새로 선언한 user2에는 greet가 없기때문에 X

// 과제: user1.greet을 이용해서, I am colin.을 출력하라.
user1.greet.call(user2)
 