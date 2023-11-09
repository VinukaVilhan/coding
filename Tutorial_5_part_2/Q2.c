#include <stdio.h>

void main ()
{
    int one;
    printf("Enter an integer: ");
    scanf("%d", &one);
    printf("The right shift %d\n", (one>>2));
    printf("The left shift %d", (one<<1));
}