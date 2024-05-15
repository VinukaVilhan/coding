#include <stdio.h>
#include <stdlib.h>

int main()
{
    int value, *arr, number = 5;
    //allocate memory for array
    arr = (int *)calloc(number, sizeof(int));

    if(arr == NULL)
    {
        printf("Memory allocation failed");
        return 1;
    }

    for(int x = 0; x < number; x++)
    {
        arr[x] = x;
    }

    printf("Elements of the array: ");
    for (int i = 0; i < number; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    free(arr);
    return 0;
}