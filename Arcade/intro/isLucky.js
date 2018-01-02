
n isLucky(n) {

    var str = n.toString();
    var firstHalf = "";
    var secondHalf = "";
    
    // Do input checking here.
    
    // If the number is odd, this is not going to be a lucky number.
    if (n.length % 2 == 0){
        return false;
    }
    
    // Split the string in half based off of length
    
    console.log('n ', n);
    
    
    
    firstHalf = str.substring(0, (str.length/2));
    secondHalf = str.substring(str.length/2);
    
    console.log('First ', firstHalf);
    console.log('Second ', secondHalf);
    
    if (util_sumString(firstHalf) == util_sumString(secondHalf)){
        return true;
    }
    return false;
    
}


function util_sumString(str){
    
    var sum = 0;
    
    for (var i = 0; i < str.length; ++i){
        
        sum += parseInt(str[i]);
        
    }
 
    console.log('Sum of str', sum);
    return sum;
}
