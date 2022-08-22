//9.2 extends 이어 (클래스를 위해 처음부터)
class Animal {
    constructor(name){
        this.name = name
    }

    // 생성자가 아니더라도 메서드에서도 this를 이용해 속성값 추가/수정
    run(speed) {
        this.speed = speed
        console.log(this.name, this.speed, 'run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name, 'stop.')
    }
}

let animal = new Animal('animal')
console.log(animal)

animal.run(10)
console.log(animal) // 없던 속성인 speed가 메서드를 통해 생성되었다.
animal.stop()
console.log(animal)

class Rabbit extends Animal{
    /* 코딩하지않으면 기본 생성자가 자동으로 생성된다.
    *기본생성자*
    constructor(...args){
        super(...args)          // 부모의 생성자가 실행
    }*/

    hide() {
        console.log(this.name, 'hide.')
    }
}

let rabbit = new Rabbit()   // 프로토타입인 Animal의 생성자를 사용했다.
console.log(rabbit)

rabbit = new Rabbit('rabbit')
console.log(rabbit)

console.log(rabbit.name)
rabbit.run(100)
rabbit.hide()

Rabbit = class extends Animal{
    constructor(name, color) {
        super(name)     // 생성자의 경우에 부모의 생성자를 사용할 경우 super(param)으로 사용 단 param은 부모의 param을 전부 받아야한다.
        this.color = color
    }

    stop() {
        super.stop()    // 메서드도 마찬가지다
        this.hide()
    }

    hide() {
        console.log(this.name, this.color, 'hide.')
    }
}

rabbit = new Rabbit('rabbit', 'black')
rabbit.stop()   // 스탑내에는 this.hide()이기에 Rabbit의 hide를 사용했다.



//9.3 static
class Article {
    static publisher = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
        // '-' number타입의 연산이가능 -> 아래의 valueOf나 심볼에서 넘버타입은 viewcnt를
        // 이용하도록 했으니 조회수를 비교하게 된다.  
    }

    toString() {
        return this.title
    }

    valueOf(){
        return this.viewCnt
    }

    // 심볼과 삼항연산자를 이용해 넘버일 경우 viewcnt 그외엔 title로 받게 했다.
    // 그러므로 위의 2개의 코드는 중복이 되는거지만 공부를 위해 남겨둠
    [Symbol.toPrimitive](hint) {
        return hint == 'number' ? this.viewCnt : this.title
    }
}

console.log(Article.publisher) // static 변수는 class.변수로 바로 콜 가능

Article.address = 'seoul'   // static 변수를 선언할 시, 추가 가능
console.log(Article.address)

Article.getPrice = () => 2000   // static 메서드도 마찬가지
console.log(Article.getPrice())

let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))    // 조회수를 비교하게된다.
//과제 console.log(article1)의 결과가 java가 출력 되도록하라.
//과제 기준은 toString()과 valueOf()가 살아있을때 가정
console.log(`${article1}`)
console.log(article1 + '')

//static 변수는 객체에 있는 것이 아니라, 클래스에 존재한다.
console.log(article1.publisher, article1.address, article1.compare)
//반대도 마찬가지로 클래스에서 객체의 요소는 존재하지않는다.
console.log(Article.title, Article.viewCnt)

console.log(Object.keys(article1))
console.log(Object.keys(Article))   // keys에는 method는 포함되지않는다.
for(let key in Article) console.log(key)    // iterating을 하더라도 결과는 같다.
