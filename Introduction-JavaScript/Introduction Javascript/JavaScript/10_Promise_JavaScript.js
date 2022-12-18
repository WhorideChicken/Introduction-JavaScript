//비동기처리
/*Promise : 비동기 작업을 조금 더 편하게 처리 할 수 있도록 도입된 기능 
콜백 지옥을 벗어나기 위한 처리*/

//Promise 만들기 new Promise(resileve, reject)
//resoleve는 성공 했을 때 호출하고 reject은 실패 했을 때 호출합니다.
const myPromise = new Promise((resolve, reject) => {
    //구현
    //성공하면 resolve로 넘어오는 함수에(아마 람다함수) 1을 넣어주고
    resolve(1);
  
    //실패하면 reject함수를 실행
    reject();
  });
  
  //사용법 then을 활용하여 다음 동작을 사용할 수 있습니다.
  //n : 인자, =>{} : 함수
  //실패하면  catch를 통하여 수행할 내용 구현
  myPromise
    .then((n) => {
      console.log(n + "을 넣는데 성공");
    })
    .catch((error) => {
      console.log(error);
    });
  
  //상세 사용법
  function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
      let value = n + 1;
  
      if (value > 4) {
        reject("vale is bigger than 4");
      } else {
        console.log(value);
        resolve(value);
      }
    });
  }
  
  increaseAndPrint(0)
    .then((n) => {
      return increaseAndPrint(n);
    })
    .then((n) => {
      return increaseAndPrint(n);
    })
    .then((n) => {
      return increaseAndPrint(n);
    })
    .then((n) => {
      return increaseAndPrint(n);
    })
    .then((n) => {
      return increaseAndPrint(n);
    })
    .catch((error) => {
      console.log(error);
    });
  