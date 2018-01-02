
n commonCharacterCount(s1, s2) {
    
    // Create a dictionary for both characters (represented as arrays)
    
    var dict_s1 = [];
    var dict_s2 = [];
    
    // For each character in the first string, return a character array.
    
    
    for (var i = 0; i < s1.length; ++i){
        console.log('(s1)Inserting: ', s1[i]);
        
        // If the key value pair does not yet exist, create it
        if (dict_s1[s1[i]] == undefined){
            dict_s1[s1[i]] = 1; 
        }
        
        else
            dict_s1[s1[i]]++;
            
    }
    
    // For each character in the second string, return a character array.
     for (var i = 0; i < s2.length; ++i){
        console.log('(s2)Inserting: ', s2[i]);
        
        // If the key value pair does not yet exist, create it
        if (dict_s2[s2[i]] == undefined){
            dict_s2[s2[i]] = 1; 
        }
        
        else
            dict_s2[s2[i]]++;
            
    }
    
    console.log('dict1: ', dict_s1);
    console.log('dict2: ', dict_s2);
    
    // Use the longer dictionary to eval the 'for each'
    // 
    
    var counter = 0;
    
    if (dict_s2.length >= dict_s1.length){
        for (var val in dict_s2) {
            
            console.log('on: ', val);
            
            if (dict_s1[val] != undefined && dict_s2[val] != undefined){
                console.log('found a match right here');
                
                if (dict_s1[val] > dict_s2[val]){
                    counter+=dict_s2[val];
                }
                else{
                    counter+=dict_s1[val];

                }
                
            }
        
        }
        
        return counter;
    }
    
    else{
         for (var val in dict_s1){
                 
               console.log('on: ', val);
            
            if (dict_s1[val] != undefined && dict_s2[val] != undefined){
                console.log('found a match right here');
                
                if (dict_s1[val] > dict_s2[val]){
                    counter+=dict_s2[val];
                }
                else{
                    counter+=dict_s1[val];

                }
                
            }
             
            
        }
    return counter;
    }
       
    
    
    return counter;


}



