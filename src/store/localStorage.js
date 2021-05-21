
export const saveState = state => {
  try {
    const serializedStore = JSON.stringify(state);
    localStorage.setItem('quid', serializedStore);
  } catch (e) {
    console.log('Could not save state');
  }
};

export const loadState = () => {
  try {
    const serializedStore = localStorage.getItem('quid');
    if (serializedStore === null) {
      return undefined;
    }
    return JSON.parse(serializedStore);
  } catch (e) {
    return undefined;
  }
};