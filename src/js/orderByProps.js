export default function orderByProps(character, prop) {
  const result = [];
  
  for (const property of prop) {
    if ((property in character) && (character[property] !== undefined)) {
      result.push(Object.assign({}, { key: property, value: character[property] }));
    } 
      delete character[property];
  }
  
  const newObj = Object.keys(character).sort((value1, value2) => (value1 > value2 ? 1 : -1));
  
  newObj.forEach((item) => {
    result.push(Object.assign({}, { key: item, value: character[item] }));
  });
    return result;
}
  
 