const age = 16
//sayAge()   // sayAge가 존재하고 할당도 되있지만 type error가 뜬다 
             // local에 있는 객체는 인지하지못한다.
//tellAge()  // sayAge는 없기때문에 not defined(reference error)가 뜬다.
console.log(sayAge) // undefined가 들어있기때문에 함수가 아니라 부르지못한것이다.
//console.log(hello)  // 없는것을 부르면 tellage와 마찬가지로 reference error가 뜬다.


{
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

sayAge()    // 여기서는 정상적으로 나온다.
//tellAge()   // reference error