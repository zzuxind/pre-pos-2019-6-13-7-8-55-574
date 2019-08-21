'use strict';

function collectSameElements(collectionA, collectionB) {
  var result=[];
  for(let indexA=0;indexA<collectionA.length;indexA++){
    for(let indexB=0;indexB<collectionB.length;indexB++){
      if(collectionA[indexA] == collectionB[indexB]){
        result.push(collectionA[indexA]);
      }
    }
  }
  return result;
  // return '实现练习要求，并改写该行代码。';
}
