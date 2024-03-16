#include <stdio.h>

int printSum(int start, int end)
{
    if(start > end)
    {
        return 0;
    }
    else if(start == end)
    {
        return start;
    }
    else
    {
        return start + printSum(start  + 1, end);
    }
}

int main()
{
    int num1, num2;
    printf("Starting number: \n");
    scanf("%d", &num1);
    printf("Ending number: \n");
    scanf("%d", &num2);

    int result = printSum(num1, num2);
    printf("%d", result);
    return 0;
}