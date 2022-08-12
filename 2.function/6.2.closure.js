const age = 16

//sayAge() // 정의 되어있지않다. -> sayAge가 없다고 한다.(type error가 아닌 reference error)
//tellAge() // 변수에서는 여전히 결과가 같다.


// 6.1과는 fn이냐 일반블록이냐의 차이이지만 위의 결과가 다르다.
function init() {
    let age = 10

    function sayAge(){
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}

init()
//sayAge() // 6.1과 다르게 reference error가 뜬다.
//tellAge()  // reference error 

