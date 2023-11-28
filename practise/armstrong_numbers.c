#include <stdio.h>
#include <math.h>

void length_finder(int*, int*);
void armstrong_decider(int*, int*, int*, double*, int*);

int main()
{
    int count_of_digits, number, dividend, modulus=0, original;
    double sum = 0;

    printf("Enter the number: ");
    scanf("%d", &original);
    count_of_digits = 0;
    number = original;
    dividend = original;

    length_finder(&number, &count_of_digits);

    armstrong_decider(&count_of_digits, &modulus, &dividend, &sum, &original);

    return 0;
}

void length_finder(int* number, int* count_of_digits)
{
    while(*number != 0)
    {
        *number /= 10;
        (*count_of_digits)++; 
    }
}

void armstrong_decider(int* count_of_digits, int* modulus, int* dividend, double* sum, int* original)
{
    for (int x = 0; x < *count_of_digits; x++)
    { 
        *modulus = *dividend % 10;
        *sum += pow(*modulus , *count_of_digits);
        *dividend = *dividend/10;
    }

    if (*sum == *original)
    {
        printf("This is an Armstrong number: %.0lf", *sum);
    }
    else
    {
        printf("This is not an Armstrong number");
    }
}