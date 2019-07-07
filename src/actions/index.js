const addObject = (name) => {
  return { type: 'ADD', payload: `Квартира ${name}`}
};

const removeObject = () => {
  return { type: 'REMOVE' }
};

export { addObject, removeObject };
