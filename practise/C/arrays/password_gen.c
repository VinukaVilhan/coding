#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int getLength(char *str)
{
    int length = 0;
    for(int x = 0; str[x] != '\0'; x++)
    {
        length++;
    }
    return length;
}

char* reversePassword(char *password, int length)
{
    char *reversed = (char*)malloc((length) * sizeof(char));
    int x = 0;

    // Copy characters from the end of password to the beginning of reversed
    for (int i = length - 1; i >= 0; i--) {
        reversed[x++] = password[i];
    }
    
    // reversed[length] = '\0'; // Add null terminator at the end
    return reversed;
}

char *concatenate(char *reversed, char *password)
{
    int reversedLen = getLength(reversed);
    int passwordLen = getLength(password);
    int total = reversedLen + passwordLen;

    //allocate memory for the new array 
    char *result = (char*)malloc( total * sizeof(char));

    //copy from reversed string
    strcpy(result, reversed);

    //concatenate the original string
    strcat(result, password);

    return result;
}

int summer(int number)
{
    if(number == 0)
    {
        return 0;
    }
    else
    {
        return number + summer(number -1);
    }
}

void main()
{
    //take the string as input
    char password[50], charNum[50]; 
    int number = 0 ;
    printf("Enter your words: \n");
    fgets( password, sizeof(password), stdin);
    printf("Enter your number: \n");
    scanf("%d", &number);

    //remove the trailing newline character and replacing it with a 0.
    password[strcspn(password, "\n")] = '\0';

    int length = getLength(password);

    printf("Length of the string is: %d \n", length);

    char *reversed = reversePassword(password, length);

    char * concat = concatenate(reversed, password);

    int sum = summer(number);

    //convert the number to string
    sprintf(charNum, "%d", sum);

    //concatenate the number to the string
    strcat(concat, charNum);

    printf("%s\n", concat);
}

