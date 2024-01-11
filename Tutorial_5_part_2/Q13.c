#include <stdio.h>
void main()
{
    int x, y;
    printf("Enter value for X: \n");
    scanf("%d", &x);
    printf("Enter value for Y: \n");
    scanf("%d", &y);
    x = ( y > 3 ) ? ( x < y ) ? y : x + 10 : ( y < 0 ) ? -y : y + 10;
    printf("The value of X is %d", x);
}