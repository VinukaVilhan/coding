#include<stdio.h>

void main()
{
    int net_salary, basic, allowance;
    allowance = 500;
    basic = 8000;

    basic -= (basic*4/100);
    net_salary = basic + allowance;

    printf("Net Salary: %d", net_salary);

}