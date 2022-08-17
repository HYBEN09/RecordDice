
// 1. parameter validation
// 2. implement logic
// 3. return value


/*  활성 / 비활성  */

// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 
const enableElement =(element)=>{

  if( element.nodeType !== document.ELEMENT_NODE ){
    throw new TypeError('해당 element는 ELEMENT_NODE가 아닙니다.')
  }

  element.disabled = false;

}

// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 
const disableElement = (element)=>{

  if( element.nodeType !== document.ELEMENT_NODE ){
    throw new TypeError('해당 element는 ELEMENT_NODE가 아닙니다.')
  }

  element.disabled = true;

}

// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 
const isEnableElement = (element)=>{

  if( element.nodeType !== document.ELEMENT_NODE ){
    throw new TypeError('해당 element는 ELEMENT_NODE가 아닙니다.')
  }

  return element.disabled === false;

}





/*  표시 / 감춤 */

// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 
const visibleElement = (element)=>{

  if( element.nodeType !== document.ELEMENT_NODE ){
    throw new TypeError('visibleElement함수의 해당 element는 ELEMENT_NODE가 아닙니다.')
  }

  element.hidden = false;

}

// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 


const invisibleElement = (element)=>{

  if( element.nodeType !== document.ELEMENT_NODE ){
    throw new TypeError('invisibleElement함수의 해당 element는 ELEMENT_NODE가 아닙니다.')
  }

  element.hidden = true;

}

// - node의 타입이 ELEMENT_NODE가 아니라면 에러 표시 


const isVisibleElement = (element)=>{

  if( element.nodeType !== document.ELEMENT_NODE ){
    throw new TypeError('isVisibleElement 함수의 해당 element는 ELEMENT_NODE가 아닙니다.')
  }

  return element.hidden === false;

}



const toggleElement =(element, type) => {

switch( type ){
  default:
  case 'visible' :
  case 'show' :
  case 'hide' :
      invisibleElement(element) ?
      inVisibleElement(element) :
      visibleElement(element)
      
      break;

  case 'disable' :
  case 'enable' :
  case 'lock' :
      isEnableElement(element) ?
      disableElement(element) :
      enableElement(element)
            
    break;


  }
}

// - node의 타입이 ELEMENT_NODE가 아니라면 return value 

const isElement =(node)=>{
return node.nodeType === document.ELEMENT_NODE;
}


// - 첫 번째 매개변수가 없거나 두 번째 매개변수가 없을 경우 에러 표시 
const insertBefore = (target, insertData)=>{

  if(!isElement(target) || !insertData){
    throw new Error('insertBefore함수의 전달된 매개변수가 존재하지않습니다')
  }


  target.insertAdjacentHTML('beforebegin',insertData);

}


// - 첫 번째 매개변수가 없거나 두 번째 매개변수가 없을 경우 에러 표시 

const insertAfter= (target, insertData)=>{

  if(!isElement(target) || !insertData){
    throw new Error('insertAfter함수의 전달된 매개변수가 존재하지않습니다')
  }


  target.insertAdjacentHTML('beforebegin',insertData);

}


// - 첫 번째 매개변수가 없거나 두 번째 매개변수가 없을 경우 에러 표시
const insertFirst= (target, insertData)=>{

  if(!isElement(target) || !insertData){
    throw new Error('insertFirst함수의 전달된 매개변수가 존재하지않습니다')
  }


  target.insertAdjacentHTML('beforebegin',insertData);

}

// - 첫 번째 매개변수가 없거나 두 번째 매개변수가 없을 경우 에러 표시 
const insertLast= (target, insertData)=>{

  if(!isElement(target) || !insertData){
    throw new Error('insertLast함수의 전달된 매개변수가 존재하지않습니다')
  }


  target.insertAdjacentHTML('beforeend',insertData);

}




// each
// // - data가 없거나 data가 배열이 아니거나 data가 오브젝트일 경우 반복문 순회 

// getArrt
// setAttr

// attr
