const age = 16
//sayAge() //6.1에서는 TypeError이다. ReferenceError: sayAge is not defined
//tellAge() //ReferenceError: tellAge is not defined

function init() {
    let age = 10

    function sayAge() {
        console.log(age)
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()
    tellAge()
}

init()

//sayAge()
//tellAge()