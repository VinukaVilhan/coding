#include <stdio.h>

int number;
int main()
{
    printf("Enter the number: ");
    scanf("%d", &number);

    while(1)
    {
        printf("%d", (number % 10));
        number /= 10;
        if (number == 0)
        {
            break;
        }
    }
    return 0;
}