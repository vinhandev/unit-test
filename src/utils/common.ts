export function checkEven(countParam: number) {
    if (Number.isInteger(countParam) === false) {
      throw new Error("countParam must be a integer");
      
    }
    return countParam % 2 === 0;
  }
  
  export function forEach(items, callback) {
    for (let index = 0; index < items.length; index++) {
      callback(items[index]);
    }
  }