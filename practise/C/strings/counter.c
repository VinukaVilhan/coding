#include <string.h>
#include <stdio.h>
#include <ctype.h>
#include <stdbool.h>
#include <stdlib.h>

typedef struct 
    {
        /* data */
        int digit_count;
        int special_count;
        int alpha_count;
    }storage;


void findValueAndIncrement(char *string, storage * store)
{
    for(int x = 0; string[x] != '\0'; x++)
    {
        //check for digit
        if(isdigit(string[x]))
        {
            store->digit_count++;
        }
        //check for alphabet
        else if (isalpha(string[x]))
        {
            store->alpha_count++;
        }
        //check for special character
        else
        {
            store->special_count++;
        }
    }
}

void reverseString(char *string)
{
    int length = strlen(string);

    for(int x = length -1; x >= 0; x--)
    {
        printf("%c", string[x]);
    }
    printf("\n");
}

bool checkSimilar(char *string , char *string1)
{
    if(strcmp(string, string1) == 0)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

char *stringConcatenate(char *string, char *string1) {
    char *result = (char *)malloc((strlen(string) + strlen(string1) + 1) * sizeof(char));
    strcpy(result, string);
    strcat(result, string1);
    return result;
}

char *makeCopies(char *string, char *string1) {
    char *newArr;
    int length1 = strlen(string);
    int length2 = strlen(string1);

    if (length1 >= length2) {
        newArr = (char *)malloc((length1 + 1) * sizeof(char));
        strcpy(newArr, string);
    } else {
        newArr = (char *)malloc((length2 + 1) * sizeof(char));
        strcpy(newArr, string1);
    }

    return newArr;
}
int main()
{
    char string[100];
    char string1[100];
    //initialize the storage struct
    storage store = {0};

    printf("Enter the string: \n");
    fgets(string,sizeof(string),stdin);

    string[strcspn(string, "\n")] = '\0';

    findValueAndIncrement(string, &store);

    printf("Digit count: %d\n", store.digit_count);
    printf("Alpha count: %d\n", store.alpha_count);
    printf("Special count: %d\n", store.special_count);

    reverseString(string);

    printf("Enter string 2: \n");
    fgets(string1,sizeof(string1),stdin);

    string1[strcspn(string1 , "\n")] = '\0';
    
    if(checkSimilar(string, string1))
    {
        printf("Strings match\n");
    }
    else
    {
        printf("String don't match\n");
    }

    printf("string concat: \n");
    char *concatenated = stringConcatenate(string, string1);
    printf("%s \n" , concatenated);

    free(concatenated);

    char *copies = makeCopies(string, string1);

    printf("Copies: \n");
    printf("%s \n", copies);

    free(copies);
    return 0;
}