function validAnagram(string1 , string2 ){
    // add whatever parameters you deem necessary - good luck!
    let array1 = {};
    let array2 = {};
    
    //checks the length of the string
    if(string1.length !== string2.length)
    {
        return false;
    }
    
    //checks the number of occurances in value/characters of the string
    
    for (let value of string1)
    {
        array1[value] = (array1[value]||0) + 1; 
    }
    
    console.log(array1);
    
    for (let value of string2)
    {
        array2[value] = (array2[value]||0) + 1; 
    }
    
    console.log(array2);
    
    //check if the both characters in the string have same values
    for (let key in array1)
    {
        if (array1[key] !== array2[key])
        {
            return false;
        }
    }
    
    return true;
    
  }
  
  console.log(validAnagram('rat', 'car'));  // false
  
  