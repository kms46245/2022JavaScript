function sum(a: number, b: number) {  // ts에선 파라미터의 타입도 써주고
    return a + b                    
}
console.log(sum(1, 2))
// ts-node 파일이름.ts -> 이것으로 ts전용 노드를 실행한다.(터미널)

//
function add(a: number, b: number, isDouble?: boolean) { // optional variable은 ?:로 만든다.
    const sum = a + b
    return isDouble ? sum * 2 : sum
}   

let result: number = add(1, 2)
result = add(1, 2, true)
console.log(result)

//
function greet(name: string, nullable?: boolean): string | null {
    // function의 parameter type이 여러개일때는 전부 기술하거나, 비우면 된다.
    if(nullable) return null
    else return `Hello, ${name}.`
}

let greeting = greet('cain')    // 기본값은 false이다.
console.log(greeting)
greeting = greet('cain', true)  // true값을 받았기 때문에 null
console.log(greeting)