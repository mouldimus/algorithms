//If future cant make sense of this 
// I found going through step-by-step in the console,
// or writing down the value of the array and respective indexes
// and going through THAT step-by-step, helped loads

//This is called INSERTION SORTING

//Ascending
function sort(array){
    // Declare a counter and conditionals for the outer loop
    for(let cnt=0; cnt<array.length-1; cnt++){ // if the outer loop count is smaller than the array length minus one, carry on
        for(let i=cnt+1; i>0; i--){ // if the current index in the array is greater than zero, carry on
            if(array[i-1] > array[i]){ // if the previous index is bigger than the current one, then swap the values
                let t=array[i-1];
                array[i-1]=array[i];
                array[i]=t;
            }
        }
    }
    return array; //return the sorted array
}

//Descending
function sortR(array){
    for(let cnt=0; cnt<array.length-1; cnt++){
        for(let i=cnt+1; i>0; i--){
            if(array[i-1] < array[i]){
                let t=array[i-1];
                array[i-1]=array[i];
                array[i]=t;
            }
        }
    }
    return array;
}