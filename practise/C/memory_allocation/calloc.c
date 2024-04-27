#include <stdio.h>
#include <stdlib.h>

int main()
{
    int* ptr, size, input;

    printf("Enter the size of the array: \n");
    scanf("%d", &size);

    //memory allocation for the array
    ptr = (int*) calloc(size, sizeof(int));

    if(ptr==NULL)
    {
        printf("No memory is allocated");
        exit(0);
    }

    //store input values in the array
    for(int x = 0; x < size; x++ )
    {
        printf("Enter the number: \n");
        scanf("%d", &input);
        ptr[x] = input;
    }

    //primt the array values
    for(int x = 0; x < size; x++ )
    {
        printf("The %d numbers is: %d \n", x, ptr[x]);
    }

    //free the memoroy
    free(ptr);

    return 0;
}