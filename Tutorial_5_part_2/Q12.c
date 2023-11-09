#include <stdio.h>
void main()
{
 int a = 0xFFFF;
 char b = 0xAA;
 unsigned char c = 0xAA;
 int d;
 printf("~b = 0x%Xn", ~b );
 printf("a & b = 0x%Xn", a & b );
 printf("a & c = 0x%Xn", a & c );
 a = 0xA0;
 b = 0x83;
 printf("a | b = 0x%Xn", a | b );
 a = 0xFFFF;
 d = 0x18CF;
 printf("a ^ d = 0x%Xn", a ^ d );
 a = 20;
 printf("d << %d = 0x%Xn", a, d << a );
 d = 0x800018CF;
 a = 5;
 printf("d >> %d = 0x%Xn", a, d >> a ); 
}