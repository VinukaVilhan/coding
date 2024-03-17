#include <stdio.h>

int summation(int number, int sum)
{
    if(number == 0)
    {
        return sum;
    }
    else
    {   
        summation(number/10, sum += number % 10);
    }
}

int main()
{
    int number = 0, sum = 0;
    printf("Enter number: \n");
    scanf("%d", &number);

    int result = summation(number, sum);

    printf("%d", result);
    return 0;
}