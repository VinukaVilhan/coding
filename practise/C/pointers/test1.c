#include<stdio.h>
void main()
{
    int a=10,b=11,c;
    int *p,*q;
    p=&a;//store address of a in p
    q=p;
    printf("a=%d %d %d\n",a,*p,*q);//print the value of a
}
