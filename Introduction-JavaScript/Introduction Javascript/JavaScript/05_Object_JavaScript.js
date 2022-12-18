//객체 : 변수 혹은 상수를 사용할 때 하나의 객체에 여러가지 종류의 값을 할당 할 수 있습니다.
//키 = 값 형태로 할당하며
//객체.키 형식으로 해당 값을 꺼내 올 수 있습니다.
const dog = {
    name: "멍멍이",
    age: 2
  };
  
  console.log(dog.name + "   " + dog.age);
  console.log(dog);
  
  function print(mydog) {
    const text = `${mydog.name}(${mydog.age}) 입니다.`;
    console.log(text);
  }
  
  print(dog);
  
  //객체 비구조화 할당.
  //객체 구조 분해라고 불리기도 합니다.
  //{}형태로 키값을 나열하고 꺼내롤 객체를 할당해줍니다.
  function print_dog(mydog) {
    const { name, age } = mydog;
    const text = `${name}(${age}) 입니다.`;
    console.log(text);
  }
  
  print_dog(dog);
  
  //파라미터 단계에서 비구조화도 가능합니다.
  function print_dog_2({ name, age }) {
    const text = `${name}(${age}) 입니다.`;
    console.log(text);
  }
  
  print_dog_2(dog);
  
  //객체 안에 함수 넣기
  //객체 안에 함수도 추가하여 객체.키로 호출 할 수 있습니다.
  //함수가 객체안에 들어가면 this 키워드는 자신이 속해있는 객체의 인자들을 가르킵니다.
  //=>로 구현된 함수는 객체안의 함수에서 this가 젣로 동작하지 않을겁니다.
  //function 함수내의 this는 객체내의 this인자들을 가르키는데
  //=> 함수는 {}안에 새로 해당 인자를 선언해줘야 해당 인자를 가르킵니다.
  const New_dog = {
    name: "멍멍이",
    age: 2,
    sound: "멍멍멍",
    say: function say() {
      console.log(this.sound);
    }
  };
  
  New_dog.say();
  
  //Getter와 Setter 함수
  //get 함수이름() 으로 Getter함수를 선언하며
  //set 함수이름(매개변수)로 Setter함수를 선언합니다.
  const Values = {
    _a: 10,
    _b: 30,
    get a() {
      return this._a;
    },
    get b() {
      return this._b;
    },
    set a(value) {
      this._a = value;
    },
    set b(value) {
      this._b = value;
    }
  };
  
  //Getter는 .Getter함수 이름 으로 호출하며
  //Setter는 .함수이름 = 값 식으로 호출하여 셋을합니다.
  console.log(Values.a);
  console.log(Values.b);
  Values.a = 20;
  console.log(Values.a);
  Values.b = 25;
  console.log(Values.b);
  