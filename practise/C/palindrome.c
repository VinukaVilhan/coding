#include <stdio.h>

int original_number = 0;
void palindrome_checker(int);
int length_checker(int);

int main()
{
    int number;
    printf("Enter the number: ");
    scanf("%d", &number);
    original_number = number;
    palindrome_checker(number);
    return 0;
}

void palindrome_checker(int number)
{
    if ((number < 10) || ((number < 100) && (number % 11 == 0 )))
    {
        printf("This is a palindrome number");
    }

    else
    {
        int length = 0;
        length = length_checker(number);

        if(length % 2 == 0)
        {
            int sum_check_1 = 0;
            int sum_check_2 = 0;

            int divide_value = length/2;
            for (int x = 0; x <divide_value; x++)
            {
                int modulus = number % 10;
                sum_check_1 += modulus;
                number = number / 10;
            }

            for (int y = 0; y< divide_value ;y++)
            {
                int modulus = number % 10;
                sum_check_2 += modulus;
                number = number / 10;
            }

            if (sum_check_1 == sum_check_2)
            {
                printf("This number is an palindrome");
            }
        }
        else
        {
            int sum_check_1 = 0;
            int sum_check_2 = 0;
            int modulus = 0;

            int divide_value =  length/2;
            divide_value += 1;
          
            for (int x = 0; x < divide_value; x++)
            {
                int modulus = number % 10;
                sum_check_1 += modulus;
                number = number / 10;
            }

            number = original_number;

            //first n numbers removal
            for (int y = 0; y< (divide_value - 1) ;y++)
            {
                number = number / 10;
            }

            for (int x = 0; x < divide_value; x++)
            {
                int modulus = number % 10;
                sum_check_2 += modulus;
                number = number / 10;
            }

            if (sum_check_1 == sum_check_2)
            {
                printf("This number is a palindrome");
            }
        }
    }
}

int length_checker(int number)
{
    int count = 0;
    while(number != 0)
    {
        number /= 10;
        count++;
    }
    return count;
}