'use strict';

function collectSameElements(collectionA, collectionB) {
  let result=[];
  for (let index = 0; index < collectionA.length; index++) {
     if(collectionB.indexOf(collectionA[index]) != -1){
       result.push(collectionA[index]);
     }
    
  }
  return result;
}


