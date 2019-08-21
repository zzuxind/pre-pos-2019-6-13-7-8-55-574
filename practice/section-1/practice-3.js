'use strict';

function collectSameElements(collectionA, objectB) {
  const bValue=objectB.value;
  let result=[];
  collectionA.forEach(element => {
    if(bValue.indexOf(element) != -1){
      result.push(element);
    }
  });
  return result;
}
