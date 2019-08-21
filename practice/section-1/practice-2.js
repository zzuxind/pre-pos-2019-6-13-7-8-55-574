'use strict';

function collectSameElements(collectionA, collectionB) {
  //const arrayB=collectionB[0];
  let result=[];
  for (let index = 0; index < collectionA.length; index++) {
    collectionB.forEach(element => {
      if (element.indexOf(collectionA[index]) != -1) {
        result.push(collectionA[index]);
      }
    });    
  }
  return result;

}
