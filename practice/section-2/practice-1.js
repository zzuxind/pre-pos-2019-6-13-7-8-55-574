'use strict';
// expect(result).toEqual([
//   {key: 'a', count: 3},
//   {key: 'e', count: 7},
//   {key: 'h', count: 11},
//   {key: 't', count: 20},
//   {key: 'f', count: 9},
//   {key: 'c', count: 8},
//   {key: 'g', count: 7},
//   {key: 'b', count: 6},
//   {key: 'd', count: 5}
// ]);
// function countSameElements(collection) {
//   let result=[{}];
//   collection.forEach(element => {
//     result.forEach(object => {
//       if(object.key == element){
//         object.count++;
//       }else{
//         console.log(element);
//         result.push({key:element,count:1});
//       }
//     });
    
//   });
//   return result;
// }
// function countSameElements(collection) {
//   let result=[{key:'',count:0}];
//   for (let index = 0; index < collection.length; index++) {
//     for(let resultindex=0;resultindex<result.length;resultindex++){
//         if(collection[index] == result[resultindex]['key']){
//           result[resultindex]['count']++;
//         }
//       else{
//         result.push({key:collection[index],count:1});
//       }
//     }
//   }
//   return result;
// }
function countSameElements(collection){
  let result=[];
  var map=new Map();
  for(let index=0;index<collection.length;index++){
    if(map.get(collection[index]) == null){
      map.set(collection[index],1);
    }else{
      map.set(collection[index],map.get(collection[index])+1);
    }
  }
  map.forEach((value,key)=>{
    result.push({key:key,count:value});
  });
  return result;
}

