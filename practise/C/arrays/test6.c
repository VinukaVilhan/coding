#include <stdio.h>
#define size 100

int printMultiplicationTable(int number);
int main()
{
    int number, arr[size], x=0;
    printf("Enter the number :\n");
    scanf("%d", &number);

    //storing each number in an array
    while(number > 0)
    {
        arr[x++]= number % 10;
        number /= 10;
    }

    for (int j = x - 1 ; j >= 0; j--)
    {
        printf("\n");
        printf("Digits stored in the array: %d\n", arr[j]);
        printMultiplicationTable(arr[j]);
        printf("\n");
    }

    return 0;
}

int printMultiplicationTable(int number)
{
    int value = 0;
    while (value < 12)
    {
        value++;
        printf("%d\n", value*number);
    }
}