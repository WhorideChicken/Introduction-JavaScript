//배열
//여러개의 항목들을 넣어주는 리스트와 같습니다.
//배열을 선언 할 땐 []으로 감싸주며 어떤 같이든 넣을 수 있습니다.
const numberarray = [1, 2, 3, 4, 5];
const objectarray = [{ name: "멍멍이" }, { name: "야옹이" }];

//객체도 집어 넣을 수 있으며 인자에 따라 해당 값도 얻을 수 있습니다.
console.log(objectarray);
console.log(objectarray[0]);
console.log(objectarray[1].name);

//배열에 새항목 추가하기
//push 함수를 사용하여 배열을 추가합니다.
objectarray.push({
  name: "꽥꽥이"
});

console.log(objectarray[2].name);

//배열.length로 배열의 크기도 알아낼 수 있습니다.
//멍멍이, 야옹이, 꽥꽥이로 3개가 들어가 있습니다.
console.log(objectarray.length);

//