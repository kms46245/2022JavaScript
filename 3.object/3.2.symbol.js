let age

function src() {
    let user = {
        name: 'amanda'
    }

    a(user)
    b(user)
}

function a(user) {
    user[Symbol('age')] = 12
    console.log(user)
}

function b(user) {
    console.log(Object.keys(user)) //symbol은 조회가안됨
    console.log(user.name)
    console.log(user) //symbol조회 가능
}

src()