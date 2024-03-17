#include <stdio.h>

int counter(int number, int count)
{
    if(number == 0)
    {
        return count;
    }
    else
    {
        counter(number / 10, count + 1);
    }
}

int main()
{
    int number = 0, count = 0, reult = 0;
    printf("Enter number");
    scanf("%d", &number);

    int result = counter(number, count);

    printf("%d", result);
    return 0;
}