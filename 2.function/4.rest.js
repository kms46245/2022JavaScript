// 원래 function의 파라미터 갯수보다 넘치게 넣는경우
// 나머지값은 무시된다.
function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3))

// parameter앞에 ...을 붙이게되면, 파라미터의 갯수가 n개가된다(유동적으로 사용할수 있게 된다.)
add = function(...args){
    let tot = 0
    for(let arg of args) tot += arg
    return tot
}

// 이렇게 파라미터를 얼마든 늘려도 이용할 수 있게된다.(배열의 개념과 비슷함)
console.log(add(1), add(1,2,3), add(1,2,3,4,5,6,7,8,9,10))


// rest parameter는 항상 마지막에 위치해야한다(그렇지않으면 에러가 난다.)
function printName(firstName, lastName, ...titles){
    console.log(firstName, lastName)
    console.log(titles[0], titles[1], titles[2])
    console.log(titles.length)
}

printName('adam', 'smith', 'operator', 'consul')


//arguments - 파라미터가 정의 되어있지않은 곳에 임시로 부여할 수 있는 공간(그릇)의 개념(?)
function showName(){
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName()
showName('erica', 'terry')

// max - parameter의 최고값을 리턴
console.log(Math.max(1, 2, 3))