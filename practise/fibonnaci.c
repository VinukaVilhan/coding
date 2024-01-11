#include<stdio.h>
#include<string.h>

int main ()
{
    int number;
    printf("Enter a number: ");
    scanf("%d", &number);
    int prev = 0, next = 1, update;

    for (int x = 0; x < number; x++)
    {
        if (x <= 1)
        {
            update = x;
        }
        else
        {
            update = next +  prev;
            next = update;
            prev = next ;
        }
        printf("%d", update);

    }

    return 0;
}