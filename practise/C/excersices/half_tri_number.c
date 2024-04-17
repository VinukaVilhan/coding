#include <stdio.h>

int number= 0, original_number;
void triangle_maker(int, int);

void main()
{
    do
    {
        printf("Enter the number to create a triangle: ");
        scanf("%d", &number);
    } while (number < 3);

    original_number = number;

    triangle_maker(number, original_number);
   
}


void triangle_maker(int number, int original_number)
{
    //rows
    for(int x = 0; x < number; x++)
    {

        for(int y = 0; y <= x; y++)
        {
            printf("%d", number);
            number--;
        }
        printf("\n");
        number = original_number;
    } 
}
 