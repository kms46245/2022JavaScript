//sayHi()

// name의 변수는 위에서부터 차례대로 읽어내면서 찾기때문에,
// sayHi가 실행되는 시점에는 name이 없는 경우다.
// 위에서 찾는 name이 없는 경우, 읽지를 못한다 (reference error)
let name = 'neo'

sayHi() // -> sayhi를 부른시점에서 name은 존재하기때문에 읽어들이며
        // 결과값을 출력해낸다.

function sayHi(){
    console.log('Hi,', name)
}

sayHi() // debug창에서 2라고 뜨는것은 같은 결과가 연달아 2번나왔다는 뜻

// 함수를 선언한것과는 다르다 - sayhello라는 변수에 해당함수를 할당해주는것
// sayHello()// -> sayhello를 부른시점에서 선언은 되었지만 할당되는 과정은 순차적으로 내려오기때문에,
             // sayhello라는 것은 이시점엔 존재하지않는다.
const sayHello = function() {
    console.log('hello,', name)
}

sayHello() // -> 이시점에는 선언과 할당을 전부 다하였기때문에 잘실행된다.
