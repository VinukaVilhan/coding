#include <stdio.h>
#include <stdlib.h>
//dynamically allocating memory for an array

int main()
{
    int size, *arr, x, input;
    //malloc reserves a block of memory and returns a void pointer
   

    printf("Enter the size of the array: ");
    scanf("%d", &size);

    //allocation of the memory

     //takes the arguments; number of characters and the size of data type
    //the (int*) is a type cast, so the void pointer is assigned to int
    arr = (int*) malloc(size *sizeof(int));

    if(arr==NULL)
    {
        printf("Memory is not allocated\n");
        exit(0);
    }

    //store input values in the array
    for(x = 0; x < size; x++ )
    {
        printf("Enter the number: \n");
        scanf("%d", &input);
        arr[x] = input;
    }

    //primt the array values
    for(x = 0; x < size; x++ )
    {
        printf("The %d numbers is: %d \n", x, arr[x]);
    }

    //free the memoroy
    free(arr);
    
    return 0;
}