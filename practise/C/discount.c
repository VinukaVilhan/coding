#include <stdio.h>

int year, mileage;
void discount_finder(int, int);
int main()
{
    printf("Enter the model year: \n");
    scanf("%d", &year);
    printf("Enter the mileage: \n");
    scanf("%d" , &mileage);
    discount_finder(year, mileage);
    return 0;
}

void discount_finder(int year, int mileage)
{
    if (year == 2021)
    {
        if (mileage < 10000)
        {
            printf("The amount of discount is 5%%");
        }

        if (mileage >= 10000)
        {
            printf("The amount of discount is 2%%");
        }
        
    }
    else if (year == 2020)
    {
        if (mileage < 20000)
        {
            printf("The amount of discount is 3%%");
        }

        if (mileage >= 20000)
        {
            printf("The amount of discount is 0%%");
        }
    }
    else
    {
        printf("No discount is given");
    }
}