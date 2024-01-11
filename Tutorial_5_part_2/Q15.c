#include<stdio.h>
void main()
{
    int a=10;
    printf("%d %d %d\n",a,a++,++a);
    
    a=10;
    printf("%d %d %d\n",a,++a,a++);
    
    a=10;
    printf("%d %d %d\n",++a,a++,a);

    a=10;
    printf("%d %d %d\n",a++,a++,a++);

    a=10;
    printf("%d %d %d\n",++a,++a,++a);

    a=10;
    printf("%d %d %d\n",a,a,a);

    a=10;
    printf("%d %d %d\n",++a,a++,++a);

    printf("The value is not definite as it may change, different compliers give different answers and it's not consistant.\nHaving multiple increment operation without a sequence point can cause a issue when the code is executed.\nA logical order of precedence could not be found.  ");
}