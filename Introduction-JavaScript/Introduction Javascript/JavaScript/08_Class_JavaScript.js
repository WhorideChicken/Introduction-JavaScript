//객체 생성자
//생성자는 new 키워드를 활용하여 생성합니다.
//*Generic과 비슷한 느낌

function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function () {
      console.log(this.sound);
    };
  }
  
  const dog = new Animal("Dog", "Doggy", "bark!");
  dog.say();
  
  //프로토타입 설정 함수 밖에서도 공유하고 싶은 기능을 추가하여 선언 할 수 있습니다.
  //.prototye.원하는 값
  
  Animal.prototype.run = function () {
    console.log(this.sound + " " + this.type);
  };
  
  dog.run();
  
  //클레스 : 기존에 js에는 없었지만 ES6부터는 class라는 문법이 추가 되었다.
  // 객체 생성자로 구현했던 코드를 조금 더 명확고, 깔끔하게 구현이 가능해졌습니다.
  
  class AllAnimal {
    constructor(type, name, sound) {
      this.type = type;
      this.name = name;
      this.sound = sound;
    }
  
    say() {
      console.log(this.sound);
    }
  }
  
  //상속은 상위 클래스를 extends 키워드를 활욯해서 합니다.
  //constructor는 생성자와 같은 역할이며
  //super 부모 클래스의 해당 함수를 재사용한다는 키워드 입니다.
  class MyDog extends AllAnimal {
    constructor(name, sound) {
      super("개", name, sound);
    }
  }
  
  const newDog = new MyDog("멍멍이", "멍멍");
  newDog.say();
  