#include<stdio.h>
#include<conio.h>
void main()
{
    float u,p,q,d; 
    u=200.00;
    printf("Quantity purchase:");
    scanf("%f:",&q);
    d=q>=50 ? u*20.0/100 : 0;
    p=q*(u-d);
    printf("Final price = %.2f",p);
}