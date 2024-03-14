#include <stdio.h>
#define student 10
int main()
{
    int array[student], count=0;
    printf("Enter the age of students: \n");
    for(int x = 0; x  <student; x++)
    {
        scanf("%d", &array[x]);

        if(array[x] > 17 && array[x] < 19)
        {
            count++;
        }
    }

    printf("The count is %d", count);


    return 0;
}