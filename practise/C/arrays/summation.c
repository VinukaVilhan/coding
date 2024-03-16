#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int sum(int *numbers, int size)
{
    
    int sum = 0;
    for(int x = 0; x < size; x++)
    {
        sum += numbers[x];
    }

    return sum;
}

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */   
    
    int size=0 ;
    printf("Enter the size: \n");
    scanf("%d", &size);
    
    int numbers[size];
    for(int x = 0; x < size; x++)
    {
        scanf("%d", &numbers[x]);
    }
    
    int result = sum(numbers, size);
    
    printf("%d", result);
    
    return 0;
}