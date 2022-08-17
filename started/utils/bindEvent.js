
// 1. parameter validation
//    - node가 ELEMENT_NODE가 아니라면 에러를 표시 
//    - event type이 정의된 타입이 아니라면 에러를 표시
//    - handler 가 함수가 아니라면 에러를 표시

// 2. implement logic
// 3. return value


const bindEvent =(node,type,handler)=>{

  //    - node가 ELEMENT_NODE가 아니라면 에러를 표시
  if( node.nodeType !== document.ELEMENT_NODE ){
    throw new Error('bindEvent 함수의 첫 번째 매개변수인 node는 ELEMENT_NODE이어야 합니다')
  }

  //    - event type이 정의된 타입이 아니라면 에러를 표시 (정규표현식 이용)
  if(!(/click|mousemove|mouseenter|dblclick/gi.test(type))){
    throw new Error('bindEvent 함수의 두번째 매개변수는 유효한 이벤트 타입이 아닙니다')
  } 

  //    - handler 가 함수가 아니라면 에러를 표시
  if( typeof handler !=='function'  ){
    throw new Error('bindEvent 함수의 세번째 매개변수는 function 타입이 아닙니다')
  }

  // 2. implement logic
  node.addEventListener(type,handler)
  return () => node.removeEventListener(type,handler);  //add 실행후 remove 실행

}

const logo = document.querySelector('.logo');
const dice = document.querySelector('#diceContainer')

// const logoClick = bindEvent(logo,'click',()=>{console.log('hi')});   // logo 클릭시 'hi' 생성

// bindEvent(dice,'click',()=>{logoClick()});   //dice 클릭시 logo의 클릭이벤트 사라짐. 


