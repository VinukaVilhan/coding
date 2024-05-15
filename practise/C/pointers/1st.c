#include <stdio.h>
#include <stdlib.h>

int main()
{
    int m = 10, n, o, *z;

    z = &m;

    printf("%p\n", z);
    printf("%i\n", *z);
    printf("%p\n", &m);
    printf("%p\n", &n);
    printf("%p\n", &o);
    printf("%p\n", &z);
    return 0;
}