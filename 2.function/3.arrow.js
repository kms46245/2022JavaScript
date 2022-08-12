let add = function(a, b){
    return a + b
}

//위의 코드를 arrow를 이용하면, 간단히 줄일 수 있다.
add = (a, b) => a + b
console.log(add(1,2))

// parameter가 하나일땐 괄호생략 가능
const double = n => 2 * n
console.log(double(2))

// parameter가 비어있을때는 빈괄호로 표시해준다.
const greet = () => console.log('hello')
greet()


// 여러개의 명령문을 실행하기위해선 블록{} 을 이용해야한다.
add = (a, b) => {
    const result = a + b
    return result
}

console.log(add(1,2))