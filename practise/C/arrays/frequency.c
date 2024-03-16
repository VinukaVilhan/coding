#include <stdio.h>
#include <string.h>

#define MAX_NUMBERS 10

typedef struct
{
    int key;
    int value;
} Entry;

Entry dictionary[MAX_NUMBERS] = {
    {0,0},
    {1,0},
    {2,0},
    {3,0},
    {4,0},
    {5,0},
    {6,0},
    {7,0},
    {8,0},
    {9,0}
};




void findAndUp(int key)
{
    for(int x = 0; x  < MAX_NUMBERS; x++)
    {
        if(dictionary[x].key == key)
        {
            //increment the value
            dictionary[x].value++;
            break;   
        }
    }

}

int main()
{
    char string[5000];

    fgets(string, sizeof(string), stdin);

    //adds the null terminator to the end of the string instead of the new line 
    string[strcspn(string, "\n")] = '\0';

    //check if the elements in the string are on the key
    int length = strlen(string);
    for(int x = 0; x < length; x++)
    {
        //convert the character to the number
        int converted = string[x] - '0';
        if(converted >=0 && converted <=9)
        {
            findAndUp(converted);
        }
    } 

    //print the dictionary values
    for(int x = 0; x < MAX_NUMBERS; x++)
    {
        printf("%d ", dictionary[x].value);
    }
    printf("\n"); 


    return 0;
}