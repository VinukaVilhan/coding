#include <stdio.h>

int main()
{
    int number, result = 1;
    //get a number
    do
    {
        printf("Enter a number: ");
        scanf("%d", &number);

        if (number < 0 )
        {
            printf("Please enter a non-negative number: ");
        }
    } while (number < 0);
    
    //count the factorial
    for (int x = 1; x <= number; x++)
    {
        result *= x ;
    }

    printf("The factorial of the %d is %d", number , result);

    return 0;
}