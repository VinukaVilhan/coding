// Online C compiler to run C program online
#include <stdio.h>

void printNaturalNumbers(int number)
{
    if(number <= 50)
    {
        printf("%d ", number);
        printNaturalNumbers(number + 1);
    }
}

int main() {
    // Write C code here
    printf("First 50 natural numbers: \n");
    int number = 1;
    printNaturalNumbers(number);

    return 0;
}