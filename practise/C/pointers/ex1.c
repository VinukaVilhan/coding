#include <stdio.h>

int main()
{
    int  a  = 5;
    void *pointer = &a;

    //type case
    printf("%d", *(int*)pointer);
    return 0;
}