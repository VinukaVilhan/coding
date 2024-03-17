#include <stdio.h>

int gcd(int number1, int number2)
{
    if(number2 == 0)   
    {
        return number1;
    }
    else
    {
        return gcd(number2, number1 % number2);
    }
}

int main()
{
    int number1 = 0, number2 = 0;
    printf("Enter number 1: \n");
    scanf("%d", &number1);

    printf("Enter number 2: \n");
    scanf("%d", &number2);

    int result = gcd(number1, number2);

    printf("%d", result);
    return 0;
}