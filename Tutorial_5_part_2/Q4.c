#include <stdio.h>

int main() {
    int X;

    X = 19/3*5+2+5/2%7;
    printf("The value of X for the first expression is: %d\n", X);

   
    X = (19/3+3%2) +5-(5*2+3-2);
    printf("The value of X for the second expression is: %d\n", X);

    return 0;
}
