function sayHi(){
    console.log('Hi')
}

// setTimeOut - mil/sec 단위로 시간입력한만큼 지연한다.
setTimeout(sayHi, 1000)


// 함수에 관해서는 sec단위이후에 parameter를 선언해줘도 가능하다.
function greet(phrase, who){
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox')

// clearTimeout을 쓰게되면 지연된 queue를 제거할 수있다.
let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId)