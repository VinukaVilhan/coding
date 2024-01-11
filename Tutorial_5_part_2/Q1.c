#include<stdio.h>
#include<conio.h>
void main()
{
int a,b,c;
printf("Enter an integer:");
scanf("%d",&a);
b= (a>0);
printf("a = %d\n",a); 
printf("b = %d\n",b); 
c=a||b;
printf("c = %d\n",c);
c=a&&b;
printf("c = %d\n",c);
}