#include <stdio.h>


int recursion(int number)
{
    if(number == 0)
    {
        return 0;
    }
    else if(number == 1)
    {
        return 1;
    }
    else
    {
        return recursion(number - 1) + recursion(number - 2);
    }
}

int main()
{
    int number = 10;
    for(int x = 0; x < number; x++)
    {
        printf("%d ",recursion(x));
    }
    
    return 0;
}