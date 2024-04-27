#include <stdio.h>

int main()
{
    int size, sum = 0, *ptr;
    printf("Size of the array: ");
    scanf("%d", &size);

    int array[size];
    printf("%d\n", array);
    //in here the array represents the memory address of the first element
    //ptr points to the first elemet of array
    ptr = array;

    for(int x=0; x < size; x++)
    {
        printf("Enter the vale %d: ", x);
        //no memory address is used because the ptr holds the memory address of hte array element
        //ptr is a pointer variable which holds the memory address of an array element
        scanf("%d", ptr);
        //*ptr access the value
        sum += *ptr;
        ptr++;
    }

    printf("The sum is: %d", sum);
    return 0;
}