#include<stdio.h>

int main()
{
    int year;
    printf("Enter the number: ");
    scanf("%d", &year);
    if (year == 1)
    {
        printf("29 Days");
    }
    else
    {
        printf("28");
    }

    return 0;
}