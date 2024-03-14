//sorting in desceding order
#include <stdio.h>

int main()
{
    int size;
    printf("Enter the size: \n");
    scanf("%d", &size);
    // if(size)

    //enter the elements
    int array[size];
    printf("Enter the number of values you enter: \n");
    for(int x = 0; x < size; x++)
    {
        scanf("%d", &array[x]);
    }

    //sorting in the descending order
    for(int x = size; x > 0; x--)
    {
        for(int y = 0; y < size - 1; y++)
        {
            if(array[y] < array[y+1])
            {
                int temp = array[y];
                array[y] = array[y+1];
                array[y+1] = temp;
            }
        }
    }

    //print the array
    for(int x = 0; x < size; x++)
    {
        printf("%d", array[x]);
    }


    return 0;

}
