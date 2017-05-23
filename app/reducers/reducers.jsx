export var navReducer = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_LANGAUGE':
      return !state;
    case 'CONSOLE_TOGGLE':
      console.log('Hello Dere');
    default :
      return state;
  };
};