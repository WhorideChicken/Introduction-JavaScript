//async/aswait
//Promise를 더욱 쉽게 사용 할 수 있게 해줍니다.
//async/aswait를 사용할 땐 사용할 함수에 async를 붙여주고
//promise 앞부분에 await을 넣어주면 해당 프로미가 끝날 때까지 기다렸다가
//다음 작업을 수행합니다.
function sleep(ms) {
    return new Promise((resoleve) => setTimeout(resoleve, ms));
  }
  
  async function process() {
    console.log("안녕하세요");
    await sleep(1000); //1초 쉼
    console.log("안녕하세요2");
  }
  
  process();
  
  //async함수는 Promise를 반환하기 때문에 아래와 같이 활용이 가능합니다.
  //process함수가 모든게 끝났을 때 호출됩니다.
  process().then(() => {
    console.log("작업이 끝났어요");
  });
  
  //async 함수에서 에러를 발생 시킬떄는 throw를 사용하고 에러를 잡아낼 떄에는
  //try.catch문을 사용합니다.
  async function makeError() {
    await sleep(1000);
    //에러를 생성하는 함수
    const error = new Error();
    throw error;
  }
  
  async function process2() {
    try {
      await makeError();
    } catch (e) {
      console.log(e);
    }
  }
  
  process2();
  
  //기본적으로 await문을 사용하면 선언된 순서대로 이전 awiat가 끝날 떄까지
  //기다렸다가 다음 코드가 실행됩니다.
  //만약 동시에 작업을 시작하고 싶다면 Promise.all을 사용하면 됩니다.
  //Promise.all은 등록한 Promise중 하나라도 실패하면 모든게 실패한것으로 간주됩니다.
  const getDog = async () => {
    await sleep(1000);
    return "멍멍이";
  };
  
  const getRabbit = async () => {
    await sleep(500);
    return "토끼";
  };
  const getTurtle = async () => {
    await sleep(3000);
    return "거북이";
  };
  
  async function process3() {
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(results);
  }
  
  process3();
  
  //Promise.race가 있습니다. all과 달리 여러개의 프로미스를 등록해서 실행 했을 때
  //가장 빨리 끝난것 하나만의 결과값을 가져옵니다.
  
  async function process4() {
    const results = await Promise.race([getDog(), getRabbit(), getTurtle()]);
    console.log(results);
  }
  
  process4();
  
  //API 호출과 결과에 주로 사용합니다.