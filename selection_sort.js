//SELECTION SORT

//This works by comparing by all the values in the array to the next, 
//only saving the smallest, once the inner loop is completed it takes the 
//smallest value, and swaps position with the value being evaluated by the 
//outer loop. 
function ssort(array) {
  let minPosition
  let temp
  for (let counter = 0; counter < array.length - 1; counter++) {
    minPosition = counter
    for (let index = counter + 1; index < array.length; index++) {
      if (array[index] < array[minPosition]) { // to invert the sorting order by changing the < to a >
        minPosition = index
      }
    }
    if(minPosition!=counter){
      temp=array[counter]
      array[counter]=array[minPosition]
      array[minPosition]=temp
    }
  }
}