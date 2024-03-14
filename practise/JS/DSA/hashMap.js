//pass a string value as the key and a length and returns a hash value which is unique
function hashForStrings(key, arrayLen)
{
    let total = 0;
    //iterates through the string
    for(let char of key)
    {
        //charCodeAt returns  numerical value representing the character at a specific index in a string
        let value = char.charCodeAt(0) - 96;
        total = (total + value) % arrayLen;
    }
    return total;
}


function hasForStringsUpgraded(key, len)
{
    let total = 0;
    let prime = 29;
    //iterates through the string
    for(let i = 0 ; i  <Math.min(key.length, 100); i++)
    {
        let char = key[i];
        //charCodeAt returns  numerical value representing the character at a specific index in a string
        let value = char.charCodeAt(0) - 96;
        total = (total * prime + value) % len;
    }
    return total;
}


class HashTable
{
    constructor(size = 5)
    {
        this.keyMap = new Array(size);
    }

    //method
    _hash(key)
    {
        let total  = 0;
        let prime = 29;
        //iterates through the string
        for(let i = 0 ; i  <Math.min(key.length, 100); i++)
        {
            let char = key[i];
            //charCodeAt returns  numerical value representing the character at a specific index in a string
            let value = char.charCodeAt(0) - 96;
            total = (total * prime + value) % this.keyMap.length;
        }
        return total;
    }

    //returns an array of keys
    keys()
    {
        let keyArray =[];
        for(let x = 0; x < this.keyMap.length; x++)
        {
            //check is there is a key
            if(this.keyMap[x])
            {
                for(let y = 0; y < this.keyMap[x].length; y++)
                {
                    //extracts the key
                    keyArray.push(this.keyMap[x][y][0]);
                }
                
            }
            
        }
        return keyArray;
    }

    //returns an array of values
    values()
    {
        let valueArray =[];
        //iterates the pairs
        for(let x = 0; x < this.keyMap.length; x++)
        {
            //check is there is a key
            if(this.keyMap[x])
            {
                //iterates for each pair inside each iteration
                for(let y = 0; y < this.keyMap[x].length; y++)
                {
                    //handling the duplicate values
                    if(!valueArray.includes(this.keyMap[x][y][1]))
                    //pushes the value
                    valueArray.push(this.keyMap[x][y][1]);
                }
                
            }
            
        }
        return valueArray;
    }

    set(key, value)
    {
        //hashes the key
        let hashIndex = this._hash(key);
        //check if there is anything at the place we are going to add the element
        if(!this.keyMap[hashIndex])
        {
            this.keyMap[hashIndex] = [];
        }
        this.keyMap[hashIndex].push([key, value]);
    }

    get(key)
    {
        //hashes the key
        let hashIndex = this._hash(key);

        //find if there is an element in that index
        if(this.keyMap[hashIndex])
        {
            //iterate for the many values
            for(let x = 0; x < this.keyMap[hashIndex].length; x++)
            {
                //check if the key matches 
                if(this.keyMap[hashIndex][x][0] === key)
                {
                    return this.keyMap[hashIndex][x];
                }
            }
            return this.keyMap[hashIndex];
        }
        else
        {
            return undefined;
        }

    }
    
}


var hash = new HashTable();
hash.set("vinuka", "fernandopulle")
hash.set("sithuka", "fernandopulle")
hash.set("homba diga malmi", "fonseka")
hash.set("xxx", "tentacion")
console.log(hash.get("xxx"))
console.log(hash.keys())
console.log(hash.values())
console.log(hash)
hash.keys().forEach(function(key){
    console.log(hash.get(key))
})