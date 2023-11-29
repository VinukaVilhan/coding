#include <stdio.h>
#include <string.h>

int number = 0, len;
int length_of_number(int);
int reverse (int, int);
int main()
{
    do 
    {
        printf("Enter a series of numbers: ");
        scanf("%d", &number);
    }while((len = length_of_number(number)) < 2);

    reverse(number, len);

    return 0;
}

int length_of_number(int number)
{
    int x = 0;
    while(number != 0)
    {
        number /= 10;
        x++;
    }
    return x;
}

int reverse(int number, int len)
{
    int modulus, rev;
    char num_series[100]= "";
    char char_converted[5];

    for(int y = 0; y < len; y++)
    {
        modulus = number % 10;
        sprintf(char_converted, "%d", modulus);
        strcat(num_series,char_converted);
        number /= 10;
    }

    printf("%s", num_series);
}