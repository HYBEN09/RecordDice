(() => {
  //배열의 구조 분해 할당
  const[rollingDiceButton, recordButton,resetButton] = Array.from(document.querySelectorAll('.buttonGroup >button'))

  console.log()

  let recordListWrapper = document.querySelector('.recordListWrapper');

// 이벤트 핸들러 연결

  let count = 0;
  let total = 0;


  const clearRecordList=()=>{
    let tbody =recordListWrapper.querySelector('tbody');
    tbody.innerHTML = '';
  }


  const renderRecordListItem =()=>{
    let tbody =recordListWrapper.querySelector('tbody'); //recordListWrapper안에 있는
    let cube =document.querySelector('#cube');

    let dicevalue = Number(cube.dataset.dice)  ;  // HTMLElement.dataset 사용 - data-dice

    const newRecordListItem = /* html */ `
    <tr>
      <td>${++count}</td>
      <td>${dicevalue}</td>
      <td>${total += dicevalue}</td>
    </tr>

    ` //template literal 이용해서 안에 넣기
    
    // tbody.insertAdjacentHTML('beforeend',newRecordListItem); //Element.insertAdjacentHTML() 사용

    insertLast(tbody,newRecordListItem);

    recordListWrapper.scrollTop = recordListWrapper.scrollHeight; 
  }

//주사위 돌린후 멈추고 기록, 초기화를 누름

  const handlerRollingDice = (()=> {
    
      let isRolling = false;
      let diceAnimationPlay;
  
      return ()=>{
        
        if( !isRolling ){
          // console.log('한번 클릭했어!')
          diceAnimationPlay = setInterval(diceAnimation,200)

          disableElement(recordButton);
          disableElement(resetButton);

        }else{
          // console.log('다시 클릭했어!')
          clearInterval(diceAnimationPlay);


          enableElement(recordButton);
          enableElement(resetButton);
        }
    
        isRolling = !isRolling
      }
  
    })();

    // recordListWrapper가 보여지게 하는 함수
    const handleRecord =(()=>{

      visibleElement(recordListWrapper);

      renderRecordListItem();
    })

    const handleReset = (()=>{
      
      invisibleElement(recordListWrapper);
      disableElement(resetButton);
      disableElement(recordButton);

      clearRecordList()

      count = 0;
      total = 0;
    })

  /* bind events -------------------------------------------------------------- */

  bindEvent(rollingDiceButton,'click',handlerRollingDice);
  
  bindEvent(recordButton,'click',handleRecord);

  bindEvent(resetButton,'click',handleReset);
  
  
})();
