'use strict';

function collectSameElements(collectionA, objectB) {
  const bValue=objectB.value;
  let result=[];
  collectionA.forEach(element => {
    bValue.forEach(bvalue => {43
      if(bvalue.indexOf(element.key) != -1){
        result.push(element.key);
      }
    });
  });
  return result;
}
