

function almostIncreasingSequence(array) {
    
    // Let us address all the cases and see if we can find any patterns while doing so.
    // Brute force approach would be to remove each element and test. We will implement this first.
    
    // Run a for loop through the entire sequence, removing each element.
    
    var badCounter = 0;

    
    for (var i = 0; i < array.length-1; ++i){
        //console.log('comparing: ' + array[i] + " with: " + array[i+1] );
        
                
        
        if (array[i]>=array[i+1]){
            // console.log('BADBADBAD')
            badCounter++;
            
             if (badCounter > 1){
            return false;
        }
            
            // Try seeing which one works better. Splice both sides.
            
            var splice1 = array.slice();
            var splice2 = array.slice();
            
            splice1.splice(i,1);
            splice2.splice(i+1,1);
            //console.log('array 1 now,', splice1);
            // console.log('array 2 now,', splice2);
            
             i--;
            
            if (util_isIncreasing(splice1) == true || util_isIncreasing(splice2) == true ){
                return true;
            }
            

           
            
            
        }
        
        
        
        
       

      }
        return true;



    
    
}


function util_isIncreasing(array){
    
    
    for (var i = 0; i < array.length-1; ++i) {
        //console.log('comparing: ' + array[i] + " with: " + array[i+1] );
        if (array[i] >= array[i+1]){
            return false;
        }
    }
    
    return true;
}