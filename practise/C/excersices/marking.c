#include <stdio.h>

int main()
{
    char letter;
    printf("Enter the letter: ");
    scanf("%d", &letter);

    switch (letter)
    {
        case 'a':
            printf("World War 1");
            break;
        
        case 'b':
            printf("World War 3");
            break;

        default:
            printf("World War 3");
            break;
    }
    return 0;
}