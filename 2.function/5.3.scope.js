// function을 이용하면서, 이미 scope의 개념을 사용하고있었다.
// fn {} 내의 함수에서 다른 value를 불러오는것이 global scope에서 local로 부르는 과정이다.
const greeting = 'hello'

// 먼저 초기화 되기전에 부르더라도 아래에서 선언해주면 사용할 수 있다.
say('abel')

// function으로 만들어진것은 uninitialized를 거치지않고 바로 fn이 할당 된다.
function say(name) {
    console.log(greeting, name)
}

say('john')