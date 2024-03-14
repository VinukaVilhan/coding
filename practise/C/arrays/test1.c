#include <stdio.h>

int main()
{
    //store the size of the array
    int size;

    //prompt for the array size and input
    printf("Enter the size of the array: ");
    scanf("%d", &size);

    if(size  <=0 )
    {
        fprintf(stderr, "Error: Array size must be positive. \n");
        return 1;
    }

    //declare the array with the size
    int myArr[size];

    printf("Enter the elements of the array: \n");
    for(int x = 0; x < size; x++)
    {
        scanf("%d", &myArr[x]);
    }

    //print the array
    printf("Printing the array: \n");
    for(int x = 0; x < size; x++)
    {
        printf("%d", myArr[x]);
    }

    return 0;
}

