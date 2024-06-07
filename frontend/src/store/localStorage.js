// localStorage.js

export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('cartState', serializedState);
    } catch (err) {
      console.error('Could not save state', err);
    }
  };
  
  export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('cartState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.error('Could not load state', err);
      return undefined;
    }
  };
  