#include <stdio.h>
#define MAX_SIZE 10

int main()
{
    int size;
    printf("Enter the number of numbers you enter: \n");
    scanf("%d", &size);
    if(size == 0) 
    {
        fprintf(stderr, "Error: The array size is empty");
        return 1;
    }

    printf("Enter the numebrs:\n");

    int array[size];
    for(int x = 0; x < size ; x++)
    {
        scanf("%d", &array[x]);
    }

    int max = 0; 
    //linear search
    for(int y = 0; y < size; y++)
    {
        if(max < array[y])
        {
            max = array[y];
        }
    }

    printf("The max value is: %d", max);

    return 0;
}