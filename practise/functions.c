#include <stdio.h>
#include <math.h>

int main()
{
    float a = 10.0;
    float b = 30.0;
    float c = 45.0;
    float d = 90.0;
    float e = -24.1;

    double square_root = 0;
    float cube_root = 0;
    float exponential_function;
    float logarithm;
    float log_base_ten;
    float absolute_float_point; //absolute value as a floating point number.
    float ceiling_value;

    square_root = sqrt(d);
    cube_root = cbrt(b);
    exponential_function = exp(c);
    logarithm = log(a);
    log_base_ten = log10(d);
    absolute_float_point = fabs(c);
    ceiling_value = ceil(e);

    printf("Square root: %f\n", square_root);
    printf("Cube root: %f\n", cube_root);
    printf("Exponential function: %f\n", exponential_function);
    printf("Natural logarithm: %f\n", logarithm);
    printf("Base-10 logarithm: %f\n", log_base_ten);
    printf("Absolute value: %f\n", absolute_float_point);
    printf("Ceiling value: %f\n", ceiling_value);

    return 0;
}