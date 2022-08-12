let a = 1 // -> global scope
//let a  -> 같은 스코프에 같은이름의 변수를 선언하지못한다.

// scope 생성 - {}을 이용해서 global object내에 object를 만들어내는 개념
{
    //{}(scope)내에 있는 변수들을 local scope라고한다.
    console.log(a)
    // local에서 부르는 과정 -> 이상태에서 불러진 a는 code가없고 local에서 참조할 수있는 outer만 있기때문에,
    // 그 a의 environment record를 읽게된다.
}

{
    // 위의 경우와 달리 global이아닌 해당 scope에 있는 a이기때문에 선언도 되고
    // 가까운순으로 이루어진 해당 a를 읽게된다.
    let a = 2
    console.log(a)
}

// 2개가 같이 있더라도 scope을 닫는순간 local scope는 사라지기에 다시 global scope의 a를 읽어낸다.
console.log(a)

