let user = {
    name: 'john',
    age: 12
}

let user2 = {
    name: 'abel',
    age: 50
}

let {
    name,
    age
} = user2;

[user.name, user.age] = [name, age]
console.log(user)
//{name: 'abel', age: 50}