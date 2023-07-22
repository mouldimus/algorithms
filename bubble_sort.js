//BUBBLE SORT

//The list of items is gone through, one item at a time, 
//starting at the beginning. As each item is reached, 
//it is compared to the item previous to in the list. 
//It is swapped if the desired outcome requires it.

function bsort(array){
  let temp;
  for(let counter=0; counter<array.length; counter++){
    for(let index=0; index<array.length-1; index++){
      if(array[index]>array[index+1]){
        temp=array[index+1]
        array[index+1]=array[index]
        array[index]=temp
      }
    }
  }
  return array;
}