let json = '{"name": "john", "age": 30}'
// 주의) json문법을 사용할땐, 스트링타입을 기술할땐 ""를 사용한다 '' x
let user = JSON.parse(json) // parse => user 객체로 변환
console.log(typeof json, typeof user)

json = '{age: 30}'
//JSON.parse(json)    //syntaxError - ""로 문법을 지키지않았다.

// runtime error를 통해 앱이 죽지않도록 할수있게 try(예외처리)를 사용한다.
try {
    JSON.parse(json)
} catch {
    console.log('ERROR')
}

try {
    JSON.parse(json)
} catch(e) {
    console.log(e.name, '\n', e.message, '\n', e.stack)
}