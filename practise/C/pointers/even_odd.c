#include<stdio.h>
#include<stdlib.h>

int main()
{
    int number, *ptr;

    //allocate memory for ptr
    ptr = (int *)malloc(sizeof(int));
    printf("Enter a number: ");
    scanf("%d", ptr);

    if(*ptr % 2 == 0)
    {
        printf("The number is even");
    }
    else
    {
        printf("The number is odd");
    }

    free(ptr);
    return 0;
}