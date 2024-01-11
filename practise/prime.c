#include <stdio.h>
#include <math.h>
void find_prime(int num)
{
    for (int x = 2; x <= num; x++)
    {
        int prime = 1;
        for(int y = 2; y*y<=x; y++)
        {
            if (x % y == 0)
            {
                prime = 0; // not prime
                break;
            }
        }
        if(prime)
        {
            printf("%d \t", x);
        }
    }
}

int main()
{
    int num = 50;
    find_prime(num);
    return 0;
}

