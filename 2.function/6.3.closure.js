function makeFn() {
    let name = 'parker'

    function displayName() {
        console.log(name)
    }

    return displayName
}

let myFn = makeFn()
myFn()