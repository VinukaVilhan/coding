#include <stdio.h>

void main()
{
    int a,b,*c, max;
    printf("Enter the first number: ");
    scanf("%d", &a);

    printf("Enter the second number: ");
    scanf("%d", &b);

    if(a > b)
    {
        max = a;
    }
    else if (a < b)
    {
        max = b;
    }
    else
    {
        printf("No max value");
    }

    c = &max;
    if(a!=b)
    {
        printf("The result is: %d", *c);
    }
    
}