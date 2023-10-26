#include <stdio.h>
#include <string.h>

int main()
{
    int number;
    printf("Enter number: ");
    scanf("%d", &number);

        //spaces
        for(int y = 0; y <= number; y++ )
        {
            for (int x = 0; x <= number - (y+1) ; x++)
            {
                printf(" ");
            }
                
            for(int z = 1 ;z <= (2 * y) - 1; z++)
            {
                printf("*");
                
            }
            printf("\n");
        }
        
    
    return 0;
}