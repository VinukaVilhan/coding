#include<stdio.h>
void main()
{
int a=10;
int *p;
p=&a;//store address of a
p=p+1;
printf(" %d\n",*p);//value at 1004
}