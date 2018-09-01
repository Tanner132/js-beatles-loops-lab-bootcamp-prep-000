function theBeatlesPlay(array1,array2){
  
  var theBeatlesPlayThis =[];
  
  for (var i = 0; i < array1.length; i++) 
  {
   theBeatlesPlayThis.push(`${array1[i]}` + " plays " +`${array2[i]}`);
  
  }
  return theBeatlesPlayThis;
}

function johnLennonFacts(array) {
  let i = 0;
   while (0 < array.length - 1){
    console.log(array[i]);
       i++; 
  }
  
  array.push(array[i] + '!!!');
  return array;
}

function iLoveTheBeatles(int) 
{ var newArray = [];
  do {
    newArray.push("I love the Beatles!");
       int++;
  } while (int<15);
      return newArray;
}