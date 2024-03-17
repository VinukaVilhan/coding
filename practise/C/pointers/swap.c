#include <stdio.h>

void swap(float *num1, float *num2)
{
    float temp = *num1;
    *num1 = *num2;
    *num2 = temp;
}

int main()
{
    float num1, num2;
    printf("Enter value 1: \n");
    scanf("%f", &num1);

    printf("Enter value 2: \n");
    scanf("%f", &num2);

    printf("Before Swap: \n");
    printf("value 1: %f", num1);
    printf("value 2: %f", num2);

    swap(&num1, &num2);

    printf("After Swap: \n");
    printf("value 1: %f", num1);
    printf("value 2: %f", num2);

    return 0;
}