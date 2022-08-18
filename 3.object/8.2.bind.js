let user = {
    name: 'leo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet()

// function.bind(object) - 해당 객체를 bind의 대상함수에 넣어준다.
// call - 주어 function을 불러온다 / bind - 주어 fucntion을 직접 리턴한다.
let fn = greet.bind(user)
fn()

setTimeout(fn, 100)

user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

// 과제: user.greet을 할당하라.
//      greet의 this엔 user가 담겨있다.
fn = user.greet.bind(user)
setTimeout(fn, 200)

console.log(fn == user.greet)   // 물리적으로는 다른 객체를 의미한다.(bind->또다른객체생성)
                                // 논리적으로 같다고 생각하면 된다.