#include <stdio.h>

void positive_checker(int, int);
void negative_checker(int, int);
void multiple_of_three(int);
void positive_sum_print();
void negative_sum_print();
void min_max_value(int);
void three_multiplier_count_print();

int positive_counter = 0;
int negative_counter = 0;
int positive_sum = 0;
int negative_sum = 0;
int three_multiplier_count = 0;
int max = 0;
int min = 0;

int main()
{
    int number;
    do
    {
        printf("Enter the number: ");
        scanf("%d", &number);
        positive_checker(number, positive_sum);
        negative_checker(number, negative_sum);
        multiple_of_three(number);
        min_max_value(number);
    } while (number != 0);

    printf("Number of positive integers: %d\n", positive_counter);
    printf("Number of negative integers: %d\n", negative_counter);
    positive_sum_print();
    negative_sum_print();
    three_multiplier_count_print();
    printf("Maximum Value: %d\n", max);
    printf("Minimum Value: %d\n", min);
    
    return 0;
}

void positive_checker(int number, int positive_sum)
{
    if (number > 0)
    {
        positive_counter++;
        positive_sum += number;
    }
}

void negative_checker(int number, int negative_sum)
{
    if (number < 0)
    {
        negative_counter++;
        negative_sum += number;
    }
}

void positive_sum_print()
{
    printf("Sum of positive integers: %d\n", positive_sum);
}

void negative_sum_print()
{
    printf("Sum of negative integers: %d\n", negative_sum);
}

void multiple_of_three(int number)
{
    if (number % 3 == 0)
    {
        three_multiplier_count++;
    }
}

void three_multiplier_count_print()
{
    printf("Number of multipliers of three: %d\n", three_multiplier_count);
}

void min_max_value(int number)
{
    min = number;
    max = number;
    if (max <= number)
    {
        max = number;
    }
    
    if (min >= number)
    {min = number;          
    }
    
}