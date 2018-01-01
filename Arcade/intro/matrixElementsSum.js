
n matrixElementsSum(matrix) {
    
    // Allocate an array to track the number 
    var freeIndex = Array(matrix[0].length);

    
    // Iterate through the row.
    for (var i = 0; i < matrix.length; ++i){
        
            for (var j = 0; j < matrix[i].length; ++j){
                
                console.log('I see: ', matrix[i][j]);
                
                // If the freeIndex array has a flagged value (x), set it to -1.
                
                if (freeIndex[j] === 'x'){
                    console.log('This value is flagged. It will not be handled.')
                    matrix[i][j] = -1;
                }
                
                // If the element is 0, flag it in the freeIndex and set it to -1.
                
                if (matrix[i][j] == 0) {
                    freeIndex[j] = 'x';
                    console.log('Flagged!');
                }
                
            }
        
        console.log('Next row ------------');
    }
    
    
    console.log("Index flags, ", freeIndex);
    
    
    
    
    
    

    
    return util_sumAll(matrix);
}


// First, pre-process the array. If there is a 0 at a particular array index, everything else in that index in a different 'row' should be 0.









// Utility that sums up a matrix
function util_sumAll(matrix) {
    
    var sum = 0;
    
    for (var m = 0; m < matrix.length; ++m){
        sum += util_sumRow(matrix[m]);
    }
    
    
    console.log('Total sum: ', sum);
    return sum;
    
}


function util_sumRow(row) {
    
    var sum = 0;
    
     for (var r = 0; r < row.length; ++r){
        
         // Only sum values that are greater than 0.
         if (row[r] > 0) {
                sum += row[r];
        }
    }
    
    console.log('Row sum: ', sum);
    return sum;
    
}

