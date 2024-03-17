#include <stdio.h>

void arrayPrinting(int start, int *numbers, int size)
{
    if( start >= size)
    {
        return;
    }
    else
    {
        printf("%d", numbers[start]);
        arrayPrinting(start+1, numbers, size);
    }
}

int main()
{
    int size = 0;
    printf("enter the size: \n");
    scanf("%d", &size);
    int numbers[20];
    printf("enter the Numbers: \n");
    for(int x = 0; x < size; x++)
    {
        scanf("%d", &numbers[x]);
    }
    

    int start = 0;
    
    arrayPrinting(start, numbers, size);
    return 0;
}