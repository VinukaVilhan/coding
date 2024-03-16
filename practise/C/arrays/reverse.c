#include <stdio.h>
#include <stdlib.h>

int main()
{
    int num, *arr, i;
    scanf("%d", &num);
    arr = (int*) malloc(num * sizeof(int));
    for(i = 0; i < num; i++) {
        scanf("%d", arr + i);
    }


    /* Write the logic to reverse the array. */
    
    for(int x = 0; x <num /2; x++ )
    {
        int temp = arr[x];
        arr[x] = arr[num - x - 1];
        arr[num - x - 1] = temp;
    }

    for(i = 0; i < num; i++)
        printf("%d ", *(arr + i));
        
    free(arr);
    return 0;
}