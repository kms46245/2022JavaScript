const numbers: number[] = [1, 2, 3]   // type[] - 타입의 형을 가진 배열이다.
const texts: string[] = ['a', 'b']

interface Person {
    name: string
}

//과제] people을 원소 2개로 채워라.
const people: Person[] = [{name: 'abel'}, {name: 'cain'}]
console.log(people)