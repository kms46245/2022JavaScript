type Man = {        // type - interface와 유사하다
    name: string
}

const man: Man = {
    name: 'john'
}

//
type Men = Man[]

const men: Men = [{name : 'neo'}]

//interface와 type의 차이점
type Color = 'red' | 'green' | 'blue'  // interface는 object에만 쓰는데 반해 type은 여러가지 형을 쓸수 있다.
let color: Color = 'red'
//color = 'yellow'    // color type이 아니므로 error

//
type Employee = Man & {     // & {} - 이것을 통해 요소를 확장 시킬수있다.
    job: string
}

const employee: Employee = {
    name: 'berg',
    job: 'programmer'
}