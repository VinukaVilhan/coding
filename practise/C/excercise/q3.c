#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int getLength(char *str);
int summation(int number);
void reverse(char *str);

int main()
{
    char *str, *temp, *sum_str;
    int size = 100, number;

    //allocate memory
    str = (char*)calloc(size, sizeof(char));

    if(str == NULL)
    {
        printf("Memory allocation failed.\n");
        exit(1);
    }

    //input string
    printf("Enter the string: ");
    scanf("%[^\n]", str);

    int length = getLength(str);

    printf("Enter the integer: ");
    scanf("%d", &number);

    int sum = summation(number);

    //allocate memory for temp array
    temp = (char*)calloc(size, sizeof(char));

    strcpy(temp, str);

    reverse(str);

    //allocate memory for sum_str
    sum_str = (char*)calloc(size, sizeof(char));
    sprintf(sum_str, "%d", sum);

    printf("%s%s" , strcat(str, temp), sum_str);

    free(str);
    return 0;
}

int getLength(char *str)
{
    int length = 0;

    while(*str != '\0')
    {
        length++;
        //the pointer is incremented by 1
        str++;
    }
    return length;
}

int summation(int number)
{
    int sum = 0;
    if(number == 0)
    {
        return 1;
    }
    else
    {
        return number * summation(number - 1) ;
    }
}

void reverse(char *str)
{
    int length = getLength(str);
    char temp;
    //two pointers are initialized at the begining and end of the array
    char *start = str;
    char *end = str + length - 1; 

    while(start < end)
    {
        temp = *start;
        *start = *end;
        *end = temp;
        start++;
        end--;
    }
}