
n allLongestStrings(inputArray) {

    
    // Strategy: Sort all the strings into a bucket based off of length
    // Only return the largets!

    var buckets = [];
    
    for (var i = 0; i < inputArray.length; ++i){
        
        console.log('Bucket index will be: ', inputArray[i].length-1);
        
        if (buckets[inputArray[i].length-1] == undefined){
            console.log('no bucket made yet, make bucket');
            buckets[inputArray[i].length-1] = [];
        }
        
        buckets[inputArray[i].length-1].push(inputArray[i])
        
    }
    
    console.log("Biggest bucket: ", buckets.length-1);
    console.log("Buckets: ", buckets)

    return buckets[buckets.length-1];
}

