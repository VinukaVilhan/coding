#include <stdio.h>

int main()
{
    int size = 0, sum = 0;
    printf("Enter the size number: \n");
    scanf("%d", &size);

    int arr[size];

    printf("Enter the numbers: \n");
    for(int x = 0; x < size; x++)
    {
        scanf("%d", &arr[x]);
    }

    for(int x = 0; x < size; x++)
    {
        sum += arr[x];
    }

    printf("Average is: %d", sum/size);

    return 0;
}