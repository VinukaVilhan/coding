#include<stdio.h>
#include<conio.h>
void main()
{
    int a =65; 
    int b =16; 
    int c =a & b;
    printf("c=%d \n",c);
    c=a|b;
    printf("c=%d \n",c);
    c=~a;
    printf("c=%d \n",c);
    c=a^b;
    printf("c=%d \n",c);
} 