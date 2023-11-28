#include <stdio.h>
#include <math.h>
#include<stdbool.h>

int square_print(int, int);

  
int main()
{
    int number, square_root, rows, columns;
    printf("Enter Square number: ");
    scanf("%d", &number);
    square_root = sqrt(number);
    rows = square_root;
    columns = square_root;
    printf("Square root of %d is %d\n", number,square_root);
    square_print(rows, columns);
    return 0;
}

int square_print(int rows, int columns)
{
    for(int x = 0; x < rows; x++ )
    {
            for(int y = 0; y < columns; y++ )
            {
                if( (x==y) || (x==(columns - (y+1))) )
                {
                    printf(".");
                }

                else
                {
                    printf(" ");
                }
                
            }
            printf("\n");
    }
}

