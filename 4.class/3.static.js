class Article {
    static publisher = 'ddanzi'

    constructor(title, viewCnt) {
        this.title = title
        this.viewCnt = viewCnt
    }

    static compare(article1, article2) {
        return article1 - article2
        // '-' 는 number 타입이 가능하고 valueOf에서 viewCnt를 삼았으니
        // 조회수를 비교하게된다.
    }
    
    
    /*toString() {
        return this.title
    }

    valueOf() {
        return this.viewCnt
    }*/

    [Symbol.toPrimitive](hint) {
        return hint == 'number' ? this.viewCnt : this.title
    }
}

console.log(Article.publisher)  // static variable은 class.variable로 바로 부를수있다.


Article.address = 'seoul'       // static variable을 글로벌에서 이렇게 선언하면 추가할 수 있다.
console.log(Article.address)

Article.getPrice = () => 2000   // static method를 추가하는법은 이렇다.
console.log(Article.getPrice())


let article1 = new Article('java', 100)
let article2 = new Article('javascript', 10)

console.log(Article.compare(article1, article2))    // 조회수를 기준으로 비교가된것을 확인했다.

// 과제] console.log(article1 + '')의 결과가 java가 출력 되도록 하라.
// 과제 기준은 toString() 과 valueOf()를 살아있을때 가정
console.log(`${article1}`)
console.log(article1 + '')

 // static variable은 객체에 있는 것 이 아니라 클래스에 있다.
console.log(article1.publisher, article1.address, article1.compare)
