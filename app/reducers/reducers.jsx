//import $ from 'jquery'

// export var navReducer = (state = localStorage.getItem('lang') || false, action) => {
//   switch (action.type) {
//     case 'TOGGLE_LANGAUGE':
//       return !state;
//     case 'CONSOLE_TOGGLE':
//       console.log('Hello Dere');
//     default :
//       return state;
//   };
// };

export var navReducer = (state = JSON.parse(localStorage.getItem('lang')) || false, action) => {
  switch (action.type) {
    case 'TOGGLE_LANGAUGE':
      localStorage.setItem('lang', JSON.stringify(!state))
      location.reload();
      //$('html,body').scrollTop(0);
      //return !state;
    default :
      return state;
  };
};