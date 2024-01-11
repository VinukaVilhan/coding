#include <stdio.h>
#include<stdbool.h>

void main()
{
    int integer_value;
    float floating_value;
    bool boolean_value;
    char char_value;
    double double_value;

    printf("Size of int: %lu bytes\n", sizeof(integer_value));
    printf("Size of float: %lu bytes\n", sizeof(floating_value));
    printf("Size of double: %lu bytes\n", sizeof(boolean_value));
    printf("Size of char: %lu byte\n", sizeof(char_value));
    printf("Size of char: %lu byte\n", sizeof(double_value));

}