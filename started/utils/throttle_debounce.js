
// function debounce(callback, limit = 500){

//   let timeout;

//   return function (...args){
//     clearTimeout(timeout);

//   timeout = setTimeout(()=>{
//     callback.apply(this,args);
//   },limit);

//   };
// }


const debounce = (callback, limit = 500)=>{

  let timeout;

  return (...args) => {
    clearTimeout(timeout);

  timeout = setTimeout(()=>{
    callback.apply(this,args);
  },limit);

  };
}



window.addEventListener('mousemove', debounce((e)=>{console.log(e)},1000))


// function throttle(callback, limit = 500) {
  
//   let waiting = false;
  
//   return function () {
//     if (!waiting) {
//       callback.apply(this, arguments);
//       waiting = true;

//       setTimeout(() => {
//         waiting = false;
//       }, limit);
    
//     }
//   };
// }

const throttle = (callback, limit = 500)=>{

  let waiting = false;
  
  return (...args) => {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    
    }
  };
}


// window.addEventListener('mousemove', throttle((e)=>{console.log(e)},1000))