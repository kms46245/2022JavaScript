/* 과제:
다음 상속 관계로 객체들을 디자인하세요.
<life>  ->    <animal>  ->   <bird>   <mammal>
name          name           name     name
eat()         move()         move()   move()
excrete()
----------
* 출력 결과 *
bird.eat()
bird.excrete.
bird fly.
mammal eat.
mammal excrete.
mammal run.*/

let life = {
    name: 'life',
    eat() {
        console.log(`${this.name} eat.`)
    },
    excrete() {
        console.log(`${this.name} excrete.`)
    }
}

let animal = {
    __proto__: life,
    name: 'animal',
    move() {
        console.log(`${this.name} move.`)
    }
}

let bird = {
    __proto__: animal,
    name: 'bird',
    move(){
        console.log(`${this.name} fly.`)
    }
}

let mammal = {
    __proto__: animal,
    name: 'mammal',
    move(){
        console.log(`${this.name} run.`)
    }
}

bird.eat()
bird.excrete()
bird.move()

mammal.eat()
mammal.excrete()
mammal.move()