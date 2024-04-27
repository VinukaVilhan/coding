#include <stdio.h>

void main()
{
    int a,b,*c, sum;
    printf("Enter the first number: ");
    scanf("%d", &a);

    printf("Enter the second number: ");
    scanf("%d", &b);

    sum = a + b;

    c = &sum;
    printf("The result is: %d", *c);
}