#include<stdio.h>

int main()
{
    int octal;
    char hexa[10];
    printf("Enter the number which need to be transformed into Octal: ");
    scanf("%d", &octal);
    printf("Enter the vlaue which need to be transformed into Hexadecimal: ");
    scanf("%d", hexa);

    printf("The Octal value is %o\n", octal);
    printf("The Hexadecimal value is %x\n", hexa);
    return 0;
}